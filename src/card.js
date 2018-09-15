import React from 'react';
import './component-css/card.css';

export default function CreateCard(props) {
	//this will pull out all the information and return html for each "card"
	//this will check that cards with matching names are not created twice or that cards with text: "undefined" are not created

	// const mana = props.cardList.card.manaCost.map(mana => <p>mana</p>);
	const cards = props.cardList.map(card => (
		<div className="wrap" key={card.id} value={card}>
			<div className="card">
				<h3>{card.name}</h3>
				{card.castingcost}
				<br />
				<i>{card.type}</i>
				<p>{card.text}</p>
			</div>
			<button value={card.id} onClick={event => props.handleClick(event)}>
				Add to Deck
			</button>
		</div>
	));
	return <div className="main">{cards}</div>;
}
