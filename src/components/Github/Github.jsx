// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("https://api.github.com/users/hiteshchoudhary")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	const data = useLoaderData();

	console.log(data);

	return (
		<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
			<div className="rounded-full w-40 h-40 mx-auto overflow-hidden mt-5">
				<img
					src={data.avatar_url}
					alt=""
					width={300}
				/>
			</div>
			<p>Github followers: {data.followers}</p>
			<p className="mt-4">Github Bio: {data.bio}</p>
			<p className="mt-4">URL: {data.html_url}</p>
		</div>
	);
};

export default Github;
