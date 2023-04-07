import {
	NAV_DOCUMENTATION_ACTION,
	NAV_LOGIN_ACTION,
	NAV_MENU_ACTION,
	NAV_WORKSPACE_ACTION
} from "../const/index";

export const reducerNavigation = (state, action) => {
	switch (action.type){
		case NAV_MENU_ACTION: {
			return {
				menu: true,
				login: false,
				workspace: false,
				documentation: false
			}
		}
		case NAV_LOGIN_ACTION: {
			return {
				menu: false,
				login: true,
				workspace: false,
				documentation: false
			}
		}
		case NAV_WORKSPACE_ACTION: {
			return {
				menu: false,
				login: false,
				workspace: true,
				documentation: false
			}
		}
		case NAV_DOCUMENTATION_ACTION: {
			return {
				menu: false,
				login: false,
				workspace: false,
				documentation: true
			}
		}
		default:{
			throw Error('Unknow action: '+ action.type);
		}
	}
};