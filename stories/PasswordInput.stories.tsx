// Libraries imports
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import type { Meta, StoryObj } from '@storybook/react';

import PasswordInput from '@/components/inputs/PasswordInput';

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
  title: 'Eigentümerportal/Inputs/Password Input',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'normal',
    label: 'Password'
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Required: Story = {
  args: {
    name: 'required',
    label: 'Password',
    required: true,
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Password',
    disabled: true,
  },
  decorators: [
    (Story) => wrapper(Story),
  ]
};
