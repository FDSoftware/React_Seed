// React
import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { SnackBarSelector } from "state/snackbar/selectors";
import { clearSnack } from "state/snackbar/actions";

// Material UI Components
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// usage Example:
/* useEffect(() => {
	d(requestSnack({ msg: "hola!" }));
}, []); */

export type Severity = "success" | "info" | "warning" | "error";

interface ISnackBarSelector {
	open: boolean;
	duration: number;
	msg: string;
	severity: Severity;
	icon: React.ReactNode;
	anchor: {
		vertical: "top" | "bottom";
		horizontal: "left" | "center" | "right";
	};
}

export const ReduxSnackbar = () => {
	const {
		open,
		duration,
		msg,
		severity,
		icon,
		anchor: { vertical, horizontal },
	} = useSelector<any, ISnackBarSelector>((state) => SnackBarSelector(state));

	const d = useDispatch();

	const handleClose = () => {
		d(clearSnack());
	};

	function TransitionDown(props: any) {
		return <Slide {...props} direction="down" />;
	}

	return (
		<Snackbar
			className="container-view-cart__alert"
			open={open}
			autoHideDuration={duration}
			onClose={handleClose}
			anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
			key={`top,center`}
			TransitionComponent={TransitionDown}
		>
			<Alert onClose={handleClose} severity={severity} icon={icon}>
				{msg}
			</Alert>
		</Snackbar>
	);
};

export default ReduxSnackbar;
