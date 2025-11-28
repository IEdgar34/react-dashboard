import { useEffect } from "react";
import { store } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useUserIsReg = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!store.getState().form.isAuth) {
			navigate("/signup");
		}
	}, [navigate]);
};
