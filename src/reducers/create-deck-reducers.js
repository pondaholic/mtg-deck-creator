import {
	ADD_CARD_TO_DECK,
	REMOVE_CARD_FROM_DECK,
	SAVE_DECK_SUCCESS,
	FETCH_SAVED_DECK_SUCCESS,
	SAVE_DECK_ERROR
} from '../actions/create-deck-actions';

const initialState = {
	cardList: [],
	error: '',
	cardsInDeck: [],
	returnedDeck: [],
	uniqueUrl: ''
};

export default function deckReducer(state = initialState, action) {
	// console.log(action);
	if (action.type === SAVE_DECK_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	if (action.type === ADD_CARD_TO_DECK) {
		let matchCard = state.cardList.filter(card => card.id === action.cardId);

		console.log(state.cardList, action.cardId);
		console.log(matchCard);
		return Object.assign({}, state, {
			cardsInDeck: [...state.cardsInDeck, matchCard[0]],
			error: ''
		});
	}
	if (action.type === REMOVE_CARD_FROM_DECK) {
		return Object.assign({}, state, {
			cardsInDeck: state.cardsInDeck.filter(card => card.id !== action.cardId)
		});
	}
	if (action.type === SAVE_DECK_SUCCESS) {
		console.log(action.uniqueUrl);
		return Object.assign({}, state, {
			uniqueUrl: action.uniqueUrl
		});
	}
	if (action.type === FETCH_SAVED_DECK_SUCCESS) {
		return Object.assign({}, state, {
			returnedDeck: action.deck
		});
	}
	return state;
}
