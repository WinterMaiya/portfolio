import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Link,
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
import ProjectStack from "./ProjectStack";
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
		<Overlay height={height} width={width}>
			<Typography variant="h1" sx={{ color: "white" }}>
				Projects
			</Typography>
			<Divider />
			<ProjectStack
				title="Maiya Winter's Portfolio"
				website=""
				github="#"
				description="My personal website made with React and Three.js"
				techStack="Tech Stack: React, Node.js, Three.js, ReactThreeFiber, Material UI"
			/>
			<Divider />
			<ProjectStack
				title="Previews+"
				website="https://previews-plus.vercel.app/"
				github="https://github.com/WinterMaiya/previews-plus"
				description="Created a streaming service application based heavily on Netflix, Hulu, and HBOmax that allows users to stream trailers for movies and tv
								shows. Built using Next.js with Next-Auth authentication to allow users to quickly and securely log in. Developed backend with MySQL and
								Prisma as an ORM. Users are able to watch, rate, and add trailers to their playlist using the TMDB api. Application also keeps track of
								trailers watched using an internal rating system and recommends genres it thinks the user will enjoy.
								"
				techStack="Tech Stack: Node.js, Next.js, MySQL, Next-Auth, Prisma, Swiper, React, Axios, Bootstrap, Saas"
			/>
			<Divider />
			<ProjectStack
				title="Nom Nom Book"
				website="#" //  http://www.nomnombook.com
				github="https://github.com/WinterMaiya/nomnom_book"
				description="Created a website that lets users create and share recipes with friends. Built using a primarily backend framework Flask while rendering
								html pages using Jinja. Uses a heavy backend to allow users to add friends, share, add, rate, and find new recipes. Developed PostgreSQL
								database to store data while integrating Spoonacular API to get recipes from different websites. Used a primarily object-oriented design to
								better organize and use relevant data.
								"
				techStack="Tech Stack: Flask, Jinja, SQLAlchemy, PostgreSQL, WTForms, Flask Mail, Bcrypt, ItsDangerous, Cloudinary, Bootstrap.
								"
			/>
			<div>
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
			</div>
		</Overlay>
	);

	const art = (
		<Overlay>
			<Box>
				<iframe
					src="//lightwidget.com/widgets/708943fc60f05b5596ebdab58aa89022.html"
					// width={width}
					// height={height}
					style={{ overflow: "hidden", border: "0" }}
				></iframe>
			</Box>
			<Box>
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
			</Box>
		</Overlay>
	);

	const about = <Overlay></Overlay>;
	// <Button
	// 						id="welcome-button"
	// 						onClick={() => {
	// 							animate(2, 4, -9, "home", 1);
	// 							globalRef.current = "loading";
	// 							setDisplayState("loading");
	// 						}}
	// 						variant="contained"
	// 						size="large"
	// 					>
	// 						Enter
	// 					</Button>

	const contact = <Overlay></Overlay>;
	// 	<Button
	// 	id="welcome-button"
	// 	onClick={() => {
	// 		animate(2, 4, -9, "home", 1);
	// 		globalRef.current = "loading";
	// 		setDisplayState("loading");
	// 	}}
	// 	variant="contained"
	// 	size="large"
	// >
	// 	Enter
	// </Button>

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
