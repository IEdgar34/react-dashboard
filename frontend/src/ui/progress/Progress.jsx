import { React, memo } from "react";
import Style from "./Progress.module.scss";
import { useSelector } from "react-redux";
export const Progress = memo(({ children, color, progress }) => {
	const { tasksState } = useSelector((state) => state.tasks);
	const style = {
		border: "10px solid transparent",
		transitionProperty: "background-image",
		transitionDuration: "0.7s",
		backgroundImage: `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) , conic-gradient(${color} ${
			(360 / 100) * tasksState[progress]}deg, #d9d9d9 ${	(360 / 100) * tasksState[progress]
		}deg 360deg),linear-gradient(#d9d9d9, #d9d9d9)`,

		backgroundOrigin: "border-box",
		backgroundClip: " content-box ,border-box ,border-box",
	};
	return (
		<>
			<div className={Style.progress} style={style}>
				{tasksState[progress]}%
			</div>

			<div>
				<span>{children}</span>
			</div>
		</>
	);
});
