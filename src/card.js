import React from 'react';
import './component-css/card.css';

export default function CreateCard(props) {
	//creates an array of images to be randomized when cards are created.
	const creatureImage = [
		require('./card-images/Dante-and-Virgil.jpg'),
		require('./card-images/Saturn.jpg'),
		require('./card-images/medusa.jpg'),
		require('./card-images/titania.jpg'),
		require('./card-images/firebird.jpg')
	];
	//creates each instance of a card if the card has description text to prevent partial-cards from being created.
	const cards = props.cardList.map(card => {
		if (card.text) {
			return (
				<div className="wrap" key={card.id} value={card}>
					<div className={`card ${card.color}`}>
						<h3>{card.name}</h3>
						{card.castingcost}
						<img
							src={
								creatureImage[Math.floor(creatureImage.length * Math.random())]
							}
							alt="placeholder paintings for cards"
						/>
						<br />
						<i>{card.type}</i>
						<p>{card.text}</p>
					</div>
					<button value={card} onClick={event => props.handleClick(event)}>
						Add to Deck
					</button>
				</div>
			);
		}
	});
	return (
		<div className="cardList-returned">
			<h3>Cards:</h3>
			{cards}
		</div>
	);
}
