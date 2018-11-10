module.exports = {
	PORT: process.env.PORT || 8080,
	REACT_APP_API_BASE_URL:
		process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
	MTG_URL: 'https://api.magicthegathering.io/v1/cards'
};
