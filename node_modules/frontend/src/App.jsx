import { BrowserRouter, Route, Routes } from "react-router";
import { LoginIn } from "./pages/LoginIn.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import "./styles";
import HomePage from "./pages/HomePage.jsx";
import { AuthLayout } from "./components/layout/AuthLayout.jsx";
import { store } from "./context/UserContext.js";
import { Provider } from "react-redux";
import { Publiclayout } from "./components/layout/Publiclayout.jsx";
import { AuthCheck } from "./components/layout/AuthCheck.jsx";
import { GlobalLoader } from "./components/layout/GlobalLoader.jsx";
import { DashboardPage } from "./pages/dashboard/DashboardPage.jsx";
import { Vital } from "./pages/Vital.jsx";
import { MyTask } from "./pages/MyTask.jsx";
import { TaskCategoriPage } from "./pages/TaskCategoriPage.jsx";
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<GlobalLoader />}>
						<Route element={<AuthCheck />}>
							<Route element={<AuthLayout />}>
								<Route path="/" element={<HomePage />}>
									<Route index element={<DashboardPage/>} />
									<Route path="/vital" element={<Vital/>} />
									<Route path="/mytask" element={<MyTask/>} />
									<Route path="/taskcategories" element={<TaskCategoriPage/>} />
								</Route>
							</Route>
						</Route>

						<Route element={<Publiclayout />}>
							<Route path="/loginin" element={<LoginIn />} />
							<Route path="/signup" element={<SignUp />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
