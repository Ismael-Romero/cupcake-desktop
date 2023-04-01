export const Button = ({Id, Text, ActionClick, Type='info'}) => {
	
	const styleClass = {
		danger: 'danger',
		info: 'info',
		success: 'success',
		warning: 'warning',
	};
	
	return (
		<button
			id={Id}
			className={`btn ${styleClass[Type]}`}
			onClick={ActionClick}>
			{ Text }
		</button>
	);
};