import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Environment, PerformanceMonitor, Stats } from "@react-three/drei";

function App() {
	return (
		<>
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
			{/* TODO: UI Later */}
		</>
	);
}

export default App;
