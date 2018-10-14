import React from 'react';
import ReactDOM from 'react-dom';
import './component-css/index.css';
import CardSearch from './main/card-search';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<CardSearch />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
