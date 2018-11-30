import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import requiresLogin from './requires-login';
import { getMyDecks, getDeckCards } from '../actions/myDecks';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import CreateCard from '../response-component/card';

import '../component-css/my-decks.css';

class MyDecks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deckName: ''
		};
	}
	componentWillMount() {
		// console.log('dispatch to get decks');
		this.props.dispatch(getMyDecks());
	}

	handleGetCards(e) {
		// console.log('Cards in this deck', e.target.value);
		this.props.dispatch(getDeckCards(e.target.value));
		this.setState({
			deckName: e.target.value
		});
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
		let cards;
		if (!this.props.loggedIn) {
			return <Redirect push to="/save" />;
		}
		if (this.props.savedDecks) {
			decks = this.props.savedDecks[0];
			// console.log(decks);
		}
		if (this.props.cardsInMySavedDeck) {
			cards = this.props.cardsInMySavedDeck[0];
			// console.log(cards);
		}
		return (
			<div className="all-user-decks">
				<button
					className="logout"
					onClick={() => {
						this.logOut();
					}}
				>
					Log out
				</button>
				<ul className="decks-navbar">
					{decks
						? decks.map(deck => {
								// console.log(deck[0]);
								return (
									<button
										className="deck-names"
										key={deck.id}
										value={deck.name}
										onClick={e => this.handleGetCards(e)}
									>
										{deck.name}
									</button>
								);
						  })
						: ''}
				</ul>
				<h3 className="name-of-deck">{this.state.deckName}</h3>
				<div className="mtg-cards">
					{cards
						? cards.mtg_cards.map(card => {
								return (
									<div className="cards" key={card.id}>
										<CreateCard cards={card} key={card.id} />
									</div>
								);
						  })
						: ''}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	// console.log('state', state);
	return {
		loggedIn: state.auth.currentUser !== null,
		savedDecks: state.savedUserDecks.myDecks,
		cardsInMySavedDeck: state.savedUserDecks.cardsInMyDeck
		// username: state.auth.currentUser.username,
		// name: `${currentUser.name} `
	};
};

export default requiresLogin()(connect(mapStateToProps)(MyDecks));
