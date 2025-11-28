import { React, memo } from "react";

export const Button = memo((props) => {
	const { type = "submit", classname, form } = props;
	return (
		<button form={form} className={`button ${classname}`} type={type}>
			{props.children}
		</button>
	);
});
