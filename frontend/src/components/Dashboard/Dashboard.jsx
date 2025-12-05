import React, { memo } from "react";
import Style from "./Dashboard.module.scss";
export const Dashboard = memo(({ children }) => {
	return <div className={Style.dashboard}>{children}</div>;
});
