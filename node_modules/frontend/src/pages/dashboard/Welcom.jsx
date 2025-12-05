import React, { memo } from "react";
import Style from "./Dashboard.module.scss";
import { useSelector } from "react-redux";
export const Welcom = memo(() => {
	const userContext = useSelector((state) => state.form);
	const { user } = userContext.user;
	/* console.log(userContext) */
	return (
		<div className={Style["welcom-wrapper"]}>
			<p className={Style["welcom-name"]}>
				{userContext.isLoading
					? ""
					: ` Welcome back,${user.name}`}
			</p>
		</div>
	);
});
