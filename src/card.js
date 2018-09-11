import React from 'react';
import { connect } from 'react-redux';

function EachCard(props) {
	let newCard = props.cardList.map(card => (
		<li key={card.id} value={card}>
			<b>{card.name}</b>
			{card.manaCost}
			<i>{card.type}</i>
			{card.text}
		</li>
	));
}
