import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Register from './register';
import { login } from '../actions/auth';
import { createNewUser } from '../actions/users';

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

	handleRegister(values) {
		console.log(values);
		this.props
			.dispatch(createNewUser(values))
			.then(() => this.props.dispatch(login(values.username, values.password)));
	}

	render() {
		if (this.props.loggedIn) {
			return <Redirect to="/myDecks" />;
		}
		return (
			<div className="user-entry-portal">
				<Register
					handleDemo={e => this.handleDemo(e)}
					handleRegister={values => this.handleRegister(values)}
				/>
				<p>
					Already have an account? <Link to="/login">Log In!</Link>
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	loading: state.users.loading,
	error: state.users.error
});

export default connect(mapStateToProps)(UserEntryPage);
