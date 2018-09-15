import {
	FETCH_CARDS_SUCCESS,
	ADD_CARD_TO_DECK,
	SHOW_DECK,
	SAVE_DECK
} from './actions';

const initialState = {
	cardList: [],
	error: '',
	showCardList: false,
	cardsInDeck: [],
	showDeck: false,
	saveDeck: false,
	uniqueUrl: ''
};

export default (state = initialState, action) => {
	console.log(action.cards);
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
	if (action.type === SHOW_DECK) {
		return Object.assign({}, state, {
			showDeck: true,
			showCardList: false
		});
	}
	if (action.type === SAVE_DECK) {
		console.log(action.uniqueUrl);
		return Object.assign({}, state, {
			saveDeck: true,
			uniqueUrl: action.uniqueUrl
		});
	}
	return state;
};
