import {
	FETCH_CARDS_SUCCESS,
	ADD_CARD_TO_DECK,
	SAVE_DECK_SUCCESS
} from './actions';

const initialState = {
	cardList: [],
	error: '',
	showCardList: false,
	cardsInDeck: [],
	uniqueUrl: ''
};

export default (state = initialState, action) => {
	// console.log(action.cards);
	if (action.type === FETCH_CARDS_SUCCESS) {
		return Object.assign({}, state, {
			cardList: action.cards,
			showCardList: true
		});
	}
	if (action.type === FETCH_CARDS_SUCCESS) {
		return (
			Object.assign({}),
			state,
			{
				error: action.error
			}
		);
	}

	if (action.type === ADD_CARD_TO_DECK) {
		// console.log(action.cardId);
		// console.log(state.cardsInDeck);
		return Object.assign({}, state, {
			cardsInDeck: [...state.cardsInDeck, action.cardId]
		});
	}
	if (action.type === SAVE_DECK_SUCCESS) {
		console.log(action.uniqueUrl);
		return Object.assign({}, state, {
			uniqueUrl: action.uniqueUrl
		});
	}
	return state;
};
