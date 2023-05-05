import { useWorkSpaceContext } from "../../workspace/WorkspaceContext"
import FileIcon from "./FileIcon"

const FileRow = ({ file }) => {
    const { activeFile, selectFileHandler } = useWorkSpaceContext()
    return (
        <div className={`FileRow${activeFile.path === file.path ? ' active' : ''}`} onClick={() => selectFileHandler(file.path)}>
            <FileIcon  filePath={file.path}/>
            <p className="File">{file.path}</p>
        </div>
    )
}

export default FileRow