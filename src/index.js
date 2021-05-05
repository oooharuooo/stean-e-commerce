import React from "react";
import ReactDOM from "react-dom";
import { ListGamesProvider } from "./context/product_context";

import App from "./App";

ReactDOM.render(
	<ListGamesProvider>
		<App />
	</ListGamesProvider>,
	document.getElementById("root")
);
