import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const uri = `https://api.magicthegathering.io/v1/cards/?name=${query}`;

	const handleSubmit = e => {
		e.preventDefault();
		console.log('handleSubmit');

		const fetchData = async () => {
			console.log('search', console.log(uri));
			const result = await axios.get(uri);
			// console.log('result: ', result);
			return setData(result.data.cards);
		};
		fetchData();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="name"
					type="text"
					onChange={e => (
						console.log(e.target.value), setQuery(e.target.value)
					)}
					placeholder="Name"
				/>
				<button type="submit">Search</button>
			</form>
			{data ? (
				(console.log(data),
				data.map(item =>
					item.imageUrl ? (
						<li key={item.id}>
							<img src={item.imageUrl}></img>
						</li>
					) : (
						console.log('no image')
					)
				))
			) : (
				<div />
			)}
		</div>
	);
}

export default Search;
