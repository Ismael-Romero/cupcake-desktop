/**
 * This code defines a React context and provider for managing session data.
 * @module SessionContext
 * @exports SessionContext
 * @exports SessionContextProvider
 */
import { createContext, useState } from "react";

/**
 * Context object for managing session data.
 * @property {Object} session - Current session data.
 * @property {Function} changeSession - Function to update the session data.
 */
export const SessionContext = createContext({});
 
 /**
 * Provider component for managing session data using the SessionContext.
 * @param {Object} props - Props containing children components.
 * @returns {JSX.Element} - JSX element wrapping the children components with the SessionContext.Provider.
 */
export const SessionContextProvider = ({ children }) => {
	
	const [session, setSession] = useState({});
	
	const changeSession = (newSession) => {
		setSession(newSession);
	};
	
	const defaultSession = {
		session,
		changeSession,
	};
	
	return (
		<SessionContext.Provider value={defaultSession}>
			{children}
		</SessionContext.Provider>
	);
};