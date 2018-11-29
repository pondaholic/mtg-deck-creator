//libraries
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

//import components
import Searchbar from './search-bar';
import Navbar from './navbar';

//import actions for dispatches
import { fetchCardsFromMtgApi } from '../actions/search-mtg';

//import CSS
import '../component-css/card-search.css';

class CardSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: false
		};
	}

	handleSearch(values) {
		this.setState({
			search: true,
			image: ''
		});
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
		if (this.state.search) {
			return <Redirect push to="/search" />;
		}
		return (
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
						<Searchbar
							handleClick={e => this.handleClick(e)}
							handleSearch={values => this.handleSearch(values)}
						/>
					</div>
				</div>
			</main>
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
