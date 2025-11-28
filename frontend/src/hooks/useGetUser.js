import { React, useEffect, useState } from "react";
import { Api } from "../API/Api";
export const useGetUser = () => {
	const [requestState, setRequestState] = useState(false);
	const [user, setUser] = useState({
		name: "AAAAd",
		lastName: "aaaa",
		email: "@",
	});
	useEffect(() => {
		setRequestState(true);
		async function get() {
			try {
				const respons = await Api.getUser();
				const json = await respons.json();
				setUser(json.user);
				localStorage.setItem(
					"user",
					JSON.stringify({ ...json.user, userPassword: "" })
				);
				setRequestState(false);
			} catch (err) {
				setRequestState(false);
				console.log(err);
			}
		}
		get();
	}, []);
	return [user, requestState];
};
