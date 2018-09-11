import React from 'react';
import { connect } from 'react-redux';
// import EachCard from './card';

function CardList(props) {
	console.log(props.cardList);
	// console.log(EachCard(props.cardList));

	//*successfully returns each "card": need to module out to another component
	let eachCard = props.cardList.map(card => (
		<li className="card" key={card.id} value={card}>
			<b>{card.name}</b>
			{card.manaCost}
			<i>{card.type}</i>
			{card.text}
			<button>Add to Deck</button>
		</li>
	));
	return (
		<div className="card-list">
			Cards:
			<ul>{eachCard}</ul>
		</div>
	);
}

function mapStateToProps(state) {
	// console.log(state.cards.cardList);
	// console.log(state);
	return { cardList: state.cards.cardList };
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
