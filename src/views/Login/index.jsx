import {animationFade} from "../../constants/animation-css/index.js";

export const Login = ({ onVisible, showMenu }) => {
	return (
		<div className={animationFade.inUp}>
			<h1> Login</h1>
			<button onClick={ () => {
				onVisible(false)
				showMenu(true)
			}}>
				Ocultar
			</button>
		</div>
	);
};