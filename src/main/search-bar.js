import React from 'react';
import { Formik } from 'formik';

//search "bar" should only be responsible for sending values to parent
export default function Searchbar(props) {
	return (
		<Formik
			initialValues={{ name: '', type: '', color: '' }}
			onSubmit={values => {
				// console.log(values);
				props.handleSearch(values);
			}}
		>
			{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						placeholder="Name"
					/>
					{/* {errors.email && touched.email && errors.email} */}
					<input
						type="text"
						name="type"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.type}
						placeholder="Type"
					/>
					{/* {errors.password && touched.password && errors.password} */}
					<input
						type="text"
						name="color"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.color}
						placeholder="Color"
					/>
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
}
