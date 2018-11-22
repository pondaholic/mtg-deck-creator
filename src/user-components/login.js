import React from 'react';
import { Formik } from 'formik';

import '../component-css/login.css';

export default function Login() {
	return (
		<div className="login">
			<h2 className="login-user">Welcome Back!</h2>
			<Formik
				initialValues={{ username: '', password: '' }}
				validate={values => {
					let errors = {};
					if (!values.username) {
						errors.username = 'Username Required';
					}
					if (!values.password) {
						errors.password = 'Please Create a Password';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
				}}
			>
				{({
					values,
					errors,
					handleSubmit,
					handleBlur,
					isSubmitting,
					touched,
					handleChange
				}) => (
					<form onSubmit={handleSubmit}>
						{errors.username && touched.username && errors.username}
						<input
							type="username"
							name="username"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.username}
							placeholder="Username"
						/>
						{errors.password && touched.password && errors.password}
						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							placeholder="Password"
						/>
						<button type="submit" disabled={isSubmitting}>
							Log In
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
