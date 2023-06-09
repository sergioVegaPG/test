// Libraries imports
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import type { Meta, StoryObj } from '@storybook/react';

// Local imports
import { Checkbox } from '@/components/checkbox/Checkbox';

const wrapper = (Story: any) => (
    <Formik
        initialValues={{ story: '' }}
        onSubmit={() => { }}
        validationSchema={Yup.object().shape({ story: Yup.string() })}
    >
        <FormikForm>
            <Story />
        </FormikForm>
    </Formik>
)

const meta = {
    title: 'Eigentümerportal/Checkbox/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'default',
    },
    decorators: [
        (Story) => wrapper(Story),
    ]
};

export const Secondary: Story = {
    args: {
        name: 'secondary',
        variant: 'secondary',
    },
    decorators: [
        (Story) => wrapper(Story),
    ]
};

export const With_Text: Story = {
    args: {
        name: 'withText',
        text: 'Lorem ipsum',
    },
    decorators: [
        (Story) => wrapper(Story),
    ]
};

export const With_Auxiliar_Text: Story = {
    args: {
        name: 'withAuxText',
        text: 'Lorem ipsum',
        helpText: 'Lorem ipsum',
    },
    decorators: [
        (Story) => wrapper(Story),
    ]
};

export const Disabled: Story = {
    args: {
        name: 'disabled',
        text: 'Lorem ipsum',
        helpText: 'Lorem ipsum',
        disabled: true,
    },
    decorators: [
        (Story) => wrapper(Story),
    ]
};

