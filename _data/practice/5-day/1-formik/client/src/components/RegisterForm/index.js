import React from "react";

import axios from "axios";

import styles from "./styles.module.css";
import { useFormik } from "formik";
import validations from "./validations";

function RegisterForm() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			passwordConfirm: "",
		},
		onSubmit: (values, bag) => {
			axios
				.post("http://localhost:4000/add-user", values)
				.then(function (response) {
					console.log(response.data);
				})
				.catch(function (error) {
					console.log(error);
				})
				.finally(() => bag.setSubmitting(false));
		},
		validationSchema: validations,
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>isDirty: {formik.dirty.toString()}</div>
				<div>isSubmitting: {formik.isSubmitting.toString()}</div>
				<br />
				<br />
				<div>
					<label>First Name</label>
					<input
						id="firstName"
						name="firstName"
						placeholder="First Name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.firstName && formik.touched.firstName && (
						<div className={styles.error}>{formik.errors.firstName}</div>
					)}
				</div>

				<div>
					<label>Last Name</label>
					<input
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.lastName && formik.touched.lastName && (
						<div className={styles.error}>{formik.errors.lastName}</div>
					)}
				</div>

				<div>
					<label>E-mail</label>
					<input
						id="email"
						name="email"
						placeholder="E-mail"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.email && formik.touched.email && (
						<div className={styles.error}>{formik.errors.email}</div>
					)}
				</div>

				<div>
					<label>Password</label>
					<input
						id="password"
						name="password"
						placeholder="Password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.password && formik.touched.password && (
						<div className={styles.error}>{formik.errors.password}</div>
					)}
				</div>

				<div>
					<label>Password Confirm</label>
					<input
						id="passwordConfirm"
						name="passwordConfirm"
						placeholder="Password Confirm"
						type="password"
						value={formik.values.passwordConfirm}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
						<div className={styles.error}>{formik.errors.passwordConfirm}</div>
					)}
				</div>

				<button type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Loading..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
