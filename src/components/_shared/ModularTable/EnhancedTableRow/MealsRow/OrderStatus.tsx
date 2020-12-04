// TODO: este archivo es a modo de demostracion, se va luego de terminar el componente
import React, { FC } from "react";

import "./styles.scss";

export const OrderTypes = {
	Ordered: "Ordered",
	checkedIn: "Checked-In",
	delivered: "Delivered",
	closed: "Closed",
};

export const OrderStatus: FC<{ type: keyof typeof OrderTypes }> = ({ type }) => {
	return (
		<div className={`status__container--${type}`}>
			<div className={`status__text--${type}`}>{OrderTypes[type]}</div>
		</div>
	);
};

export default OrderStatus;
