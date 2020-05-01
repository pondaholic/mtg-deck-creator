import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ThisDeck from '../response-component/deck';
import UserEntryPage from '../user-components/signin-register-page';
import MyDecks from '../user-components/my-decks';
import Rules from '../info/rules';

export default function Views(props) {
	return (
		<main id="main-body">
			<Switch>
				<Route exact path="/thisDeck" component={() => <ThisDeck />} />
				<Route exact path="/save" component={() => <UserEntryPage />} />
				<Route exact path="/myDecks" component={() => <MyDecks />} />
				<Route exact path="/rules" component={() => <Rules />} />
			</Switch>
		</main>
	);
}
