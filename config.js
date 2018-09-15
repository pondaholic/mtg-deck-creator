module.exports = {
	PORT: process.env.PORT || 8080,
	DATABASE_URL: process.env.DATABASE_URL || 'postgres://localhost/mtg-server',
	CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
	SERVER_BASE_URL: 'http://localhost:8080/api/cards'
};
