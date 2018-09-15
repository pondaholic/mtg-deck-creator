import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import ShowDeck from './deck';
import { saveDeck, fetchCardError, showDeck, addCardToDeck } from './actions';

import './component-css/card-list.css';

export class CardList extends React.Component {
	//render results
	renderResults() {
		if (this.props.showCardList === true) {
			return (
				<CreateCard
					cardList={this.props.cardList}
					handleClick={event => this.handleClick(event)}
				/>
			);
		}
		if (this.props.showDeck === true) {
			return (
				<ShowDeck
					cardList={this.props.cardList}
					cardsInDeck={this.props.cardsInDeck}
				/>
			);
		}
		if (this.props.saveDeck === true) {
			return <ul>{this.props.uniqueUrl}</ul>;
		}
	}

	handleDeck(event) {
		console.log(event);
		this.props.dispatch(showDeck());
	}

	handleClick(event) {
		console.log(event.target.value);
		let key = event.target.value;
		// console.log(key);
		this.props.dispatch(addCardToDeck(key));
	}

	handleSave(value) {
		console.log('trying to post');
		console.log(value);
		let saveToDeck = JSON.stringify(this.props.cardsInDeck);
		console.log(saveToDeck);
		return fetch('http://localhost:8080/api/cards', {
			method: 'POST',
			body: JSON.stringify({
				mtg_cards_id: saveToDeck,
				unique_url: Math.random()
					.toString(30)
					.substring(2, 5)
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) {
					if (
						res.headers.has('content-type') &&
						res.headers.get('content-type').startsWith('application/json')
					) {
						return res.json().then(err => Promise.reject(err));
					}
					return Promise.reject({
						code: res.status,
						message: res.statusText
					});
				}
				return res.json();
			})
			.then(data => {
				console.log('Something was posted', data);
				this.props.dispatch(saveDeck(data));
			})
			.catch(err => this.props.dispatch(fetchCardError(err)));
	}

	render() {
		return (
			<div className="card-list-buttons">
				<button
					className="show-deck"
					event={this.props.cardsInDeck}
					onClick={event => this.handleDeck(event)}
				>
					Deck(
					{this.props.cardsInDeck.length})
				</button>
				<button
					className="save-deck"
					value={this.props.cardsInDeck}
					onClick={value => this.handleSave(value)}
				>
					Save
				</button>
				<div className="results">{this.renderResults()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cardList: state.cards.cardList,
		showCardList: state.cards.showCardList,
		cardsInDeck: state.cards.cardsInDeck,
		showDeck: state.cards.showDeck,
		saveDeck: state.cards.saveDeck,
		uniqueUrl: state.cards.uniqueUrl
	};
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
