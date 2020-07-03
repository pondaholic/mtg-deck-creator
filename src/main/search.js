import React, { useState } from 'react';
import axios from 'axios';

import CheckboxLabels from '../components/checkBoxes';
import Views from './views';
import CreateCards from '../components/card';
import Loading from '../components/loading';
import Grid from '@material-ui/core/Grid';

import '../component-css/search.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		alignContent: 'center',
	},
	response: {
		padding: theme.spacing(1),
		textAlign: 'center',
		backgroundcolor: 'black',
	},
}));

function Search() {
	const classes = useStyles();
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
			// console.log('search', console.log(uri, key, query));
			const result = await axios.get(uri);
			setData(result.data.cards);
			return setLoading(false);
		};
		fetchData();
	};

	const isRoot =
		window.location.href.match(/search/) ||
		!window.location.href.match(/rules/);

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
								placeholder="Card Name"
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
			{isRoot ? (
				<Grid
					container
					className={classes.root}
					style={{ alignContent: 'center' }}
				>
					{loading ? <Loading /> : ''}
					{data.length !== 0 ? <CreateCards data={data} /> : ''}
				</Grid>
			) : (
				<Views />
			)}
		</div>
	);
}

export default Search;
