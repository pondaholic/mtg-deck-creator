import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import ShowDeck from './deck';
import UniqueUrl from './unique-url';
import { saveDeck, addCardToDeck } from './actions';
import { Link, Route } from 'react-router-dom';

import './component-css/card-list.css';

export class CardList extends React.Component {
	//adds cards to deck when "Add to Card" is clicked
	handleClick(event) {
		console.log(event.target.value);
		let key = event.target.value;
		// console.log(key);
		this.props.dispatch(addCardToDeck(key));
	}

	// POSTS the cards added to Deck to backend and returns unique URL
	handleSave(value) {
		console.log('trying to post');
		let newDeck = JSON.stringify(this.props.cardsInDeck);
		// console.log(saveToDeck);
		this.props.dispatch(saveDeck(newDeck));
	}

	render() {
		return (
			<div className="card-list">
				<Route
					exact
					path="/deck"
					component={() => (
						<ShowDeck
							cardsindeck={this.props.cardsInDeck}
							cardList={this.props.cardList}
						/>
					)}
				/>
				<Route
					exact
					path="/:uniqueurl"
					component={() => <UniqueUrl uniqueurl={this.props.uniqueUrl} />}
				/>
				<div className="card-list-buttons">
					<Link to="/deck">
						<button className="deck">
							Deck(
							{this.props.cardsInDeck.length})
						</button>
					</Link>
					<button
						className="save-deck"
						value={this.props.cardsInDeck}
						onClick={value => this.handleSave(value)}
					>
						Save
					</button>
				</div>
				<div className="return-list">
					<Route
						exact
						path="/"
						component={() => (
							<CreateCard
								cardList={this.props.cardList}
								handleClick={event => this.handleClick(event)}
							/>
						)}
					/>
				</div>
			</div>
		);
	}
}

CardList = connect()(CardList);

function mapStateToProps(state) {
	return {
		cardList: state.cards.cardList,
		cardsInDeck: state.cards.cardsInDeck,
		uniqueUrl: state.cards.uniqueUrl
	};
}
const ConnectedCards = connect(mapStateToProps)(CardList);
export default ConnectedCards;
