import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
// import { connect } from 'react-redux';
import Input from './input';
import { searchCards } from './actions';
import CardList from './card-list';
import './component-css/card-search.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class CardSearch extends React.Component {
	onSubmit(values) {
		this.props.dispatch(searchCards(values));
		// console.log(values);
		// const BASE_URL = `https://api.magicthegathering.io/v1/cards`;
		// let searchTerm;
		// let key;
		// for (key in values) {
		// 	if (values[key]) {
		// 		searchTerm = encodeURIComponent(`%${values[key]}%`);
		// 	}
		// }
		// console.log(searchTerm);
		// console.log(key);
		// // this.props.dispatch(searchMagic(values));
		// //use for submit (send get to MTG API)
		// return fetch(`${BASE_URL}/?${key}=${searchTerm}`, {
		// 	method: 'GET',
		// 	headers: { 'Content-Type': 'application/json' }
		// })
		// 	.then(res => {
		// 		if (!res.ok) {
		// 			if (
		// 				res.headers.has('content-type') &&
		// 				res.headers.get('content-type').startsWith('application/json')
		// 			) {
		// 				console.log(res.json());
		// 				return res.json().then(err => Promise.reject(err));
		// 			}
		// 			return Promise.reject({
		// 				code: res.status,
		// 				message: res.statusText
		// 			});
		// 		}
		// 		return res.json();
		// 	})
		// 	.then(res => {
		// 		let newRes = res.cards.map(card => {
		// 			return {
		// 				name: card.name,
		// 				castingcost: card.manaCost,
		// 				color: card.colors,
		// 				type: card.type,
		// 				id: card.id,
		// 				text: card.text,
		// 				image: card.imageUrl
		// 			};
		// 		});
		// 		console.log(newRes);
		// 		this.props.dispatch(fetchCardSuccess(newRes));
		// 	})
		// 	.catch(err => {
		// 		const { reason, message, location } = err;
		// 		if (reason === 'ValidationError') {
		// 			return Promise.reject(
		// 				new SubmissionError({
		// 					[location]: message
		// 				})
		// 			);
		// 		}
		// 		return Promise.reject(
		// 			new SubmissionError({
		// 				_error: 'Error submitting message'
		// 			})
		// 		).then(error => this.props.dispatch(fetchCardError(error)));
		// 	});
	}

	// handleDeck(event) {
	// 	console.log(event);
	// 	this.props.dispatch(showDeck());
	// }

	// handleClick(event) {
	// 	console.log(event.target.value);
	// 	let key = event.target.value;
	// 	// console.log(key);
	// 	this.props.dispatch(addCardToDeck(key));
	// }

	render() {
		return (
			<Router>
				<div className="search-form">
					<form
						onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
					>
						<label htmlFor="name">Name of Card:</label>
						<Field name="name" id="name" type="text" component={Input} />
						<label htmlFor="type">Color:</label>
						<Field
							name="cardColor"
							id="cardColor"
							type="text"
							component={Input}
						/>
						<label htmlFor="Type">Type of Card:</label>
						<Field name="type" id="type" type="text" component={Input} />
						<button type="submit">Submit</button>
					</form>
					<CardList />
				</div>
			</Router>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		cardList: state.cards.cardList,
// 		showCardList: state.cards.showCardList,
// 		cardsInDeck: state.cards.cardsInDeck,
// 		showDeck: state.cards.showDeck,
// 		saveDeck: state.cards.saveDeck,
// 		uniqueUrl: state.cards.uniqueUrl
// 	};
// }

// export const ConnectedCards = connect(mapStateToProps)(CardList);

export default reduxForm({
	form: 'search'
})(CardSearch);
