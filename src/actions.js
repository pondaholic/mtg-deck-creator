// import searchMagic from './api-requests/fetch';

export const FETCH_CARDS_FROM_API = 'FETCH_CARDS_FROM_API';
export const fethCardsFromApi = () => ({
	type: FETCH_CARDS_FROM_API
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

export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const addCardToDeck = cardId => ({
	type: ADD_CARD_TO_DECK,
	cardId
});

export const SHOW_DECK = 'SHOW_DECK';
export const showDeck = () => ({
	type: SHOW_DECK
});

export const SAVE_DECK = 'SAVE_DECK';
export const saveDeck = uniqueUrl => ({
	type: SAVE_DECK,
	uniqueUrl
});

export const searchCards = values => dispatch => {
	dispatch(fethCardsFromApi());
	const BASE_URL = 'https://api.magicthegathering.io/v1/cards';
	let searchTerm;
	let key;
	for (key in values) {
		if (values[key]) {
			searchTerm = encodeURIComponent(`%${values[key]}%`);
		}
	}

	fetch(`${BASE_URL}/?${key}=${searchTerm}`, {
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
					text: card.text,
					image: card.imageUrl
				};
			});
			dispatch(fetchCardSuccess(newRes));
			console.log(newRes);
		})
		.catch(error => fetchCardError(error));
};
