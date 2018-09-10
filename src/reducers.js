import { FETCH_CARDS_SUCCESS } from './actions';

const initialState = {
	cardList: []
};

export default (state = initialState, action) => {
	console.log(action.cards);
	if (action.type === FETCH_CARDS_SUCCESS) {
		return Object.assign({}, state, {
			cardList: action.cards
		});
	}
	return state;
};
