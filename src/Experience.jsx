import { Box, Button } from "@mui/material";
import { Html, OrbitControls, Text } from "@react-three/drei";
import { useEffect } from "react";
import BlackHole from "./galaxy/BlackHole";
import FloatingText from "./galaxy/FloatingText";
import Galaxy from "./galaxy/Galaxy";
import Stars from "./galaxy/Stars";
import TextPlain from "./galaxy/TextPlain";

const Experience = () => {
	// All items to be rendered within the Three.js canvas.

	// Properties for the 3D galaxy and stars
	const galaxyMainProperties = {
		count: 730000,
		size: 0.05,
		radius: 9,
		branches: 4,
		spin: 0.6,
		randomness: 0.3,
		randomnessPower: 1.5,
		insideColor: "#FE8966",
		outsideColor: "#52c8ff",
		rotation: 0.001,
	};

	const galaxyCenterProperties = {
		count: 300000,
		size: 0.03,
		radius: 0.5,
		branches: 3,
		spin: 1000,
		randomness: 0.6,
		randomnessPower: 3,
		insideColor: "#FE8966",
		outsideColor: "#FE8966",
		rotation: 0.005,
	};

	const galaxyCenterOuter = {
		count: 500000,
		size: 0.05,
		radius: 5,
		branches: 3,
		spin: 100,
		randomness: 0.5,
		randomnessPower: 3,
		insideColor: "#FE8966",
		outsideColor: "#52c8ff",
		rotation: 0.002,
	};

	const starsProperties = {
		count: 300000,
		size: 0.1,
		radius: 125,
		rotation: 0.0001,
	};

	// useEffect(() => {
	// 	document.addEventListener("click", () => {
	// 		let state = document.getElementById("displayState");
	// 		console.log(state.innerText);
	// 	});
	// }, []);

	return (
		<>
			<ambientLight />
			<pointLight />
			<OrbitControls />
			<Galaxy id="Galaxy Main" {...galaxyMainProperties} />
			<Galaxy id="Galaxy Center" {...galaxyCenterProperties} />
			<Galaxy id="Galaxy Center Outer" {...galaxyCenterOuter} />
			<Stars id="Stars" {...starsProperties} />
			<BlackHole id="BlackHole" />
			<TextPlain>
				<FloatingText text="Projects" location={[3, 0, -0.5]} />
				<FloatingText text="Art" location={[0.1, 3, -0.4]} />
				<FloatingText text="About" location={[-3, -0.2, -0.6]} />
				<FloatingText text="Contact" location={[-0.1, -3, -0.7]} />
			</TextPlain>
		</>
	);
};

export default Experience;
