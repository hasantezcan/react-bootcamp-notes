import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

function Button() {
	const { theme, setTheme } = useContext(ThemeContext);

	const newTheme = theme === "light" ? "dark" : "light";

	return (
		<div>
			<button onClick={() => setTheme(newTheme)}>
				Change Theme - {newTheme}
			</button>
		</div>
	);
}

export default Button;
