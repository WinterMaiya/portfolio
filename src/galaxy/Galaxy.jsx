import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Galaxy = ({
	count = 500000,
	radius = 9,
	spin = 0.6,
	branches = 4,
	randomnessPower = 1.8,
	randomness = 0.5,
	insideColor = "#DE3163",
	outsideColor = "#52c8ff",
	size = 0.05,
	rotation = 0.005,
}) => {
	// TODO: Change texture
	const galaxyRef = useRef();

	useFrame(() => {
		galaxyRef.current.rotation.y += rotation;
		// galaxyRef.current.instanceMatrix.needsUpdate = true;
		// galaxyRef.current.instanceColor.needsUpdate = true;
		galaxyRef.current.material.needsUpdate = true;
	});
	const positions = new Float32Array(count * 3);
	const colors = new Float32Array(count * 3);

	const colorInside = new THREE.Color(insideColor);
	const colorOutside = new THREE.Color(outsideColor);
	for (let i = 0; i < count; i++) {
		const i3 = i * 3;

		const newRadius = Math.random() * radius;
		const spinAngle = newRadius * spin;
		const branchAngle = ((i % branches) / branches) * Math.PI * 2;

		const randomX =
			Math.pow(Math.random(), randomnessPower) *
			(Math.random() < 0.5 ? 1 : -1) *
			randomness *
			newRadius;
		const randomY =
			Math.pow(Math.random(), randomnessPower) *
			(Math.random() < 0.5 ? 1 : -1) *
			randomness *
			newRadius;
		const randomZ =
			Math.pow(Math.random(), randomnessPower) *
			(Math.random() < 0.5 ? 1 : -1) *
			randomness *
			newRadius;

		positions[i3] = Math.cos(branchAngle + spinAngle) * newRadius + randomX;
		positions[i3 + 1] = randomY;
		positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * newRadius + randomZ;

		// Color
		const mixedColor = colorInside.clone();
		mixedColor.lerp(colorOutside, newRadius / radius);

		colors[i3] = mixedColor.r;
		colors[i3 + 1] = mixedColor.g;
		colors[i3 + 2] = mixedColor.b;
	}

	const props = useTexture({
		// Texture hook for loading in the stars texture
		map: "/portfolio/star.png",
	});

	console.log(galaxyRef);
	return (
		<points ref={galaxyRef}>
			<bufferGeometry attach={"geometry"}>
				<bufferAttribute
					attach="attributes-position"
					array={positions}
					count={positions.length / 2}
					itemSize={3}
				/>
				<bufferAttribute
					attach="attributes-color"
					array={colors}
					count={colors.length / 2}
					itemSize={3}
				/>
			</bufferGeometry>
			{/* <PointMaterial
				{...props}
				attach="material"
				transparent={true}
				vertexColors={true}
				size={size}
				sizeAttenuation={true}
				depthWrite={false}
				blending={THREE.AdditiveBlending}
				color={"#ffffff"}
			/> */}
			<pointsMaterial
				{...props}
				attach="material"
				transparent={true}
				// map={CircleImg}
				size={size}
				depthWrite={false}
				blending={THREE.AdditiveBlending}
				// AdditiveBlending={true}
				sizeAttenuation={true}
				// vertexColors={true}
				color={"#ffffff"}
			/>
		</points>
	);
};

export default Galaxy;
