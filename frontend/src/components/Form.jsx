import { React, memo } from "react";

export const Form = memo(({ children, onSubmit, ...props }) => {
	return (
		<form {...props} onSubmit={onSubmit()}>
			{children}
		</form>
	);
});
