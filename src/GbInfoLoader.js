export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/mikhail-jeff");

	return response.json();
};
