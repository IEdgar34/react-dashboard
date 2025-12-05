import { React, memo } from "react";
import Style from "./Modal.module.scss";
import { modalState, store } from "../../context/UserContext";
import { useSelector } from "react-redux";
export const Modal = memo(({ children }) => {
	const { modalIsOpen } = useSelector((state) => state.modal);
	const { modalChange } = modalState.actions
	return (
		<div
			className={`${Style["modal--wrapper"]} ${
				modalIsOpen ? Style["modal--wrapper_active"] : ""
			}`}
		>
			<div
				onClick={(e) =>
					store.dispatch(
						modalChange({ class: e.target.className, children: "" })
					)
				}
				className={Style["modal__background-layer"]}
			></div>
			<div
				className={`${Style.modal} ${
					modalIsOpen ? Style["modal_active"] : ""
				}`}
			>
				{children}
			</div>
		</div>
	);
});
