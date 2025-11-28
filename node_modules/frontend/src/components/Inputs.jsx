import { React, memo, useState, useEffect,useCallback } from "react";
import { Input } from "./Input";
export const Inputs = memo(({ inputList /*  formData, setFormData */ }) => {
	const [formData, setFormData] = useState(() => {
		return (
			JSON.parse(localStorage.getItem("formData")) || {
				name: "",
				lastName: "",
				userName: "",
				userEmail: "",
				userPassword: "",
				userConfirmPassword: "",
			}
		);
	});
	useEffect(() => {
		localStorage.setItem(
			"formData",
			JSON.stringify({
				...formData,
				userPassword: "",
				userConfirmPassword: "",
			})
		);
	}, [formData]);
	const setMemo = useCallback((id, value) => {
		setFormData((prev) => {
			return { ...prev, [id]: value };
		});
	}, []);
	return (
		<>
			{inputList.map((input) => {
				return (
					<Input
						key={input.id}
						{...input}
						value={formData[input.id]}
						onInput={setMemo}
						imageClass="reg_input"
					/>
				);
			})}
		</>
	);
});
