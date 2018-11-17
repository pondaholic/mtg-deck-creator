import React from 'react';
import { connect } from 'react-redux';

import CreateCard from './card';

import CardsNav from './cards-nav';

class CardList extends React.Component {
	render() {
		console.log('inside CardList', this.props.cardList);
		return (
			<div className="mtg-response">
				<CardsNav />
				<div className="cards">
					<CreateCard
						cardList={this.props.cardList}
						// handleClick={event => this.handleClick(event)}
					/>
				</div>
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
