import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Text, Trail } from '@react-three/drei';

const RoadRoller = (props) => {
    const group = useRef();
    const rollerRef = useRef();

    useFrame((state) => {
        // Animation: slight bobbing and rotation for "antigravity" feel
        const t = state.clock.getElapsedTime();
        group.current.position.y = Math.sin(t * 0.5) * 0.2; // Bobbing
        group.current.rotation.z = Math.sin(t * 0.2) * 0.05; // Gentle tilt

        // Rotate the drum
        if (rollerRef.current) {
            rollerRef.current.rotation.x -= 0.02;
        }
    });

    return (
        <group ref={group} {...props}>
            {/* Antigravity floating feel wrapper */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Body */}
                <mesh position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[2.5, 1.5, 1.5]} />
                    <meshStandardMaterial color="#D4A000" metalness={0.6} roughness={0.2} />
                </mesh>

                {/* Cab */}
                <mesh position={[0.5, 2.25, 0]}>
                    <boxGeometry args={[1.2, 1.2, 1.4]} />
                    <meshStandardMaterial color="#333" transparent opacity={0.7} />
                </mesh>

                {/* Front Roller Drum */}
                <group position={[-1.5, 0.5, 0]}>
                    <mesh ref={rollerRef} rotation={[0, 0, Math.PI / 2]} castShadow>
                        <cylinderGeometry args={[0.8, 0.8, 2.2, 32]} />
                        <meshStandardMaterial color="#444" metalness={0.8} roughness={0.3} />
                    </mesh>
                    <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.85, 0.85, 0.1, 32]} />
                        <meshStandardMaterial color="#D4A000" />
                    </mesh>
                </group>

                {/* Rear Wheels */}
                <group position={[1.5, 0.5, 0.8]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                        <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                        <meshStandardMaterial color="#222" />
                    </mesh>
                </group>
                <group position={[1.5, 0.5, -0.8]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                        <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                        <meshStandardMaterial color="#222" />
                    </mesh>
                </group>

                {/* Antigravity Glow/Thrusters */}
                <pointLight position={[0, -0.5, 0]} intensity={2} color="#4fd1c5" distance={3} />
            </Float>
        </group>
    );
};

const RoadRollerScene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4A000" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <RoadRoller position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} scale={1.2} />

            {/* Decorative environment elements */}
            <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#1a3a52" metalness={0.8} roughness={0.2} />
            </mesh>
        </>
    );
};

export default RoadRollerScene;
