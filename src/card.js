import React from 'react';
import { connect } from 'react-redux';

function createCard(props) {
	//this will pull out all the information and return html for each "card"
	//this will check that cards with matching names are not created twice or that cards with text: "undefined" are not created
	props.cardList.map(card => (
		<li className="card" key={card.id} value={card}>
			<b>{card.name}</b>
			{card.manaCost}
			<i>{card.type}</i>
			{card.text}
			<button value={card.id} onClick={this.handleClick}>
				Add to Deck
			</button>
		</li>
	));
}

function mapStateToProps(state) {
	console.log(state.cards.cardsInDeck);
	// console.log(state);
	return {
		cardList: state.cards.cardList,
		cardsInDeck: state.cards.cardsInDeck
	};
}

const ConnectedCards = connect(mapStateToProps)(createCard);

export default ConnectedCards;
