import React from "react";

import Button from "./components/Button";
import Title from "./components/Title";

import { useContext } from "react";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";

function Container() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`App ${theme === "dark" ? "dark" : ""}`}>
			<Button />
			<hr />
			<Title />
		</div>
	);
}

export default Container;
