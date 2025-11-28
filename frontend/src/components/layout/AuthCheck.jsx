import { React, useEffect, useState } from "react";
import { UserContext, store } from "../../context/UserContext";
import { Api } from "../../API/Api";
import { Outlet, Navigate } from "react-router-dom";
import { LoadingIndicator } from "../../ui/LoadingIndicator";
export const AuthCheck = () => {
	const { userAuth } = UserContext.actions;
	const [state, setState] = useState(true);
	useEffect(() => {
		async function checksUser() {
			try {
				const resp = await Api.check();
				if (resp.status === 200) {
					store.dispatch(userAuth(true));
					setState(false);
				} else {
					setState(false);
					store.dispatch(userAuth(false));
				}
			} catch (err) {
				setState(false);
				store.dispatch(userAuth(false));
				throw new Error(err);
			}
		}
		checksUser();
	}, [userAuth]);
	if (state) {
		return <LoadingIndicator LoadingState={state} />;
	}
	return <Outlet />;
};
