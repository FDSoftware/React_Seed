// React
import React, { FC, useEffect } from "react";
// MUI components
import { InputAdornment, OutlinedInput } from "@material-ui/core";
// Icons
import { Minus, Plus } from "react-feather";
// Styles
import "./styles.scss";
// Props
import { NumberSpinnerProps } from "./types";
// Validation
import { numberValidation } from "utils/formValidations";

/**
 * ### Nombre del componente: `<NumberSpinner>`
 * Input tipo `number` que permite incrementar o reducir la cantidad de unidades.
 */

const NumberSpinner: FC<NumberSpinnerProps> = ({
	disabled = false,
	defaultValue = 0,
	id = "",
	updateBy = 1,
	onChange = () => {},
	value,
}) => {
	const increment = () => {
		onChange(value + updateBy);
	};
	const decrement = () => {
		if (value > 0) {
			onChange(value - updateBy);
		}
	};
	const manualInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		numberValidation(e.target.value) && onChange(+e.target.value);
	};
	useEffect(() => {
		defaultValue && onChange(defaultValue);
	}, [defaultValue, onChange]);

	return (
		<OutlinedInput
			disabled={disabled}
			value={value}
			onChange={manualInput}
			labelWidth={2}
			label="$"
			id={id}
			name={id}
			className="number-spinner"
			startAdornment={
				<InputAdornment
					aria-label="decrementar valor"
					position="start"
					onClick={() => (disabled ? null : decrement())}
				>
					<Minus />
				</InputAdornment>
			}
			endAdornment={
				<InputAdornment
					aria-label="incrementar valor"
					position="end"
					onClick={() => (disabled ? null : increment())}
				>
					<Plus />
				</InputAdornment>
			}
		/>
	);
};

export default NumberSpinner;
