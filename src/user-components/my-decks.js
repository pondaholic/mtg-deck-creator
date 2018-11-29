import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from './requires-login';
import { getMyDecks } from '../actions/myDecks';

import '../component-css/my-decks.css';

class MyDecks extends React.Component {
	componentDidMount() {
		this.props.dispatch(getMyDecks());
	}

	render() {
		let decks;
		if (this.props.savedDecks) {
			decks = this.props.savedDecks;
		}
		let name = this.props.username;
		return (
			<div className="all-user-decks">
				<p>A list of all ${name}'s decks.</p>
				{decks}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		loggedIn: state.auth.currentUser !== null,
		savedDecks: state.savedUserDecks.myDecks,
		username: state.auth.currentUser.username,
		name: `${currentUser.name} `
	};
};

export default requiresLogin()(connect(mapStateToProps)(MyDecks));
