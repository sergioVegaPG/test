import { DataGrid } from "devextreme-react";

const data = [
    {
        id: '0',
        name: 'Test-0',
        type: 'folder-0',
        size: 156,
        modification: 'ayer',
        creation: '1 enero 2023',
        children: [
            {
                id: '0-0',
                name: 'Test-0-0',
                type: 'file-0-0',
                size: 896,
                modification: '1 enero 2023',
                creation: '1 enero 2023',
            },
            {
                id: '0-1',
                name: 'Test-0-1',
                type: 'file-0-1',
                size: 79871,
                modification: 'ayer',
                creation: 'ayer',
            },
            {
                id: '0-2',
                name: 'Test-0-2',
                type: 'file-0-2',
                size: 8424,
                modification: 'hace 1 semana',
                creation: '19 enero 2023',
            }
        ]
    }
]

export const folderDataGrid = (datasource: any[]): JSX.Element => {
    return (
        <DataGrid >

        </DataGrid>
    )
}

export default folderDataGrid;