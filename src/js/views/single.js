import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const planet_id = params.planets_id;
	console.log("planet_id", planet_id);
	const person_id = params.person_id;
	const vehicle_id = params.vehicles_id;

	const type = (function() {
		if (planet_id) {
			return "planets";
		} else if (person_id) {
			return "people";
		} else if (vehicle_id) {
			return "vehicles";
		}
		return false;
	})();

	const getView = () => {
		switch (type) {
			case "planets":
				return planetsView();

			case "people":
				return peopleView();

			case "vehicles":
				return vehicleView();

			default:
				return <h1>Type not found</h1>;
		}
	};

	const planetsView = () => {
		return (
			<div>
				This is a planet
				<ol>
					<li>Name - {store.details.name}</li>
					<li>Climate - {store.details.climate}</li>
					<li>Diameter- {store.details.diameter}</li>
					<li>Rotation Period - {store.details.rotation_period}</li>
					<li>Oribital Period - {store.details.orbital_period}</li>
					<li>Gravity - {store.details.gravity}</li>
					<li>Population - {store.details.population}</li>
					<li>Terrain - {store.details.terrain}</li>
					<li>Surface Water - {store.details.surface_water}</li>
				</ol>
			</div>
		);
	};
	const peopleView = () => {
		return (
			<div>
				This is a person
				{
					<ol>
						<li>Height - {store.details.height}</li>
						<li>Mass - {store.details.mass}</li>
						<li>Hair Color- {store.details.hair_color}</li>
						<li>Skin Color - {store.details.skin_color}</li>
						<li>Eye Color - {store.details.eye_color}</li>
						<li>Birth Year - {store.details.birth_year}</li>
						<li>Crew - {store.details.crew}</li>
						<li>Homeworld - {store.details.homeworld}</li>
					</ol>
				}
			</div>
		);
	};
	const vehicleView = () => {
		return (
			<div>
				This is a vehicle
				{
					<ol>
						<li>Model - {store.details.model}</li>
						<li>Vehicle Class - {store.details.vehicle_class}</li>
						<li>Diameter- {store.details.diameter}</li>
						<li>Manufacturer - {store.details.manufacturer}</li>
						<li>Cost - {store.details.cost_in_credits}</li>
						<li>Length - {store.details.length}</li>
						<li>Crew - {store.details.crew}</li>
						<li>Passengers - {store.details.passengers}</li>
						<li>Max atmosphering speed - {store.details.max_atmosphering_speed}</li>
						<li>Cargo Capacity - {store.details.cargo_capacity}</li>
					</ol>
				}
			</div>
		);
	};

	return (
		<div className="jumbotron">
			{getView()}

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
