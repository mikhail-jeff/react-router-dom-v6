import useTheme from "../../contexts/theme";

const ThemeButton = () => {
	const { themeMode, lightTheme, darkTheme } = useTheme();

	const onChangeBtn = () => {
		if (themeMode === "dark") {
			lightTheme();
		} else {
			darkTheme();
		}
	};

	return (
		<label className="relative inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				value=""
				className="sr-only peer"
				onChange={onChangeBtn}
				checked={themeMode === "dark"}
			/>
			<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  text-white"></div>
			<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-700">Toggle Theme</span>
		</label>
	);
};

export default ThemeButton;
