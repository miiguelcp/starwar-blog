import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import { PeopleCard } from "../component/cardComponent/PeopleCard";
import { PlanetCard } from "../component/cardComponent/PlanetCard";
import { VehicleCard } from "../component/cardComponent/VehicleCard";

const url = "https://www.swapi.tech/api";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const adquireCharacters = async () => {
		try {
			const response = await fetch(`${url}/people`);
			const body = await response.json();
			setCharacters(body.results);
		} catch (error) {
			alert(`Something happened! 666${error}`);
		}
	};

	const adquirePlanets = async () => {
		try {
			const response = await fetch(`${url}/planets`);
			const body = await response.json();
			setPlanets(body.results);
		} catch (error) {
			alert(`Something happened!432 ${error}`);
		}
	};

	const adquireVehicles = async () => {
		try {
			const response = await fetch(`${url}/vehicles`);
			const body = await response.json();
			setVehicles(body.results);
		} catch (error) {
			alert(`Something happened!321 ${error}`);
		}
	};

	useEffect(() => {
		adquireCharacters();
		adquirePlanets();
		adquireVehicles();
	}, []);

	return (
		<div className="container-fluid">
			<h1 className="text-start text-danger">Characters</h1>
			<div className="overflow-auto">
				<div className="d-flex" style={{ width: `calc(${characters.length} * 18rem)`, height: "21rem" }}>
					{characters.map((character, index) => {
						return <PeopleCard key={index} item={character} />;
					})}
				</div>
			</div>
			<h1 className="text-start text-danger">Planets</h1>
			<div className="overflow-auto">
				<div className="d-flex" style={{ width: `calc(${planets.length} * 18rem)`, height: "21rem" }}>
					{planets.map((planet, index) => {
						return <PlanetCard key={index} item={planet} />;
					})}
				</div>
			</div>
			<h1 className="text-start text-danger">Vehicles</h1>
			<div className="overflow-auto">
				<div className="d-flex" style={{ width: `calc(${vehicles.length} * 18rem)`, height: "21rem" }}>
					{vehicles.map((vehicle, index) => {
						return <VehicleCard key={index} item={vehicle} />;
					})}
				</div>
			</div>
		</div>
	);
};
