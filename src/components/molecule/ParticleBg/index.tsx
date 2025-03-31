import * as THREE from "three";
import { InstancedMesh, MathUtils, Mesh, TextureLoader } from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Environment, Instance, Instances } from "@react-three/drei";

const socialMediaLogos = [
  "/assets/logos/facebook.png",
  "/assets/logos/instagram.png",
  "/assets/logos/snapchat.png",
  "/assets/logos/x.png",
  "/assets/logos/whatsapp.png",
  "/assets/logos/linkedin.png",
  "/assets/logos/youtube.png",
];

const Particle = ({
  position,
  speed,
  texture,
}: {
  position: [number, number, number];
  speed: number;
  texture: THREE.Texture;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += speed;
      if (ref.current.position.z > 3) {
        ref.current.position.z = -15 - Math.random() * 5;
      }
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[0.25, 0.25]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const ParticleField = () => {
  const count = 500;
  const textures = useMemo(
    () => socialMediaLogos.map((src) => useLoader(TextureLoader, src)),
    []
  );

  const particles = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 25, // X position
        (Math.random() - 0.5) * 25, // Y position
        Math.random() * -15 - 5, // Z position starts far and moves towards the camera
      ] as [number, number, number],
      speed: 0.005 + Math.random() * 0.02, // Randomized speed
      texture: textures[Math.floor(Math.random() * textures.length)], // Random social media logo
    }));
  }, [count, textures]);

  return (
    <>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          position={particle.position}
          speed={particle.speed}
          texture={particle.texture}
        />
      ))}
    </>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: -(event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.x - camera.position.x) * 0.05;
    camera.position.y += (mouse.y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default function ParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <color attach="background" args={["#f0f0f0"]} />
      {/* <fog attach="fog" args={["blue", 20, -5]} /> */}
      <ambientLight intensity={2} />
      {/* <pointLight position={[10, 10, 10]} intensity={10} castShadow /> */}
      {/* <EffectComposer>
        <N8AO aoRadius={6} intensity={2} color="blue" />
        <TiltShift2 blur={0.1} />
      </EffectComposer> */}
      <Environment preset="city" />
      <CameraController />
      <ParticleField />
      {/* <Bubbles /> */}
    </Canvas>
  );
}
