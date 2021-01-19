import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Details = () => {
	const { store } = useContext(Context);
	console.log(store.details);
	return <div>{}</div>;
};
