import React, { useState } from 'react';
import axios from 'axios';

import '../component-css/search-bar.css';
import '../component-css/card-search.css';
import '../component-css/mtg-response.css';

function Search() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [key, setKey] = useState('');
	const [loading, setLoading] = useState(false);
	const uri = `https://api.magicthegathering.io/v1/cards/?${key}=${query}`;

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		console.log('handleSubmit');

		const fetchData = async () => {
			console.log('search', console.log(uri));
			const result = await axios.get(uri);
			// console.log('result: ', result);
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
						<button onClick={() => console.log(process.env.REACT_APP_DOMAIN)}>
							Check
						</button>
						<form onSubmit={handleSubmit}>
							<input
								className="name"
								type="text"
								onChange={e => (
									// console.log(e.target.value),
									setKey('name'), setQuery(e.target.value)
								)}
								placeholder="Name"
							/>
							<input
								className="type"
								type="text"
								onChange={e => (
									// console.log(e.target.value),
									setKey('type'), setQuery(e.target.value)
								)}
								placeholder="Type"
							/>
							<input
								className="color"
								type="text"
								onChange={e => (
									console.log(e.target.value),
									setKey('color'),
									setQuery(e.target.value)
								)}
								placeholder="Color"
							/>
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
						  data.map(item => (
								<ul key={item.id}>
									<li key={item.id} className="cardImage">
										{item.imageUrl ? (
											<img src={item.imageUrl}></img>
										) : (
											<div className="card">{item.name}</div>
										)}
										<button
											className="card-button"
											value={item.id}
											onClick={() => console.log(item.id)}
										>
											Add to Deck{' '}
										</button>
									</li>
								</ul>
						  ))
						: 'No Results to Show'}
				</div>
			</div>
		</div>
	);
}

export default Search;
