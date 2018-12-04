import { CREATE_USER_REQUEST, CREATE_USER_ERROR } from '../actions/users';

const initialState = {
	loading: false,
	error: false
};

export default function userReducer(state = initialState, action) {
	if (action.type === CREATE_USER_REQUEST) {
		Object.assign({}, state, {
			loading: true,
			error: false
		});
	}
	if (action.type === CREATE_USER_ERROR) {
		Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	return state;
}
