import { React, useCallback, useMemo } from "react";
import { IMAGES } from "../assets/IMAGES";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Spiner } from "../ui/Spiner";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";
import { useLoginIn } from "../hooks/useLoginIn";
import { useForm } from "react-hook-form";
export const LoginIn = () => {
	const {
		register,
		handleSubmit,
		/* watch, */
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});
	/* let password = watch("userPassword"); */
	
	const inputs = useMemo(() => {
		return [
			{
				className: "signup",
				type: "email",
				placeholder: "Enter Email",
				image: IMAGES.email,
				id: "userEmail",
				autoComplete: "email",
				reactthform: {
					...register("userEmail", {
						required: "Email is required",
						pattern: {
							value: /^\S+@\S+$/i,
							message: "Invalid email format",
						},
					}),
				},
			},
			{
				className: "signup",
				type: "password",
				placeholder: "Enter Password",
				image: IMAGES.password,
				id: "userPassword",
				autoComplete: "current-password",
				reactthform: {
					...register("userPassword", {
						required: "enter password",
						pattern: {
							value: /[\d\D]/gi,
							message: "Latin letters and numbers",
						},
					}),
				},
			},
		];
	}, [register]);
	const [fetching, LoadingState] = useLoginIn();
	const fecthmemo = useCallback(
		(data) => {
			fetching(data, );
		},
		[fetching]
	);
	return (
		<div className="form--wrapper">
			<div className="loginin__form--inner">
				<img
					className="loginin__image-wrapper"
					src={IMAGES.loginin}
					alt=""
				/>
				<div className="form--conten">
					<h1 className="sigup--title">Sign In</h1>
					<Form
						className="form"
						id="signup"
						onSubmit={() => handleSubmit(fecthmemo)}
					>
						{inputs.map((input) => {
							return (
								<Input
									key={input.id}
									{...input}
									errors={errors[input.id]}
									imageClass="reg_input"
								/>
							);
						})}
					</Form>

					<Button
						type="submit"
						classname="signup-button"
						form="signup"
					>
						Login
					</Button>
					{LoadingState ? <Spiner /> : <></>}
					<p className="signup-reg-link" /* ref={signInRef} */>
						Don’t have an account?
						<Link to="/signup"> Create One</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
