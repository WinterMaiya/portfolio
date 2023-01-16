import { Box, Container, Stack, Zoom } from "@mui/material";

const Overlay = ({ children, height, width, displayState, id }) => {
	// width={width - 10}
	// height={height / 1.1}

	// Allows centering of display elements
	const styling = {
		display: "flex",
		// border: "1px solid red",
		height: height,
		width: width,
		textAlign: "center",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		alignItems: "center",
		justifyContent: "center",
		shadow: "1",
	};

	return (
		<Box sx={styling}>
			<Container disableGutters sx={{ margin: 1 }}>
				<Zoom in={displayState === id}>
					<Box>
						<Stack spacing={2} overflow="auto" maxHeight={height / 1.01}>
							{children}
						</Stack>
					</Box>
				</Zoom>
			</Container>
		</Box>
	);
};

export default Overlay;
