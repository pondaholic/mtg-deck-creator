const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const knex = require('./knex');

const { PORT, CLIENT_ORIGIN } = require('./config');

// Create an Express application
const app = express();

// Log all requests
app.use(morgan('dev'));

// Create a static webserver
app.use(express.static('public'));

//CORS support
app.use(cors({ origin: CLIENT_ORIGIN }));

// Parse request body
app.use(express.json());

//create route handler
app.get('/api/cards', function(req, res, next) {
	knex('cards')
		.select('mtg_cards_id', 'unique_url')
		// .from('cards')
		.then(results => {
			res.json(results);
		})
		.catch(err => next(err));
});
app.post('/api/cards', function(req, res, next) {
	const { mtg_cards_id, unique_url } = req.body;
	// console.info(req.body);
	const newCard = {
		mtg_cards_id: mtg_cards_id,
		unique_url: unique_url,
		decks_id: 1
	};
	console.info(newCard);
	if (!newCard.mtg_cards_id) {
		const err = new Error('Please add a card');
		err.status = 400;
		return next(err);
	}
	knex('cards')
		.insert(newCard)
		.into('cards')
		.returning(['unique_url'])
		.then(card => {
			res.json(card);
		})
		.catch(err => {
			next(err);
		});
});

// Custom 404 Not Found route handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
	if (err.status) {
		const errBody = Object.assign({}, err, { message: err.message });
		res.status(err.status).json(errBody);
	} else {
		console.error(err);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

// Listen for incoming connections
app
	.listen(PORT, function() {
		console.info(`Server listening on ${this.address().port}`);
	})
	.on('error', err => {
		console.error(err);
	});
