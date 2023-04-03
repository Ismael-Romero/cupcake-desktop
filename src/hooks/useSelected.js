import { useState } from "react";

export const useSelected = () => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	
	const toggleList = () => {
		setIsOpen(!isOpen);
	};
	
	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};
	
	return {
		isOpen,
		selectedOption,
		toggleList,
		handleOptionClick
	};
};