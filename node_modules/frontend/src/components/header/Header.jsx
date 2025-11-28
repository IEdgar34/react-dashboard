import React from "react";
import Styles from "./Header.module.scss";
import { IMAGES } from "../../assets/IMAGES";
import { Input } from "../Input";
import { Link } from "react-router";
import { Notification } from "../Notification";
import { Calendar } from "../Calendar";
import { DatePreview } from "../date/DatePreview";
export const Header = () => {
	const serchInput = [
		{
			className: Styles["header__serch-inp"],
			type: "serch",
			placeholder: "Search your task here...",
			image: IMAGES.serch,
			id: "serch",
		},
	];

	return (
		<div className={Styles.header}>
			<div className={Styles.header__inner}>
				<Link to="/" className={Styles.header__title}>
					Dash<span>board</span>
				</Link>
				<div className={Styles["header__serch-wrapper"]}>
					<Input
						{...serchInput[0]}
						imageClass={Styles["header__serch-icon"]}
					/>
					<div className={Styles["header__icons-date"]}>
						<div
							
							className={Styles["header__icons-wrapper"]}
						>
							<Notification />
							<Calendar />
						</div>
						<DatePreview />
					</div>
				</div>
			</div>
		</div>
	);
};
