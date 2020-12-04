// React
import React, { useState, useEffect, FC } from "react";
// MUI components
import { TextField, InputAdornment, FormHelperText } from "@material-ui/core";
// Icons
import { X, Check } from "react-feather";
// Component's Stylesheet
import "./styles.scss";
// Prop Types to Storybook
import { InputFieldProps } from "./types";

/**
 * ## `<InputField>`
 * Componente genérico para `Text Field / Inputs / Textarea`
 *
 */

const InputField: FC<InputFieldProps> = ({
	error = false,
	success = false,
	disabled = false,
	multiline = false,
	rows = 0,
	size = "md",
	fullWidth = false,
	margin = "normal",
	endIcon = undefined,
	startIcon = undefined,
	id = "",
	label = "",
	placeholder = "",
	helperText = "",
	helperTextId = "",
	type = "text",
	inputClassName = "",
	onChange = () => {},
	noBorder = false,
	value,
	defaultValue,
}) => {
	const [outputSize, setOutputSize] = useState("");

	const setSize = () =>
		fullWidth
			? setOutputSize("100%")
			: size === "sm"
			? setOutputSize("128px")
			: setOutputSize("320px");

	useEffect(setSize, []);

	return (
		<>
			<TextField
				id={id}
				label={label}
				InputLabelProps={{ "aria-labelledby": id }}
				variant="outlined"
				className={`${success && "Mui-success"} ${
					noBorder && "no-border"
				} ${inputClassName}`}
				placeholder={placeholder}
				InputProps={{
					startAdornment: startIcon && (
						<InputAdornment position="start">{startIcon}</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							{error && <X className="error-icon" />}
							{success && <Check className="success-icon" />}
							{endIcon}
						</InputAdornment>
					),
				}}
				onChange={onChange}
				multiline={multiline}
				rows={rows}
				error={error}
				margin={margin}
				fullWidth={fullWidth}
				disabled={disabled}
				defaultValue={defaultValue}
				type={type}
				style={{
					width: `${outputSize}`,
				}}
				value={value}
				aria-describedby={helperTextId}
			/>
			{helperText && (
				<FormHelperText error={error} id={helperTextId}>
					{helperText}
				</FormHelperText>
			)}
		</>
	);
};

export default InputField;
