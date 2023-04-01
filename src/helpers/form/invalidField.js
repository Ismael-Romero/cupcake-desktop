/**
* The putFieldFocusInvalid and removeFieldFocusInvalid functions are used
* to set and remove the 'focus-invalid' class to an HTML element identified by its ID.
* This class is used to visually highlight invalid fields in a form.
* @param {string} id - HTML element ID
* */
export const putFieldFocusInvalid = (id) => {
	const element = document.getElementById(id);
	if (!element.hasAttribute('class')){
		element.setAttribute('class', 'focus-invalid');
	}
};

export const removeFieldFocusInvalid = (id) => {
	const element = document.getElementById(id);
	if (element.hasAttribute('class')){
		element.removeAttribute('class');
	}
}