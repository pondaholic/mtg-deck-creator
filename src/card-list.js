import React from 'react';
import { connect } from 'react-redux';

function CardList(props) {
	console.log(props.cardList.cardList);
	console.log(typeof props.cardList.cardList);
	let newCardName = props.cardList.cardList.map(card => card.name);
	return (
		<div className="card-list">
			Cards:
			{newCardName}
		</div>
	);
}

function mapStateToProps(state) {
	// console.log(state);
	// console.log(state.cardList);
	return { cardList: state.cardList };
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
