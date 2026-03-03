import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

// Low Poly Crystal
function LowPolyCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8} position={[0, 0, -1]}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#e8a030"
          roughness={0.3}
          metalness={0.6}
          distort={0.2}
          speed={3}
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
}

// Abstract Morphing Blob
function MorphBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={2}>
      <mesh ref={meshRef} position={[3.5, 1, -3]} scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial
          color="#d4a050"
          roughness={0.5}
          metalness={0.3}
          factor={0.6}
          speed={2}
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Dodecahedron
function WireframeDodeca() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={[-3.5, -1.5, -2]} scale={1}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#c0c0c0"
          roughness={0.8}
          metalness={0.1}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating Torus Knot
function FloatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[-2, 2, -4]} scale={0.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color="#e8a030"
          roughness={0.4}
          metalness={0.5}
          distort={0.1}
          speed={1.5}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

// Floating Particles
function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#e8a030"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

// Octahedron 
function FloatingOcta() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.7) * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[4, -2, -3]} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#e8a030"
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.12}
        />
      </mesh>
    </Float>
  );
}

function MouseFollowLight() {
  const light = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (light.current) {
      const x = (state.pointer.x * viewport.width) / 2;
      const y = (state.pointer.y * viewport.height) / 2;
      light.current.position.set(x, y, 3);
    }
  });

  return <pointLight ref={light} intensity={0.5} color="#e8a030" distance={10} />;
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
          <directionalLight position={[-3, -3, 2]} intensity={0.2} color="#e8a030" />
          <MouseFollowLight />
          <LowPolyCrystal />
          <MorphBlob />
          <WireframeDodeca />
          <FloatingKnot />
          <FloatingOcta />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
