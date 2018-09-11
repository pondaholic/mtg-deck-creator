import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(
	combineReducers({
		form: formReducer,
		cards: reducer,
		middleware: applyMiddleware(thunk)
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
