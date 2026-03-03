import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

// Film Camera Body
function FilmCamera() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} position={[-2.5, 0.5, -1]} scale={0.6}>
        {/* Camera body */}
        <mesh>
          <boxGeometry args={[1.8, 1.2, 1.2]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Lens barrel */}
        <mesh position={[0, 0, 0.9]}>
          <cylinderGeometry args={[0.4, 0.5, 0.8, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Lens glass */}
        <mesh position={[0, 0, 1.35]}>
          <circleGeometry args={[0.35, 32]} />
          <meshStandardMaterial color="#4488cc" roughness={0.1} metalness={0.3} transparent opacity={0.6} />
        </mesh>
        {/* Viewfinder */}
        <mesh position={[0, 0.8, -0.2]}>
          <boxGeometry args={[0.4, 0.3, 0.5]} />
          <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Handle/grip */}
        <mesh position={[0.7, -0.5, 0]}>
          <boxGeometry args={[0.3, 0.6, 0.4]} />
          <meshStandardMaterial color="#333333" roughness={0.5} metalness={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

// Studio Light / Softbox
function StudioLight() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      groupRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.8}>
      <group ref={groupRef} position={[3, 1.5, -2]} scale={0.5}>
        {/* Light panel */}
        <mesh>
          <boxGeometry args={[1.5, 2, 0.15]} />
          <meshStandardMaterial color="#f5f0e8" roughness={0.9} metalness={0} emissive="#f5e6c8" emissiveIntensity={0.3} />
        </mesh>
        {/* Frame */}
        <mesh>
          <boxGeometry args={[1.6, 2.1, 0.05]} />
          <meshStandardMaterial color="#333333" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Stand pole */}
        <mesh position={[0, -1.8, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.6, 8]} />
          <meshStandardMaterial color="#444444" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Base */}
        <mesh position={[0, -2.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.04, 8, 16]} />
          <meshStandardMaterial color="#333333" roughness={0.4} metalness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

// Film Reel
function FilmReel() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1.2}>
      <group ref={meshRef} position={[3.5, -1.5, -3]} scale={0.4}>
        {/* Outer ring */}
        <mesh>
          <torusGeometry args={[1.2, 0.15, 16, 32]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Inner hub */}
        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
          <meshStandardMaterial color="#333333" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <mesh key={angle} rotation={[0, 0, (angle * Math.PI) / 180]}>
            <boxGeometry args={[2.2, 0.08, 0.1]} />
            <meshStandardMaterial color="#3a3a3a" roughness={0.4} metalness={0.6} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Clapperboard
function Clapperboard() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.2 - 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} position={[-3.5, -1, -2]} scale={0.45} rotation={[0.1, 0.3, 0.05]}>
        {/* Board */}
        <mesh>
          <boxGeometry args={[2, 1.6, 0.08]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.3} />
        </mesh>
        {/* Clapper top */}
        <mesh position={[0, 0.9, 0.02]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[2, 0.25, 0.06]} />
          <meshStandardMaterial color="#e8a030" roughness={0.3} metalness={0.5} />
        </mesh>
        {/* Stripes on clapper */}
        {[-0.6, -0.2, 0.2, 0.6].map((x) => (
          <mesh key={x} position={[x, 0.9, 0.06]} rotation={[0, 0, 0.15]}>
            <boxGeometry args={[0.15, 0.25, 0.02]} />
            <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.1} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Floating light particles (like studio dust in light beams)
function DustParticles() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
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
        size={0.035}
        color="#e8a030"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// Microphone
function Microphone() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
      groupRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} position={[-1, 2, -3]} scale={0.35}>
        {/* Mic head */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} wireframe />
        </mesh>
        {/* Mic body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 2, 8]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
        </mesh>
      </group>
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

  return <pointLight ref={light} intensity={0.4} color="#e8a030" distance={10} />;
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
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
          <directionalLight position={[-3, -3, 2]} intensity={0.2} color="#e8a030" />
          <MouseFollowLight />
          <FilmCamera />
          <StudioLight />
          <FilmReel />
          <Clapperboard />
          <Microphone />
          <DustParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}
