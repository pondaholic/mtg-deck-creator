import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from './requires-login';

class MyDecks extends React.Component {
	render() {
		return <div className="all-user-decks">A list of all user decks.</div>;
	}
}

const mapStateToProps = state => {
	return {
		state
	};
};

export default requiresLogin()(connect(mapStateToProps)(MyDecks));
