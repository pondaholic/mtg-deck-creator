import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { fetchCardSuccess, fetchCardError } from './actions';
import CardList from './card-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './component-css/card-search.css';

export class CardSearch extends React.Component {
	onSubmit(values) {
		// when user inputs search parameters into the form, the value in that input will be used to perform a GET request from the MTG API
		const BASE_URL = `https://api.magicthegathering.io/v1/cards`;
		let searchTerm;
		let key;
		for (key in values) {
			if (values[key]) {
				searchTerm = encodeURIComponent(`%${values[key]}%`);
			}
		}

		//using fetch request that will then only take the Name, Mana Cost, Color, Type, unique card ID, and text from the success
		return fetch(`${BASE_URL}/?${key}=${searchTerm}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then(res => {
				if (!res.ok) {
					if (
						res.headers.has('content-type') &&
						res.headers.get('content-type').startsWith('application/json')
					) {
						console.log(res.json());
						return res.json().then(err => Promise.reject(err));
					}
					return Promise.reject({
						code: res.status,
						message: res.statusText
					});
				}
				return res.json();
			})
			.then(res => {
				let newRes = res.cards.map(card => {
					return {
						name: card.name,
						castingcost: card.manaCost,
						color: card.colors,
						type: card.type,
						id: card.id,
						text: card.text
					};
				});
				console.log(newRes);
				this.props.dispatch(fetchCardSuccess(newRes));
			})
			.catch(error => this.props.dispatch(fetchCardError(error)));
	}

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
					<Route path="/" component={CardList} />
				</div>
			</Router>
		);
	}
}

export default reduxForm({
	form: 'search'
})(CardSearch);
