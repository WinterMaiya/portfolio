import { Box, Button } from "@mui/material";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const FloatingText = ({
	text = "No Text Entered",
	location = [1, 0, 0.5],
	globalRef,
	stateToBeValue,
}) => {
	// Display's floating buttons on the galaxy
	const [visible, setVisible] = useState(false);
	const textRef = useRef();

	useFrame(() => {
		if (globalRef.current === "home" && visible === false) {
			setVisible(true);
		} else if (globalRef.current !== "home" && visible === true) {
			setVisible(false);
		}
	});

	return (
		<Html center position={location}>
			<Box ref={textRef} hidden={!visible} sx={{ transition: "width 10s" }}>
				<Button
					className="blue-glow"
					variant="contained"
					onClick={() => {
						globalRef.current = stateToBeValue + "-loading";
					}}
				>
					{text}
				</Button>
				{/* TODO: Add a line to make the buttons more visually appealing */}
			</Box>
		</Html>
	);
};

export default FloatingText;
