import React from 'react';
import { connect } from 'react-redux';

import CreateCard from './card';
import CardNav from './cards-nav';

import { removeCardFromDeck } from '../actions/create-deck-actions';

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
				<button className="back">Back</button>
				Creation of decks
				{cards
					? cards.map(card => {
							return (
								<div className="cards" key={card.id}>
									<CreateCard cards={card} key={card.id} />
									<button value={card.id} onClick={e => this.handleRemove(e)}>
										Remove
									</button>
								</div>
							);
					  })
					: ''}{' '}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardsInDeck: state.deck.cardsInDeck
	};
};

export default connect(mapStateToProps)(ThisDeck);
