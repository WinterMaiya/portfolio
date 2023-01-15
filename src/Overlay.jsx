import { Box, Container, Stack } from "@mui/material";
import { breakpoints } from "@mui/system";

const Overlay = ({ children, height, width }) => {
	// width={width - 10}
	// height={height / 1.1}

	// Allows centering of display elements
	const styling = {
		display: "flex",
		// border: "1px solid red",
		height: height,
		width: width,
		textAlign: "center",
		backgroundColor: "rgba(0, 0, 0, 0.85)",
		alignItems: "center",
		justifyContent: "center",
		shadow: "1",
	};

	return (
		<Box sx={styling}>
			<Container disableGutters>
				{" "}
				<Box>
					<Stack spacing={2} overflow="auto" maxHeight={height}>
						{children}
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};

export default Overlay;
