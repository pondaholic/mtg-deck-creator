import { GET_DECKS_SUCCESS, GET_DECKS_ERROR } from '../actions/myDecks';

const initialState = {
	myDecks: [],
	error: false
};

export default function savedUserDecksReducer(state = initialState, action) {
	if (action.type === GET_DECKS_SUCCESS) {
		return Object.assign({}, state, {
			myDecks: [action.decks, ...state.myDecks],
			error: false
		});
	}
	if (action.type === GET_DECKS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}
