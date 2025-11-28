import React, { useCallback, useState } from "react";
import { Api } from "../API/Api";
import { store, UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
export const useLoginIn = () => {
	const navigate = useNavigate();
	//состояние запроса
	const [loadingState, setLoadingState] = useState(false);
	const fetching = useCallback(
		async (data) => {
			const { userAuth } = UserContext.actions;
			setLoadingState(true);
			try {
				const respons = await Api.loginin(data);
				const responsObject = await respons.json();
				if (responsObject.success) {
					localStorage.setItem(
						"formData",
						JSON.stringify({
							name: "",
							lastName: "",
							userName: "",
							userEmail: "",
							userPassword: "",
							userConfirmPassword: "",
						})
					);
					localStorage.setItem("token", responsObject.token);
					localStorage.setItem("userId", responsObject.id);
					setLoadingState(false);
					store.dispatch(userAuth(true));
					navigate("/");
				}
				if (!responsObject.success) {
					alert(responsObject.message);
				}
				setLoadingState(false);
			} catch (err) {
				setLoadingState(false);
				throw new Error(err.message);
			}
		},
		[navigate, setLoadingState]
	);

	return [fetching, loadingState];
};
