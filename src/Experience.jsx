import { OrbitControls } from "@react-three/drei";
import BlackHole from "./galaxy/BlackHole";
import FloatingText from "./galaxy/FloatingText";
import Galaxy from "./galaxy/Galaxy";
import Stars from "./galaxy/Stars";
import TextPlain from "./galaxy/TextPlain";

const Experience = ({ globalRef }) => {
	// All items to be rendered within the Three.js canvas.

	// Properties for the 3D galaxy and stars
	const galaxyMainProperties = {
		count: 20000,
		size: 0.1,
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
		count: 6000,
		size: 0.1,
		radius: 2,
		branches: 3,
		spin: 100,
		randomness: 0.6,
		randomnessPower: 3,
		insideColor: "#FE8966",
		outsideColor: "#FE8966",
		rotation: 0.003,
	};

	const galaxyCenterOuter = {
		count: 10000,
		size: 0.1,
		radius: 7,
		branches: 3,
		spin: 50,
		randomness: 0.5,
		randomnessPower: 3,
		insideColor: "#FE8966",
		outsideColor: "#52c8ff",
		rotation: 0.002,
	};

	const starsProperties = {
		count: 100000,
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
				{/* TODO: Make text variable. */}
				<FloatingText
					text="Projects"
					location={[0.5, -1.5, -0.5]}
					globalRef={globalRef}
					stateToBeValue="projects"
				/>
				<FloatingText
					text="Art"
					location={[-1.5, 1, -0.5]}
					globalRef={globalRef}
					stateToBeValue="art"
				/>
				<FloatingText
					text="About"
					location={[1.5, 1.5, -0.5]}
					globalRef={globalRef}
					stateToBeValue="about"
				/>
				{/* <FloatingText
					text="Contact"
					location={[-0.1, -3, -0.7]}
					globalRef={globalRef}
					stateToBeValue="contact"
				/> */}
			</TextPlain>
		</>
	);
};

export default Experience;
