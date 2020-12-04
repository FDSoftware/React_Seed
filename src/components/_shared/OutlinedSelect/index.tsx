// React
import React, { FC, useEffect, useState } from "react";
// MUI Components
import { FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";
// Icons
import { ChevronDown, X, Check } from "react-feather";
// Component's Stylesheet
import "./styles.scss";
// Types
import { OutlinedSelectProps } from "./types";

/**
 * ### Nombre del componente: `<OutlinedSelect>`
 * Input de tipo selector dropdown; despliega opciones para que el usuario seleccione.
 */

const OutlinedSelect: FC<OutlinedSelectProps> = ({
	disabled = false,
	error = false,
	success = false,
	fullWidth = false,
	size = "md",
	helperText = "",
	label = "",
	labelId = "",
	selectId = "",
	options = [{ text: "", value: 0 }],
	placeholderOption = "",
	placeholderEnabled = false,
	className = "",
	onSelect = () => {},
	hiddenLabel = false,
	testid = "",
	firstValue,
}) => {
	const [outputSize, setOutputSize] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<number | string>("");

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSelectedOption(event.target.value as string | number);
		onSelect(event.target.value as string | number);
	};
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (size !== "sm" && !fullWidth) {
			setOutputSize("320px");
		} else if (fullWidth) {
			setOutputSize("100%");
		} else {
			setOutputSize("128px");
		}
	}, [size, fullWidth]);

	useEffect(() => {
		// Autoselect first option
		if (options) {
			const [first] = options;
			!placeholderEnabled && setSelectedOption(first.value);
		}
		// With Placeholder content
		placeholderOption !== "" && setSelectedOption("");
		// Custom first option
		firstValue && placeholderOption === "" && setSelectedOption(firstValue);
	}, [options, placeholderEnabled, placeholderOption, firstValue]);

	return (
		<>
			<InputLabel
				error={error}
				id={labelId}
				htmlFor={selectId}
				disabled={disabled}
				className={`${success && "Mui-success"} ${hiddenLabel && "visually-hidden"}`}
			>
				{label}
			</InputLabel>
			<Select
				labelId={labelId}
				id={selectId}
				name={labelId}
				displayEmpty={placeholderEnabled}
				inputProps={placeholderEnabled ? { "aria-label": "without label" } : undefined}
				variant="outlined"
				disabled={disabled}
				value={selectedOption}
				onChange={handleChange}
				onOpen={handleOpen}
				onClose={handleOpen}
				open={isOpen}
				error={error}
				data-testid={testid}
				className={`${success && "Mui-success"} outlined-select ${className}`}
				fullWidth={fullWidth}
				style={{
					width: `${outputSize}`,
				}}
				MenuProps={{
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "left",
					},
					transformOrigin: {
						vertical: "top",
						horizontal: "left",
					},
					getContentAnchorEl: null,
				}}
				IconComponent={() => (
					<>
						{error ? <X className="error-icon" /> : null}
						{success ? <Check className="success-icon" /> : null}
						<ChevronDown
							className={`selectIcon ${isOpen ? "open" : ""}`}
							onClick={() => !disabled && handleOpen()}
						/>
					</>
				)}
			>
				{placeholderEnabled && (
					<MenuItem value="" disabled>
						{placeholderOption}
					</MenuItem>
				)}
				{options?.map((data, index) => (
					<MenuItem key={index} value={data.value}>
						{data.text}
					</MenuItem>
				))}
			</Select>
			{helperText && (
				<FormHelperText error={error} disabled={disabled}>
					{helperText}
				</FormHelperText>
			)}
		</>
	);
};

export default OutlinedSelect;
