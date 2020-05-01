import React from 'react';
import Button from './buttons';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		alignContent: 'center',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: 'black',
	},
	button: {
		padding: theme.spacing(1),
	},
}));

export default function CreateCards(props) {
	const classes = useStyles();

	console.log(props);

	return props.data.length !== 0 ? (
		<Grid container spacing={1}>
			<Grid container item xs={12} spacing={3}>
				{props.data.map((item) => {
					return item.imageUrl ? (
						<Grid item xs={4} key={`grid ${item.id}`}>
							<Paper className={classes.paper} key={item.id}>
								<img src={item.imageUrl} />
								<Button className={classes.button} value={item} />
							</Paper>
						</Grid>
					) : (
						''
					);
				})}
			</Grid>
		</Grid>
	) : (
		<Grid container spacing={1}>
			No Results to Show
		</Grid>
	);
}
