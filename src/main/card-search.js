import React from 'react';
import { connect } from 'react-redux';

import Searchbar from './search-bar';
import { fetchCardsFromMtgApi } from '../actions/search-mtg';
import CardList from '../sub-search-components/card-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../component-css/card-search.css';

//this is the main component that renders
//component should only do 1 thing !== search; remove search bar to component to a separate component that renders
//add nav bar for "Save" & to link to "Deck"
class CardSearch extends React.Component {
	handleSearch(values) {
		console.log(values);
		let searchTerm;
		let key;
		for (key in values) {
			searchTerm = encodeURIComponent(`%${values[key]}%`);
		}
		// console.log(key, searchTerm);
		this.props.dispatch(fetchCardsFromMtgApi(key, searchTerm));
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
						<Searchbar handleSearch={values => this.handleSearch(values)} />
					</div>
					{/* <Route path="/" component={CardList} /> */}
				</main>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.cards.cardList
	};
};

export default connect(mapStateToProps)(CardSearch);
