// Libraries imports
import type { Meta, StoryObj } from '@storybook/react';

// Local imports
import Layout from '@/components/layoutComponent/Layout';

const meta = {
    title: 'Eigentümerportal/Layout/Layout',
    component: Layout,
    tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: [
            <div key={1}>Hola 1</div>,
            <div key={2}>Hola 2</div>,
            <div key={3}>Hola 3</div>,
            <div key={4}>Hola 4</div>,
            <div key={5}>Hola 5</div>,
            <div key={6}>Hola 6</div>,
        ]
    },
};

// export const Small: Story = {
//     args: {},
// };
