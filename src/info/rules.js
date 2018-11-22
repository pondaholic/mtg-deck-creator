import React from 'react';

export default class Rules extends React.Component {
	render() {
		return (
			<div className="rules">
				You can download the Basic Rules as a PDF from the official MTG site{' '}
				<a href="https://magic.wizards.com/en/magic-gameplay" target="_blank">
					here.
				</a>
				<br />
				If you're looking for the Comprehensive Rules that contain all the
				specific rules, it can be found in PDF format{' '}
				<a
					href="http://media.wizards.com/2018/downloads/MagicCompRules%2020181005.pdf"
					target="_blank"
				>
					here.
				</a>
			</div>
		);
	}
}
