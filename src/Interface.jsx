import { Button, Grid, Grow, Typography, Zoom } from "@mui/material";
import { Container } from "@mui/system";
import gsap from "gsap";
import { useState } from "react";

const Interface = ({ cameraRef }) => {
	// Creates a interface that goes above the 3D canvas.
	// Uses Material Ui for the styling

	// "loading", "welcome", "home"
	const [displayState, setDisplayState] = useState("welcome");

	const animate = (newX, newY, newZ, state) => {
		// Animates the camera to the current position
		if (displayState !== "loading") {
			gsap.to(cameraRef.current.position, {
				x: newX,
				y: newY,
				z: newZ,
				duration: 3,
				ease: "power2",
				onComplete: () => {
					setDisplayState(state);
				},
			});
		} else {
			console.log("no");
		}
	};
	return (
		<div className="interface">
			<section id="welcome" hidden={displayState === "welcome" ? false : true}>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: "100vh" }}
					zIndex="99"
					position="absolute"
				>
					<Grid item margin={5}>
						<Zoom in={displayState === "welcome"}>
							<Typography
								variant="h1"
								fontSize="8vw"
								color="white"
								align="center"
							>
								Maiya Winter's Portfolio
							</Typography>
						</Zoom>
					</Grid>
					<Grid item xs={3} margin={5}>
						<Zoom in={displayState === "welcome"}>
							<Button
								id="welcome-button"
								onClick={() => {
									animate(2, 4, -9, "home");
									setDisplayState("loading");
								}}
								variant="contained"
								size="large"
							>
								Enter
							</Button>
						</Zoom>
					</Grid>
				</Grid>
			</section>
			<section id="home" hidden={displayState === "home" ? false : true}>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: "100vh" }}
					zIndex="99"
					position="absolute"
				>
					<Grid item xs={3} margin={5}>
						<Typography variant="h1" color="primary">
							This is the home page now
						</Typography>
					</Grid>
					<Grid item xs={3} margin={50}>
						<Button
							id="welcome-button"
							onClick={() => {
								animate(2, 4, -9, "home");
								setDisplayState("loading");
							}}
							variant="contained"
							size="large"
						>
							Enter
						</Button>
					</Grid>
				</Grid>
			</section>
			{/* <div className="centered">
				<h1>Maiya Winter</h1>
				<button
					onClick={() => {
						animate(2, 4, -9, "home");
						setDisplayState("loading");
					}}
				>
					Explore
				</button>
			</div> */}
		</div>
	);
};

export default Interface;
