import { Icon } from "../../../constants/Icons/index.jsx";

export const NAV_MENU_ACTION = 'menu';
export const NAV_LOGIN_ACTION = 'login';
export const NAV_WORKSPACE_ACTION = 'workspace';
export const NAV_DOCUMENTATION_ACTION = 'documentation';

export const navigationMenu = [
	{
		id: NAV_LOGIN_ACTION,
		icon: Icon.rightBracket,
		title: 'Log In',
		content: 'Login to cupcake desktop'
	},
	{
		id: NAV_WORKSPACE_ACTION,
		icon: Icon.server,
		title: 'Workspace',
		content: 'Connect with your workspace'
	},
	{
		id: NAV_DOCUMENTATION_ACTION,
		icon: Icon.folder,
		title: 'Documentation',
		content: 'Explore our documentation '
	},
]