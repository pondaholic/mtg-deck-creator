import React from 'react';
import { connect } from 'react-redux';

function CardList(props) {
	return (
		<div className="card-list">
			Cards:
			<ul>{props.cards}</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return { cardList: state.cards };
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
