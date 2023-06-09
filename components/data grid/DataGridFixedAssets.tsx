"use client"
// React imports
import { useState, useEffect } from 'react';

// Libraries imports
import DataGrid, { Column, GroupPanel, Paging, SearchPanel, Toolbar, Item, HeaderFilter, Summary, TotalItem  } from 'devextreme-react/data-grid';
import { Formik, Form as FormikForm } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faDownload } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '@/lib/hooks/useMediaQuery';
import { loadMessages, locale } from 'devextreme/localization';
import { match } from '@formatjs/intl-localematcher';
import { i18n } from "@/i18n-config";
import { saveAs } from 'file-saver';
import deMessages from 'devextreme/localization/messages/de.json';
import enMessages from 'devextreme/localization/messages/en.json';
import esMessages from 'devextreme/localization/messages/es.json';

// Local imports
import { Popup } from './Popup';
import Select from '@/components/selects/Select';

const DataGridFixedAssets = (props: any) => {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [selectedFixedAsset, setSelectedFixedAsset] = useState<number>(-1);
    const isDesktop = useMediaQuery();
    const {data} = props

    const onButtonClick = (rowIndex: number) => {
        console.log(data[rowIndex].ID)
        fetch('data.json')
            .then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    saveAs(fileURL, "data.json");
                })
            })
    };

    useEffect(() => {
        // @ts-ignore
        const navigatorLanguage = match(navigator.languages, i18n.locales, i18n.defaultLocale);
        switch (navigatorLanguage) {
            case "de":
                loadMessages(deMessages)
                locale(navigatorLanguage)
                break;
            case "es":
                loadMessages(esMessages)
                locale(navigatorLanguage)
                break;
            default:
                loadMessages(enMessages)
                locale('en');
                break;
        }
    }, []);

    const inputsList = [
        {
            label: '2022',
            value: '2022'
        },
        {
            label: '2021',
            value: '2021'
        }
    ]
    return (
        <>
            <DataGrid
                dataSource={data}
                keyExpr="ID"
                showBorders={true}
                showRowLines={true}
                focusedRowEnabled={true}
                columnMinWidth={100}
                allowColumnResizing={isDesktop}
                columnHidingEnabled={!isDesktop}
            >
                <HeaderFilter visible={true}/>
                <GroupPanel visible={isDesktop} />
                <SearchPanel visible={true} searchVisibleColumnsOnly={false} />
                <Paging defaultPageSize={20} />

                <Toolbar>
                    <Item name="groupPanel" />
                    <Item location="center">
                        <Formik
                            initialValues={{
                                property: '2022',
                            }}
                            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                        >
                            <FormikForm>
                                <div className={'md:w-[25rem] lg:w-[30rem] xl:w-[36rem]'}>
                                    <Select
                                        name='property'
                                        inputsList={inputsList}
                                        defaultValue={inputsList[0]}
                                        submitOnChange
                                        isSecondary
                                    />
                                </div>
                            </FormikForm>
                        </Formik>
                    </Item>
                    <Item name="searchPanel" />
                </Toolbar>

                <Column
                    dataField="costType"
                    dataType="string"
                    caption="Cost Type"
                    groupIndex={0}
                    allowHeaderFiltering={false}
                />
                <Column
                    dataField="name"
                    dataType="string"
                    caption="Name"
                    hidingPriority={7}
                    width={isDesktop && 250}
                />
                <Column
                    dataField="activationDate"
                    dataType="date"
                    caption="Activation Date"
                    hidingPriority={5}
                />
                <Column
                    dataField="activationValue"
                    dataType="number"
                    caption="Activation Value"
                    alignment="left"
                    format={{ type: 'currency', currency: 'EUR', precision: 2 }}
                    hidingPriority={4}>
                    <HeaderFilter  groupInterval={10000}/> 
                </Column>  
                <Column
                    dataField="depreciationType"
                    dataType="number"
                    caption="Depreciation Type"
                    alignment="left"
                    width={isDesktop && 160}
                    format={{ type: 'percent', precision: 2 }}
                    hidingPriority={3}>
                    <HeaderFilter  groupInterval={0.05}/>          
                </Column>
                <Column
                    dataField="accumulatedDepreciation"
                    dataType="number"
                    caption="Acc. Depreciation"
                    alignment="left"
                    hidingPriority={6}
                    format={{ type: 'currency', currency: 'EUR', precision: 2 }}>
                    <HeaderFilter  groupInterval={10000}/>     
                </Column>    
                <Column
                    dataField="NBVAtStartDate"
                    dataType="date"
                    caption="NBV start date"
                    hidingPriority={2}
                />
                <Column
                    caption='Depreciations'
                    width={isDesktop && 130}
                    alignment='center'
                    hidingPriority={1}
                    cellRender={({ rowIndex }) => {
                        return (
                            <div
                                className='cursor-pointer'
                            >
                                <FontAwesomeIcon  onClick={() => { setIsPopupVisible(true), setSelectedFixedAsset(rowIndex) }} icon={faCircleInfo} className='text-primary-600  hover:scale-110 hover:text-primary-800' />
                            </div>
                        )
                    }}
                />
                {
                    isPopupVisible &&
                    <Popup data={data[selectedFixedAsset]} onClose={() => setIsPopupVisible(false)} isDesktop={isDesktop} />
                }
                <Column
                    caption="Invoice"
                    width={isDesktop && 120}
                    alignment='center'
                    hidingPriority={0}
                    cellRender={({ rowIndex }) => {
                        return (
                            <div
                                className='cursor-pointer'
                            >
                                <FontAwesomeIcon 
                                    onClick= {() => {onButtonClick(rowIndex)}} 
                                    icon= {faDownload} 
                                    className='text-primary-600 hover:scale-110 hover:text-primary-800'
                                />
                            </div>
                        )
                    }}
                />
                <Summary>
                    <TotalItem
                        column="activationValue"
                        summaryType="sum" />
                    <TotalItem
                        column="accumulatedDepreciation"
                        summaryType="sum"
                        valueFormat={{ type: 'currency', currency: 'EUR', precision: 2 }} />
                </Summary>
            </DataGrid>
        </>
    )
}

export default DataGridFixedAssets