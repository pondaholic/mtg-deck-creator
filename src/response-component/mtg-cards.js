import React from 'react';
import { connect } from 'react-redux';
// import { Link, Route } from 'react-router-dom';

import CreateCard from './card';
import { addCardToDeck } from '../actions/create-deck-actions';

import CardsNav from './cards-nav';

class CardList extends React.Component {
	handleSave(value) {
		console.log('trying to post', value);
		let newDeck = JSON.stringify(this.props.cardsInDeck);
		// creates string to send to backend as uniqueUrl
		let key =
			Math.random()
				.toString(30)
				.substring(2, 5) +
			Math.random()
				.toString(30)
				.substring(2, 5);
		console.log('newDeck & key', newDeck, key);
		// this.props.dispatch(saveDeck(newDeck, key)).then(() => {
		// 	if (this.props.uniqueUrl) {
		// 		this.props.history.push('/deck');
		// 	}
		// });
	}

	handleClick(event) {
		console.log('Card added to Deck');
		let key = event.target.value;
		console.log(key);
		this.props.dispatch(addCardToDeck(key));
		console.log('added to deck', this.props.cardsInDeck);
	}

	render() {
		// console.log('inside CardList', this.props.cardList);
		return (
			<div className="mtg-response">
				<CardsNav handleSave={value => this.handleSave(value)} />
				<div className="cards">
					<CreateCard
						cardList={this.props.cardList}
						handleClick={event => this.handleClick(event)}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.mtg.cardList,
		cardsInDeck: state.mtg.cardsInDeck
	};
};

export default connect(mapStateToProps)(CardList);
