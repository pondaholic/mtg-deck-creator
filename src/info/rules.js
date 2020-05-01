import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		alignContent: 'center',
	},
	text: {
		textAlign: 'center',
	},
	type: {
		padding: theme.spacing(1),
		textAlign: 'center',
		'font-family': 'sans-serif',
	},
}));

export default function Rules() {
	const classes = useStyles();

	return (
		<Grid container spacing={1}>
			<Container maxWidth="sm">
				<Typography
					className={classes.text}
					component="div"
					style={{
						backgroundColor: 'transparent',
						height: '80vh',
						align: 'center',
					}}
				>
					<Typography className={classes.type} variant="h5">
						Newbies!
					</Typography>
					<Typography className={classes.type} variant="body1">
						If you're completely new to MTG, there's a great way to start{' '}
						<a
							href="https://magic.wizards.com/en/new-to-magic"
							target="_blank"
							rel="noopener noreferrer"
						>
							here.
						</a>
					</Typography>
					<Typography className={classes.type} variant="h5">
						Basic Rules
					</Typography>
					<Typography className={classes.type} variant="body1">
						You can download the Basic Rules as a PDF from the official MTG site{' '}
						<a
							href="https://magic.wizards.com/en/magic-gameplay"
							target="_blank"
							rel="noopener noreferrer"
						>
							here.
						</a>
					</Typography>
					<Typography className={classes.type} variant="h5">
						Comprehensive Rules
					</Typography>
					<Typography className={classes.type} variant="body1">
						If you're looking for the Comprehensive Rules that contain all the
						specific rules, it can be found in PDF format{' '}
						<a
							href="http://media.wizards.com/2018/downloads/MagicCompRules%2020181005.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							here.
						</a>
					</Typography>
					<Typography className={classes.type} variant="h5">
						Banned Cards
					</Typography>
					<Typography className={classes.type} variant="body1">
						MTG has many iterations and is an ever-evolving game, which means
						certain card-combinations have become illegal to play. Find out
						which cards can no longer be played in tournaments, even though you
						can annoy the living sh*t out of your friends.
					</Typography>
					<Typography className={classes.type} variant="body1">
						Full list can be found{' '}
						<a
							href="https://magic.wizards.com/en/game-info/gameplay/rules-and-formats/banned-restricted"
							target="_blank"
							rel="noopener noreferrer"
						>
							here.
						</a>
					</Typography>
				</Typography>
			</Container>
		</Grid>
		// </div>
	);
}
