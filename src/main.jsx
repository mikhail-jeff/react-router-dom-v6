import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

import { githubInfoLoader } from "./GbInfoLoader.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route
				path=""
				element={<Home />}
			/>
			<Route
				path="about"
				element={<About />}
			/>
			<Route
				path="contact"
				element={<Contact />}
			/>
			<Route
				path="contact"
				element={<Contact />}
			/>
			<Route
				path="user/"
				element={<User />}>
				<Route
					path=":userid"
					element={<User />}
				/>
			</Route>
			<Route
				loader={githubInfoLoader}
				path="github"
				element={<Github />}
			/>
			<Route
				path="*"
				element={<div className="text-center font-bold text-red-600 text-7xl py-52 h-full">PAGE NOT FOUND</div>}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
