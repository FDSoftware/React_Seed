export interface NumberSpinnerProps {
	/**
	 * Permite deshabilitar el componente para bloquear funcionamiento e ingreso de data.
	 */
	disabled?: boolean;
	/**
	 * Se puede setear un valor por defecto que recibirá el componente y lo mostrará
	 */
	defaultValue?: number;
	id?: string;
	updateBy?: number;
	onChange: (newValue: number) => void;
	value: number;
}
