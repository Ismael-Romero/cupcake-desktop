import {animationFade} from "../../constants/animation-css/index.js";
import {LayoutInputGroup} from "../../components/Layout/index.jsx";
import {Input} from "../../components/Input/index.jsx";
import {useForm} from "../../hooks/useForm.js";
import {Button} from "../../components/Button/index.jsx";
import {NAV_MENU_ACTION} from "../mainMenu/const/index.js";
import {Alert} from "../../components/Alert/index.jsx";
import {useAlert} from "../../hooks/useAlert.js";
import {playSound} from "../../helpers/sound/index.js";
import {Icon} from "../../constants/Icons/index.jsx";

export const Login = ({ DispatchMenu }) => {
	

	const initForm = {
		username: {
			id: 'in-username',
			key: 'username',
			value: '',
			required: true,
		},
		password: {
			id: 'in-password',
			key: 'password',
			value: '',
			required: true,
		}
	}
	
	const {stateCurrent, onReset, onChange, isValidFields} = useForm(initForm);
	const {username, password} = stateCurrent;
	const {isVisible, showAlert} = useAlert(false);
	
	const handleClick = (event) => {
		event.preventDefault();
		if (isValidFields()){
			showAlert(false);
			onReset(initForm);
		}else {
			showAlert(true);
			playSound('beepNotify');
		}
	};
	
	return (
		<section className={`view-login ${animationFade.inUp}`}>
			<main>
				<h3> {Icon.rightBracket} Login</h3>
				<form>

					<LayoutInputGroup Label={'Username:'} Type={'row'}>
						<Input
							Field={username}
							Type={'text'}
							OnChange={onChange}
							Placeholder={'email, phone or alias'}/>
					</LayoutInputGroup>
					
					<LayoutInputGroup Label={'Password:'} Type={'row'}>
						<Input
							Field={password}
							Type={'password'}
							OnChange={onChange}
							Placeholder={'enter your password'}/>
					</LayoutInputGroup>
					
					{
						isVisible && (
							<Alert
								Type={'warning'}
								WithIcon={true}>
								<h6> Whoops! </h6>
								<p>
									check your username and password
								</p>
							</Alert>
						)
					}
					
					<div className={'actions'}>
						<Button
							Type={'white'}
							Id={'btn-login-back-menu'}
							Text={'Back to menu'}
							ActionClick={() => { DispatchMenu({type: NAV_MENU_ACTION})} }/>
						
						<Button
							Type={'info'}
							Id={'btn-login'}
							Text={'Sign In'}
							ActionClick={handleClick}/>
					</div>
				</form>
			</main>
		</section>
	);
};