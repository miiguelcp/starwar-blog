import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppContext } from "../../store/appContext";

const image = "https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg";
export const PlanetCard = ({ item }) => {
	const { store, actions } = useContext(AppContext);
	return (
		<div className="card" style={{ width: "600px", height: "320px" }}>
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text" />
				<Link to={`/planet-info/${item.uid}`} className="btn btn-dark">
					Learn More!
				</Link>
				<button
					type="button"
					onClick={event => {
						let url = `/planet-info/${item.uid}`;
						if (
							store &&
							store.favorites.find((favorite, index) => {
								return favorite.url === url;
							})
						) {
							let index = store.favorites.indexOf(
								store.favorites.find((favorite, index) => {
									return favorite.url === url;
								})
							);
							actions.removeFavorite(index);
						} else {
							actions.addToFavorite(item.name, url, true);
						}
					}}
					className="ms-4 btn border border-warning">
					{store &&
					store.favorites.find((favorite, index) => {
						return favorite.url === `/planet-info/${item.uid}`;
					}) ? (
						<i className="fas fa-heart text-warning" />
					) : (
						<i className="far fa-heart text-warning" />
					)}
				</button>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	item: PropTypes.object
};
