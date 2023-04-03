
export const LayoutInputGroup = ({Label, Type, children}) => {
	
	return (
		<div className={`input-group ${Type}`}>
			<label> {Label } </label>
			{children}
		</div>
	);
};