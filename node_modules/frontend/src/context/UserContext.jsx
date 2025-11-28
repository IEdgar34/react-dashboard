import { React, useState, useMemo } from "react";
import { createContext } from "react";
export const UserContext = createContext({});
export const UserContextProvider = ({ children }) => {
	const [userLogState, setUserLogState] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		lastName: "",
		userName: "",
		userEmail: "",
		userPassword: "",
		userConfirmPassword: "",
	});

	const value = useMemo(() => {
		return { userLogState, setUserLogState, formData, setFormData };
	}, [formData, userLogState]);

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
