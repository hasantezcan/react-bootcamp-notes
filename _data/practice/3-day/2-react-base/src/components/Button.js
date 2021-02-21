import PropTypes from "prop-types";

function Button(props) {
	return <button {...props}>{props.text}</button>;
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	text: "Click",
	disabled: false,
};

export default Button;
