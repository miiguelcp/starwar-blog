import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const characterImage = "https://cdn.europosters.eu/image/750/posters/star-wars-characters-i4731.jpg";

export const CharacterInfo = ({ info }) => {
	return (
		<>
			<div className="container d-flex">
				<row>
					<div className="jumbotron">
						<img
							src={characterImage}
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
							<li className="fw-bold">{`Height: ${info && info.result.properties.height}`}</li>
							<li className="fw-bold">{`Mass: ${info && info.result.properties.mass}`}</li>
							<li className="fw-bold">{`Hair color: ${info && info.result.properties.hair_color}`}</li>
							<li className="fw-bold">{`Eyes color: ${info && info.result.properties.eye_color}`}</li>
							<li className="fw-bold">{`Skin color: ${info && info.result.properties.skin_color}`}</li>
							<li className="fw-bold">{`Birth year: ${info && info.result.properties.birth_year}`}</li>
							<li className="fw-bold">{`Gender: ${info && info.result.properties.gender}`}</li>
						</ul>
					</div>
				</div>
			</div>

			<row>
				<div className="col d-flex justify-content-center" style={{ paddingTop: "10rem" }}>
					<Link to="/" className="text-light btn btn-dark">
						Click here to see his planet!
					</Link>
				</div>
			</row>
		</>
	);
};

CharacterInfo.propTypes = {
	info: PropTypes.object
};
