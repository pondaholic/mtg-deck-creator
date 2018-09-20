import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import ShowDeck from './deck';
import SavedDeck from './saved-deck.js';
import UniqueUrl from './unique-url';
import {
	saveDeck,
	addCardToDeck,
	returnSavedDeck,
	removeCardFromDeck
} from './actions';
import { Link, Route } from 'react-router-dom';

import './component-css/card-list.css';

export class CardList extends React.Component {
	//return the saved Deck in app store, not from backend
	handleSavedDeck(event) {
		console.log('This is a saved Deck');
		this.props.dispatch(returnSavedDeck(this.props.uniqueUrl));
	}

	handleRemove(event) {
		console.log('A card has been removed from deck.');
		let key = event.target.value;
		this.props.dispatch(removeCardFromDeck(key));
	}

	//adds cards to deck when "Add to Card" is clicked
	handleClick(event) {
		console.log('Card added to Deck');
		let key = event.target.value;
		this.props.dispatch(addCardToDeck(key));
	}

	// POSTS the cards added to Deck in app's store to backend and returns unique URL
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
		this.props.dispatch(saveDeck(newDeck, key)).then(() => {
			if (this.props.uniqueUrl) {
				this.props.history.push('/deck');
			}
		});
	}

	render() {
		let errorMessage;
		if (this.props.error) {
			errorMessage = <div className="error-message">{this.props.error}</div>;
		}
		return (
			<div className="card-list">
				{errorMessage}
				<Route
					path={this.props.match.params.uniqueurl}
					component={() => <SavedDeck cardlist={this.props.returnedDeck} />}
				/>
				<Route
					exact
					path="/deck"
					component={() => (
						<UniqueUrl
							uniqueurl={this.props.uniqueUrl}
							value={this.props.uniqueUrl}
							onClick={value => this.handleSavedDeck(value)}
						/>
					)}
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
						path="/deck"
						component={() => (
							<ShowDeck
								cardsindeck={this.props.cardsInDeck}
								handleRemove={event => this.handleRemove(event)}
							/>
						)}
					/>
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
		uniqueUrl: state.cards.uniqueUrl,
		returnedDeck: state.cards.returnedDeck,
		error: state.cards.error
	};
}
const ConnectedCards = connect(mapStateToProps)(CardList);
export default ConnectedCards;
