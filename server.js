const express = require('express');
const morgan = require('morgan');

const { PORT } = require('./config');

// Create an Express application
const app = express();

// Log all requests
app.use(morgan('dev'));

// Create a static webserver
app.use(express.static('public'));

// Parse request body
app.use(express.json());

//create route handler
app.get('/cards', function(req, res) {});
app.post('/cards', function(req, res) {});

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
