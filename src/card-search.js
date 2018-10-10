import React from 'react';
import { reduxForm, Field, focus, reset } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { fetchCardsFromMtgApi } from './actions';
import CardList from './card-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './component-css/card-search.css';

export class CardSearch extends React.Component {
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
			<Router>
				<main role="main">
					<div className="how-to-use">
						<header>
							<h1>Magic the Gathering Deck Creator</h1>
							<h2>How to Search:</h2>
							Choose ONE of the three search parameters: Creature, Color, or
							Type and look for the cards you want. <br />
							Then add to your deck and save to a URL only you have!
						</header>
						<div className="search-form">
							<form
								onSubmit={this.props.handleSubmit(values =>
									this.onSubmit(values)
								)}
							>
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
								<button
									type="submit"
									disabled={this.props.pristine || this.props.submitting}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
					<Route path="/" component={CardList} />
				</main>
			</Router>
		);
	}
}

CardSearch = connect()(CardSearch);

export default reduxForm({
	form: 'search',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('search', Object.keys(errors)[0]))
})(CardSearch);
