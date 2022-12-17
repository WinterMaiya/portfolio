import { Box, Button } from "@mui/material";
import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const FloatingText = ({ text = "No Text Entered", location = [1, 0, 0.5] }) => {
	// Display's floating buttons on the galaxy
	const [visible, setVisible] = useState(true);
	const textRef = useRef();
	useEffect(() => {
		let id = setInterval(() => {
			// Create an interval to check the global state so it doesn't have to be passed down to this component.
			let state = document.getElementById("displayState");
			console.log(state.innerText);
			if (state.innerText === "home") {
				setVisible(false);
			} else {
				setVisible(true);
			}
		}, 1000);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		console.log(textRef);
		if (visible) {
			console.log("its visible");
		} else {
			console.log("its not visible");
		}
	}, [visible]);

	return (
		<Html center position={location}>
			<Box ref={textRef} sx={{ transition: "width 10s" }}>
				<Button variant="contained">{text}</Button>
				{/* TODO: Add a line to make the buttons more visually appealing */}
			</Box>
		</Html>
	);
};

export default FloatingText;
