import React, { useEffect, useState } from "react";
import { Api } from "../API/Api";
import { useSelector } from "react-redux";
import { TasksRespons,store } from "../context/UserContext";
export const useGetTasks = () => {
	const {addTask} = TasksRespons.actions
	//Тригер извне
    const {isRespons} = useSelector((state) => state.tasks)
    const [userTasks,setTasks ] = useState(null)
	useEffect(() => {
		async function getTaskHandler() {
			try {
				const respons = await Api.getTasks();
                const json = await respons.json()
                setTasks(json)
				store.dispatch(addTask(json.tasks))
			} catch (err) {
				console.log(err);
			}
		}
        getTaskHandler()
	}, [isRespons,addTask]);
	return [userTasks];
};
