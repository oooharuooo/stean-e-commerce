import React from "react";
import { Box, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	footer: {
		backgroundColor: "#5f6160",
		width: "100%",
	},
	footerText: {
		color: "#fff",
		textAlign: "center",
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container item xs={12} justify="center" alignItems="flex-end">
			<Box component="div" className={classes.footer}>
				<Typography className={classes.footerText}>Copyright@ STEAN</Typography>
			</Box>
		</Grid>
	);
};

export default Footer;
