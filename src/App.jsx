import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import {
	PerformanceMonitor,
	PerspectiveCamera,
	Stats,
} from "@react-three/drei";
import Interface from "./Interface";
import { useRef, useState } from "react";

function App() {
	// Rendering the application
	// Canvas refers to the 3D canvas while Interface refers to the HTML ui above.

	// Reference for the PerspectiveCamera
	const cameraRef = useRef();
	console.log(cameraRef);

	return (
		<>
			<Canvas>
				<PerspectiveCamera
					makeDefault
					position={[22, 36, 22]}
					ref={cameraRef}
				/>
				<Stats />
				<PerformanceMonitor />
				<Experience globalRef={globalRef} />
			</Canvas>
			<Interface cameraRef={cameraRef} globalRef={globalRef} />
		</>
	);
}

export default App;
