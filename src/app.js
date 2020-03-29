import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './components/search';
import Navbar from './components/navbar';
// import Background from './main/hompage-image';
import ThisDeck from './response-component/deck';
import UserEntryPage from './user-components/signin-register-page';
import Register from './user-components/register';
import Login from './user-components/login';
import MyDecks from './user-components/my-decks';
import Rules from './info/rules';

import './component-css/app.css';
export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="homepage-image">
					<Navbar />
					<Route path="/" component={() => <Search />} />
					{/* <Route exact path="/" component={() => <Background />} /> */}
					<main id="main-body">
						<Switch>
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
