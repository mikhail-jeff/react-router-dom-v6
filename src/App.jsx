import { useEffect, useState } from "react";
import Layout from "./Layout";
import { ThemeProvider } from "./contexts/theme";

function App() {
	const [themeMode, setThemeMode] = useState("light");

	const darkTheme = () => {
		setThemeMode("dark");
	};

	const lightTheme = () => {
		setThemeMode("light");
	};

	useEffect(() => {
		document.querySelector("html").classList.remove("dark", "light");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<div className="dark:bg-gray-800">
			<ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
				<Layout />
			</ThemeProvider>
		</div>
	);
}

export default App;
