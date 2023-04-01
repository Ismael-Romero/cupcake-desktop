// Id, Type, Placeholder, Required, Value, OnChange, Key

export const Input = ({Field, Type, Placeholder, OnChange}) => {
	
	return (
		<input
			type={Type}
			id={Field.id}
			value={Field.value}
			required={Field.required}
			placeholder={Placeholder}
			onChange={(e) => {
				OnChange(Field.key, e.target.value)
			}}
		/>
	);
};