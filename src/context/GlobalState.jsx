import { createContext, useState } from 'react';

export const globalContext = createContext('');

const ContextProvider = ({ children }) => {
	const [toggleMenu, setToggleMenu] = useState(true);

	const toggleSidebar = () => {
		setToggleMenu((prev) => !prev);
	};

	const contextValue = {
		toggleMenu,
		setToggleMenu,
		toggleSidebar,
	};

	return <globalContext.Provider value={contextValue}>{children}</globalContext.Provider>;
};

export default ContextProvider;
