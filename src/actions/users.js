import { REACT_APP_API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const createUserReq = () => ({
	type: CREATE_USER_REQUEST
});

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const createUserError = error => ({
	type: CREATE_USER_ERROR,
	error
});

export const createNewUser = userInfo => dispatch => {
	dispatch(createUserReq);
	return fetch(`${REACT_APP_API_BASE_URL}/api/users`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(userInfo)
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.catch(err => dispatch(createUserError(err)));
};
