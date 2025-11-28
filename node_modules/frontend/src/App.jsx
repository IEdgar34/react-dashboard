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
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<GlobalLoader />}>
						<Route element={<AuthCheck />}>
							<Route element={<AuthLayout />}>
								<Route path="/" element={<HomePage />} />
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
