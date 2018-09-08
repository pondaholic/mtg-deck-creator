import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Input from './input';
// import { required } from './validation';
//import css file

export class CardSearch extends React.Component {
	onSubmit(values) {
		console.log(values);
		console.log(values.name);
		const name = encodeURIComponent(`%${values.name}%`);

		//use for submit (send get to MTG API)
		return fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`, {
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
			.then(res => console.log(res))
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
			<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="name">Name of Card:</label>
				<Field name="name" id="name" type="text" component={Input} />
				<label htmlFor="type">Color:</label>
				<Field name="cardColor" id="cardColor" type="text" component={Input} />
				<label htmlFor="Type">Type of Card:</label>
				<Field name="cardType" id="cardType" type="text" component={Input} />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'search'
})(CardSearch);
