import { React } from "react";
import { Header } from "../components/header/Header";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { Aside } from "../components/Aside/Aside";
const HomePage = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<main className="main">
				<Aside />
				<Dashboard />
			</main>
		</div>
	);
};

export default HomePage;
