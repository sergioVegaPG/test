// Libraries imports
import { faChevronRight, faDatabase, faMagnifyingGlass, faSliders, faXmark } from '@fortawesome/free-solid-svg-icons';

// Local imports
import Tabs from '@/components/tabs/Tabs';
import { FileMetaData } from './FileDetails/FileMetaData';
import { FileActions } from './FileDetails/FileActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    className: string;
    onFileDetailsClosed: () => void;
}

export const FileManagerDetails = ({ className, onFileDetailsClosed }: Props) => (
    <div className={`flex flex-col h-full ${className} relative`}>
        <Tabs
            size='large'
            dataSource={[
                {
                    icon: faMagnifyingGlass,
                    title: 'Preview',
                    children: (
                        <iframe
                            className='w-full h-full'
                            src='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                        />
                    )
                },
                {
                    icon: faSliders,
                    title: 'Actions',
                    children: (
                        <FileActions />
                    )
                },
                {
                    icon: faDatabase,
                    title: 'Metadata',
                    children: (
                        <FileMetaData />
                    )
                },
            ]}
        />
        <div
            className='top-1/2 left-0 absolute border-primary-600 border-y border-r cursor-pointer w-7 h-10 bg-primary-500 text-custom-white flex items-center justify-center'
            onClick={onFileDetailsClosed}
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div
            className='top-0 right-0 absolute w-12 h-12 flex items-center justify-center'
            onClick={onFileDetailsClosed}
        >
            <div className='cursor-pointer hover:bg-secondary-200/20 rounded-md text-secondary-500 hover:text-primary-600 transition-colors w-3/4 h-3/4 flex items-center justify-center'>
                <FontAwesomeIcon icon={faXmark} className='' />
            </div>
        </div>
    </div>
)
