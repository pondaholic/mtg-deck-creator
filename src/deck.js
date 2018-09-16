import React from 'react';
// import { connect } from 'react-redux';

//component to show cards added to Deck
export default function ShowDeck(props) {
	const showDeck = props.cardsindeck.map(id => (
		<li className="deckCard" key={Math.random()}>
			<b>{id}</b>
		</li>
	));
	return (
		<div>
			<ul>Deck: {showDeck}</ul>
		</div>
	);
}

// function mapStateToProps(state) {
// 	return {
// 		cardList: state.cards.cardList,
// 		cardsInDeck: state.cards.cardsInDeck
// 	};
// }

// export const ConnectedDeck = connect(mapStateToProps)(ShowDeck);

/* 'POST',
	{username(users): anonymous,
	 name(decks): randomly generated,
		cards_id(cards): array from store(current state)} 
		
		
		response(success) = unique_url: randomly generated
		*/
