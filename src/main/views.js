import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Rules from '../info/rules';

export default function Views(props) {
	return (
		<main id="main-body">
			<Switch>
				<Route exact path="/rules" component={() => <Rules />} />
			</Switch>
		</main>
	);
}
