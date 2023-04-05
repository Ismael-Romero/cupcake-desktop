import { useState } from "react";

export const useAlert = (init = false) => {
	const [isVisible, setIsVisible] = useState(init);
	
	const showAlert = (state) => {
		setIsVisible(state);
	};
	
	return {
		isVisible,
		showAlert,
	};
}