import React from 'react';
import './component-css/saved-deck.css';

export default function SavedDeck(props) {
	const creatureImage = [
		require('./card-images/other.jpg'),
		require('./card-images/medusa.jpg'),
		require('./card-images/titania.jpg'),
		require('./card-images/firebird.jpg')
	];
	const manaImages = [
		require('./card-images/mountains.jpg'),
		require('./card-images/island.jpg'),
		require('./card-images/plains.jpg'),
		require('./card-images/forest.JPG'),
		require('./card-images/swamp.jpg')
	];
	let image;

	const savedDeckCards = props.cardlist.map(card => {
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
			<div key={card.id} className={`saved-deck ${card.color}`}>
				<h3>{card.name}</h3>
				{card.castingcost}
				<img src={image} alt="placeholder paintings for cards" />
				<br />
				<i>{card.type}</i>
				<p>{card.text}</p>
			</div>
		);
	});
	return <div className="created-deck">{savedDeckCards}</div>;
}
