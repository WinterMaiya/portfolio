import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TextPlain = ({ children }) => {
	const planeRef = useRef();

	useFrame(() => {
		planeRef.current.rotation.y += 0.002;
	});
	return (
		<mesh ref={planeRef}>
			<Torus args={[3, 3, 2]} rotation={[Math.PI / 2, 0, 0]}>
				<meshBasicMaterial visible={false} />
				{children}
			</Torus>
		</mesh>
	);
};

export default TextPlain;
