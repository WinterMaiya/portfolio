import {
	Box,
	Button,
	Grid,
	Paper,
	Stack,
	styled,
	Typography,
	Zoom,
} from "@mui/material";
import gsap from "gsap";
import { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Overlay from "./Overlay";
const Interface = ({ cameraRef, globalRef }) => {
	// Creates a interface that goes above the 3D canvas.
	// Uses Material Ui for the styling

	// "loading", "welcome", "home", "projects", "art", "about", "contact"
	// loading states are: loading, projects-loading, art-loading, about-loading, contact-loading
	const [displayState, setDisplayState] = useState("welcome");

	const [pointerEvents, setPointerEvents] = useState("auto");

	const { height, width } = useWindowDimensions();

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

	const welcome = (
		<section id="welcome" hidden={displayState === "welcome" ? false : true}>
			<Zoom in={displayState === "welcome"}>
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
						<Typography
							variant="h1"
							fontSize="8vw"
							color="white"
							align="center"
						>
							Maiya Winter
						</Typography>
					</Grid>
					<Grid item xs={3} margin={5}>
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
							Start
						</Button>
					</Grid>
				</Grid>
			</Zoom>
		</section>
	);

	const projects = (
		<section id="projects">
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
					<Overlay height={height} width={width}>
						<Stack spacing={2}>
							<Typography type="h1" sx={{ color: "success.main" }}>
								Test
							</Typography>
							<Typography type="h1" sx={{ color: "success.main" }}>
								Test 2
							</Typography>
						</Stack>
					</Overlay>
				</Grid>
				<Grid item margin={5}>
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
							Go back
						</Button>
					</Zoom>
				</Grid>
			</Grid>
		</section>
	);

	const art = (
		<section id="art" hidden={displayState === "art" ? false : true}>
			<Zoom in={displayState === "art"}>
				<Grid
					container
					spacing={1}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: "100vh" }}
					zIndex="99"
					position="absolute"
				>
					<Grid item>
						<Overlay>
							<iframe
								src="//lightwidget.com/widgets/708943fc60f05b5596ebdab58aa89022.html"
								width={width - 10}
								height={height / 1.1}
								overflow={"hidden"}
								style={{ overflow: "hidden", border: "0" }}
							></iframe>
						</Overlay>
						{/* TODO: Update Art */}
					</Grid>
					<Grid item>
						<Button
							onClick={() => {
								animate(2, 4, -9, "home", 1);
								globalRef.current = "loading";
								setDisplayState("loading");
							}}
							variant="contained"
							size="large"
						>
							Go Back
						</Button>
					</Grid>
				</Grid>
			</Zoom>
		</section>
	);

	const about = (
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
					<Box sx={{ backgroundColor: "rgba(255,255,255" }}>
						<Typography>Test</Typography>
					</Box>
				</Grid>
				<Grid item margin={5}>
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
	);

	const contact = (
		<section id="contact" hidden={displayState === "contact" ? false : true}>
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
	);

	return (
		<Box className="interface">
			<span id="displayState" hidden>
				{displayState}
			</span>

			{displayState === "welcome" && welcome}
			{displayState === "projects" && projects}
			{displayState === "art" && art}
			{displayState === "about" && about}
			{displayState === "contact" && contact}
		</Box>
	);
};

export default Interface;
