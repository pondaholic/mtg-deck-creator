import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState({ name: '', type: '', color: '' });
	const [loading, setLoading] = useState(false);
	const uri = `https://api.magicthegathering.io/v1/cards/?name=${query.name}`;

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
			<form onSubmit={handleSubmit}>
				<input
					className="name"
					type="text"
					onChange={e => (
						console.log(e.target.value), setQuery({ name: e.target.value })
					)}
					placeholder="Name"
				/>
				<input
					className="type"
					type="text"
					onChange={e => (
						console.log(e.target.value), setQuery({ type: e.target.value })
					)}
					placeholder="Type"
				/>
				<button type="submit" disabled={loading}>
					Search
				</button>
			</form>
			{loading ? (
				<div>Searching...</div>
			) : (
				(console.log(data),
				data.map(item =>
					item.imageUrl ? (
						<ul>
							<li key={item.id} className="cardImage">
								<img src={item.imageUrl}></img>
							</li>
						</ul>
					) : (
						<li key={item.id} className="cardImage">
							<div className="card">
								<p>{item.name}</p>
							</div>
						</li>
					)
				))
			)}
		</div>
	);
}

export default Search;
