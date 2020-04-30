import React from 'react';
import { connect } from 'react-redux';

import CreateCard from '../components/card';
import CardNav from './cards-nav';

import { removeCardFromDeck } from '../actions/create-deck-actions';
import '../component-css/deck.css';

class ThisDeck extends React.Component {
	handleRemove(e) {
		console.log('A card has been removed from deck.');
		let key = e.target.value;
		this.props.dispatch(removeCardFromDeck(key));
	}
	render() {
		// console.log(this.props.cardsInDeck);
		let cards = this.props.cardsInDeck;
		return (
			<div className="deck">
				<CardNav />
				<div className="page-title">
					<h3>Your Current Deck:</h3>
				</div>
				<div className="deck-cards">
					{cards
						? cards.map((card) => {
								return (
									<div className="cards" key={card.id}>
										<CreateCard cards={card} key={card.id} />
										<button
											value={card.id}
											onClick={(e) => this.handleRemove(e)}
										>
											Remove
										</button>
									</div>
								);
						  })
						: ''}{' '}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cardsInDeck: state.deck.cardsInDeck,
		loggedIn: state.auth.currentUser,
	};
};

export default connect(mapStateToProps)(ThisDeck);
