import { Popup as DxPopup, Position} from 'devextreme-react/popup';
import { DataGrid, Column, Summary, TotalItem } from 'devextreme-react/data-grid';

import Button from '../buttons/Button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
interface IPopupProps {
    data: any;
    isDesktop: boolean;
    onClose: () => void;
}

export const Popup = ({ data, isDesktop, onClose }: IPopupProps) => 
    <DxPopup
        contentRender={() => <PopupDatagrid dataSource={data.depreciation} />}
        dragEnabled={false}
        height={isDesktop ? 575 : 'auto'}
        width={isDesktop ? 900 : 'auto'}
        hideOnOutsideClick={isDesktop}
        onHidden={onClose}
        titleComponent={() => <HeaderPopup title={data.name + ' Depreciations'} onClose ={onClose}/>}
        visible
    >   
        <Position of='#content' />
    </DxPopup>

interface IPopupHeaderProps {
    title: string;
    onClose: () => void;
}

const HeaderPopup = ({title, onClose}: IPopupHeaderProps) => {
    return(
        <div className='flex justify-between '>
            <div className='flex font-bold text-2xl text-secondary-500 justify-center items-center'>{title}  </div>
            <div className='w-12'>
                <Button icon={faXmark} size={'base'} onClick={onClose}  style={'outline'}></Button>
            </div>
        </div>
    )
}

interface IPopupDatagridProps {
    dataSource: any;
}

const PopupDatagrid = ({ dataSource }: IPopupDatagridProps) => {
    return (
    <DataGrid
        dataSource={dataSource}
        columnAutoWidth
        rowAlternationEnabled
    >
        <Column
            dataField='monthOfYear'
            caption='Month'
            dataType='number'
            alignment="left"
        />
        <Column
            dataField='numberOfRentalDays'
            caption='Rental days'
            dataType='number'
            alignment="left"
        />
        <Column
            dataField='accumulatedDepreciation'
            caption= 'Accumulated depreciation'
            alignment="left"
            format={{ type: 'currency', currency: 'EUR', precision: 2 }}
        />
          <Summary>
            <TotalItem
              column="numberOfRentalDays"
              summaryType= "sum"/>
            <TotalItem
              column= "accumulatedDepreciation"
              summaryType= "sum"
              valueFormat= {{ type: 'currency', currency: 'EUR', precision: 2 }} />
          </Summary>
    </DataGrid>  
    ) 
};