import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Searchbar from './search-bar';
import CardList from '../response-component/mtg-cards';
import Navbar from './navbar';

import { fetchCardsFromMtgApi } from '../actions/search-mtg';

import '../component-css/card-search.css';

//this is the main component that renders
//component should only do 1 thing !== search; remove search bar to component to a separate component that renders
//add nav bar for "Save" & to link to "Deck"
class CardSearch extends React.Component {
	handleSearch(values) {
		// console.log(values.name, values.type, values.color);
		for (let key in values) {
			if (values[key]) {
				// console.log(values[key]);
				let searchTerm = encodeURIComponent(`%${values[key]}%`);
				this.props.dispatch(fetchCardsFromMtgApi(key, searchTerm));
			}
		}
		// console.log(key, searchTerm);
	}

	render() {
		// console.log(this.props.cardList);
		return (
			<Router>
				<main role="main">
					<Navbar />
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
					<div className="search-return">
						<CardList />
					</div>
				</main>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.mtg.cardList
	};
};

export default connect(mapStateToProps)(CardSearch);
