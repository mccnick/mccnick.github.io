import React, { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

const Tesseract = () => {
  const mountRef = useRef(null);

  // useEffect is a React hook that runs after the component mounts
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    
    // Initialize variables for the scene, camera, renderer, and lines
    let scene, camera, renderer, lines;
    let animationFrameId;
    let vertices = [];
    let edges = [];
    let innerCubeVertexIndices = [];
    let innerCubeFaces = [];

    // Initialize the scene, camera, and renderer
    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 7.5; // Set camera position

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mount.appendChild(renderer.domElement);

      // Define tesseract vertices and track inner cube indices
      let vertexIndex = 0;
      for (let w = -1; w <= 1; w += 2) {
        for (let z = -1; z <= 1; z += 2) {
          for (let y = -1; y <= 1; y += 2) {
            for (let x = -1; x <= 1; x += 2) {
              vertices.push([x, y, z, w]);
              if (w === -1) {
                innerCubeVertexIndices.push(vertexIndex);
              }
              vertexIndex++;
            }
          }
        }
      }

      edges = getTesseractEdges(vertices);

      const material = new THREE.LineBasicMaterial({ color: 0x000000 });
      const geometry = new THREE.BufferGeometry();
      lines = new THREE.LineSegments(geometry, material);
      scene.add(lines);

      addInnerCubeFaces();

      new OrbitControls(camera, renderer.domElement);
      window.addEventListener("resize", onWindowResize);

      animate();
    }

    // Function to add inner cube faces with textures
    function addInnerCubeFaces() {
      // Define the indices of the vertices for each face of the inner cube
      const faceIndices = [
        [0, 1, 3, 2], // -x face
        [4, 5, 7, 6], // +x face
        [0, 1, 5, 4], // -y face
        [2, 3, 7, 6], // +y face
        [0, 2, 6, 4], // -z face
        [1, 3, 7, 5], // +z face
      ];

      // Create a texture loader using Three.js
      const textureLoader = new THREE.TextureLoader();

      // URLs for the textures/images
      const urls = [
        "https://lastfm.freetls.fastly.net/i/u/71c800a49e50f959a2cdf227bdd722cf", // 3 - Spiritbox Tsunami Sea
        "https://lastfm.freetls.fastly.net/i/u/14005e5fe7376e7ee71f042db0372014", // 1 - Spiritbox TFOF
        "https://lastfm.freetls.fastly.net/i/u/e296b13bf8e04473f06c832f737abb39", // 4 - Bad Omens
        "https://lastfm.freetls.fastly.net/i/u/40fd90dc8716cf544b14a2b9e846541e", // 2 - BMTH Sempiternal
        "https://lastfm.freetls.fastly.net/i/u/e7b531006b41eb9bb864362291962f39", // side left - Take Me Back to Eden
        "https://lastfm.freetls.fastly.net/i/u/ad8049d7f0611cebaa5f321bf4736a2e", // side right - blanke - needs flipped
      ];

      const rotationFixes = [Math.PI, 0, 0, Math.PI, Math.PI / 2, Math.PI / 2];

      const flipTexture = [false, true, true, false, false, true];

      innerCubeFaces = faceIndices.map((indices, i) => {
        const texture = textureLoader.load(urls[i % urls.length], () => {
          //texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        });


        // Apply horizontal flip if needed
        if (flipTexture[i]) {
          texture.repeat.x = -1;
          texture.offset.x = 1;
        }

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
        });

        const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
        plane.userData.rotationFixZ = rotationFixes[i];
        scene.add(plane);

        return { plane, indices };
      });
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      if (!Array.isArray(vertices) || vertices.length === 0) {
        console.error("Vertices array is invalid:", vertices);
        return;
      }

      vertices = rotate4D(vertices, 0.005, 0.005);
      const projectedVertices = project4DTo3D(vertices);

      // Update edges
      const geometryVertices = [];
      for (const [start, end] of edges) {
        geometryVertices.push(
          ...projectedVertices[start],
          ...projectedVertices[end]
        );
      }
      lines.geometry.dispose();
      lines.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(geometryVertices.flat(), 3)
      );
      lines.geometry.attributes.position.needsUpdate = true;

      // Update inner cube faces
      innerCubeFaces.forEach(({ plane, indices }) => {
        // Calculate the center of the face
        const faceVertices = indices.map((index) => projectedVertices[index]);
        const center = faceVertices
          .reduce(
            (acc, v) => [acc[0] + v[0], acc[1] + v[1], acc[2] + v[2]],
            [0, 0, 0]
          )
          .map((coord) => coord / 4);

        plane.position.set(center[0], center[1], center[2]);

        // Calculate the normal of the face to orient the plane
        const v0 = new THREE.Vector3(...faceVertices[0]);
        const v1 = new THREE.Vector3(...faceVertices[1]);
        const v2 = new THREE.Vector3(...faceVertices[2]);
        const edge1 = new THREE.Vector3().subVectors(v1, v0);
        const edge2 = new THREE.Vector3().subVectors(v2, v0);
        const normal = new THREE.Vector3()
          .crossVectors(edge1, edge2)
          .normalize();

        // Define an up direction for the plane to ensure consistent orientation
        const up = new THREE.Vector3()
          .subVectors(
            new THREE.Vector3(...faceVertices[3]),
            new THREE.Vector3(...faceVertices[0])
          )
          .normalize();

        // Create a quaternion to orient the plane
        const matrix = new THREE.Matrix4();
        matrix.lookAt(new THREE.Vector3(0, 0, 0), normal, up);
        plane.setRotationFromMatrix(matrix);

        if (plane.userData.rotationFixZ) {
          plane.rotateZ(plane.userData.rotationFixZ);
        }

        // Calculate the size of the face in 3D space after projection
        const sideLength = edge1.length();
        plane.scale.set(sideLength, sideLength, 1);
      });

      renderer.render(scene, camera);
    }

    function getTesseractEdges(vertices) {
      let edges = [];
      for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
          let diff = vertices[i].reduce(
            (sum, v, idx) => sum + Math.abs(v - vertices[j][idx]),
            0
          );
          if (diff === 2) edges.push([i, j]);
        }
      }
      return edges;
    }

    function rotate4D(vertices, angleXW, angleYZ) {
      const cosXW = Math.cos(angleXW - 0.005);
      const sinXW = Math.sin(angleXW - 0.005);
      const cosYZ = Math.cos(angleYZ);
      const sinYZ = Math.sin(angleYZ);

      return vertices.map(([x, y, z, w]) => {
        let newX = cosXW * x - sinXW * w;
        let newW = sinXW * x + cosXW * w;
        let newY = cosYZ * y - sinYZ * z;
        let newZ = sinYZ * y + cosYZ * z;
        return [newX, newY, newZ, newW];
      });
    }

    function project4DTo3D(vertices) {
      return vertices.map(([x, y, z, w]) => {
        const scale = 2 / (2 + w);
        return [scale * x, scale * y, scale * z];
      });
    }

    init();

    return () => {
      cancelAnimationFrame(animationFrameId);
      mount?.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
      }}
    />
  );
};

export default Tesseract;

// ---------------------------------------------------------------------------------------------------------
// ----------------------------- OLD CODE WITHOUT IMAGES, JUST PLAIN TESSERACT -----------------------------
// ---------------------------------------------------------------------------------------------------------

// import React, { useEffect, useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as THREE from "three";

// const Tesseract = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     let scene, camera, renderer, lines;
//     let animationFrameId;
//     let vertices = [];
//     let edges = [];

//     function init() {
//       // Create the scene
//       scene = new THREE.Scene();

//       // Set up the camera
//       camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       camera.position.z = 7.5;

//       // Set up the renderer
//       renderer = new THREE.WebGLRenderer({ alpha: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       mount.appendChild(renderer.domElement);

//       // Define vertices of a 4D Tesseract (hypercube)
//       for (let w = -1; w <= 1; w += 2) {
//         for (let z = -1; z <= 1; z += 2) {
//           for (let y = -1; y <= 1; y += 2) {
//             for (let x = -1; x <= 1; x += 2) {
//               vertices.push([x, y, z, w]);
//             }
//           }
//         }
//       }

//       // Define edges by connecting vertices
//       edges = getTesseractEdges(vertices);

//       // Create geometry for the edges
//       const material = new THREE.LineBasicMaterial({ color: 0x7a5588 });
//       const geometry = new THREE.BufferGeometry();
//       lines = new THREE.LineSegments(geometry, material);
//       scene.add(lines);

//       // Orbit Controls (optional)
//       new OrbitControls(camera, renderer.domElement);

//       // Resize event
//       window.addEventListener("resize", onWindowResize);

//       animate(); // Start animation
//     }

//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     function animate() {
//       animationFrameId = requestAnimationFrame(animate);

//       // Apply 4D Rotation (X-W and Y-Z planes)
//       vertices = rotate4D(vertices, 0.005, 0.005);
//       const projectedVertices = project4DTo3D(vertices);

//       // Update edges
//       const geometryVertices = [];
//       for (const [start, end] of edges) {
//         geometryVertices.push(...projectedVertices[start], ...projectedVertices[end]);
//       }

//       // Update Three.js geometry
//       lines.geometry.dispose(); // Clear old geometry
//       lines.geometry.setAttribute("position", new THREE.Float32BufferAttribute(geometryVertices.flat(), 3));
//       lines.geometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     }

//     function getTesseractEdges(vertices) {
//       let edges = [];
//       for (let i = 0; i < vertices.length; i++) {
//         for (let j = i + 1; j < vertices.length; j++) {
//           let diff = vertices[i].reduce((sum, v, idx) => sum + Math.abs(v - vertices[j][idx]), 0);
//           if (diff === 2) {
//             edges.push([i, j]);
//           }
//         }
//       }
//       return edges;
//     }

//     function rotate4D(vertices, angleXW, angleYZ) {
//       const cosXW = Math.cos(angleXW - 0.005);
//       const sinXW = Math.sin(angleXW - 0.005);
//       const cosYZ = Math.cos(angleYZ);
//       const sinYZ = Math.sin(angleYZ);

//       return vertices.map(([x, y, z, w]) => {
//         // Rotate in X-W plane
//         let newX = cosXW * x - sinXW * w;
//         let newW = sinXW * x + cosXW * w;

//         // Rotate in Y-Z plane
//         let newY = cosYZ * y - sinYZ * z;
//         let newZ = sinYZ * y + cosYZ * z;

//         return [newX, newY, newZ, newW];
//       });
//     }

//     function project4DTo3D(vertices) {
//       return vertices.map(([x, y, z, w]) => {
//         const scale = 2 / (2 + w); // Perspective projection
//         return [scale * x, scale * y, scale * z];
//       });
//     }

//     init(); // Initialize Three.js scene

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       mount?.removeChild(renderer.domElement);
//       window.removeEventListener("resize", onWindowResize);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 2, // Ensures it's behind content
//       }}
//     />
//   );
// };

// export default Tesseract;