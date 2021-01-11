import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const buildRow = (data, type) =>
		data.map((item, index) => {
			return (
				<Card
					img={"https://via.placeholder.com/300"}
					title={item.name}
					btnLink={`/${type}/${index}`}
					btnText="View more..."
					key={index}
				/>
			);
		});
	return (
		<div className="text-center mt-5">
			<h1 className="text-danger">Planets</h1>

			<div className="resource-row">{buildRow(store.planets, "planets")}</div>
			<h1 className="text-danger"> Characters</h1>

			<div className="resource-row">{buildRow(store.people, "person")} </div>
			<h1 className="text-danger">Vehicles</h1>

			<div className="resource-row">{buildRow(store.vehicles, "vehicles")}</div>
		</div>
	);
};
