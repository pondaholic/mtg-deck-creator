import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserDeck extends React.Component {
	render() {
		if (this.props.url) {
			console.log(this.props.url);
		}
		return (
			<div className="save-user-deck">
				Want to save your deck and come back to edit it?{' '}
				<Link to="/register">Create an account!</Link>
				Already have an account? <Link to="/login">Log in</Link> and save your
				deck!
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

export default connect(mapStateToProps)(UserDeck);
