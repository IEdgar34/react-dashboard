import React, { memo } from "react";
import Style from "./Aside.module.scss";
import { IMAGES } from "../../assets/IMAGES";
import { UserProfilePreview } from "../user/UserProfilePreview";
import { Menu } from "../menu/Menu";
import { useLogout } from "../../hooks/useLogout";
export const Aside = memo(() => {
	const [requestState, logOut] = useLogout();
	return (
		<aside className={Style.aside}>
			<div className={Style.aside__inner}>
				<div className={Style["aside__content--wrapper"]}>
					<UserProfilePreview />
					<div className="nav--wrapper">
						<Menu />
						<div>
							<div className="logout" onClick={() => logOut()}>
								<img src={IMAGES.logout} alt="logout" />
								<span>Logout{requestState ? '...': null}</span>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</aside>
	);
});
