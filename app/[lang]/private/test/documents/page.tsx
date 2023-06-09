'use client'

// React imports
import { useState } from 'react';

// Local imports
import './styles.css';
import { FileManagerDataGrid } from './FileManagerDataGrid';
import { FileManagerDetails } from './FileManagerFileDetails';
import { FileManagerTreeView } from './FileManagerTreeView';
import { TreeNode, root } from '@/components/treeView/root';
import SplitPane from '@/components/splitPane/SplitPane';

const className = 'border border-primary-500/50';

const BasicTreeView = () => {
    const [isFileDetailsVisible, setIsFileDetailsVisible] = useState<boolean>(false);
    const [DGSource, setDGSource] = useState<TreeNode[]>([]);

    const onFileSelected = (id: string) => {

        const getFileURL = () => {

        }

        setIsFileDetailsVisible(true);
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <SplitPane
                onReset={console.log}
                onVisibleChange={console.log}
                visible={isFileDetailsVisible}
                leftPanePreferredSize={120}
                rightPanePreferredSize={600}
                left={<FileManagerTreeView className={className} root={root} onNodeSelected={setDGSource} />}
                center={<FileManagerDataGrid className={className} dataSource={DGSource} onRowClick={onFileSelected} />}
                right={<FileManagerDetails className={className} onFileDetailsClosed={() => setIsFileDetailsVisible(false)} />}
            />
        </div>
    )
};

export default BasicTreeView;