import { useThemeContext } from "./ThemeContext"

const ThemeSwitch = () => {
    const { theme, setTheme } = useThemeContext()
    return (
        <button
            type="button"
            aria-label={theme === 'light' ? "Use Dark Mode" : "Use Light Mode"}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? "Click for Dark Mode" : "Click for Light Mode"}
        </button>
    )
}

export default ThemeSwitch