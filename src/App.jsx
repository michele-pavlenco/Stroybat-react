import Project from "./components/project";
import Home from "./pages/Home";
import { Contact } from "./components/contact";
import Policy from "./components/policy";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="project/:projectId"
						// path="project"
						element={<Project />}
					/>
					<Route
						path="/contact"
						component={Contact}
					/>
					<Route
						path="/policy"
						element={<Policy />}
					/>
					<Route
						path="*"
						element={<NotFoundPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;
