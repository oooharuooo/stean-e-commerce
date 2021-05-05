import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	footer: {
		backgroundColor: "#5f6160",
	},
	white: {
		color: "#fff",
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.footer}>
			<Typography className={classes.white}>Copyright@ Dat V Thong</Typography>
		</Box>
	);
};

export default Footer;
