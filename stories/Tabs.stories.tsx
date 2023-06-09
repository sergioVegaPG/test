// Libraries imports
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import type { Meta, StoryObj } from '@storybook/react';

// Local imports
import Tabs from '@/components/tabs/Tabs';
import ActivityFeed from '@/components/feeds/ActivityFeed';
import { default as LargeComponent } from '@/app/[lang]/private/test/large/page';
import { Tab } from '@/lib/types/tab';

const meta = {
    title: 'Eigentümerportal/Tabs/Tabs',
    component: Tabs,
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const dataSource: Tab[] = [
    {
        title: 'Test 1',
        icon: fa1,
        children: <div className='w-max-[100px] relative h-36 flex justify-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aliquam, in corporis quod cum ea suscipit recusandae neque ut fugiat, dolor, nemo optio earum similique fugit nobis ducimus commodi beatae.
        </div>
    },
    {
        title: 'Test 2',
        icon: fa2,
        children: <div className='w-36 h-36 flex justify-center'>
            <motion.div
                layout
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#918898",
                }}
                animate={{ rotate: 360 }}
                transition={{ ease: "backInOut", duration: 2, repeat: Infinity }}
            />
        </div>
    },
    {
        title: 'Test 3',
        icon: fa3,
        children: <LargeComponent />
    },
]

export const Default: Story = {
    args: {
        dataSource
    },
};

export const Large: Story = {
    args: {
        dataSource,
        size: 'large'
    },
};