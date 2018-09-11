import React from 'react';
import { connect } from 'react-redux';

function CardList(props) {
	// console.log(props.cardList);
	// console.log(typeof props.cardList);
	let newCard = props.cardList.map(card => (
		<li key={card.id} value={card}>
			<b>{card.name}</b>
			{card.manaCost}
			<i>{card.type}</i>
			{card.text}
		</li>
	));
	return (
		<div className="card-list">
			Cards:
			<ul>{newCard}</ul>
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
