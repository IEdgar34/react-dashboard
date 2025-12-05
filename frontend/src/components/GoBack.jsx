import { React, memo } from "react";

export const GoBack = memo(({children ,onClick, className}) => {
	return (
		<p
			className={className}
			onClick={/* (e) => */ onClick
				/* store.dispatch(
					modalChange({
						class: e.target.className,
						children: "",
					})
				) */
			}
           
		>
			{children}
		</p>
	);
});
