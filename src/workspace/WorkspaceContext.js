import { createContext, useContext, useMemo, useState } from "react";

const workspaceContext = createContext({
    activeFile: null,
    files: [],
    selectFile: () => {}
})

export const WorkspaceProvider = ({ files, children }) => {
    const [activeFilePath, setActiveFilePath] = useState('')

    const activeFile = useMemo(() => {
        const selected = files.find(file => file.path === activeFilePath)
        return selected || files[0]
    }, [activeFilePath, files])

    const contextValue = {
        activeFile,
        files,
        selectFileHandler: setActiveFilePath
    }

    return (
        <workspaceContext.Provider value={contextValue}>
            {children}
        </workspaceContext.Provider>
    )
}

export const useWorkSpaceContext = () => useContext(workspaceContext)