// import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import React, { useState, userEffect, userContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// export default () => Component => {
const DEFAULT_REDIRECT_CALLBACK = () => window.history.replaceState( {}, document.title, window.location.pathname );

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext( Auth0Context );
export const Auth0Provider = ( {
	children,
	onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
	...initOptions
} ) => {
	const [isAuthenticated, setIsAuthenticated] = useState();
	const [user, setUser] = setState();
	const [auth0Client, setQuth0] = useState( true );
	const [pupupOpen, setPopupOpen] = useState( false );

	useEffect( () => {
		const initAuth0 = async () => {
			const auth0FromHook = await createAuth0Client( initOptions );
			setAuth0( auth0FromHook );

			if ( window.location.search.includes( "code=" ) ) {
				const { appState } = await auth0FromHook.handleRedirectCallback();
				onRedirectCallback( appState );
			}

			const isAuthenitcated = await auth0FromHook.isAuthenticated();

			setIsAuthenticated( isAuthenitcated );

			if ( isAuthenticated ) {
				const user = await auth0FromHook.getUser();
				setUser( user );
			}
			setLoading( false );
		}
		initAuth0();
	}, [] );

	const loginWithPopup = async ( params = {} ) => {
		setPopupOpen( true );
		try {
			await auth0Client.loginWithPopup( params );
		} catch ( err ) {
			console.err( err );
		} finally {
			setPopupOpen( false );
		}
		const user = await auth0Client.getUser();
		setUser( user );
		setIsAuthenticated( true );
	}
	const handleRedirectCallback = async () => {
		setLoading( true );
		await auth0Client.handleRedirectCallback();
		const user = await auth0Client.getUser();
		setLoading( false );
		setIsAuthenticated( true );
		setUser( user );
	}
	return (
		<Auth0Context.Provider
			value={{
				isAuthenticated,
				user,
				loading,
				popupOpen,
				loginWithPopup,
				handleRedirectCallback,
				getIdTokenClaims: ( ...p ) => auth0Client.getIdTokenClaims( ...p ),
				loginWithRedirect: ( ...p ) => auth0Client.loginWithRedirect( ...p ),
				getTokenSilently: ( ...p ) => auth0Client.getTokenSilently( ...p ),
				getTokenWithPopup: ( ...p ) => auth0Client.getTokenWithPopup( ...p ),
				logout: ( ...p ) => auth0Client.logout( ...p )
			}}>
			{children}
		</Auth0Context.Provider>
	)
}

	// function RequiresLogin(props) {
	// 	const { authenticating, loggedIn, error, ...passThroughProps } = props;
	// 	if (authenticating) {
	// 		return <div>Logging in...</div>;
	// 	} else if (!loggedIn || error) {
	// 		return <Redirect to="/save" />;
	// 	}

	// 	return <Component {...passThroughProps} />;
	// }

	// const displayName = Component.displayName || Component.name || 'Component';
	// RequiresLogin.displayName = `RequiresLogin(${displayName})`;

	// const mapStateToProps = (state, props) => ({
	// 	authenticating: state.auth.loading,
	// 	loggedIn: state.auth.currentUser !== null,
	// 	error: state.auth.error
	// });

	// return connect(mapStateToProps)(RequiresLogin);
// };
