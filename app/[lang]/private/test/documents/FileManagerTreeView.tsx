// Local imports
import { TreeNode } from '@/components/treeView/root';
import TreeView from '@/components/treeView/TreeView';

interface Props {
    className: string;
    root: TreeNode[];
    onNodeSelected: (e: TreeNode[]) => void
}

export const FileManagerTreeView = ({ className, ...rest }: Props) => (
    <div className={`${className} h-full`}>
        <TreeView {...rest} />
    </div>
)
