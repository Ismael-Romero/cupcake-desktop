import { useReducer } from "react";
import { navigationMenu } from "./const/";
import { reducerNavigation } from "./hooks/";
import { TouchableCard } from "../../components/Card/index.jsx";  //TODO: import from components and, update style
import { animationFade } from "../../constants/animation-css/index.js";
import {Login} from "../Login/index.jsx";

export const MainMenu = () => {
	
	const initState = {
		menu: true,
		login: false,
		workspace: false,
		documentation: false
	};
	
	const [state, dispatch] = useReducer(reducerNavigation, initState);
	
	return (
		<div id={'v-main-menu'} className={'main-menu'}>
			<main>
				<section className={'mm-s-welcome'}>
					<h4 className={ animationFade.inUp }>Good morning! : ) </h4>
				</section>
				
				{ state.menu &&
					(
						<section className={`mm-s-menu ${animationFade.inUp}`}>
							{
								navigationMenu.map((item,index) => (
									<TouchableCard
										key={index}
										Id={item.id}
										Type={'vertical'}
										onAction={() => {
											dispatch({type: item.id})
										}}>
										<h6> {item.icon} {item.title} </h6>
										<p> {item.content} </p>
									</TouchableCard>
								))
							}
						</section>
					)
				}
				
				{
					state.login && (
						<Login DispatchMenu={dispatch}/>
					)
				}
				
				<section className={'mm-s-info'}>
					<h6>Cupcake Desktop</h6>
					<p> developed by @Ismael Romero</p>
					<p> version: 2023.0.0.1</p>
					<p> @copyright 2023</p>
				</section>

			</main>
		</div>
	);
};