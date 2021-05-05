import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducer/listgames_reducer";
import {
	GET_LISTGAMES_BEGIN,
	GET_LISTGAMES_SUCCESS,
	GET_LISTGAMES_ERROR,
} from "../actions";

const ListGamesContext = React.createContext();

const url = `https://api.rawg.io/api/games?key=`;
const sort = `&metacritic=70&page_size=12`;
const apiKey = `6a522a36e82046969ab7f5ef35c3d7f2`;

const initialState = {
	listGames_loading: false,
	listGames_error: false,
	listGames: [],
};

export const ListGamesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Fetch list games data
	const fetchListGamesData = async () => {
		dispatch({ type: GET_LISTGAMES_BEGIN });
		// passing data to reducer if successfully loaded
		try {
			const {
				data: { results },
			} = await axios.get(`${url}${apiKey}${sort}`);
			dispatch({ type: GET_LISTGAMES_SUCCESS, payload: results });
		} catch (err) {
			dispatch({ type: GET_LISTGAMES_ERROR });
		}
	};
	useEffect(() => fetchListGamesData(), []);

	return (
		<ListGamesContext.Provider value={{ ...state }}>
			{children}
		</ListGamesContext.Provider>
	);
};

// Import to use Product Context
export const useListGamesContext = () => {
	return useContext(ListGamesContext);
};
