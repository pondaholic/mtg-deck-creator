import React from 'react';
import { connect } from 'react-redux';

import CreateCard from './card';

class ThisDeck extends React.Component {
	render() {
		console.log(this.props.cardsInDeck);
		return (
			<div className="deck">
				<button className="back">Back</button>
				Creation of decks
				<CreateCard cardList={this.props.cardsInDeck} />
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
