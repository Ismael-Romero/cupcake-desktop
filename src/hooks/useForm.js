import { useState } from "react";
/**
 * Hook that returns an object with the current state of the form,
 * as well as functions to change the state of the form and check the validity of the form fields.
 *
 * @param {Object} form :
 * Object containing the initial state of the form
 *
 * @returns {Object} :
 * Object containing the current state of the form and
 * functions to change the form state and check the validity of the form fields.
 */
export const useForm = (form) => {
	const [state, setState] = useState(form);
	
	/**
	 * Function to change the value of a form field in the state.
	 * @param {string} key - Key of the form field to be changed.
	 * @param {string|number} value - Value to be assigned to the form field.
	 */
	const onChange = (key, value) => {
		setState({
			...state,
			[key]: {
				id: state[key].id,
				key: state[key].key,
				value: value,
				required: state[key].required,
			},
		});
	};
	
	const onReset = (form) => {
		Object.keys(form).map((key) => {
			setFocusInvalidField(form[key].id);
			
		});
		setState(form);
	};
	
	const isValidFields = () => {
		let invalidFields = true;
		Object.keys(state).map((key) => {
			setFocusInvalidField(state[key].id);
			if (state[key].required){
				if (!state[key].value){
					setFocusInvalidField(state[key].id);
					invalidFields = false;
				}
			}
		});
		return invalidFields;
	};
	
	const setFocusInvalidField = (id) => {
		const element = document.getElementById(id);
		if (!element.hasAttribute('class')) {
			element.setAttribute('class', 'focus-invalid');
		}else{
			element.removeAttribute('class');
		}
	};
	
	return {
		...state,
		stateCurrent: state,
		onChange,
		onReset,
		isValidFields,
	};
};