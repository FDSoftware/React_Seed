// React
import React from "react";
// MUI Components
import { CircularProgress } from "@material-ui/core";

/**
 * ### Nombre del componente: `<SuspenseLoader>`
 * Componente loader que renderiza previo a las vistas.
 */

const SuspenseLoader = () => {
	return (
		<div
			className="loader"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: 10000,
				backgroundColor: "#FFF",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
				marginTop: "auto",
				marginBottom: "auto",
			}}
		>
			<CircularProgress
				size="6rem"
				className="loader__spinner"
				style={{
					color: "#e8eaef",
					margin: 0,
					padding: 0,
				}}
			/>
		</div>
	);
};
export default SuspenseLoader;
