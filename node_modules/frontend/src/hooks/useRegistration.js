import { React, useState, useCallback, useRef } from "react";
import { Api } from "../API/Api";
import { UserContext, store } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useRegistration = () => {
	const signInRef = useRef();
	const navigate = useNavigate();
	const { userAuth } = UserContext.actions;
	const [pending, setPendibg] = useState(false);
	const fetching = useCallback(
		async (formData, ) => {
			setPendibg(true);
			if (Object.values(formData).includes("")) {
				alert("fill in all fields");
				setPendibg(false);
				return;
			}
			try {
				const respons = await Api.reg(formData);
				setPendibg(false);
				if (
					respons.message ===
					"a user with this address already exists"
				) {
					signInRef.current.scrollIntoView({
						behavior: "smooth",
					});
					return;
				}
				
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
				localStorage.setItem("token", respons.token);
				localStorage.setItem("userId", respons.id);
				store.dispatch(userAuth(true));
				navigate("/");
			} catch (err) {
				setPendibg(false);
				throw new Error(err.message);
			}
		},
		[userAuth, navigate]
	);

	return [pending, fetching, signInRef];
};
