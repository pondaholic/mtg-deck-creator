import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(
	combineReducers({
		form: formReducer,
		cardList: reducer,
		middleware: applyMiddleware(thunk)
	})
);
