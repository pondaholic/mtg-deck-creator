import React from 'react';
import { connect } from 'react-redux';
// import CreateCard from './cards';
import { addCardToDeck, showDeck } from './actions';

export class CardList extends React.Component {
	//listener when clicking button for each card
	handleClick(event) {
		console.log(event.target.value);
		let key = event.target.value;
		console.log(key);
		this.props.dispatch(addCardToDeck(key));
	}

	handleDeck() {
		this.props.dispatch(showDeck());
	}
	//*successfully returns each "card": need to module out to another component
	render() {
		let eachCard = this.props.cardList.map(card => (
			<li className="card" key={card.id} value={card}>
				<b>{card.name}</b>
				{card.manaCost}
				<i>{card.type}</i>
				{card.text}
				<button value={card.id} onClick={event => this.handleClick(event)}>
					Add to Deck
				</button>
			</li>
		));
		return (
			<div className="card-list">
				<a href="deck">
					Deck(
					{this.props.cardsInDeck.length})
				</a>
				<ul>
					Cards:
					{eachCard}
					{/* <CreateCard /> */}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state.cards.cardsInDeck);
	// console.log(state);
	return {
		cardList: state.cards.cardList,
		cardsInDeck: state.cards.cardsInDeck
	};
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
