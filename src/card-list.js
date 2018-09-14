import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import { addCardToDeck } from './actions';
import { SubmissionError } from 'redux-form';
// import { Router, Route, Link } from 'react-router-dom';
// import Save from './deck';

export class CardList extends React.Component {
	//listener when clicking button for each card
	handleClick(event) {
		console.log(event.target.value);
		let key = event.target.value;
		// console.log(key);
		this.props.dispatch(addCardToDeck(key));
	}

	handleSave(event) {
		console.log('trying to post');
		console.log(event);
		let saveDeck = JSON.stringify(this.props.cardsInDeck);
		console.log(saveDeck);
		return fetch('http://localhost:8080/api/cards', {
			method: 'POST',
			body: JSON.stringify({
				mtg_cards_id: saveDeck,
				unique_url: toString(Math.random())
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
				return;
			})
			.then(() => console.log('Something was posted'))
			.then(err => {
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
			// <Router>
			<div className="card-list">
				<a href="#">
					Deck(
					{this.props.cardsInDeck.length})
				</a>
				<button
					className="save-deck"
					event={this.props.cardsInDeck}
					onClick={event => this.handleSave(event)}
				>
					Save
				</button>
				<ul>
					Cards:
					<CreateCard
						cardList={this.props.cardList}
						handleClick={event => this.handleClick(event)}
					/>
					{/* <Route exact path="/deck" component={Save} /> */}
				</ul>
			</div>
			// </Router>
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
