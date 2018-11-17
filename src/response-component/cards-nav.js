import React from 'react';
import { Link } from 'react-router-dom';

import '../component-css/cards-nav.css';

export default function CardsNav() {
	return (
		<div className="cards-nav">
			<ul className="cards-ul">
				<li>
					<Link to="/save">Save</Link>
				</li>
				<li>
					<Link to="/thisDeck">Deck</Link>
				</li>
			</ul>
		</div>
	);
}
