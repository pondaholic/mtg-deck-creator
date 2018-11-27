import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../component-css/save.css';

class SaveUserDeck extends React.Component {
	render() {
		if (this.props.url) {
			console.log(this.props.url);
		}
		return (
			<div className="save-user-deck">
				<p>
					Want to save your deck and come back to edit it?{' '}
					<Link to="/register">Create an account! </Link>
				</p>
				<p>
					Already have an account? <Link to="/login">Log in</Link> and save your
					deck!
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardsInDeck: state.deck.cardsInDeck,
		url: state.deck.uniqueUrl
	};
};

export default connect(mapStateToProps)(SaveUserDeck);
