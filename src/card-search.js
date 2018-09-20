import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { fetchCards } from './actions';
import CardList from './card-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './component-css/card-search.css';

export class CardSearch extends React.Component {
	onSubmit(values) {
		// when user inputs search parameters into the form, the value in that input will be used to perform a GET request from the MTG API
		let searchTerm;
		let key;
		for (key in values) {
			if (values[key]) {
				searchTerm = encodeURIComponent(`%${values[key]}%`);
			}
		}
		//using fetch request that will then only take the Name, Mana Cost, Color, Type, unique card ID, and text from the success
		this.props.dispatch(fetchCards(key, searchTerm));
	}

	render() {
		return (
			<Router>
				<main>
					<div className="how-to-use">
						<header>
							<h1>Magic the Gathering Deck Creator</h1>
							<h2>How to Search:</h2>
							Choose ONE of the three search parameters: Creature, Color, or
							Type and look for the cards you want. Then add to your deck and
							save to a URL only you have!
						</header>
						<div className="search-form">
							<form
								onSubmit={this.props.handleSubmit(values =>
									this.onSubmit(values)
								)}
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
	form: 'search'
})(CardSearch);
