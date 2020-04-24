import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
				<Route exact path="/profile">
					<Profile />
				</Route>
			</div>
		</Router>
	);
};

export default App;
