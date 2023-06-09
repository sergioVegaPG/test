import {
    faArrowTrendDown, faArrowTrendUp, faChartLine, faChartSimple, faDownload, faFolder,
    faHouseChimney, faListUl, faMoneyBillTransfer, faPeopleArrows, faPercent
} from '@fortawesome/free-solid-svg-icons';

// Local imports
import { route } from './types/route';

const FinanceChildren: route[] = [
    {
        path: 'businessPartners',
        icon: faPeopleArrows,
        name: 'Business Partners',
        isGroup: false,
        parent: 'finance'
    },
    {
        path: 'incomes',
        icon: faArrowTrendUp,
        name: 'Incomes',
        isGroup: false,
        parent: 'finance'
    },
    {
        path: 'expenses',
        icon: faArrowTrendDown,
        name: 'Expenses',
        isGroup: false,
        parent: 'finance'
    },
    {
        path: 'fixedAssets',
        icon: faPercent,
        name: 'Fixed Assets',
        isGroup: false,
        parent: 'finance'
    },
    {
        path: 'returns',
        icon: faMoneyBillTransfer,
        name: 'Returns',
        isGroup: false,
        parent: 'finance'
    },
];

const DeclarationsChildren: route[] = [
    {
        path: 'declarations',
        icon: faListUl,
        name: 'Declarations',
        isGroup: false,
        parent: 'declarations'
    },
];

const DocumentsChildren: route[] = [
    {
        path: 'documents',
        icon: faFolder,
        name: 'Documents',
        isGroup: false,
        parent: 'documents'
    },
];

export const routes: route[] = [
    {
        path: 'dashboard',
        icon: faChartSimple,
        name: 'Dashboard',
        isGroup: false,
    },
    {
        path: 'propertyInformation',
        icon: faHouseChimney,
        name: 'Property Information',
        isGroup: false,
    },
    {
        path: 'finance',
        icon: faChartLine,
        name: 'Finance',
        isGroup: true,
        children: FinanceChildren,
    },
    {
        path: 'declarations',
        icon: faListUl,
        name: 'Declarations',
        isGroup: true,
        children: DeclarationsChildren,
    },
    {
        path: 'documents',
        icon: faFolder,
        isGroup: true,
        name: 'Documents',
        children: DocumentsChildren,
    },
    {
        path: 'downloadCenter',
        icon: faDownload,
        name: 'Download Center',
        isGroup: false,
    },
];