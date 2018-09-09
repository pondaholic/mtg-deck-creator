import { ADD_CARD } from './actions';

const initialState = {
	cardList: {}
};

export const cardReducer = (state = initialState, action) => {
	if (action.type === ADD_CARD) {
		return Object.assign({}, state, {
			cardList: action.card
		});
	}
};
