import { React, memo } from "react";
import Style from './Content.module.scss';
export const Content = memo(({children}) => {
	return <div className={Style.content}> {children}</div>;
});
