const knexConfig = require('./knexfile');
const environment = process.env.ENVIRONMENT || 'development';
module.exports = require('knex')(knexConfig[environment]);
