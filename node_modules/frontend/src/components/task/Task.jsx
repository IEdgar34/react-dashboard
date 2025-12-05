import { React, memo } from "react";
import Style from "./Task.module.scss";
import { textSplicer } from "../../utils/textSplicer";
export const Task = memo(({ task }) => {
	const taskPriority = {
		Extreme: '#f21e1e',
		Moderate: '#3abeff',
		Low: '#05a301',
	}
	const taskstatus = {
		["Not Started"]: '#F21E1E',
		['In Progress']: '#0225FF',
		['Completed']: '#05A301',
	}
	return (
		<div className={Style.task}>
			<div className={Style["task-inner"]}>
				<div
				 	className={Style["task-prioriti_circle"]}
					style={{
						border: `2px solid ${taskstatus[task.status]}`
					}}
				>
				</div>
				<div className={Style["task-descr"]}>
					<div className={Style["task-title-wrapper"]}>
						<span className={Style["task-descr-title"]}>{textSplicer(task.title, 35) }</span>
						<div className={Style['task-control_btn']}> <span></span><span></span><span></span> </div>
					</div>
					<div className={Style["task-descr-wrapper"]}>
						<div className={Style["task-descr-text"]}> <span>{textSplicer(task.description, 45) }</span></div>
						<div className={Style["task-descr-img"]}>IMG</div>
					</div>
					<div className={Style["task-staus-wrapper"]}>
						<span className={Style['task-status_priority']}>Priority:
							<span style={{color: `${taskPriority[task.priority[0]]}`}}>
								{task.priority}
							</span>
						</span>
						<span className={Style['task-status_status']}>Status:
							<span style={{color: ` ${taskstatus[task.status]}`}}>
								{task.status}
							</span>
						</span>
						<span className={Style['task-status_date']}>Date:
							{task.createdDate}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
});
