'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function FloatingGeometry() {
  const [mounted, setMounted] = useState(false);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useEffect(() => {
    setMounted(true);
  }, []);

  useFrame((state, delta) => {
    if (!mounted) return;

    const time = state.clock.getElapsedTime();

    // Sphere animation
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.5;
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.1;
    }

    // Box animation
    if (boxRef.current) {
      boxRef.current.position.y = Math.cos(time * 0.8) * 0.3;
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.z = time * 0.1;
    }

    // Torus animation
    if (torusRef.current) {
      torusRef.current.position.y = Math.sin(time * 0.6) * 0.4;
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.4;
    }
  });

  if (!mounted) return null;

  return (
    <group>
      {/* Main Sphere */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#3b82f6"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.8}
          envMapIntensity={1}
        />
      </Sphere>

      {/* Floating Box */}
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[3, 1, -2]}>
        <meshPhysicalMaterial
          color="#eab308"
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.7}
          envMapIntensity={0.8}
        />
      </Box>

      {/* Floating Torus */}
      <Torus ref={torusRef} args={[0.6, 0.2, 16, 32]} position={[-2.5, -1, 1]}>
        <meshPhysicalMaterial
          color="#1d4ed8"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.6}
          envMapIntensity={1.2}
        />
      </Torus>

      {/* Particle Field */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 16, 16]}
          position={[
            Math.cos(i * 0.8) * 4 * viewport.factor,
            Math.sin(i * 0.6) * 2 * viewport.factor,
            Math.sin(i * 0.4) * 3 * viewport.factor,
          ]}
        >
          <meshPhysicalMaterial
            color={i % 2 === 0 ? '#60a5fa' : '#fbbf24'}
            transparent
            opacity={0.6}
            envMapIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
}

function Scene() {
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    setSceneReady(true);
  }, []);

  if (!sceneReady) return null;

  return (
    <>
      {/* Environment and Lighting */}
      <color attach="background" args={['#02021e']} />
      <fog attach="fog" args={['#02021e', 5, 18]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <hemisphereLight intensity={0.3} groundColor="#000000" />

      {/* 3D Objects */}
      <Suspense fallback={null}>
        <FloatingGeometry />
      </Suspense>

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        makeDefault
      />
    </>
  );
}

// Loading fallback
function CanvasLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Main Hero3D Component
interface Hero3DProps {
  className?: string;
}

export default function Hero3D({ className = '' }: Hero3DProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {mounted && (
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 8],
            fov: 60,
            near: 0.1,
            far: 100,
          }}
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
          onCreated={({ gl }) => {
            gl.setClearColor('#02021e');
          }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      )}

      {/* Mobile Fallback */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center bg-[#02021e]">
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.circle
            cx="150"
            cy="150"
            r="80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
          <motion.circle
            cx="150"
            cy="150"
            r="50"
            fill="#3b82f6"
            opacity="0.3"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.rect
            x="200"
            y="100"
            width="30"
            height="30"
            fill="#eab308"
            opacity="0.5"
            animate={{
              y: [100, 120, 100],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
          <motion.circle
            cx="100"
            cy="200"
            r="15"
            fill="#1d4ed8"
            opacity="0.4"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
