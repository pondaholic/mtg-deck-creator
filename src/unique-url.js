import React from 'react';
import { Link } from 'react-router-dom';

export default function UniqueUrl(props) {
	return (
		<ul>
			Your deck can be found here:
			<Link to="/{props.uniqueurl}">{props.uniqueurl}</Link>
		</ul>
	);
}
