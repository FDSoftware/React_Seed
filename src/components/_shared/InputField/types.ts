import React from "react";

export interface InputFieldProps {
	/**
	 * Si se aplica el componente toma estado de error
	 */
	error?: boolean;
	/**
	 * Si se aplica el componente toma estado de éxito
	 */
	success?: boolean;
	/**
	 * Si se aplica el componente se deshabilita
	 */
	disabled?: boolean;
	/**
	 * Convierte el input en un text-area multilínea que se ajusta al texto ingresado
	 */
	multiline?: boolean;
	/**
	 * En el caso que se lo quiera hacer con altura fija se puede especificar la cantidad de filas requerida (requiere que multiline esté activo)
	 */
	rows?: string | number;
	/**
	 * Por default (campo vacío/no ingresado) tiene 320px de ancho, con valor `"sm"` pasa a 128px de ancho. Overrideable al aplicar parámetro fullWidth
	 */
	size?: string | null;
	/**
	 * Hace que el componente ocupe el 100% del ancho
	 */
	noBorder?: boolean | null;
	/**
	 * Hace que el componente ocupe el 100% del ancho
	 */
	fullWidth?: boolean;
	/**
	 * Variante del input field más grande (más márgen superior y tamaños de tipografía más grandes). Si no recibe `"dense"` toma `"normal"` como default.
	 */
	margin?: Margin;
	/**
	 * Agrega ícono posicionado al final del input. Este debe ser un componente de react-feather.
	 */
	endIcon?: React.ReactElement;
	/**
	 * Agrega ícono posicionado al principio del input. Este debe ser un componente de react-feather.
	 */
	startIcon?: React.ReactElement;
	/**
	 * ID del componente (Se aplica sobre el `input`)
	 */
	id?: string;
	/**
	 * Texto para el label del Input
	 */
	label?: string;
	/**
	 * Texto placeholder. Si no se especifica un valor muestra `Ingresá un valor a buscar`
	 */
	placeholder?: string;
	/**
	 * Recibe y muestra un string que aparece por debajo del input que muestra un texto de ayuda/error. Si no se especifica la propiedad el componente no se renderiza
	 */
	helperText?: string;
	/**
	 * ID del helper Text
	 */
	helperTextId?: string;
	/**
	 * Define el tipo de input. Si no se especifica defaultea a `"text"`
	 */
	type?: string;
	/**
	 * Define las clases para el input.
	 */
	inputClassName?: string;
	/**
	 * Valor por defecto
	 */
	defaultValue?: string | number;
	/**
	 * Manejador de cambios
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	/**
	 * Valor del componente en caso de usarlo de manera controlada
	 */
	value?: string | number;
}

type Margin = "none" | "dense" | "normal" | undefined;
