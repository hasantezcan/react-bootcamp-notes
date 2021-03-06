import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

const defaultTheme = localStorage.getItem("defaultTheme");

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(defaultTheme || "light");

	const values = {
		theme,
		setTheme,
	};

	useEffect(() => {
		localStorage.setItem("defaultTheme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContext;
