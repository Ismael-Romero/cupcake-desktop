import {TouchableCard} from "../../components/Card/index.jsx";  //TODO: import from components and, update style
import {useState} from "react";
import {animationBounce, animationFade} from "../../constants/animation-css/index.js";
import {Login} from "../Login/index.jsx";
import { navigationMenu } from "../../navigation/mainMenu.js";

export const MainMenu = () => {
	
	const [menuIsOpen, setMenuIsOpen] = useState(true);
	const [loginIsOpen, setLoginIsOpen] = useState(false);
	const [workspaceIsOpen, setWorkspaceIsOpen] = useState(false);
	
	const onAction = (action) => {
		
		if (action === 'm-login') {
			setMenuIsOpen(false);
			setLoginIsOpen(true)
		}
		
		if (action === 'm-workspace') {
			setMenuIsOpen(false);
			setWorkspaceIsOpen(true)
		}
		
		if (action === 'm-documentation') {
			setMenuIsOpen(false);
			
		}
	};
	
	return (
		<div id={'v-main-menu'} className={'main-menu'}>
			<main>
				<section className={'welcome'}>
					<h4>Good morning! : ) </h4>
				</section>
				
				{ menuIsOpen &&
					(
						<section className={`menu ${animationFade.inUp}`}>
							{
								navigationMenu.map((item,index) => (
									<TouchableCard key={index} Id={item.id} Type={'vertical'} onAction={onAction}>
										<h6> {item.icon} {item.title} </h6>
										<p> {item.content} </p>
									</TouchableCard>
								))
							}
						</section>
					)
				}
				
				{ loginIsOpen && ( <Login onVisible={setLoginIsOpen} showMenu={setMenuIsOpen} /> ) }
				
				<section className={'info'}>
					<h6>Cupcake Desktop</h6>
					<p> developed by @Ismael Romero</p>
					<p> version: 2023.0.0.1</p>
					<p> @copyright 2023</p>
				</section>

			</main>
		</div>
	);
};