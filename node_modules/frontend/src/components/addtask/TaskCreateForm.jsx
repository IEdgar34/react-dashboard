import { React, memo } from "react";
import Style from "./TaskCreateForm.module.scss";
import { Input } from "../Input";
import { IMAGES } from "../../assets/IMAGES";
import { store, modalState } from "../../context/UserContext";
import { Button } from "../Button";
import { GoBack } from "../GoBack";
import { useAddTask } from "../../hooks/useAddTask";
import { useForm } from "react-hook-form";
export const TaskCreateForm = memo(() => {
	const { modalChange } = modalState.actions;
	const { register, handleSubmit, reset, formState /* : { errors }, */ } =
		useForm({
			mode: "onChange",
		});
	const addTaskHelper = useAddTask(() => {
		reset({
			title: "",
			createdDate: "",
			priority: false,
			description: "",
		});
		store.dispatch(
			modalChange({
				class: 'modalClose',
				children: "",
			})
		);
	});
	return (
		<div className={Style["add-task-wrapper"]}>
			<div className={Style["add-task__control-wrapper"]}>
				<p className={Style["add-task__title"]}>Add New Task</p>
				<GoBack
					className={Style["add-task__back"]}
					onClick={(e) =>
						store.dispatch(
							modalChange({
								class: e.target.className,
								children: "",
							})
						)
					}
				>
					Go Back
				</GoBack>
			</div>
			<form
				onSubmit={handleSubmit(addTaskHelper)}
				id="add"
				className={Style["add-task-form"]}
			>
				<div className={Style["add-task__input-wrapper"]}>
					<div className={Style["add-task__input-group"]}>
						<label htmlFor="title">Title</label>
						<Input
							{...register("title", {
								required: "required",
							})}
							type="text"
							name="title"
							id="title"
							className={Style["add-task_input"]}
							errors={formState.errors["title"]}
						/>
					</div>
					<div className={Style["add-task__input-group"]}>
						<label htmlFor="createdDate">Date</label>
						<Input
							{...register("createdDate", {
								required: "required",
								pattern: {
									value: /^(0[1-9]|[12][0-9]|3[01])[.\- ]{1}(0[1-9]|1[0-2])[.\- ]{1}[0-9]{4}$/,
									message: "invalid date",
								},
							})}
							type="text"
							imageClass={Style["add-task_input-image"]}
							image={IMAGES.date}
							id="createdDate"
							name="createdDate"
							className={Style["add-task_input"]}
							errors={formState.errors["createdDate"]}
						/>
					</div>
				</div>
				<div className={Style["add-task__priority-wrapper"]}>
					<p className={Style["add-task__priority-title"]}>
						Priority
					</p>
					<div className={Style["add-task__checkbox-flex"]}>
						<div className={Style["add-task__checkbox-wrapper"]}>
							<div
								className={Style["add-task__checkbox-circle"]}
							></div>
							<div className={Style["add-task__checkbox-descr"]}>
								Extreme
							</div>
							<input
								type="checkbox"
								className={Style["add-task__checkbox-checkbox"]}
								{...register("priority")}
								value="Extreme"
							></input>
						</div>
						<div className={Style["add-task__checkbox-wrapper"]}>
							<div
								className={Style["add-task__checkbox-circle"]}
							></div>
							<div className={Style["add-task__checkbox-descr"]}>
								Moderate
							</div>
							<input
								type="checkbox"
								className={Style["add-task__checkbox-checkbox"]}
								{...register("priority")}
								value="Moderate"
							></input>
						</div>
						<div className={Style["add-task__checkbox-wrapper"]}>
							<div
								className={Style["add-task__checkbox-circle"]}
							></div>
							<div className={Style["add-task__checkbox-descr"]}>
								Low
							</div>
							<input
								type="checkbox"
								className={Style["add-task__checkbox-checkbox"]}
								{...register("priority")}
								value="Low"
							></input>
						</div>
					</div>
				</div>
				<div className={Style["add-task__descr-group"]}>
					<div className={Style["add-task__description-wrapper"]}>
						<p className={Style["add-task__description-title"]}>
							Task Description
						</p>
						<textarea
							placeholder="Start writing here....."
							name="description"
							id="description"
							{...register("description", {
								required: "required",
							})}
						></textarea>
						<p className="errors">
							{formState.errors["description"]?.message ? (
								<span>
									{formState.errors["description"]?.message}
								</span>
							) : (
								""
							)}
						</p>
					</div>
					<div className={Style["add-task__image-wrapper"]}>
						<p className={Style["add-task__image-title"]}>
							Upload Image
						</p>
						<div
							className={Style["add-task__image-container"]}
						></div>
					</div>
				</div>
			</form>
			<Button
				type="subbmit"
				classname={Style["add-task__form-button"]}
				form="add"
			>
				Done
			</Button>
		</div>
	);
});
