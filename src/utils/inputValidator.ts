// React
import React from "react";
// Utils
import { userRegex } from "utils/formValidations";
// Types
import { UserData } from "components/Admin/User/MyUsersForm/types";
type User = any;

interface myUsersValidatorTypes {
	inputName: string;
	inputValue: string;
	setFormValidations: React.Dispatch<any>;
	formValidations: UserValidations;
}

type UserValidations = {
	firstname: boolean;
	lastname: boolean;
	idDocument: boolean;
	email: boolean;
	phoneNumber: boolean;
	occupation: boolean;
}


/**
 * @brief Validacion para el formularios
 * @param {inputName} inputName atributo para nombrar un determinado input del formulario
 * @param {inputValue} inputValue valor a ser evaluado
 * @param {setFormValidations} setFormValidations setState hook para actualizar el estado de validaciones
 * @param {formValidations} formValidations state hook con el estado de las validaciones
 */
export const myUsersValidator = ({ inputName, inputValue, setFormValidations, formValidations }: myUsersValidatorTypes) => {
	const status = !userRegex[inputName].test(inputValue);
	setFormValidations({
		...formValidations,
		[inputName]: status,
	});
};

/**
 * @brief Validaciones
 * @method length valida que los campos tengan contenido
 * @method form para validar que los campos del formulario cumplan las RegExp
 * @method equality valida que no haya igualdad entre los datos a editar y los campos del formulario
 * @returns {boolean} resultado de la validacion
 */

export const handleValidations = {
	empty: (formData: UserData) => {
		if (
			formData.firstname !== "" &&
			formData.lastname !== "" &&
			formData.idDocument !== "" &&
			formData.email !== "" &&
			formData.phoneNumber !== "" &&
			formData.occupation !== ""
		) {
			return true;
		} else {
			return false;
		}
	},
	form: (formValidations: UserValidations) => {
		if (
			!formValidations.firstname &&
			!formValidations.lastname &&
			!formValidations.idDocument &&
			!formValidations.email &&
			!formValidations.phoneNumber &&
			!formValidations.occupation
		) {
			return true;
		} else {
			return false;
		}
	},
	equality: (userData: UserData | null | undefined, formData: UserData) => {
		if (
			userData?.firstname === formData.firstname &&
			userData?.lastname === formData.lastname &&
			userData?.idDocument === formData.idDocument &&
			userData?.email === formData.email &&
			userData?.phoneNumber === formData.phoneNumber &&
			userData?.occupation === formData.occupation
		) {
			return true;
		} else {
			return false;
		}
	},
};