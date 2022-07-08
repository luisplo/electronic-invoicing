import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/index.css";
import Loader from "./views/Loader";
import "./i18n";

import NotFound from "./views/NotFound";
const Login = lazy(() => import("./views/Login"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={
					<Suspense delayMs={500} fallback={<Loader />}>
						<Login />
					</Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<Suspense delayMs={500} fallback={<Loader />}>
						<NotFound />
					</Suspense>
				}
			/>
		</Routes>
	</BrowserRouter>
);
