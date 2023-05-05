import './App.css';
import Workspace from './workspace/Workspace';
import { useThemeContext } from './ThemeSwitcher/ThemeContext';

function App() {
  const { theme } = useThemeContext()
  return (
      <div className={`App ${theme}`} >
          <Workspace />
      </div>
  );
}

export default App;
