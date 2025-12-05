import { React, memo } from "react";
import Style from "./Tasks.module.scss";
import { AddTask } from "../addtask/AddTask";
import { Task } from "../task/Task";
/* import { useSelector } from "react-redux"; */
import { useGetTasks } from "../../hooks/useGetTasks";
export const Tasks = memo(() => {
	//на хуке есть тригер из другого места
	const [userTasks] = useGetTasks();
	return (
		<div className={Style.tasks}>
			<AddTask />
			<div className={Style['tasks__wrapper']}>
				{userTasks === null ? 'Loading...'
				:userTasks?.tasks.length === 0 
				?"ЗАДАЧ НЕТ"
				: userTasks?.tasks.map((task) => {
						return <Task key={task.id} task={task} />;
				  })}
			</div>
			
		</div>
	);
});
