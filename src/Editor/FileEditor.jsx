import Editor from '@monaco-editor/react'
import { useWorkSpaceContext } from '../workspace/WorkspaceContext'
import { useThemeContext } from '../ThemeSwitcher/ThemeContext';

const getLanguageFromPath = (filePath) => {
    if(filePath.endsWith('.html')) {
        return 'html';
    } else if (filePath.endsWith('.css')) {
        return 'css';
    } else if (['.js', '.jsx', '.ts', '.tsx'].some(extension => filePath.endsWith(extension))){
        return 'javascript';
    }
    return 'plaintext'
}
const FileEditor = () => {
    const { activeFile } = useWorkSpaceContext()
    const { theme } = useThemeContext()

    if (!activeFile) {
        return null
    }
    return (
        <Editor
            height="100vh"
            theme={`vs-${theme}`}
            language={getLanguageFromPath(activeFile.path)}
            value={activeFile.contents} />
    )
}

export default FileEditor