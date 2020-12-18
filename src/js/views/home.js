import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const buildRow = data =>
		data.map((item, index) => {
			return (
				<div className="col" key={index}>
					<Card img={""} title={item.name} description={""} btnLink={""} btnText="View more..." />
				</div>
			);
		});
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="row">{buildRow(store.planets)}</div>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
