import {
	GET_DECKS_SUCCESS,
	GET_DECKS_ERROR,
	GET_DECK_CARDS_ERROR,
	GET_DECK_CARDS_SUCCESS
} from '../actions/myDecks';

const initialState = {
	myDecksTitles: [],
	error: false,
	cardsInMyDeck: []
};

export default function savedUserDecksReducer(state = initialState, action) {
	if (action.type === GET_DECKS_SUCCESS) {
		// console.log('decks', action.decksTitles);
		return Object.assign({}, state, {
			myDecksTitles: action.decksTitles,
			error: false
		});
	}
	if (action.type === GET_DECKS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	if (action.type === GET_DECK_CARDS_SUCCESS) {
		// console.log(action.cardsInDeck);
		return Object.assign({}, state, {
			cardsInMyDeck: [action.cardsInDeck],
			error: false
		});
	}
	if (action.type === GET_DECK_CARDS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}
