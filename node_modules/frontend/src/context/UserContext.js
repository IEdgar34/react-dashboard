import { createSlice, configureStore } from "@reduxjs/toolkit";

export const UserContext = createSlice({
	name: "form",
	initialState: {
		isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
		isLoading: true,
		user: {},
	},

	reducers: {
		userAuth: (state, action) => {
			state.isAuth = action.payload;
			localStorage.setItem("isAuth", action.payload);
		},
		setUserData: (state, action) => {
			state.user = action.payload;
		},
		isLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const modalState = createSlice({
	name: "modal",
	initialState: {
		modalIsOpen: false,
		modalChildren: null,
	},
	reducers: {
		modalChange: (state, action) => {
			state.modalIsOpen = state.modalIsOpen ? false : true;
			state.modalChildren = action.payload.children;
		},
	},
});
export const loading = createSlice({
	name: "loading",
	initialState: {
		state: true,
	},
	reducers: {
		changeLoadingState: (state, action) => {
			state.state = action.payload;
		},
	},
});

export const TasksRespons = createSlice({
	name: 'tasks',
	initialState: {
		isRespons: false,
		allTasks : [],
		completedtask : [],
		tasksState: {
			completed: 0,
			notCompleted: 0,
			inProgress: 0
		}
	},
	reducers: {
		get: (state) => {
			state.isRespons = state.isRespons ? false: true
		},
		addTask: (state,action) => {
			state.allTasks = action.payload
			
		},
		addCompletedTask: (state,action) => {
			state.completedtask = action.payload
		},
		updateTaskState: (state,action) => {
			state.tasksState = action.payload
		}
	}
})

export const store = configureStore({
	reducer: {
		form: UserContext.reducer,
		loading: loading.reducer,
		modal: modalState.reducer,
		tasks: TasksRespons.reducer,
	},
});
