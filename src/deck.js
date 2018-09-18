import React from 'react';
// import { showDeck } from './actions';
// import CreateCard from './card';
// import { connect } from 'react-redux';

// component to show cards added to Deck
// export class ShowDeck extends React.Component {
// 	componentDidMount() {
// 		let key = this.props.cardsInDeck.id;
// 		const searchTerm = this.props.cardsInDeck.map(id =>
// 			this.props.dispatch(fetchCards(key, searchTerm))
// 		);
// 	}
// 	render() {
// 		return <CreateCard cardList={this.props.cardsindeck} />;
// 	}
// }

// ShowDeck = connect()(ShowDeck);

// function mapStateToProps(state) {
// 	return {
// 		cardList: state.cards.cardList,
// 		cardsInDeck: state.cards.cardsInDeck,
// 		uniqueUrl: state.cards.uniqueUrl
// 	};
// }
// const ConnectedCards = connect(mapStateToProps)(ShowDeck);
// export default ConnectedCards;

export default function ShowDeck(props) {
	// this.props.dispatch(showDeck());
	// const showDeck = props.cardList.filter(
	// 	card => card.id === props.cardsindeck.id
	// );
	// console.log(showDeck);

	// props.cardsindeck.map(id => {
	// 	// console.log('ID of cards in the deck mapped', id);
	// 	props.cardList.map(card => {
	// 		// console.log(card.id);
	// 		// console.log(id);
	// 		if (card.id === id) {
	// 			// console.log('match', card.id, id);
	// 			return (
	// 				<li className="deckCard" key={Math.random()}>
	// 					<b>{id}</b>
	// 				</li>
	// 			);
	// 		}
	// 		console.log(showDeck);
	// 	});
	// });
	return <div className="created-deck">Deck: {}</div>;
}
// 	(
// 	<li className="deckCard" key={Math.random()}>
// 		<b>{id}</b>
// 	</li>
// ));
// return (
// 	<div>
// 	<ul>Deck: {showDeck}</ul>
// </div>
// );
// }

/* 'POST',
	{username(users): anonymous,
	 name(decks): randomly generated,
		cards_id(cards): array from store(current state)} 
		
		
		response(success) = unique_url: randomly generated
		*/
