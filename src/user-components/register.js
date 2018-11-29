import React from 'react';
import { Formik } from 'formik';

import '../component-css/register.css';

export default function Register(props) {
	return (
		<div className="register">
			<h2 className="welcome-user">Welcome to our MTG World!</h2>
			<p>
				Don't want to sign up just yet? Try out our{' '}
				<a href="#" onClick={e => props.handleDemo(e)}>
					<b>demo account</b>
				</a>
				.
			</p>
			<Formik
				initialValues={{ email: '', username: '', password: '' }}
				validate={values => {
					let errors = {};
					if (!values.email) {
						errors.email = 'Email Required';
					}
					if (!values.username) {
						errors.username = 'Username Required';
					}
					if (!values.password) {
						errors.password = 'Please Create a Password';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
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
						{errors.email && touched.email && errors.email}
						<input
							label="Email"
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							placeholder="Email"
						/>
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
							Create Me!
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
