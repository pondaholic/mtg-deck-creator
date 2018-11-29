import React from 'react';

import '../component-css/rules.css';

export default class Rules extends React.Component {
	render() {
		return (
			<div className="rules">
				<h2>Newbies!</h2>
				<p>
					If you're completely new to MTG, there's a great way to start{' '}
					<a
						href="https://magic.wizards.com/en/new-to-magic"
						target="_blank"
						rel="noopener noreferrer"
					>
						here.
					</a>
				</p>
				<h2>Basic Rules</h2>
				<p>
					You can download the Basic Rules as a PDF from the official MTG site{' '}
					<a
						href="https://magic.wizards.com/en/magic-gameplay"
						target="_blank"
						rel="noopener noreferrer"
					>
						here.
					</a>
				</p>
				<h2>Comprehensive Rules</h2>
				<p>
					If you're looking for the Comprehensive Rules that contain all the
					specific rules, it can be found in PDF format{' '}
					<a
						href="http://media.wizards.com/2018/downloads/MagicCompRules%2020181005.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						here.
					</a>
				</p>
				<h2>Banned Cards</h2>
				<p>
					MTG has many iterations and is an ever-evolving game, which means
					certain card-combinations have become illegal to play. Find out which
					cards can no longer be played in tournaments, even though you can
					annoy the living sh*t out of your friends.
				</p>
				<p>
					Full list can be found{' '}
					<a
						href="https://magic.wizards.com/en/game-info/gameplay/rules-and-formats/banned-restricted"
						target="_blank"
						rel="noopener noreferrer"
					>
						here.
					</a>
				</p>
			</div>
		);
	}
}
