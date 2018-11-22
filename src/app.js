import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardSearch from './main/card-search';
import CardList from './response-component/mtg-cards';
import ThisDeck from './response-component/deck';
import SaveUserDeck from './user-components/save';
import Register from './user-components/register';
import Login from './user-components/login';
import MyDecks from './user-components/my-decks';
import Rules from './info/rules';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Route path="/" component={() => <CardSearch />} />
				<main id="main-body">
					<Switch>
						<Route exact path="/search" component={() => <CardList />} />
						<Route exact path="/thisDeck" component={() => <ThisDeck />} />
						<Route exact path="/save" component={() => <SaveUserDeck />} />
						<Route exact path="/register" component={() => <Register />} />
						<Route exact path="/login" component={() => <Login />} />
						<Route exact path="/myDecks" component={() => <MyDecks />} />
						<Route exact path="/rules" component={() => <Rules />} />
					</Switch>
				</main>
			</div>
		);
	}
}
