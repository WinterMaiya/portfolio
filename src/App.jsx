import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Environment, PerformanceMonitor, Stats } from "@react-three/drei";
import Interface from "./Interface";

function App() {
	return (
		<>
			{" "}
			{/* <Ui /> */}
			<Canvas
				camera={{
					fov: 60,
					near: 0.1,
					far: 20000,
					position: [22, 36, 22],
				}}
			>
				<Stats />
				<PerformanceMonitor />
				<Experience />
			</Canvas>
			<Interface />
			{/* TODO: UI Later */}
			{/* <Ui /> */}
		</>
	);
}

export default App;
