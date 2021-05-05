import React from "react";
import { CircularProgress, Grid } from "@material-ui/core/";

const Loading = () => {
	return (
		<Grid container item alignItems="center" justify="center">
			<CircularProgress color="secondary" />
		</Grid>
	);
};

export default Loading;
