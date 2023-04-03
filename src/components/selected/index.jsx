import {useSelected} from "../../hooks/useSelected.js";

export const Selected = ({Field, Data, HandleClick}) => {
	
	const {
		isOpen,
		selectedOption,
		toggleList,
		handleOptionClick,
	} = useSelected();
	
	return (
		<div className='selected-container'>
			<label> { Field.label } </label>
			<button onClick={() => {
				toggleList();
			}}>
				<img src='https://cdnstorage.sendbig.com/unreal/female.webp'/>
				<span> { (selectedOption)? selectedOption : Field.placeholder } </span>
				<i className="fa-solid fa-caret-down"></i>
			</button>

			<ul id={Field.id} className={isOpen ? 'show': ''}>
				{
					Data.map((item, index) => (
						<li key={index}>
							<span onClick={() => {
								HandleClick(item.id);
								handleOptionClick(item.value);
							}}>
								{ item.value }
							</span>
						</li>
					))
				}
			</ul>
		</div>
	);
};