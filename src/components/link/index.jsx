
export const Link = ({Id, Text, Url, StyleClass, Target}) => {
	
	return (
		<a
			id={Id}
			href={Url}
			className={StyleClass}
			target={Target || '_self'}>
			{ Text }
		</a>
	);
}