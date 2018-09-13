DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS decks;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
	id serial PRIMARY KEY,
	username text NOT NULL,
	-- pass text NOT NULL
);

CREATE TABLE decks
(
	id serial PRIMARY KEY,
	name text NOT NULL,
	users_id INT NOT NULL REFERENCES users,
);

CREATE TABLE cards
(
	cards_id text NOT NULL,
	unique_url text NOT NULL,
	users_id INT NOT NULL REFERENCES users,
	decks_id INT NOT NULL REFERENCES decks
);