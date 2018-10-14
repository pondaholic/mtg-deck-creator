import React from 'react';

//needed for redux-form to work & change component
// import { reduxForm, focus, reset } from 'redux-form';

import SearchForm from './search-bar';
import { fetchCardsFromMtgApi } from '../actions';
import CardList from '../sub-search-components/card-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../component-css/card-search.css';

//this is the main component that renders
//component should only do 1 thing !== search; remove search bar to component to a separate component that renders
//add nav bar for "Save" & to link to "Deck"
export default class CardSearch extends React.Component {
	// onSubmit(event) {
	// 	event.preventDefault();
	// 	console.log(event.target.value);
	// when user inputs search parameters into the form, the value in that input will be used to perform a GET request from the MTG API
	// console.log(values);
	// let searchTerm;
	// let key;
	// for (key in values) {
	// 	if (values[key]) {
	// 		if (
	// 			values[key].toLowerCase() === 'blue' ||
	// 			'red' ||
	// 			'white' ||
	// 			'black' ||
	// 			'green'
	// 		) {
	// 			searchTerm = values[key];
	// 		} else {
	// 			searchTerm = encodeURIComponent(`%${values[key]}%`);
	// 		}
	// 	}
	// }
	// //using fetch request that will then only take the Name, Mana Cost, Color, Type, unique card ID, and text from the success
	// console.log(key, searchTerm);
	// this.props.dispatch(fetchCardsFromMtgApi(key, searchTerm)).then(() => {
	// 	this.props.dispatch(reset('search'));
	// });
	// }

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
						<SearchForm onSubmit={values => this.onSubmit(values)} />
					</div>
					{/* <Route path="/" component={CardList} /> */}
				</main>
			</Router>
		);
	}
}

// SearchForm = connect()(SearchForm);

// export default reduxForm({
// 	form: 'search',
// 	onSubmitFail: (errors, dispatch) =>
// 		dispatch(focus('search', Object.keys(errors)[0]))
// })(SearchForm);
