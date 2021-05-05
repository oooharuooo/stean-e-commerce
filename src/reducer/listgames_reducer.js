import {
	GET_LISTGAMES_BEGIN,
	GET_LISTGAMES_SUCCESS,
	GET_LISTGAMES_ERROR,
} from "../actions";

const listgames_reducer = (state, action) => {
	//Featured listGames in Home Page
	switch (action.type) {
		case GET_LISTGAMES_BEGIN:
			return { ...state, listGames_loading: true };
		case GET_LISTGAMES_SUCCESS:
			return {
				...state,
				listGames_loading: false,
				listGames: action.payload,
			};
		case GET_LISTGAMES_ERROR:
			return { ...state, listGames_loading: false, listGames_error: true };
		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default listgames_reducer;
