import React from 'react';
import '../component-css/card.css';

export default function CreateCard(props) {
	//produceGradient(colors) takes the array and returns the gradient style
	//<Card style= {produceGradient(card.color)} />

	//creates an array of images to be randomized when cards are created.
	const creatureImage = [
		require('../card-images/other.jpg'),
		require('../card-images/medusa.jpg'),
		require('../card-images/titania.jpg'),
		require('../card-images/firebird.jpg')
	];
	const manaImages = [
		require('../card-images/mountains.jpg'),
		require('../card-images/island.jpg'),
		require('../card-images/plains.jpg'),
		require('../card-images/forest.JPG'),
		require('../card-images/swamp.jpg')
	];
	let image;
	//creates each instance of a card if the card has description text to prevent partial-cards from being created.
	const cards = props.cardList.filter(card => card.text).map(card => {
		if (card.type.includes('Island')) {
			image = manaImages[1];
		} else if (card.type.includes('Forest')) {
			image = manaImages[3];
		} else if (card.type.includes('Plains')) {
			image = manaImages[2];
		} else if (card.type.includes('Mountain')) {
			image = manaImages[0];
		} else if (card.type.includes('Swamp')) {
			image = manaImages[4];
		} else if (card.name.includes('A' || 'B' || 'C')) {
			image = creatureImage[1];
		} else if (card.name.includes('D' || 'E' || 'F' || 'G' || 'H')) {
			image = creatureImage[2];
		} else if (card.name.includes('I' || 'J' || 'K' || 'L' || 'M')) {
			image = creatureImage[3];
		} else {
			image = creatureImage[0];
		}
		return (
			<div className="wrap" key={card.id} value={card}>
				<div
					className={`card ${card.color ? card.color.join(' ') : 'Colorless'}`}
				>
					<h3>{card.name}</h3>
					{card.castingcost}
					<img src={image} alt="placeholder paintings for cards" />
					<br />
					<i>{card.type}</i>
					<p>{card.text}</p>
				</div>
				<button value={card.id} onClick={event => props.handleClick(event)}>
					Add to Deck
				</button>
			</div>
		);
	});
	return (
		<div className="cardList-returned">
			<h3>Cards:</h3>
			{cards}
		</div>
	);
}
