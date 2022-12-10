const Interface = ({ cameraRef }) => {
	// Creates a interface that goes above the 3D canvas.
	// Uses Material Ui for the styling
	return (
		<div className="interface">
			<div className="centered">
				<h1>Maiya Winter</h1>
				<button
					onClick={() => {
						console.log(cameraRef.current.position);
						cameraRef.current.position.x = 5;
						cameraRef.current.position.y = 5;
						cameraRef.current.position.z = 5;
					}}
				>
					Explore
				</button>
			</div>
		</div>
	);
};

export default Interface;
