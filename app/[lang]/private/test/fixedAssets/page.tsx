'use client'

import { useState } from 'react';
import DataGrid, {
    Column,
    GroupPanel,
    SearchPanel,
    Summary,
    TotalItem,
} from 'devextreme-react/data-grid';
import { Popup as DxPopup, Position, ToolbarItem } from 'devextreme-react/popup';

const dataSource = [
    {
        "invoiceId": "07738f1e-d755-473c-a492-369993e60060",
        "name": "testing",
        "activationDate": "2022-12-31T00:00:00",
        "activationAmount": 1500,
        "depreciatedAmount": 79.06,
        "depreciationConfigId": "ffcb348a-7fed-ed11-8190-2c44fd7ae554",
        "depreciationAmountPercent": 3,
        "depreciationMaxYears": 0,
        "estimatedUsefulLife": 0,
        "depreciations": [
            {
                "fixedAssetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "periodStart": "2023-01-10T00:00:00",
                "periodEnd": "2023-02-03T00:00:00",
                "amount": 2.96,
                "id": "8136c784-ff61-4583-bb65-764f7bce99ee",
                "deleted": false,
                "creationDate": "2023-04-19T09:02:00",
                "lastModificationDate": "2023-05-10T15:01:00",
                "lastModificationByUser": ""
            },
            {
                "fixedAssetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "periodStart": "2022-10-01T00:00:00",
                "periodEnd": "2022-12-31T00:00:00",
                "amount": 11.22,
                "id": "23b165c6-8548-45f2-bde6-7e287d58ede6",
                "deleted": false,
                "creationDate": "2023-05-10T15:08:00",
                "lastModificationDate": "2023-05-10T15:08:00",
                "lastModificationByUser": ""
            },
            {
                "fixedAssetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "periodStart": "2022-01-01T00:00:00",
                "periodEnd": "2022-12-31T00:00:00",
                "amount": 44.88,
                "id": "cd0951a5-bcdf-4683-80a8-8afd87208d9b",
                "deleted": false,
                "creationDate": "2023-04-26T15:32:00",
                "lastModificationDate": "2023-05-10T15:14:00",
                "lastModificationByUser": ""
            },
            {
                "fixedAssetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "periodStart": "2021-06-01T00:00:00",
                "periodEnd": "2021-07-01T00:00:00",
                "amount": 20,
                "id": "1ce057ae-9c81-4915-9a19-a98faa0e680b",
                "deleted": false,
                "creationDate": "2023-05-03T15:32:00",
                "lastModificationDate": "2023-05-03T15:32:00",
                "lastModificationByUser": "string"
            }
        ],
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "deleted": false,
        "creationDate": "2023-05-10T12:26:00",
        "lastModificationDate": "2023-05-10T12:26:00",
        "lastModificationByUser": "System Admin"
    },
    {
        "invoiceId": "07738f1e-d755-473c-a492-369993e60060",
        "name": "string",
        "activationDate": "2023-05-08T12:34:00",
        "activationAmount": 10,
        "depreciatedAmount": 0,
        "depreciationConfigId": "ffcb348a-7fed-ed11-8190-2c44fd7ae554",
        "depreciationAmountPercent": 0,
        "depreciationMaxYears": 0,
        "estimatedUsefulLife": 0,
        "depreciations": [],
        "id": "bfe1c0c8-ae24-4d68-896a-8a82bcbad1f7",
        "deleted": false,
        "creationDate": "2023-05-08T14:35:00",
        "lastModificationDate": "2023-05-08T14:35:00",
        "lastModificationByUser": "string"
    },
    {
        "invoiceId": "07738f1e-d755-473c-a492-369993e60060",
        "name": "string",
        "activationDate": "2023-05-08T12:34:00",
        "activationAmount": 10,
        "depreciatedAmount": 0,
        "depreciationConfigId": "ffcb348a-7fed-ed11-8190-2c44fd7ae554",
        "depreciationAmountPercent": 0,
        "depreciationMaxYears": 0,
        "estimatedUsefulLife": 0,
        "depreciations": [],
        "id": "f68f41ae-f10f-48ec-af8a-c9dbdea77a70",
        "deleted": false,
        "creationDate": "2023-05-08T15:10:00",
        "lastModificationDate": "2023-05-08T15:10:00",
        "lastModificationByUser": "string"
    }
];

export default function Test() {

    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [selectedFixedAsset, setSelectedFixedAsset] = useState<number>(-1);

    return (
        <div className='dx-viewport'>
            {/* DATAGRID */}
            <DataGrid
                dataSource={dataSource}
                rowAlternationEnabled={true}
                height=''
            >
                <GroupPanel visible={true} />
                <SearchPanel visible={true} highlightCaseSensitive={true} />
                <Column
                    dataField='name'
                    caption='Name'
                />
                <Column
                    dataField='activationDate'
                    caption='Activation Date'
                    dataType='date'
                />
                <Column
                    dataField='activationAmount'
                    caption='Activation Amount'
                    format={{ type: 'currency', currency: 'EUR', precision: 2 }}
                />
                <Column
                    dataField='depreciatedAmount'
                    caption='Depreciated Amount'
                    format={{ type: 'currency', currency: 'EUR', precision: 2 }}
                />
                <Column
                    dataField='depreciationAmountPercent'
                    caption='Depreciation Amount (%)'
                    format={{ type: 'decimal', precision: 2 }}
                    customizeText={({ value }: { value: number }) => value != 0 ? value + ' %' : '- %'}
                />
                <Column
                    dataField='depreciationMaxYears'
                    caption='Depreciation Max. Years'
                    customizeText={({ value }: { value: number }) => value != 0 ? value + ' years' : '- years'}
                />
                <Column
                    dataField='estimatedUsefulLife'
                    caption='Est. Useful Life'
                    customizeText={({ value }: { value: number }) => value != 0 ? value + ' years' : '- years'}
                />
                <Column
                    caption='Depreciations'
                    cellRender={({ rowIndex }) => {
                        return (
                            <div className='cursor-pointer text-links'
                                onClick={() => { setIsPopupVisible(true), setSelectedFixedAsset(rowIndex) }}>
                                View...
                            </div>
                        )
                    }}
                />
                {
                    isPopupVisible &&
                    <Popup data={dataSource[selectedFixedAsset]} cacacasadasd={() => setIsPopupVisible(false)} />
                }
            </DataGrid>
            {/* END DATAGRID */}
        </div>
    )
}

interface IPopupProps {
    data: any;
    cacacasadasd: () => void;
}

const Popup = ({ data, cacacasadasd }: IPopupProps) =>
    <DxPopup
        contentRender={() => <PopupDatagrid dataSource={data.depreciations} />}
        dragEnabled={false}
        height='auto'
        hideOnOutsideClick
        onHidden={cacacasadasd}
        titleRender={() => <div className='font-bold text-2xl flex w-full justify-center text-secondary-500'>{data.name} depreciations </div>}
        visible
        width='1000'
    >
        <Position of='#content' />
        <ToolbarItem toolbar='bottom' location='after'>
            {/* <Button text='Schließen' onClick={console.log} /> */}
        </ToolbarItem>
    </DxPopup>

interface IPopupDatagridProps {
    dataSource: any;
}

const PopupDatagrid = ({ dataSource }: IPopupDatagridProps) =>
    <DataGrid
        dataSource={dataSource}
        columnAutoWidth
        rowAlternationEnabled
    >
        <Summary texts={{ sum: 'Total: {0}' }}>
            <TotalItem
                column="amount"
                summaryType="sum"
                valueFormat={{ type: 'currency', currency: 'EUR', precision: 2 }}
            />

        </Summary>
        <Column
            dataField='periodStart'
            caption='Period Start'
            dataType='date'
        />
        <Column
            dataField='periodEnd'
            caption='Period End'
            dataType='date'
        />
        <Column
            dataField='amount'
            caption='Amount'
            format={{ type: 'currency', currency: 'EUR', precision: 2 }}
        />
    </DataGrid>