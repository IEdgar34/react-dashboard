import { React, useEffect, useState } from "react";
import { Api } from "../API/Api";
import { UserContext, store } from "../context/UserContext";
export const useGetUser = () => {
	const { setUserData, isLoading } = UserContext.actions;
	const [requestState, setRequestState] = useState(false);
	const [user, setUser] = useState({
		name: "AAAAd",
		lastName: "aaaa",
		email: "@",
		tasks: [],
	});
	useEffect(() => {
		setRequestState(true);
		store.dispatch(isLoading(true));
		async function get() {
			try {
				const respons = await Api.getUser();
				const json = await respons.json();
				setUser(json.user);
				localStorage.setItem(
					"user",
					JSON.stringify({ ...json.user, userPassword: "" })
				);
				store.dispatch(setUserData(json));
				store.dispatch(isLoading(false));
				setRequestState(false);
			} catch (err) {
				setRequestState(false);
				store.dispatch(isLoading(false));
				console.log(err);
			}
		}
		get();
	}, [isLoading,setUserData]);
	return [user, requestState];
};
