import React from 'react';

export default class ThisDeck extends React.Component {
	render() {
		console.log(this.props.cardsInDeck);
		return <div className="deck"> Creation of decks</div>;
	}
}
