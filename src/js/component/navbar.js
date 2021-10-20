import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../store/AppContext";

export const Navbar = () => {
	const { store, actions } = useContext(AppContext);

	let handleRemoveFav = index => {
		let navDropDown = document.querySelector("#navDropDown");
		let dropButton = document.querySelector("#dropdownMenuButton1");
		navDropDown.classList.add("dropdown-menu", "dropdown-menu-end", "show");
		navDropDown.setAttribute("data-bs-popper", "none");
		dropButton.classList.add("btn", "btn-primary", "dropdown-toggle", "show");
		dropButton.setAttribute("aria-expanded", "true");
		actions.removeFavorite(index);
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-0">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/star-wars.svg"
							style={{ width: "7rem", margin: "none" }}
						/>
					</span>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-dark dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites (<span className="dot">{store.favorites.length}</span>)
					</button>
					<ul
						id="navDropDown"
						className="dropdown-menu dropdown-menu-end"
						aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((favorite, index) => {
							return (
								<li className="d-flex align-items-center" key={index}>
									<Link to={favorite.url} className="dropdown-item">
										{favorite.favName}
									</Link>
									<i
										className="far fa-trash-alt pe-2"
										onClick={e => {
											handleRemoveFav(index);
											if (store.favorites.length === 1) {
												navDropDown.classList.remove("show");
												navDropDown.removeAttribute("data-bs-popper");
											}
										}}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
