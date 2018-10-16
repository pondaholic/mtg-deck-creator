import React from 'react';

import SearchForm from './search-bar';
import CardList from '../sub-search-components/card-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../component-css/card-search.css';

//this is the main component that renders
//component should only do 1 thing !== search; remove search bar to component to a separate component that renders
//add nav bar for "Save" & to link to "Deck"
export default class CardSearch extends React.Component {
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
						<SearchForm />
					</div>
					<Route path="/" component={CardList} />
				</main>
			</Router>
		);
	}
}
