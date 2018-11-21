import { MTG_URL } from '../config';

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
	return fetch(`${MTG_URL}/?${key}=${searchTerm}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(res => {
			if (!res.ok) {
				if (
					res.headers.has('content-type') &&
					res.headers.get('content-type').startsWith('application/json')
				) {
					// console.log(res.json());
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
			// console.log(res);
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
			// console.log(newRes);
			dispatch(fetchCardSuccess(newRes));
		})
		.catch(err => {
			dispatch(fetchCardError(err));
		});
};
