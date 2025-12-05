import  {React, memo } from "react";
import { IMAGES } from "../assets/IMAGES";
export const Notification = memo(() => {
	return (
		<div>
			<img src={IMAGES.notification} alt="" />
		</div>
	);
});
