import { Auth0Provider } from './react-auth0-spa';
import { BrowserRouter as Router } from 'react-router-dom';
// import { domain, clientId } from './config';
import App from './app';
import history from './utils/history';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './component-css/index.css';

const onRedirectCallback = appState => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	<Auth0Provider
		domain={process.env.REACT_APP_DOMAIN}
		client_id={process.env.REACT_APP_CLIENT}
		redirect_uri={window.location.origin}
		onRedirectCallback={onRedirectCallback}
	>
		<Router>
			<App />
		</Router>
	</Auth0Provider>,
	document.getElementById('root')
);
registerServiceWorker();
