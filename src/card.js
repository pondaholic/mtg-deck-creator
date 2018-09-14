import React from 'react';

export default function CreateCard(props) {
	//this will pull out all the information and return html for each "card"
	//this will check that cards with matching names are not created twice or that cards with text: "undefined" are not created
	const cards = props.cardList.map(card => (
		<li className="card" key={card.id} value={card}>
			<b>{card.name}</b>
			{card.manaCost}
			<i>{card.type}</i>
			{card.text}
			{card.imageUrl}
			<button value={card.id} onClick={event => props.handleClick(event)}>
				Add to Deck
			</button>
		</li>
	));
	return (
		<div>
			<ul>{cards}</ul>
		</div>
	);
}
