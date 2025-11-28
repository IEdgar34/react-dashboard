import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const Publiclayout = () => {
	const isAuth = useSelector((state) => state.form.isAuth);
	console.log(isAuth,'publick')
	return <> {/* !isAuth ?  */<Outlet /> /* : <Navigate to="/" /> */} </>;
};
