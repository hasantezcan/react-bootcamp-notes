import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

function Title() {
	const { theme } = useContext(ThemeContext);

	return <div>Active Theme: {theme}</div>;
}

export default Title;
