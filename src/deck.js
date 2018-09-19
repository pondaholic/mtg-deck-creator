import React from 'react';
import './component-css/deck.css';

export default function ShowDeck(props) {
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

	const deckCards = props.cardsindeck.map(card => {
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
			<div
				className="deck"
				key={Math.random()
					.toString(30)
					.substring(2, 5)}
			>
				<div className={`card ${card.color}`}>
					<h3>{card.name}</h3>
					{card.castingcost}
					<img src={image} alt="placeholder paintings for cards" />
					<br />
					<i>{card.type}</i>
					<p>{card.text}</p>
				</div>
				<button value={card.id} onClick={event => props.handleRemove(event)}>
					Remove from Deck
				</button>
			</div>
		);
	});
	return (
		<div className="created-deck">
			<h4>Deck:</h4>
			{deckCards}
		</div>
	);
}

/* 'POST',
	{username(users): anonymous,
	 name(decks): randomly generated,
		cards_id(cards): array from store(current state)} 
		
		
		response(success) = unique_url: randomly generated
		*/
