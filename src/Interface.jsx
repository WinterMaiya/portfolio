import {
	Box,
	Button,
	Divider,
	Grid,
	Link,
	Typography,
	Zoom,
} from "@mui/material";
import { Stack } from "@mui/system";
import gsap from "gsap";
import { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Overlay from "./Overlay";
import ProjectStack from "./ProjectStack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
const Interface = ({ cameraRef, globalRef }) => {
	// Creates a interface that goes above the 3D canvas.
	// Uses Material Ui for the styling

	// "loading", "welcome", "home", "projects", "art", "about", "contact"
	// loading states are: loading, projects-loading, art-loading, about-loading, contact-loading
	const [displayState, setDisplayState] = useState("welcome");

	const [, setPointerEvents] = useState("auto");

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
	}, [globalRef, displayState]);

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

	const BackButton = () => {
		// Button to go back to the home page
		return (
			<Box>
				<Button
					id="back-button"
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
		);
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
				default:
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
		<Overlay
			height={height}
			width={width}
			displayState={displayState}
			id="projects"
		>
			<Typography variant="h1" sx={{ color: "white" }}>
				Projects
			</Typography>
			<Divider variant="button" color="white" />
			<ProjectStack
				title="Maiya Winter's Portfolio"
				website=""
				github="#"
				description="My personal website made with React and Three.js"
				techStack="Tech Stack: React, Node.js, Three.js, ReactThreeFiber, Material UI"
			/>
			<Divider variant="button" color="white" />
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
			<Divider variant="button" color="white" />
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
			<BackButton />
		</Overlay>
	);

	const art = (
		<Overlay height={height} width={width} displayState={displayState} id="art">
			<Box>
				<iframe
					title="Maiya's Instagram Widget"
					src="//lightwidget.com/widgets/708943fc60f05b5596ebdab58aa89022.html"
					width={width / 2}
					// height={height}
					style={{ overflow: "hidden", border: "0" }}
				></iframe>
			</Box>
			<Divider variant="button" color="white" />
			<BackButton />
		</Overlay>
	);

	const about = (
		<Overlay
			height={height}
			width={width}
			displayState={displayState}
			id="about"
		>
			<Typography variant="h1" sx={{ color: "white" }}>
				Maiya Winter
			</Typography>
			<Stack
				direction={{ sm: "column", md: "row" }}
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}
				sx={{ alignItems: "center", justifyContent: "center" }}
			>
				<Box>
					<img src="/headshot.jpg" width={300} />
				</Box>
				<Box>
					<Box>
						<Link href="https://github.com/WinterMaiya" target="_blank">
							<GitHubIcon color="secondary" fontSize="large" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/maiya-winter/"
							target="_blank"
						>
							<LinkedInIcon color="primary" fontSize="large" />
						</Link>
						<Link href="https://www.instagram.com/maiyawinter/" target="_blank">
							<InstagramIcon color="warning" fontSize="large" />
						</Link>
						<Link href="mailto:wintermaiya@gmail.com" target="_blank">
							<EmailIcon color="success" fontSize="large" />
						</Link>
					</Box>
					<Stack spacing={2}>
						<Typography variant="h6" sx={{ color: "white" }}>
							Software Engineer | Artist | Designer
						</Typography>
						<Divider variant="button" color="white" />
						<Typography sx={{ color: "white" }}>Tech Stack:</Typography>
						<Typography variant="overline" sx={{ color: "white" }}>
							JavaScript | Python | HTML | CSS | SQL
						</Typography>
						<Typography variant="overline" sx={{ color: "white" }}>
							React.js | Next.js | Three.js | Express.js | MySQL | PostgreSQL
						</Typography>
					</Stack>
				</Box>
			</Stack>
			<Typography variant="body1" sx={{ color: "white" }}>
				Hi! My name is Maiya Winter. As a recent graduate of the Springboard
				coding bootcamp and a skilled full stack engineer with experience in
				React.js, Next.js, Python, PostgreSQL, and MySQL, I bring a strong
				foundation in web development technologies and a unique perspective to
				frontend development thanks to my digital art background.
			</Typography>
			<Typography variant="body1" sx={{ color: "white" }}>
				I have a passion for visual design and have honed my skills in a variety
				of mediums, including digital art and graphic design. In my previous
				role, I utilized my skills in React.js and Next.js to build intuitive
				and responsive user interfaces, and worked with Python, PostgreSQL, and
				MySQL to build a reliable and efficient backend. I am a proactive and
				detail-oriented team player who enjoys working with others to find
				creative solutions to complex problems. I am excited to bring my skills
				and experience to a new challenge as a full stack engineer.
			</Typography>
			<Typography variant="body1" sx={{ color: "white" }}>
				Additionally, I have done so much research on coding (both inside and
				outside of the Springboard Software Engineering Bootcamp) for my own
				self-improvement. I have recently completed a software project dubbed
				"Previews+"; A streaming service that lets you see your favorite movies
				and shows previews. This project utilized React.js, Next.js, Prisma, and
				External API's. I have also completed a project called "The Nom Nom
				Book"; a community cookbook that utilizes Python, Flask, PostgreSQL, and
				an external Spoonacular API.
			</Typography>
			<Divider variant="button" color="white" />
			<BackButton />
		</Overlay>
	);

	const contact = (
		<Overlay
			height={height}
			width={width}
			displayState={displayState}
			id="contact"
		>
			<Typography variant="body1" sx={{ color: "white" }}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam labore
				culpa blanditiis voluptatum voluptates nostrum libero modi ipsum iusto.
				Veritatis quibusdam repellat ad quam! Asperiores dolorum quaerat quia
				excepturi praesentium!
			</Typography>
			<BackButton />
		</Overlay>
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
