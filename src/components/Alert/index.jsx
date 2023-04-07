import { animationBounce} from "../../constants/animation-css/";
import { Icon } from "../../constants/icons/";

export const Alert = ({ Type = 'basic', Message, WithIcon = false, children }) => {
	
	const properties = {
		basic: {
			StyleClass: `basic ${animationBounce.in}`,
			Icon: Icon.circleInfo,
		},
		info: {
			StyleClass: `info ${animationBounce.in}`,
			Icon: Icon.circleInfo,
		},
		success: {
			StyleClass: `success ${animationBounce.in}`,
			Icon: Icon.circleCheck,
		},
		danger: {
			StyleClass: `danger ${animationBounce.in}`,
			Icon: Icon.triangleExclamation,
		},
		warning: {
			StyleClass: `warning ${animationBounce.in}`,
			Icon: Icon.triangleExclamation,
		},
	};
	
	return (
		<div className={
			`alert ${properties[Type].StyleClass}`}>
			
			{ WithIcon &&
				(
					<div className='icon-container'>
						{
							properties[Type].Icon
						}
					</div>
				)
			}
			
			<div className='content-container'>
				{
					(Message) ? Message : children
				}
			</div>
		</div>
	);
};