import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export default function UniqueUrl(props) {
	return (
		<div className="return-deck-link">
			Your deck can be found here:
			<ul>
				<Link
					to={props.uniqueurl}
					uniqueurl={props.uniqueurl}
					onClick={event => props.onClick(event)}
					className="deck-link"
				>
					{props.uniqueurl}
				</Link>
			</ul>
		</div>
	);
}

// const mapStateToProps = props => {
// 	return { uniqueurl : props.match.params.uniqueurl };
// };
// export default connect(mapStateToProps)(UniqueUrl);
