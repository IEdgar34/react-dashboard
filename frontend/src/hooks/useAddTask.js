import { React, useCallback } from "react";
import { Api } from "../API/Api";
import {TasksRespons,store} from '../context/UserContext'
export const useAddTask = (callBack) => {
	const {get} = TasksRespons.actions
	const addTaskHelper = useCallback(async (data) => {
		data.status = 'Not Started'
		try {
			const respons = await Api.addTask(data);
			const json = await respons.json()
			if (json.success) {
				store.dispatch(get())
				callBack?.()
			}
		} catch (err) {
			console.log(err);
		}
	}, [get,callBack]);
	return addTaskHelper;
};
