import { FETCH_CARDS_SUCCESS } from './actions';

const initialState = {
	cardList: {}
};

export default (state = initialState, action) => {
	if (action.type === FETCH_CARDS_SUCCESS) {
		return Object.assign({}, state, {
			cardList: {
				name: action.card.name,
				'casting cost': action.card.manaCost,
				color: action.colors,
				type: action.card.type
			}
		});
	}
	return state;
};
