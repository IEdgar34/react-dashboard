import { React, memo, useEffect, useState } from "react";
import style from "./DatePreview.module.scss";
export const DatePreview = memo(() => {
	const dateFormater = Intl.DateTimeFormat(
		Intl.DateTimeFormat().resolvedOptions().locale,
		{
			day: "numeric",
			month: "numeric",
			year: "numeric",
			weekday: "long",
		}
	);
	const [dateState, setDateState] = useState(() => {
		const DDMMYY = dateFormater
			.format(new Date())
			.split(",")[1]
			.split(".")
			.filter(Boolean)
			.map((item, index) => {
				if (index !== 2) {
					return item.replace(/\D/gi, "") + "/";
				} else {
					return item.replace(/\D/gi, "");
				}
			});
		return {
			weekDay: dateFormater.format(new Date()).split(",")[0],
			dateArray: DDMMYY,
		};
	});
	useEffect(() => {
		const now = new Date();
		const msUntilNextDay =
			new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) -
			now;

		setTimeout(() => {
			setDateState(() => {
				const DDMMYY = dateFormater
					.format(new Date())
					.split(",")[1]
					.split(".")
					.filter(Boolean)
					.map((item, index) => {
						if (index !== 2) {
							return item.replace(/\D/gi, "") + "/";
						} else {
							return item.replace(/\D/gi, "");
						}
					});
				return {
					weekDay: dateFormater.format(new Date()).split(",")[0],
					dateArray: DDMMYY,
				};
			});
		}, msUntilNextDay);
	}, [dateState, dateFormater]);

	return (
		<div className={style["date-preview"]}>
			<div className={style["date-preview_weekday"]}>
				{dateState.weekDay}
			</div>
			<div className={style["date-preview_date-string"]}>
				{dateState.dateArray}
			</div>
		</div>
	);
});
