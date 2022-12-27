import { Box, Button, Grid, Typography, Zoom } from "@mui/material";
import { Container } from "@mui/system";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Interface = ({ cameraRef, globalRef }) => {
	// Creates a interface that goes above the 3D canvas.
	// Uses Material Ui for the styling

	// "loading", "welcome", "home", "projects", "art", "about", "contact"
	// loading states are: loading, projects-loading, art-loading, about-loading, contact-loading
	const [displayState, setDisplayState] = useState("welcome");

	const [pointerEvents, setPointerEvents] = useState("auto");

	useEffect(() => {
		if (displayState === "home") {
			setPointerEvents("none");
		} else {
			setPointerEvents("auto");
		}
	}, [displayState]);

	useEffect(() => {
		if (displayState !== globalRef.current) {
			setDisplayState(globalRef.current);
		}
	}, [globalRef.current]);

	const animate = (newX, newY, newZ, state, duration = 3) => {
		// Animates the camera to the current position
		if (displayState !== "loading") {
			gsap.to(cameraRef.current.position, {
				x: newX,
				y: newY,
				z: newZ,
				duration: duration,
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
					animate(-0.1, -7, -0.5, "projects", 1);
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
				case "art-loading":
					animate(10.2, 1.8, -5.5, "art", 1);
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
				case "about-loading":
					animate(25, 4, -9, "about", 1);
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
				case "contact-loading":
					animate(0.1, 67, -0.2, "contact", 1);
					globalRef.current = "loading";
					setDisplayState("loading");
					break;
			}
		}, 100);
		return () => clearInterval(id);
	});

	return (
		<Box className="interface" sx={{ pointerEvents: pointerEvents }}>
			<Container>
				<div id="displayState" hidden>
					{displayState}
				</div>
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
					>
						<Grid item>
							<Zoom in={displayState === "projects"}>
								<Button
									id="welcome-button"
									onClick={() => {
										animate(2, 4, -9, "home", 1);
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
				<section id="art" hidden={displayState === "art" ? false : true}>
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
						<Grid item>
							<Zoom in={displayState === "art"}>
								<Button
									id="welcome-button"
									onClick={() => {
										animate(2, 4, -9, "home", 1);
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
				<section id="about" hidden={displayState === "about" ? false : true}>
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
						<Grid item>
							<Zoom in={displayState === "about"}>
								<Button
									id="welcome-button"
									onClick={() => {
										animate(2, 4, -9, "home", 1);
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
					id="contact"
					hidden={displayState === "contact" ? false : true}
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
					>
						<Grid item>
							<Zoom in={displayState === "contact"}>
								<Button
									id="welcome-button"
									onClick={() => {
										animate(2, 4, -9, "home", 1);
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
			</Container>
		</Box>
	);
};

export default Interface;
