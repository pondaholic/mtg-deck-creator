import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Register from './register';
import { login } from '../actions/auth';

import '../component-css/entry-page.css';

class UserEntryPage extends React.Component {
	handleDemo(e) {
		console.log('demo clicked');
		const demo = {
			username: 'demo-user',
			password: 'password123'
		};
		this.props.dispatch(login(demo.username, demo.password));
	}

	render() {
		if (this.props.loggedIn) {
			return <Redirect to="/myDeck" />;
		}
		return (
			<div className="user-entry-portal">
				<Register handleDemo={e => this.handleDemo(e)} />
				<p>
					Already have an account? <Link to="/login">Log In!</Link>
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserEntryPage);
