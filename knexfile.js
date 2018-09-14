module.exports = {
	development: {
		client: 'pg',
		connection: {
			user: 'dev',
			database: 'mtg-app'
		},
		debug: true, // http://knexjs.org/#Installation-debug
		pool: { min: 2, max: 10 }
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
};
