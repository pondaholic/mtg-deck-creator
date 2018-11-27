import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from './requires-login';

import '../component-css/my-decks.css';

class MyDecks extends React.Component {
	render() {
		return (
			<div className="all-user-decks">
				<p>A list of all user decks.</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		state
	};
};

export default requiresLogin()(connect(mapStateToProps)(MyDecks));
