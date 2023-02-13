import { PointMaterial, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Stars = ({
	count = 300000,
	size = 0.05,
	radius = 5,
	rotation = 0.001,
}) => {
	const starsRef = useRef();

	useFrame(() => {
		starsRef.current.rotation.y += rotation;
		starsRef.current.material.needsUpdate = true;
	});
	const positions = new Float32Array(count * 3);

	for (let i = 0; i < count; i++) {
		const i3 = i * 3;

		positions[i3] = (Math.random() - 0.5) * radius;
		positions[i3 + 1] = (Math.random() - 0.5) * radius;
		positions[i3 + 2] = (Math.random() - 0.5) * radius;
	}

	const props = useTexture({
		// Texture hook for loading in the stars texture
		map: "/portfolio/star.png",
	});
	return (
		<points ref={starsRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					array={positions}
					count={positions.length / 3}
					itemSize={3}
				/>
			</bufferGeometry>
			<PointMaterial
				{...props}
				attach="material"
				transparent={true}
				size={size}
				sizeAttenuation={true}
				depthWrite={false}
				blending={THREE.AdditiveBlending}
			/>
		</points>
	);
};

export default Stars;
