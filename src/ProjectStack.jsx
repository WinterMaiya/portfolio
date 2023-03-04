import { Box, Button, Divider, Typography } from "@mui/material";

const ProjectStack = ({
	title = "Forgot a title",
	website = "#",
	github = "#",
	description = "Forgot a description",
	techStack = "",
}) => {
	return (
		<Box sx={{ margin: 4 }}>
			<Typography
				variant="h3"
				sx={{ color: "white", justifyContent: "center" }}
			>
				{title}
			</Typography>
			<Box sx={{ margin: 1 }}>
				{website !== "none" && (
					<span>
						<Button
							href={website}
							color={website === "#" ? "error" : "secondary"}
							variant="contained"
							sx={{ padding: 0.5 }}
							target="_blank"
						>
							{website === "#" ? "Offline" : "Website"}
						</Button>
						<span> | </span>
					</span>
				)}

				<Button
					href={github}
					color={"secondary"}
					variant="contained"
					sx={{ padding: 0.5 }}
					target="_blank"
					// disabled={website === "#" ? true : false}
				>
					Github
				</Button>
			</Box>
			<Divider sx={{ margin: 1 }} />
			<div>
				<Typography
					variant="body1"
					sx={{ color: "white", justifyContent: "center" }}
				>
					{description}
				</Typography>
				<div>
					<Typography
						variant="overline"
						sx={{ color: "white", justifyContent: "center" }}
					>
						{techStack}
					</Typography>
				</div>
			</div>
		</Box>
	);
};

export default ProjectStack;
