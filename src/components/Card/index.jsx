

export const SimpleCard = ({Id, clickAction, children}) => {
	
	return (
		<div className={'card simple'} id={Id} onClick={() => clickAction()}>
			<div className={'body'}>
				{ children }
			</div>
		</div>
	);
}
export const Card = ({ Id, Image, Type, children }) => {
	
	return (
		<div className={`card ${Type}`} id={Id}>
			{
				Image && (
					<section
						className={`image ${Type}`}
						style={{
							backgroundImage: `url(${Image})`,
						}}>
					</section>
				)
			}
			<section className={`body ${ (Type === 'horizontal')? Type: ''}`}>
				
				<div className={'content'}>
					{ children }
				</div>
			</section>
		</div>
	);
};

export const TouchableCard = ({ Id, Image, Type, onAction, children }) => {
	
	return (
		<div className={`card ${Type}`} id={Id} onClick={() => {onAction(Id)}}>
			{
				Image && (
					<section
						className={`image ${Type}`}
						style={{
							backgroundImage: `url(${Image})`,
						}}>
					</section>
				)
			}
			<section className={`body ${ (Type === 'horizontal')? Type: ''}`}>
				
				<div className={'content'}>
					{ children }
				</div>
			</section>
		</div>
	);
};
