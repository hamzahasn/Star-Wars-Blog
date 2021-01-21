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
					<li>{store.details.name}</li>
					<li>{store.details.climate}</li>
				</ol>
			</div>
		);
	};
	const peopleView = () => {
		return (
			<div>
				This is a person
				{/*people details here*/}
			</div>
		);
	};
	const vehicleView = () => {
		return (
			<div>
				This is a vehicle
				{/*vehicle details here*/}
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
