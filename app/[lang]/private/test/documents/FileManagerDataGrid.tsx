// Libraries imports
import {
    ColumnFixing,
    DataGrid,
    FilterRow,
    Grouping,
    GroupPanel,
    Item,
    SearchPanel,
    Selection,
    Toolbar,
} from 'devextreme-react/data-grid';

// Local imports
import Badge from '@/components/notifications/Badge';
import { TreeNode } from '@/components/treeView/root';

interface Props {
    className: string;
    dataSource: TreeNode[];
    onRowClick: (id: string) => void;
}

export const FileManagerDataGrid = ({ className, dataSource, onRowClick }: Props) => (
    <div className={`${className} h-full`}>
        <DataGrid
            className='h-full'
            dataSource={dataSource}
            id='FileManagerDataGrid'
            columnAutoWidth
            rowAlternationEnabled
            onRowClick={e => onRowClick(e.data.id!)}
        >
            <GroupPanel visible />
            <Grouping />
            <SearchPanel visible />
            <FilterRow visible />
            <ColumnFixing enabled />
            <Selection mode='single' />
            <Toolbar>
                <Item name='groupPanel' />
                <Item location='after' >
                    <div className='h-full flex items-center justify-center text-center'>
                        <span className="text-base flex items-center text-center after:content-['\00a0']">{`Pending files`}</span>
                        <Badge value={2} />
                    </div>
                </Item>
            </Toolbar>
        </DataGrid>
    </div>
)