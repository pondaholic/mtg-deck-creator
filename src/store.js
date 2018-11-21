import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import deckReducer from './reducers/create-deck-reducers';
import mtgReducer from './reducers/search-mtg-r';
import thunk from 'redux-thunk';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
	combineReducers({
		mtg: mtgReducer,
		deck: deckReducer
	}),
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
