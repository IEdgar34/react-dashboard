import { React, memo } from "react";
import { IMAGES } from "../../assets/IMAGES";
import Style from "./UserProfilePreview.module.scss";
import { useGetUser } from "../../hooks/useGetUser";
export const UserProfilePreview = memo(() => {
	const  [user,requestState] = useGetUser()
	return (
		<div className={Style["user__image-wrapper"]}>
			<img
				className={Style["user-image"]}
				src={IMAGES.userImage}
				alt="user"
			/>

			<div className={Style["user__info"]}>
				<div
					className={`${Style["user__info-name"]}  ${Style["user__info-descr"]}`}
				>
					{requestState ? 'NAME': `${user.name} ${user.lastName}`}
				</div>
				<div
					className={`${Style["user__info-email"]} ${Style["user__info-descr"]}`}
				>
					{requestState ? 'EMAIL': user.userEmail}
				</div>
			</div>
		</div>
	);
});
