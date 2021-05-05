import React from "react";
import { useListGamesContext } from "../context/product_context";
import { Loading, Error, ListGame } from "../components/index";

const HomePage = () => {
	const { listGames_loading, listGames_error } = useListGamesContext();

	return <>{listGames_loading ? <Loading /> : <ListGame />}</>;
};

export default HomePage;
