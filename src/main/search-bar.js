import React from 'react';
import Input from '../input';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

import { fetchCardsFromMtgApi } from '../actions';

//search "bar" should only be responsible for sending GET request
export class SearchForm extends React.Component {
	onSubmit(values) {
		console.log(values);
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
