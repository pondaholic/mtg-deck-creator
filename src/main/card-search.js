//libraries
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import components
import Searchbar from './search-bar';
import CardList from '../response-component/mtg-cards';
import Navbar from './navbar';
import ThisDeck from '../response-component/deck';

//import actions for dispatches
import { fetchCardsFromMtgApi } from '../actions/search-mtg';

//import CSS
import '../component-css/card-search.css';

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
						<div className="header">
							<header>
								<h1>Magic the Gathering Deck Creator</h1>
								<h2>How to Search:</h2>
								Choose ONE of the three search parameters: Creature, Color, or
								Type and look for the cards you want. <br />
								Then add to your deck and save to a URL only you have!
							</header>
							<Searchbar handleSearch={values => this.handleSearch(values)} />
						</div>
					</div>
					<div className="search-return">
						<Route exact path="/search" component={() => <CardList />} />
						<Route
							exact
							path="/thisDeck"
							component={() => (
								<ThisDeck
									cardsInDeck={this.props.cardsInDeck}
									handleRemove={event => this.handleRemove(event)}
								/>
							)}
						/>
					</div>
				</main>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.mtg.cardList,
		cardsInDeck: state.deck.cardsInDeck
	};
};

export default connect(mapStateToProps)(CardSearch);
