import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { HomePage } from "./Pages";

import { CssBaseline, Container, Grid } from "@material-ui/core/";
// eslint-disable-next-line no-unused-vars
import { sizing } from "@material-ui/system";

// import {
// 	Box,
// 	Typography,
// 	Card,
// 	CardMedia,
// 	CardActionArea,
// 	CardActions,
// 	CardContent,
// } from "@material-ui/core/";

import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Router>
				<CssBaseline />
				<Container maxWidth="lg">
					<Grid container style={{ height: "100vh" }}>
						<Navbar />
						<Switch>
							<Route exact path="/">
								<HomePage />
							</Route>
						</Switch>
						<Footer />
					</Grid>
				</Container>
			</Router>
		</React.Fragment>
	);
}

export default App;
