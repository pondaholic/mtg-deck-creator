import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './card';
import ShowDeck from './deck';
import { saveDeck, fetchCardError, addCardToDeck } from './actions';
import { Link, Route } from 'react-router-dom';

import './component-css/card-list.css';

export class CardList extends React.Component {
	handleClick(event) {
		console.log(event.target.value);
		let key = event.target.value;
		// console.log(key);
		this.props.dispatch(addCardToDeck(key));
	}

	handleSave(value) {
		console.log('trying to post');
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
			<div className="card-list">
				<Route
					exact
					path="/deck"
					component={() => <ShowDeck cardsindeck={this.props.cardsInDeck} />}
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

function mapStateToProps(state) {
	return {
		cardList: state.cards.cardList,
		cardsInDeck: state.cards.cardsInDeck
	};
}

const ConnectedCards = connect(mapStateToProps)(CardList);

export default ConnectedCards;
