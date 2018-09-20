import { SubmissionError } from 'redux-form';
import { DATABASE_URL } from './config';

export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const fetchCardSuccess = cards => ({
	type: FETCH_CARDS_SUCCESS,
	cards
});

export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';
export const fetchCardError = error => ({
	type: FETCH_CARDS_ERROR,
	error
});

export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const addCardToDeck = cardId => ({
	type: ADD_CARD_TO_DECK,
	cardId
});

export const REMOVE_CARD_FROM_DECK = 'REMOVE_CARD_FROM_DECK';
export const removeCardFromDeck = cardId => ({
	type: REMOVE_CARD_FROM_DECK,
	cardId
});

export const SAVE_DECK_SUCCESS = 'SAVE_DECK_SUCCESS';
export const saveDeckSuccess = uniqueUrl => ({
	type: SAVE_DECK_SUCCESS,
	uniqueUrl
});

export const SAVE_DECK_ERROR = 'SAVE_DECK_ERROR';
export const saveDeckError = error => ({
	type: SAVE_DECK_ERROR,
	error
});

export const FETCH_SAVED_DECK_SUCCESS = 'FETCH_SAVED_DECK_SUCCESS';
export const fetchSavedDeckSuccess = deck => ({
	type: FETCH_SAVED_DECK_SUCCESS,
	deck
});

const BASE_URL = `https://api.magicthegathering.io/v1/cards`;
export const fetchCardsFromMtgApi = (key, searchTerm) => dispatch => {
	return fetch(`${BASE_URL}/?${key}=${searchTerm}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(res => {
			if (!res.ok) {
				if (
					res.headers.has('content-type') &&
					res.headers.get('content-type').startsWith('application/json')
				) {
					console.log(res.json());
					return res.json().then(err => Promise.reject(err));
				}
				return Promise.reject({
					code: res.status,
					message: res.statusText
				});
			}
			return res.json();
		})
		.then(res => {
			let newRes = res.cards.map(card => {
				return {
					name: card.name,
					castingcost: card.manaCost,
					color: card.colors,
					type: card.type,
					id: card.id,
					text: card.text
				};
			});
			// console.log(newRes);
			dispatch(fetchCardSuccess(newRes));
		})
		.catch(err => {
			const { reason, message, location } = err;
			if (reason === 'ValidationError') {
				return Promise.reject(
					new SubmissionError({
						[location]: message
					})
				);
			}
			return Promise.reject(
				new SubmissionError({
					_error: 'Error submitting message'
				})
			);
		});
};

export const saveDeck = (newDeck, key) => dispatch => {
	return fetch('DATABASE_URL', {
		method: 'POST',
		body: JSON.stringify({
			mtg_cards_id: newDeck,
			unique_url: key
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => {
			if (!res.ok) {
				if (
					res.headers.has('content-type') &&
					res.headers.get('content-type').startsWith('application/json')
				) {
					return res.json().then(err => Promise.reject(err));
				}
				return Promise.reject({
					code: res.status,
					message: res.statusText
				});
			}
			return res.json();
		})
		.then(data => {
			console.log('Something was posted', data);
			dispatch(saveDeckSuccess(data.unique_url));
		})
		.catch(err => {
			console.log(err.message);
			dispatch(saveDeckError(err.message));
		});
};

export const returnSavedDeck = uniqueUrl => dispatch => {
	console.log(uniqueUrl);
	return fetch(`${DATABASE_URL}/${uniqueUrl}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => {
			if (!res.ok) {
				if (
					res.headers.has('content-type') &&
					res.headers.get('content-type').startsWith('application/json')
				) {
					console.log(res.json());
					return res.json().then(err => Promise.reject(err));
				}
				return Promise.reject({
					code: res.status,
					message: res.statusText
				});
			}
			return res.json();
		})
		.then(res => {
			console.log(res);
			console.log(
				Object.assign({}, res, {
					mtg_cards_id: JSON.parse(res.mtg_cards_id)
				})
			);
			let newRes = Object.assign({}, res, {
				mtg_cards_id: JSON.parse(res.mtg_cards_id)
			});
			dispatch(fetchSavedDeckSuccess(newRes.mtg_cards_id));
		})
		.catch(error => dispatch(fetchCardError(error)));
};
