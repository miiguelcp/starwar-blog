import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const planetImage = "https://i.pinimg.com/originals/c8/92/85/c89285262e9a1e48f9c845a45f20a8e3.png";
export const PlanetInfo = ({ info }) => {
	return (
		<>
			<div className="container d-flex">
				<row>
					<div className="jumbotron">
						<img
							src={planetImage}
							alt="..."
							style={{
								width: "28rem",
								height: "20rem",
								border: "1px solid black",
								marginRight: "18rem",
								marginLeft: "5rem"
							}}
						/>
					</div>
				</row>
				<div className="float-end">
					<h1 className="display-4">{info && info.result.properties.name}</h1>
					<p className="lead">{info && info.result.description}</p>
					<div className="d-flex flex-row">
						<h2>Description:</h2>

						<ul className="fs-5 " style={{ listStyle: "none" }}>
							<li className="fw-bold">{`Diameter: ${info && info.result.properties.diameter}`}</li>
							<li className="fw-bold">{`Rotation Period: ${info &&
								info.result.properties.rotation_period}`}</li>
							<li className="fw-bold">{`Orbital Period: ${info &&
								info.result.properties.orbital_period}`}</li>
							<li className="fw-bold">{`Gravity: ${info && info.result.properties.gravity}`}</li>
							<li className="fw-bold">{`Population ${info && info.result.properties.population}`}</li>
							<li className="fw-bold">{`Climate: ${info && info.result.properties.climate}`}</li>
							<li className="fw-bold">{`Surface Water ${info &&
								info.result.properties.surface_water}`}</li>
							<li className="fw-bold">{`Terrain: ${info && info.result.properties.terrain}`}</li>
						</ul>
					</div>
				</div>
			</div>

			<row>
				<div className="col d-flex justify-content-center" style={{ paddingTop: "10rem" }}>
					<Link to="/" className="text-light btn btn-dark">
						Click here to get home!
					</Link>
				</div>
			</row>
		</>
	);
};

PlanetInfo.propTypes = {
	info: PropTypes.object
};
