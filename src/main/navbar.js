import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper'
import { Link } from 'react-router-dom';

import '../component-css/navbar.css';

export default function Navbar () {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/search">Build New Deck</Link>
				</li>
				<li>
					<Link to="/rules">Rules</Link>
				</li>
				{/* <li>
					<Link to="/faq">FAQ</Link>
				</li> */}
				<li>
					<Link to="/myDecks">My Decks</Link>
				</li>
			</ul>
			{!isAuthenticated && ( <button onClick={() => loginWithRedirect( {} )}>Log in</button> )}
			{isAuthenticated && <button onClick={() => logout()}>Log out</button>}
		</div>
	);
}
