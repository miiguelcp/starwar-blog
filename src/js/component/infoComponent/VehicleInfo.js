import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const vehicleImage = "https://i.pinimg.com/originals/be/0e/fb/be0efb05daa1cf10c552b1de23949805.jpg";
export const VehicleInfo = ({ info }) => {
	return (
		<>
			<div className="container d-flex">
				<row>
					<div className="jumbotron">
						<img
							src={vehicleImage}
							alt="..."
							style={{
								width: "30rem",
								height: "27rem",
								border: "1px solid black",
								marginRight: "13rem",
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
							<li className="fw-bold">{`Model: ${info && info.result.properties.model}`}</li>
							<li className="fw-bold">{`Vehicle Class: ${info &&
								info.result.properties.vehicle_class}`}</li>
							<li className="fw-bold">{`Manufacturer: ${info &&
								info.result.properties.manufacturer}`}</li>
							<li className="fw-bold">{`Cost in credits: ${info &&
								info.result.properties.cost_in_credits}`}</li>
							<li className="fw-bold">{`Length ${info && info.result.properties.length}`}</li>
							<li className="fw-bold">{`Crew: ${info && info.result.properties.crew}`}</li>
							<li className="fw-bold">{`Passengers ${info && info.result.properties.passengers}`}</li>
							<li className="fw-bold">{`Max atmosphering speed: ${info &&
								info.result.properties.max_atmosphering_speed}`}</li>
							<li className="fw-bold">{`Cargo Capacity: ${info &&
								info.result.properties.cargo_capacity}`}</li>
							<li className="fw-bold">{`Consumables: ${info && info.result.properties.consumables}`}</li>
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

VehicleInfo.propTypes = {
	info: PropTypes.object
};
