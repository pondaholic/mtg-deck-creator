import React from 'react';
import { connect } from 'react-redux';

class CardList extends React.Component {
	render() {
		console.log('inside CardList', this.props.cardList);
		return <div className="mtg-response">something</div>;
	}
}

const mapStateToProps = state => {
	return {
		cardList: state.mtg.cardList
	};
};

export default connect(mapStateToProps)(CardList);
