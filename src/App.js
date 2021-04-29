import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { HomePage } from "./Pages";

import { CssBaseline, Container } from "@material-ui/core/";

import "./App.css";

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</Container>
		</React.Fragment>
	);
}

export default App;
