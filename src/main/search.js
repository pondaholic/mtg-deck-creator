import React, { useState } from 'react';
import axios from 'axios';
import CheckboxLabels from '../components/checkBoxes';
import CreateCard from '../components/card';

import '../component-css/search-bar.css';
import '../component-css/card-search.css';
import '../component-css/mtg-response.css';

function Search() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [key, setKey] = useState('');
	const [loading, setLoading] = useState(false);
	const uri = `https://api.magicthegathering.io/v1/cards/?${key}=${query[key]}`;

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setData([]);

		const fetchData = async () => {
			console.log('search', console.log(uri, key, query));
			const result = await axios.get(uri);
			setData(result.data.cards);
			return setLoading(false);
		};
		fetchData();
	};

	return (
		<div className="search">
			<main role="main">
				<div className="how-to-use">
					<div className="header">
						<header>
							<h1>Magic the Gathering Deck Creator</h1>
							<h2>How to Search:</h2>
							Choose ONE of the three search parameters: Creature, Color, or
							Type and look for the cards you want. <br />
							Then add to your deck and save to a URL only you have!
						</header>
						<form onSubmit={handleSubmit}>
							<input
								className="name"
								type="text"
								onChange={(e) => (
									setKey('name'), setQuery({ name: e.target.value })
								)}
								placeholder="Name"
							/>
							<input
								className="type"
								type="text"
								onChange={(e) => (
									setKey('type'), setQuery({ type: e.target.value })
								)}
								placeholder="Type"
							/>
							<CheckboxLabels />
							<button type="submit" disabled={loading}>
								Search
							</button>
						</form>
					</div>
				</div>
			</main>
			<div id="main-body">
				<div className="mtg-response">
					{loading ? <div>Searching...</div> : ''}
					{data.length !== 0 || loading
						? // (console.log(data),
						  data.map((item) => CreateCard(item))
						: 'No Results to Show'}
				</div>
			</div>
		</div>
	);
}

export default Search;
