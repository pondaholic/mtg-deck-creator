import React from 'react';
import { connect } from 'react-redux';

import CreateCard from './card';
import CardsNav from './cards-nav';

import { addCardToDeck } from '../actions/create-deck-actions';

class CardList extends React.Component {
	handleClick(e) {
		console.log('Card added to Deck');
		let key = e.target.value;
		let card = this.props.cardList.filter(card => card.id === key);
		// console.log(key);
		this.props.dispatch(addCardToDeck(card));
		// console.log('added to deck', this.props.cardsInDeck);
	}

	render() {
		// console.log('inside CardList', this.props.cardList);
		let cards;
		if (this.props.cardList) {
			cards = this.props.cardList;
		}
		return (
			<div className="mtg-response">
				<CardsNav handleSave={value => this.handleSave(value)} />
				{cards
					? cards.map(card => {
							return (
								<div className="cards" key={card.id}>
									<CreateCard cards={card} key={card.id} />
									<button value={card.id} onClick={e => this.handleClick(e)}>
										Add to Deck{' '}
									</button>
								</div>
							);
					  })
					: ''}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.mtg.cardList,
		cardsInDeck: state.deck.cardsInDeck
	};
};

export default connect(mapStateToProps)(CardList);
