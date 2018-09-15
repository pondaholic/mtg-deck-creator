import React from 'react';

//component to show cards added to Deck
export default function ShowDeck(props) {
	const showDeck = props.cardsInDeck.map(id => (
		<li className="deckCard" key={Math.random()}>
			<b>{id}</b>
		</li>
	));
	return (
		<div>
			<ul>{showDeck}</ul>
		</div>
	);
}

/* 'POST',
	{username(users): anonymous,
	 name(decks): randomly generated,
		cards_id(cards): array from store(current state)} 
		
		
		response(success) = unique_url: randomly generated
		*/
