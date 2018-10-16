import React from 'react';
import Input from '../input';
import { Field, reduxForm, focus, reset } from 'redux-form';
import { connect } from 'react-redux';

import { fetchCardsFromMtgApi } from '../actions';

//search "bar" should only be responsible for sending GET request
export class SearchForm extends React.Component {
	onSubmit(values) {
		// when user inputs search parameters into the form, the value in that input will be used to perform a GET request from the MTG API
		// console.log(values);
		let searchTerm;
		let key;
		for (key in values) {
			if (values[key]) {
				if (
					values[key].toLowerCase() === 'blue' ||
					'red' ||
					'white' ||
					'black' ||
					'green'
				) {
					searchTerm = values[key];
				} else {
					searchTerm = encodeURIComponent(`%${values[key]}%`);
				}
			}
		}
		//using fetch request that will then only take the Name, Mana Cost, Color, Type, unique card ID, and text from the success
		console.log(key, searchTerm);
		this.props.dispatch(fetchCardsFromMtgApi(key, searchTerm)).then(() => {
			this.props.dispatch(reset('search'));
		});
	}

	render() {
		return (
			<div className="search-form">
				<form onSubmit={this.props.handleSubmit(event => this.onSubmit(event))}>
					<Field
						label="Name of Card"
						name="name"
						id="name"
						type="text"
						component={Input}
					/>
					<Field
						label="Color of Card"
						name="colors"
						id="colors"
						type="text"
						component={Input}
					/>
					<Field
						label="Type of Card"
						name="type"
						id="type"
						type="text"
						component={Input}
					/>
					<button type="submit" disabled={this.pristine || this.submitting}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

SearchForm = connect()(SearchForm);

export default reduxForm({
	form: 'search',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('search', Object.keys(errors)[0]))
})(SearchForm);
