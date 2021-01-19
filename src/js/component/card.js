import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Card = props => {
	console.log(props);
	const { actions, store } = useContext(Context);
	const history = useHistory();
	const additem = (booboo, id) => {
		const newUrl = booboo.replace("tech", "dev");
		const newAgain = newUrl.replace("www.", "");
		console.log("$$$", newAgain);
		actions.fetchDetails(newAgain);
		console.log(store.details);
		history.push(`/details/planets/${id}`);
	};
	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<a className="btn btn-primary" onClick={() => additem(props.btnLink, props.id)}>
					{props.btnText}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	btnLink: PropTypes.string,
	btnText: PropTypes.string,
	id: PropTypes.string,
	item: PropTypes.object
};
