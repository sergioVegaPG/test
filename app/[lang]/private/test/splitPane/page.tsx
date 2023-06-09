'use client';

// React imports
import { useState } from 'react';

// Local imports
import Button from '@/components/buttons/Button';
import SplitPane from '@/components/splitPane/SplitPane'

function Page() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div className='flex flex-col h-[85vh] w-[90vw]'>
      <div className='w-20'>
        <Button
          text={visible ? 'Hide' : 'Show'}
          onClick={() => {
            setVisible((visible) => !visible);
          }}
        />
      </div>
      <SplitPane
        visible={visible}
      />
    </div>
  )
};

export default Page