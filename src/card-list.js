import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import ShowDeck from './deck';
import { addCardToDeck, showDeck, saveDeck } from './actions';
import { SubmissionError } from 'redux-form';

import './component-css/card-list.css';

// import { Router, Route, Link } from 'react-router-dom';
// import Save from './deck';

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
				// let stringData = data.unique_url;
				console.log('Something was posted', data);
				this.props.dispatch(saveDeck(data));
			})
			.catch(err => {
				const { reason, message, location } = err;
				if (reason === 'ValidationError') {
					return Promise.reject(
						new SubmissionError({
							[location]: message
						})
					);
				}
				return Promise.reject(
					new SubmissionError({
						_error: 'Error submitting message'
					})
				);
			});
	}

	render() {
		return (
			<div className="card-list">
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
				<ul>
					Cards:
					{this.renderResults()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state.cards.cardsInDeck);
	// console.log(state);
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
