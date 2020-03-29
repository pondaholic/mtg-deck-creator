import React from 'react';
import { Formik } from 'formik';

import '../component-css/search-bar.css';

//search "bar" should only be responsible for sending values to parent
export default function Searchbar(props) {
	return (
		<Formik
			initialValues={{ name: '', type: '', color: '' }}
			onSubmit={(values, { setSubmitting }) => {
				// console.log(values);
				props.handleSearch(values);
				setSubmitting(false);
			}}
		>
			{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					<input
						className="name"
						type="text"
						name="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						placeholder="Name i.e. 'human,' 'elf,' 'minotaur,' etc... "
					/>
					{/* {errors.email && touched.email && errors.email} */}
					<input
						className="type"
						type="text"
						name="type"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.type}
						placeholder="Type such as 'land,' 'instant,' or 'creature'"
					/>
					{/* {errors.password && touched.password && errors.password} */}
					<input
						className="colors"
						type="text"
						name="color"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.color}
						placeholder="Color: 'blue,' 'black,' 'green,' 'red,'..."
					/>
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
}
