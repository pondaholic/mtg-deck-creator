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

export const SAVE_DECK_SUCCESS = 'SAVE_DECK_SUCCESS';
export const saveDeckSuccess = uniqueUrl => ({
	type: SAVE_DECK_SUCCESS,
	uniqueUrl
});

export const SHOW_DECK = 'SHOW_DECK';

const BASE_URL = `https://api.magicthegathering.io/v1/cards`;
export const fetchCards = (key, searchTerm) => dispatch => {
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
			console.log(newRes);
			dispatch(fetchCardSuccess(newRes));
		})
		.catch(error => dispatch(fetchCardError(error)));
};

export const saveDeck = newDeck => dispatch => {
	return fetch('http://localhost:8080/api/cards', {
		method: 'POST',
		body: JSON.stringify({
			mtg_cards_id: newDeck,
			unique_url: Math.random()
				.toString(30)
				.substring(2, 5)
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
		.catch(err => dispatch(fetchCardError(err)));
};

//when ""
export const returnSavedDeck = uniqueUrl => dispatch => {
	return fetch(`'http://localhost:8080/api/cards'/${uniqueUrl}`, {
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
			console.log(newRes);
			dispatch(fetchCardSuccess(newRes));
		})
		.catch(error => dispatch(fetchCardError(error)));
};
