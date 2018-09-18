import {
	FETCH_CARDS_SUCCESS,
	FETCH_CARDS_ERROR,
	ADD_CARD_TO_DECK,
	SAVE_DECK_SUCCESS
} from './actions';

const initialState = {
	cardList: [],
	error: '',
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
	if (action.type === FETCH_CARDS_ERROR) {
		return (
			Object.assign({}),
			state,
			{
				error: action.error
			}
		);
	}
	if (action.type === ADD_CARD_TO_DECK) {
		let matchCard = state.cardList.filter(card => card.id === action.cardId);
		// console.log(matchCard);
		return Object.assign({}, state, {
			cardsInDeck: [...state.cardsInDeck, matchCard[0]]
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
