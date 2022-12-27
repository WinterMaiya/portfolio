import { Button, Grid, Grow, Typography, Zoom } from "@mui/material";
import { Container } from "@mui/system";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Interface = ({ cameraRef, globalRef }) => {
	// Creates a interface that goes above the 3D canvas.
	// Uses Material Ui for the styling

	// "loading", "welcome", "home", "projects", "art", "about", "contact"
	// loading states are: loading, projects-loading, art-loading, about-loading, contact-loading
	const [displayState, setDisplayState] = useState("welcome");
	console.log(displayState, "The current display state");

	useEffect(() => {
		if (displayState !== globalRef.current) {
			setDisplayState(globalRef.current);
		}
	}, [globalRef.current]);

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
					globalRef.current = state;
					setDisplayState(state);
				},
			});
		} else {
			console.log("no");
		}
	};

	useEffect(() => {
		const id = setInterval(() => {
			switch (globalRef.current) {
				case "projects-loading":
					animate(25, 4, -9, "projects");
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
				case "art-loading":
					animate(25, 4, -9, "art");
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
				case "about-loading":
					animate(25, 4, -9, "about");
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
				case "contact-loading":
					animate(25, 4, -9, "contact");
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
			}
		}, 10);
		return () => clearInterval(id);
	});

	return (
		<div className="interface">
			<div id="displayState" hidden>
				{displayState}
			</div>
			<Container>
				<section
					id="welcome"
					hidden={displayState === "welcome" ? false : true}
				>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						style={{ minHeight: "100vh" }}
						zIndex="99"
					>
						<Grid item margin={5}>
							<Zoom in={displayState === "welcome"}>
								<Typography
									variant="h1"
									fontSize="8vw"
									color="white"
									align="center"
								>
									Maiya Winter
								</Typography>
							</Zoom>
						</Grid>
						<Grid item xs={3} margin={5}>
							<Zoom in={displayState === "welcome"}>
								<Button
									id="welcome-button"
									onClick={() => {
										animate(2, 4, -9, "home");
										globalRef.current = "loading";
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
				<section
					id="projects"
					hidden={displayState === "projects" ? false : true}
				>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						style={{ minHeight: "100vh" }}
						zIndex="99"
						position="absolute"
					></Grid>
				</section>
				<section id="welcome" hidden={displayState === "home" ? false : true}>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						style={{ minHeight: "100vh" }}
						zIndex="99"
						position="absolute"
					></Grid>
				</section>
			</Container>

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
