import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, makeStyles, Typography, Button } from "@material-ui/core/";

const useStyles = makeStyles({
	errorContainer: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "white",
	},
	button: {
		backgroundColor: "white",
	},
});

const Error = () => {
	const classes = useStyles();

	return (
		<Grid container item alignItems="center" justify="center">
			<Box className={classes.errorContainer}>
				<Typography variant="h5" component="p" align="center" color="error">
					Whoops! <br />
					Something went wrong
				</Typography>
				<Button variant="contained" color="secondary">
					<Link to="/">Home</Link>
				</Button>
			</Box>
		</Grid>
	);
};

export default Error;
