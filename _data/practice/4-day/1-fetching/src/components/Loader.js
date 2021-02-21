import React from "react";

function Loader({ text, isVisible }) {
	if (!isVisible) return null;

	return <div>{text}</div>;
}

export default Loader;
