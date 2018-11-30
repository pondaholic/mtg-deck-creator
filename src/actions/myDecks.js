import { REACT_APP_API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS';
export const getDecksSuccess = decks => ({
	type: GET_DECKS_SUCCESS,
	decks
});

export const GET_DECKS_ERROR = 'GET_DECKS_ERROR';
export const getDecksError = error => ({
	type: GET_DECKS_ERROR,
	error
});

export const GET_DECK_CARDS_SUCCESS = 'GET_DECK_CARDS_SUCCESS';
export const getDeckCardsSuccess = cardsInDeck => ({
	type: GET_DECK_CARDS_SUCCESS,
	cardsInDeck
});

export const GET_DECK_CARDS_ERROR = 'GET_DECK_CARDS_ERROR';
export const getDeckCardsError = error => ({
	type: GET_DECK_CARDS_ERROR,
	error
});

export const getMyDecks = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;

	fetch(`${REACT_APP_API_BASE_URL}/api/decks`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(results => {
			// console.log(results);
			dispatch(getDecksSuccess(results));
		})
		.catch(err => getDecksError(err));
};

export const getDeckCards = deckId => (dispatch, getState) => {
	// console.log('sending fetch request');
	const authToken = getState().auth.authToken;

	fetch(`${REACT_APP_API_BASE_URL}/api/decks/cards`, {
		method: 'GET',
		// body: JSON.stringify(deckId),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(results => {
			// console.log(results[0]);
			let newRes = Object.assign({}, results[0], {
				mtg_cards: JSON.parse(results[0].mtg_cards)
			});
			// console.log('json parse', newRes);
			dispatch(getDeckCardsSuccess(newRes));
		})
		.catch(err => getDeckCardsError(err));
};
