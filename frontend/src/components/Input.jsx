import { React, memo } from "react";
export const Input = memo(
	({
		image,
		id,
		imageClass,
		reactthform,
		errors,
		...props
	}) => {
		return (
			<div>
				<div className="input--wrapper">
					{image ? (
						<img
							src={image}
							className={` ${imageClass ? imageClass : ""}`}
							alt=""
						/>
					) : (
						<></>
					)}
					<input id={id} {...props} {...reactthform} />
				</div>
				<p className="errors">{errors?.message ? <span>{errors?.message}</span>: ''}</p>
			</div>
		);
	}
);
