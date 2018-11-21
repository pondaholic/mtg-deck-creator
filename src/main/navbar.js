import React from 'react';
import { Link } from 'react-router-dom';

import '../component-css/navbar.css';

export default function Navbar() {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/deck">Build New Deck</Link>
				</li>
				<li>
					<Link to="/rules">Rules</Link>
				</li>
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
				<li>
					<Link to="/myDecks">My Decks</Link>
				</li>
			</ul>
		</div>
	);
}
