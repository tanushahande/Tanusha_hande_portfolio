"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00F5D4"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -2]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#7B61FF"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="!absolute inset-0"
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00F5D4" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#7B61FF" />
      <ParticleField />
      <FloatingOrb />
    </Canvas>
  );
}
