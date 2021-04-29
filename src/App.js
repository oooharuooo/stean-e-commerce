import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { HomePage } from "./Pages";

import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
