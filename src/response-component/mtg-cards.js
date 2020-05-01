import React from 'react';
import { connect } from 'react-redux';

import CreateCard from './card';
import CardsNav from './cards-nav';

import { addCardToDeck } from '../actions/create-deck-actions';

import '../component-css/mtg-response.css';
class CardList extends React.Component {
	handleClick(e) {
		console.log('Card added to Deck');
		let key = e.target.value;
		let card = this.props.cardList.filter((card) => card.id === key);
		// console.log(key);
		this.props.dispatch(addCardToDeck(card));
		// console.log('added to deck', this.props.cardsInDeck);
	}

	render() {
		// console.log('inside CardList', this.props.cardList);
		let cards;
		let response = false;
		let error;
		if (this.props.cardList) {
			cards = this.props.cardList;
		}
		if (this.props.loading) {
			response = (
				<React.Fragment>
					<Spinner />
				</React.Fragment>
			);
		}
		if (this.props.error) {
			error = <p className="error">{this.props.error}</p>;
			// console.log(error);
		}
		return (
			<div className="mtg-response">
				<CardsNav handleSave={(value) => this.handleSave(value)} />
				{response}
				{error}
				<div className="mtg-cards">
					{cards && !response
						? cards.map((card) => {
								return (
									<div className="cards" key={card.id}>
										<CreateCard cards={card} key={card.id} />
										<button
											value={card.id}
											onClick={(e) => this.handleClick(e)}
										>
											Add to Deck{' '}
										</button>
									</div>
								);
						  })
						: ''}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cardList: state.mtg.cardList,
		cardsInDeck: state.deck.cardsInDeck,
		loading: state.mtg.loading,
		error: state.mtg.error,
	};
};

export default connect(mapStateToProps)(CardList);
