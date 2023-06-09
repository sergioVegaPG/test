import type { Meta, StoryObj } from '@storybook/react';

import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import BasicTextArea from '@/components/textArea/BasicTextArea';

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

const wrapperWithContent = (Story: any) => (
  <Formik
    initialValues={{ story: 'Test Value' }}
    onSubmit={() => { }}
    validationSchema={Yup.object().shape({ story: Yup.string() })}
  >
    <FormikForm>
      <Story />
    </FormikForm>
  </Formik>
)

const meta = {
  title: 'Eigentümerportal/Text Area/Basic Text Area',
  component: BasicTextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof BasicTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'story',
    label: 'This is a text area'
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Large: Story = {
  args: {
    name: 'story',
    label: 'This is a LARGE text area',
    size: 'large'
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Required: Story = {
  args: {
    name: 'story',
    label: 'This is a required text area',
    required: true
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Disabled: Story = {
  args: {
    name: 'story',
    label: 'This is a disabled text area',
    disabled: true
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const ReadOnly: Story = {
  args: {
    name: 'story',
    label: 'This is a read only text area',
    readOnly: true,
  },
  decorators: [
    (Story) => wrapperWithContent(Story),
  ]
};