import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import deckReducer from './reducers/create-deck-reducers';
import mtgReducer from './reducers/search-mtg-r';
import authReducer from './reducers/auth';
import savedUserDecksReducer from './reducers/myDecks';
import userReducer from './reducers/users';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import thunk from 'redux-thunk';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
	combineReducers({
		auth: authReducer,
		mtg: mtgReducer,
		deck: deckReducer,
		savedUserDecks: savedUserDecksReducer,
		users: userReducer
	}),
	composeEnhancers(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;
