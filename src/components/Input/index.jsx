export const Input = ({Field, Type, Placeholder, OnChange}) => {
	
	return (
		<input className=''
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