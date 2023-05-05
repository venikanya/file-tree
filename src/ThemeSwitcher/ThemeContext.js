import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {}
})

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const contextValue = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)