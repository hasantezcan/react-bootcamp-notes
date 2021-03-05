import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(5).max(10).required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default schema;
