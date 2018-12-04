import { REACT_APP_API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS';
export const getDecksSuccess = decksTitles => ({
	type: GET_DECKS_SUCCESS,
	decksTitles
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

export const getMyDecksTitles = () => (dispatch, getState) => {
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
			let eachDeck = results.map(deck => ({
				deckName: deck.deck_name,
				cards: JSON.parse(deck.mtg_cards)
			}));
			dispatch(getDecksSuccess(eachDeck));
		})
		.catch(err => getDecksError(err));
};
