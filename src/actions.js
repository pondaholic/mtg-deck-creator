export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const fetchCardSuccess = cards => ({
	type: FETCH_CARDS_SUCCESS,
	cards
});

export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const addCardToDeck = cardId => ({
	type: ADD_CARD_TO_DECK,
	cardId
});

export const SHOW_DECK = 'SHOW_DECK';
export const showDeck = () => ({
	type: SHOW_DECK
});
