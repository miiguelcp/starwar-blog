import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import { SinglePeople, SinglePlanet, SingleVehicle } from "./views/single";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import AppContextProvider from "./store/AppContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<AppContextProvider>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<div className="container-fluid">
							<Navbar />
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/character-info/:id">
									<SinglePeople />
								</Route>
								<Route exact path="/planet-info/:id">
									<SinglePlanet />
								</Route>
								<Route exac path="/vehicle-info/:id">
									<SingleVehicle />
								</Route>
							</Switch>
							<Footer />
						</div>
					</ScrollToTop>
				</BrowserRouter>
			</AppContextProvider>
		</div>
	);
};

export default Layout;
