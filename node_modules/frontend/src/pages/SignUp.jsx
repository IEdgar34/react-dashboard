import { React, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { IMAGES } from "../assets/IMAGES";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useRegistration } from "../hooks/useRegistration";
import { Spiner } from "../ui/Spiner";
import { Form } from "../components/Form";
import { Link } from "react-router-dom";
export const SignUp = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});
	let password = watch("userPassword");
	const inputs = useMemo(() => {
		return [
			{
				className: "signup",
				type: "text",
				placeholder: "Enter First Name",
				image: IMAGES.name,
				id: "name",
				autoComplete: "name",
				reactthform: {
					...register("name", {
						required: "Name is required",
						maxLength: 20,
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "invalid name",
						},
					}),
				},
			},
			{
				className: "signup",
				type: "text",
				placeholder: "Enter Last Name",
				image: IMAGES.lastname,
				id: "lastName",
				autoComplete: "name",
				reactthform: {
					...register("lastName", {
						required: "last name is required",
						maxLength: 20,
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "invalid name",
						},
					}),
				},
			},
			{
				className: "signup",
				type: "text",
				placeholder: "Enter User name",
				image: IMAGES.username,
				id: "userName",
				autoComplete: "name",
				reactthform: {
					...register("userName", {
						required: "User name is required",
					}),
				},
			},
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
			{
				className: "signup",
				type: "password",
				placeholder: "Confirm Password",
				image: IMAGES.confPassword,
				id: "userConfirmPassword",
				autoComplete: "current-password",
				reactthform: {
					...register("userConfirmPassword", {
						required: "confirm password",
						validate: (value) => {
							return (
								value === password ||
								"the passwords don't match"
							);
						},
					}),
				},
			},
		];
	}, [password, register]);
	const [pending, fetching, signInRef] = useRegistration();
	const fetchMemoize = useCallback(
		(data) => {
			fetching(data);
		},
		[fetching]
	);
	return (
		<div className="form--wrapper">
			<div className="form--inner">
				<img className="sign-up__ui-image" src={IMAGES.signUp} alt="" />
				<div className="form--conten">
					<h1 className="sigup--title">Sign Up</h1>
					<Form
						className="form"
						id="signup"
						onSubmit={() => handleSubmit(fetchMemoize)}
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
						Register
					</Button>
					{pending ? <Spiner /> : <></>}
					<p className="signup-reg-link" ref={signInRef}>
						Already have an account?{" "}
						<Link to="/loginin">Sign In</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
