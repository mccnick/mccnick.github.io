import React, { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

const Tesseract = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let scene, camera, renderer, lines;
    let animationFrameId;
    let vertices = [];
    let edges = [];

    function init() {
      // Create the scene
      scene = new THREE.Scene();

      // Set up the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 7.5;

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mount.appendChild(renderer.domElement);

      // Define vertices of a 4D Tesseract (hypercube)
      for (let w = -1; w <= 1; w += 2) {
        for (let z = -1; z <= 1; z += 2) {
          for (let y = -1; y <= 1; y += 2) {
            for (let x = -1; x <= 1; x += 2) {
              vertices.push([x, y, z, w]);
            }
          }
        }
      }

      // Define edges by connecting vertices
      edges = getTesseractEdges(vertices);

      // Create geometry for the edges
      const material = new THREE.LineBasicMaterial({ color: 0x7a5588 });
      const geometry = new THREE.BufferGeometry();
      lines = new THREE.LineSegments(geometry, material);
      scene.add(lines);

      // Orbit Controls (optional)
      new OrbitControls(camera, renderer.domElement);

      // Resize event
      window.addEventListener("resize", onWindowResize);

      animate(); // Start animation
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      // Apply 4D Rotation (X-W and Y-Z planes)
      vertices = rotate4D(vertices, 0.01, 0.005);
      const projectedVertices = project4DTo3D(vertices);

      // Update edges
      const geometryVertices = [];
      for (const [start, end] of edges) {
        geometryVertices.push(...projectedVertices[start], ...projectedVertices[end]);
      }

      // Update Three.js geometry
      lines.geometry.dispose(); // Clear old geometry
      lines.geometry.setAttribute("position", new THREE.Float32BufferAttribute(geometryVertices.flat(), 3));
      lines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    function getTesseractEdges(vertices) {
      let edges = [];
      for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
          let diff = vertices[i].reduce((sum, v, idx) => sum + Math.abs(v - vertices[j][idx]), 0);
          if (diff === 2) {
            edges.push([i, j]);
          }
        }
      }
      return edges;
    }

    function rotate4D(vertices, angleXW, angleYZ) {
      const cosXW = Math.cos(angleXW);
      const sinXW = Math.sin(angleXW);
      const cosYZ = Math.cos(angleYZ);
      const sinYZ = Math.sin(angleYZ);

      return vertices.map(([x, y, z, w]) => {
        // Rotate in X-W plane
        let newX = cosXW * x - sinXW * w;
        let newW = sinXW * x + cosXW * w;

        // Rotate in Y-Z plane
        let newY = cosYZ * y - sinYZ * z;
        let newZ = sinYZ * y + cosYZ * z;

        return [newX, newY, newZ, newW];
      });
    }

    function project4DTo3D(vertices) {
      return vertices.map(([x, y, z, w]) => {
        const scale = 2 / (2 + w); // Perspective projection
        return [scale * x, scale * y, scale * z];
      });
    }

    init(); // Initialize Three.js scene

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
        zIndex: 2, // Ensures it's behind content
      }}
    />
  );
};

export default Tesseract;
