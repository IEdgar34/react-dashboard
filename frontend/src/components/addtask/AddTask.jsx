import { React, memo } from "react";
import { IMAGES } from "../../assets/IMAGES";
import Style from "./AddTask.module.scss";
import { modalState, store } from "../../context/UserContext";
export const AddTask = memo(() => {
	const { modalChange } = modalState.actions;
	return (
		<div className={Style["add-task"]}>
			<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
				<img src={IMAGES.pending} alt="pending" />
				<span style={{ color: "#FF6767", fontWeight: "600" }}>
					To-Do
				</span>
			</div>

			<div
				onClick={(e) => store.dispatch(modalChange({class:e.target.className,children: 'TaskCreateForm'}))}
				className="modal-close"
				style={{ display: "flex", alignItems: "center", gap: "5px", cursor:'pointer'}}
			>
				<img src={IMAGES.add} alt="add" />
				<span>Add task</span>
			</div>
		</div>
	);
});
