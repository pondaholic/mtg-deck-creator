import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveDeck } from '../actions/create-deck-actions';

import '../component-css/cards-nav.css';

class CardsNav extends React.Component {
	handleSave(value) {
		console.log('trying to post', value);
		let newDeck = JSON.stringify(this.props.cardsInDeck);
		console.log(newDeck);
		// creates string to send to backend as uniqueUrl
		let key =
			Math.random()
				.toString(30)
				.substring(2, 5) +
			Math.random()
				.toString(30)
				.substring(2, 5);
		this.props.dispatch(saveDeck(newDeck, key));
	}

	render() {
		if (this.props.deckUrl) {
			console.log(this.props.deckUrl);
		}
		return (
			<div className="cards-nav">
				<ul className="cards-ul">
					<li
						className="save-deck"
						value="value"
						onClick={value => this.handleSave(value)}
					>
						<Link to="/save">Save</Link>
					</li>
					<li className="deck">
						<Link to="/thisDeck">Deck</Link>
					</li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('state is', state);
	return {
		cardsInDeck: state.deck.cardsInDeck
	};
};

export default connect(mapStateToProps)(CardsNav);
