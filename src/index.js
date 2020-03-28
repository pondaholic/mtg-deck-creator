import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import App from './app';
import store from './store';

import { Auth0Provider } from './react-auth0-spa';
import history from './utils/history';

import './component-css/index.css';

const onRedirectCallback = appState => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Auth0Provider
				domain={process.env.domain}
				client_id={process.env.clientId}
				redirect_uri={window.location.origin}
				onRedirectCallback={onRedirectCallback}
			>
				<App />
			</Auth0Provider>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
