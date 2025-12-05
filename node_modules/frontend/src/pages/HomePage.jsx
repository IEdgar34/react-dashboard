import { React } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { Aside } from "../components/Aside/Aside";
import { Modal } from "../components/modal/Modal";
import { useSelector } from "react-redux";
import { TaskCreateForm } from "../components/addtask/TaskCreateForm";
const HomePage = () => {
	const { modalChildren } = useSelector((state) => state.modal);
	const modalChilds = {
		TaskCreateForm: <TaskCreateForm />,
	};
	return (
		<div className="app-wrapper">
			<Header />
			<main className="main">
				<Aside />
				<Dashboard>
					<Outlet />
				</Dashboard>
			</main>
			<Modal>{modalChildren ? modalChilds[modalChildren] : null}</Modal>
		</div>
	);
};

export default HomePage;
