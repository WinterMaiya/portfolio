import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";
import Experience from "./Experience";
import {
	Effects,
	PerformanceMonitor,
	PerspectiveCamera,
	Stats,
} from "@react-three/drei";
import Interface from "./Interface";
import { useRef } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

// TODO: Add bloom effect
function App() {
	// Rendering the application
	// Canvas refers to the 3D canvas while Interface refers to the HTML ui above.
	const globalRef = useRef("welcome");

	// Reference for the PerspectiveCamera
	const cameraRef = useRef();

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
