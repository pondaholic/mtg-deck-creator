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

export const getMyDecks = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	// console.log(getState());
	// const user = getState().auth.currentUser.username;

	fetch(`${REACT_APP_API_BASE_URL}/api/cards`, {
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