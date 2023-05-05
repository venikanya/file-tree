import FileRow from "./Components/FileRow"
import { useWorkSpaceContext } from "../workspace/WorkspaceContext"
import ThemeSwitch from "../ThemeSwitcher/ThemeSwitch"

const FileExplorer = () => {
    const { files } = useWorkSpaceContext()
    return (
        <div className="FileExplorer">
            <div className="FileHeader">
                <h1>Files</h1>
                <ThemeSwitch />
            </div>
            <div className="FileList">
                {files.map((file) => <FileRow key={file.path} file={file} />)}
            </div>
        </div>
    )
}

export default FileExplorer