import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardSearch from './main/card-search';
import Search from './main/search';
import Navbar from './main/navbar';
// import Background from './main/hompage-image';
import CardList from './response-component/mtg-cards';
import ThisDeck from './response-component/deck';
import UserEntryPage from './user-components/signin-register-page';
import Register from './user-components/register';
import Login from './user-components/login';
import MyDecks from './user-components/my-decks';
import Rules from './info/rules';

import './component-css/app.css';
import homeImage from './mtg-bg.jpg';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="homepage-image">
					<Navbar />
					{/* <Route path="/" component={() => <CardSearch />} /> */}
					<Route path="/" component={() => <Search />} />
					{/* <Route exact path="/" component={() => <Background />} /> */}
					<main id="main-body">
						<Switch>
							<Route exact path="/search" component={() => <CardList />} />
							<Route exact path="/thisDeck" component={() => <ThisDeck />} />
							<Route exact path="/save" component={() => <UserEntryPage />} />
							<Route exact path="/register" component={() => <Register />} />
							<Route exact path="/login" component={() => <Login />} />
							<Route exact path="/myDecks" component={() => <MyDecks />} />
							<Route exact path="/rules" component={() => <Rules />} />
						</Switch>
						{/* <img src={homeImage} alt="homepage stand-in when no searches" /> */}
					</main>
				</div>
			</div>
		);
	}
}
