import { createContext, useState } from "react";


/**
 * GlobalSettingContext
 *
 * @type {React.Context<{}>}
 * @return {string} workspace: by default is 'http://127.0.0.1:3000/'
 * @return {string} language: by default is 'en' - English
 * @return {string} theme: by default is 'light'
 *
 */
export const GlobalSettingContext = createContext({});

/**
 * Hook that creates a global configuration context and a provider to manage
 * the global configuration of Cupcake Desktop.
 *
 * @param {Object} children :
 * React component(s) that will be wrapped by the GlobalSettingProvider
 *
 * @returns {JSX.Element} :
 * JSX element that represents the GlobalSettingProvider
 */
export const GlobalSettingProvider = ({ children }) => {
	
	const [workspace, setWorkspace] = useState('http://127.0.0.1:3000/');
	const [language, setLanguage] = useState('en');
	const [theme, setTheme] = useState('light');
	
	/**
	 * Function to change the language setting.
	 * @param {string} newLanguage - New language value to be set.
	 */
	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage);
	};
	
	/**
	 * Function to change the theme setting.
	 * @param {string} newTheme - New theme value to be set.
	 */
	const changeTheme = (newTheme) => {
		setTheme(newTheme);
	};
	
	/**
	 * Function to change the workspace setting.
	 * @param {string} newSpace - New workspace value to be set.
	 */
	const changeWorkspace = (newSpace) => {
		setWorkspace(newSpace);
	};
	
	const defaultGlobalSetting = {
		workspace,
		language,
		theme,
		changeWorkspace,
		changeLanguage,
		changeTheme,
	}
	
	return (
		<GlobalSettingContext.Provider value={defaultGlobalSetting}>
			{children}
		</GlobalSettingContext.Provider>
	);
};