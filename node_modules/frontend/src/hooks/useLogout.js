import { React, useCallback, useState } from "react";
import { UserContext, store } from "../context/UserContext";
import { Api } from "../API/Api";
export const useLogout = () => {
	const { userAuth } = UserContext.actions;
	const [requestState, setRequestState] = useState(false);

	const logOut = useCallback(async () => {
		setRequestState(true);
		try {
			const respons = await Api.logout();
			const json = await respons.json();
			console.log(json);
			if (json.success) {
				store.dispatch(userAuth(false));
				setRequestState(false);
				localStorage.removeItem("token");
			}
			setRequestState(false);
		} catch (err) {
			setRequestState(false);
			console.log(err);
		}
	}, [userAuth]);
	return [requestState, logOut];
};
