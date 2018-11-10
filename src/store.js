import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducers';
import mtgReducer from './reducers/search-mtg-r';
import thunk from 'redux-thunk';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
export default createStore(
	combineReducers({
		mtg: mtgReducer,
		form: formReducer,
		cards: reducer
	}),
	composeEnhancers(applyMiddleware(thunk))
);
