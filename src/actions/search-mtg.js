import { MTG_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const START_SEARCH = 'START_SEARCH';
export const startSearch = () => ({
	type: START_SEARCH
});

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

export const fetchCardsFromMtgApi = (key, searchTerm) => dispatch => {
	dispatch(startSearch());
	return fetch(`${MTG_URL}/?${key}=${searchTerm}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => {
			let newRes = res.cards
				.filter(card => card.text)
				.map(card => {
					return {
						name: card.name,
						castingcost: card.manaCost,
						color: card.colors,
						type: card.type,
						id: card.id,
						text: card.text
					};
				});
			if (newRes.length === 0) {
				newRes = 'Your search has yielded no cards. Care to try again?';
				dispatch(fetchCardError(newRes));
			}
			// console.log(newRes);
			else {
				dispatch(fetchCardSuccess(newRes));
			}
		})
		.catch(err => {
			dispatch(fetchCardError(err));
		});
};
