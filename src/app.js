import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardSearch from './main/card-search';
import CardList from './response-component/mtg-cards';
import ThisDeck from './response-component/deck';
import UserDeck from './user-components/save';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Route path="/" component={() => <CardSearch />} />
				<main id="main-body">
					<Switch>
						<Route exact path="/search" component={() => <CardList />} />
						<Route exact path="/thisDeck" component={() => <ThisDeck />} />
						<Route exact path="/save" component={() => <UserDeck />} />
					</Switch>
				</main>
			</div>
		);
	}
}
