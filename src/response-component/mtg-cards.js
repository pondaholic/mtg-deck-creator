import React from 'react';
import { connect } from 'react-redux';

import CardsNav from './cards-nav';

class CardList extends React.Component {
	render() {
		console.log('inside CardList', this.props.cardList);
		return (
			<div className="mtg-response">
				<CardsNav />
				<div className="cards">Something</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.mtg.cardList
	};
};

export default connect(mapStateToProps)(CardList);
