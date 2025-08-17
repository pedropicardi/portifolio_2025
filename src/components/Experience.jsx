import { OrbitControls, Text3D } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial wireframe />
      </mesh>
      <Text3D
        font={"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"}
        size={0.2}
        height={0.05}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.00}
        bevelSize={0.005}
        bevelOffset={0}
        bevelSegments={5}
        position={[-0.5, -0, 0]}
      >
        {"live soon"}
        <meshNormalMaterial />
      </Text3D>
    </>
  );
};
