import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterInfo } from "../component/infoComponent/CharacterInfo";
import { PlanetInfo } from "../component/infoComponent/PlanetInfo";
import { VehicleInfo } from "../component/infoComponent/VehicleInfo";

const url = "https://www.swapi.tech/api";

export const SinglePeople = () => {
	const params = useParams();
	const [info, setInfo] = useState(undefined);
	const getInfo = async uid => {
		try {
			const response = await fetch(`${url}/people/${uid}`);
			const body = await response.json();
			setInfo(body);
		} catch (error) {
			alert(`Something happened! 123 ${error}`);
		}
	};
	useEffect(
		() => {
			if (params.id) {
				getInfo(params.id);
			}
		},
		[params.id]
	);

	return (
		<div className="jumbotron">
			<h4 className="display-4">{<CharacterInfo info={info} />}</h4>
		</div>
	);
};

export const SinglePlanet = () => {
	const params = useParams();
	const [info, setInfo] = useState(undefined);
	const getInfo = async uid => {
		try {
			const response = await fetch(`${url}/planets/${uid}`);
			const body = await response.json();
			setInfo(body);
		} catch (error) {
			alert(`Something happened! 123 ${error}`);
		}
	};
	useEffect(
		() => {
			if (params.id) {
				getInfo(params.id);
			}
		},
		[params.id]
	);

	return (
		<div className="jumbotron">
			<h4 className="display-4">{<PlanetInfo info={info} />}</h4>
		</div>
	);
};

export const SingleVehicle = () => {
	const params = useParams();
	const [info, setInfo] = useState(undefined);
	const getInfo = async uid => {
		try {
			const response = await fetch(`${url}/vehicles/${uid}`);
			const body = await response.json();
			setInfo(body);
		} catch (error) {
			alert(`Something happened! 123 ${error}`);
		}
	};
	useEffect(
		() => {
			if (params.id) {
				getInfo(params.id);
			}
		},
		[params.id]
	);

	return (
		<div className="jumbotron">
			<h4 className="display-4">{<VehicleInfo info={info} />}</h4>
		</div>
	);
};
