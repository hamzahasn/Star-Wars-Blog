import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<a href={props.btnLink} className="btn btn-primary">
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
	btnText: PropTypes.string
};
