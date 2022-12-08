import { Sphere } from "@react-three/drei";

const BlackHole = () => {
	return (
		<Sphere scale={0.1}>
			<meshBasicMaterial color="black" />
		</Sphere>
	);
};

export default BlackHole;
