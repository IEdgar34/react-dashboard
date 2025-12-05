import  {React, memo } from "react";
import { IMAGES } from "../assets/IMAGES";
export const Calendar = memo(() => {

	return (
		<div>
			<img src={IMAGES.calendar} alt="" />
			<div></div>
		</div>
	);
});
