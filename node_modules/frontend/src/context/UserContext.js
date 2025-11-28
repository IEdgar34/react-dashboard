import { createSlice, configureStore } from "@reduxjs/toolkit";

export const UserContext = createSlice({
	name: "form",
	initialState: {
		isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
		inputData: {
			name: "",
			lastName: "",
			userName: "",
			userEmail: "",
			userPassword: "",
			userConfirmPassword: "",
		},
		isLoadin: true,
	},

	reducers: {
		userAuth: (state, action) => {
			state.isAuth = action.payload;
			localStorage.setItem("isAuth", action.payload);
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

export const store = configureStore({
	reducer: {
		form: UserContext.reducer,
		loading: loading.reducer,
	},
});
