import { Box } from "@mui/material";

const Overlay = ({ children, height, width }) => {
	// width={width - 10}
	// height={height / 1.1}
	const styling = {
		border: "1px solid red",
		height: height / 1.1,
		width: width - 10,
		textAlign: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		marginTop: "1",
	};

	return <Box sx={styling}>{children}</Box>;
};

export default Overlay;
