import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { PerformanceMonitor, Stats } from "@react-three/drei";
import Interface from "./Interface";
import { useState } from "react";

function App() {
	// Rendering the application
	// Canvas refers to the 3D canvas while Interface refers to the HTML ui above.

	// [X, Y, Z]
	const [cameraLocation, setCameraLocation] = useState([22, 36, 22]);
	return (
		<>
			<Canvas
				camera={{
					fov: 60,
					near: 0.1,
					far: 20000,
					position: cameraLocation,
				}}
			>
				<Stats />
				<PerformanceMonitor />
				<Experience />
			</Canvas>
			<Interface setCameraLocation={setCameraLocation} />
		</>
	);
}

export default App;
