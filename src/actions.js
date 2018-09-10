export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const fetchCardSuccess = card => ({
	type: FETCH_CARDS_SUCCESS,
	card
});

export const searchCharacters = name => dispatch => {
	dispatch(searchCharactersRequest());
	search(name)
		.then(characters => dispatch(searchCharactersSuccess(characters)))
		.catch(error => dispatch(searchCharactersError(error)));
};

export const fetchCards = () => dispatch => {
	fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`, {
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
		.then(cardList => {
			dispatch(fetchCardSuccess(cardList));
		});
};
