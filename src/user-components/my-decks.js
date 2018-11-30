import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import { getMyDecks } from '../actions/myDecks';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import '../component-css/my-decks.css';

class MyDecks extends React.Component {
	componentWillMount() {
		// console.log('dispatch to get decks');
		this.props.dispatch(getMyDecks());
	}

	handleGetCards() {
		console.log('Cards in this deck');
	}

	logOut() {
		this.setState({
			showNavMenu: false
		});
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		let decks;
		if (!this.props.loggedIn) {
			return <Redirect push to="/save" />;
		}
		if (this.props.savedDecks) {
			decks = this.props.savedDecks[0];
			console.log(decks);
		}
		return (
			<div className="all-user-decks">
				<button
					onClick={() => {
						this.logOut();
					}}
				>
					Log out
				</button>
				<ul>
					{decks
						? decks.map(deck => {
								// console.log(deck[0]);
								return (
									<li className="deck-names" key={Math.random()}>
										<Link to={deck.name} onClick={this.handleGetCards}>
											{deck.name}
										</Link>
									</li>
								);
						  })
						: ''}
				</ul>
				{/* <p>A list of all decks.</p> */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	console.log('state', state);
	return {
		loggedIn: state.auth.currentUser !== null,
		savedDecks: state.savedUserDecks.myDecks
		// username: state.auth.currentUser.username,
		// name: `${currentUser.name} `
	};
};

export default requiresLogin()(connect(mapStateToProps)(MyDecks));
