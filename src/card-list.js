import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import { addCardToDeck } from './actions';

export class CardList extends React.Component {
	//listener when clicking button for each card
	handleClick(event) {
		console.log(event.target.value);
		let key = event.target.value;
		console.log(key);
		this.props.dispatch(addCardToDeck(key));
	}

	render() {
		return (
			<div className="card-list">
				<a href="deck">
					Deck(
					{this.props.cardsInDeck.length})
				</a>
				<ul>
					Cards:
					{/* {eachCard} */}
					<CreateCard
						cardList={this.props.cardList}
						handleClick={event => this.handleClick(event)}
					/>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state.cards.cardsInDeck);
	// console.log(state);
	return {
		cardList: state.cards.cardList,
		cardsInDeck: state.cards.cardsInDeck
	};
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
