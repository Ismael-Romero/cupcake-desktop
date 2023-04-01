
export const Title = ({Id, Text, Size, StyleClass}) => {
	
	const tagSize = {
		1: 'h1', // xxl
		2: 'h2', // xl
		3: 'h3', // large
		4: 'h4', // medium
		5: 'h5', // small
		6: 'h6', // xs
	};
	
	const Tag = tagSize[Size] || tagSize[4];
	
	return (
		<Tag id={Id} className={StyleClass} >
			{ Text }
		</Tag>
	);
}