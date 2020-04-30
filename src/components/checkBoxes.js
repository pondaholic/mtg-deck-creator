import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
	const [state, setState] = useState({
		blue: false,
		green: false,
		black: false,
		red: false,
		white: false
	});

	const handleChange = event => {
		console.log('original: ', state[event.target.name]);
		state[event.target.name]
			? setState({ ...state, [event.target.name]: false })
			: setState({ ...state, [event.target.name]: true });
		console.log(state);
	};

	return (
		<FormGroup row>
			<FormControlLabel
				control={
					<Checkbox checked={state.blue} onChange={handleChange} name="blue" />
				}
				label="Blue"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={state.green}
						onChange={handleChange}
						name="green"
					/>
				}
				label="Green"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={state.black}
						onChange={handleChange}
						name="black"
					/>
				}
				label="Black"
			/>
			<FormControlLabel
				control={
					<Checkbox checked={state.red} onChange={handleChange} name="red" />
				}
				label="Red"
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={state.white}
						onChange={handleChange}
						name="white"
					/>
				}
				label="White"
			/>
		</FormGroup>
	);
}
