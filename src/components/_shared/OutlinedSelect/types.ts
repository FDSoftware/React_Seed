export interface OutlinedSelectProps {
	/**
	 * Si se aplica el componente se deshabilita
	 */
	disabled?: boolean;
	/**
	 * Si se aplica el componente toma estado de error
	 */
	error?: boolean;
	/**
	 * Si se aplica el componente toma estado de éxito
	 */
	success?: boolean;
	/**
	 * Si se aplica el componente toma un ancho del 100%
	 */
	fullWidth?: boolean;
	/**
	 * Si el size es "sm" el componente toma un ancho de 128px, si no es "sm" y la propiedad fullWidth es false, se aplica el size "md" de 320px
	 */
	size?: string;
	/**
	 * Texto de ayuda para la búsqueda
	 */
	helperText?: string;
	/**
	 * Texto del label que aparece arriba del dropdown
	 */
	label: string;
	/**
	 * Id del texto del label de la selección
	 */
	labelId: string;
	/**
	 * Id de la selección
	 */
	selectId: string;
	/**
	 * Opciones a elegir dentro del dropdown
	 */
	options: Array<Option>;
	/**
	 * Texto del Placeholder
	 */
	placeholderOption?: string;
	/**
	 * Si es true, se va a mostrar el texto elegido en placeholderOption en primer lugar, y luego vienen las opciones a elegir
	 */
	placeholderEnabled?: boolean;
	/**
	 *
	 * Nombre de la clase que se asigna al componente para hacer modificaciones de estilo
	 */
	className?: string;
	/**
	 * Pasa un callback que permite realizar una acción que se ejecuta cuando el usuario selecciona una opción en el componente
	 */
	onSelect?: (option: number | string) => void;
	/**
	 * Si es true, no se va a mostrar el Label
	 */
	hiddenLabel?: boolean;
	/**
	 * ID / nombre del atributo data-testid
	 */
	testid?: string;
	/**
	 * En caso de ser necesario, se puede definir el primer valor.
	 */
	firstValue?: number;
}

export interface Option {
	/**
	 * Valor lógico que usa el select para determinar e indicar la selección actual del componente
	 */
	value: number | string;
	/**
	 * Texto (label) que ve el usuario a la hora de elegir una opción
	 */
	text: string;
}
