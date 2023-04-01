
export const Text = ({Id, Content, StyleClass}) => {
	
	return (
		<p
			id={Id}
			className={StyleClass}
		>
			{ Content }
		</p>
	);
};