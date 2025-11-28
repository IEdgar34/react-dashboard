import { React } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export const AuthLayout = () => {
	const isAuth = useSelector((state) => state.form.isAuth);
	const userStatus = JSON.parse(localStorage.getItem("user"));
	return (
		<>
			{isAuth ? (
				<Outlet />
			) : userStatus ? (
				<Navigate to="/loginin" />
			) : (
				<Navigate to="/signup" />
			)}
		</>
	);
};
