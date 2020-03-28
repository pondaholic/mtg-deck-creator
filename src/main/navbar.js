import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

import '../component-css/navbar.css';

const Navbar = () => {
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
		</div>
	);
};

export default Navbar;
