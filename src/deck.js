import React from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

//component to show cards added to Deck
export class Save extends React.Component {
	onClick(event) {
		console.log(this.props.cardsInDeck);
		let saveDeck = this.props.cardsInDeck.map(id => JSON.stringify(id));
		return fetch('https://localhost:8080/cards', {
			method: 'POST',
			body: JSON.stringify({ cards_id: saveDeck }),
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
}

function mapStateToProps(state) {
	console.log(state.cards.cardsInDeck);
	// console.log(state);
	return {
		cardList: state.cards.cardList,
		cardsInDeck: state.cards.cardsInDeck
	};
}

const ConnectedCards = connect(mapStateToProps)(Save);

export default ConnectedCards;

//save button will add information to backend

/* 'POST',
	{username(users): anonymous,
	 name(decks): randomly generated,
		cards_id(cards): array from store(current state)} 
		
		
		response(success) = unique_url: randomly generated
		*/
