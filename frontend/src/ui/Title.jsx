import  {React, memo } from "react";

export const Title = memo(({ children, ...props }) => {
	const { wrappClass, image ,txtClass} = props;
	return (
		<div className={wrappClass}>
			{image ? <img src={image} alt="" /> : null}
            <div className={txtClass}>{children}</div>
		</div>
	);
});
