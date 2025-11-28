import { React, useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { LoadingIndicator } from "../../ui/LoadingIndicator";
export const GlobalLoader = () => {
	const location = useLocation();
	const [state, setState] = useState(false);
	useEffect(() => {
		setState(true);
		const timeout = setInterval(() => {
			if (document.readyState === "complete") {
				setState(false);
				clearInterval(timeout);
			}
		}, 100);
		return () => clearInterval(timeout);
	}, [location.pathname]);
	
	return (
		<>
			<LoadingIndicator LoadingState={state} />
			<Outlet />
		</>
	);
};
