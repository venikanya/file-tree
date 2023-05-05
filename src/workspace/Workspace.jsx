import FileExplorer from '../FileExplorer/FileExplorer'
import FileEditor from '../Editor/FileEditor';
import defaultFiles from './defaultFiles';
import { WorkspaceProvider } from './WorkspaceContext';
const Workspace = () => {
    return (
        <WorkspaceProvider files={defaultFiles}>
            <div className="WorkspaceBox">
                <FileExplorer />
                <FileEditor />
            </div>
        </WorkspaceProvider>
    )
}

export default Workspace