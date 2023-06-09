// Libraries imports
import { faUser, faJedi } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import type { Meta, StoryObj } from '@storybook/react';

import BasicInput from '@/components/inputs/BasicInput';

const wrapper = (Story: any, initialValues: any) => (
  <Formik
    initialValues={initialValues}
    onSubmit={() => { }}
    validationSchema={Yup.object().shape({ story: Yup.string() })}
  >
    <FormikForm>
      <Story />
    </FormikForm>
  </Formik>
)

const meta = {
  title: 'Eigentümerportal/Inputs/Basic Input',
  component: BasicInput,
  tags: ['autodocs'],
} satisfies Meta<typeof BasicInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    icon: faUser,
    label: 'This is a demo input',
    name: 'story',
  },
  decorators: [
    (Story) => {
      const initialValues = {
        story: 'Default Value',
      }
      return wrapper(Story, initialValues);
    }
  ]
};

export const EmptyWithIcon: Story = {
  args: {
    icon: faJedi,
    label: 'Input with icon',
    name: 'story',
  },
  decorators: [
    (Story) => {
      const initialValues = {
        story: '',
      }
      return wrapper(Story, initialValues);
    }
  ]
};

export const EmptyWithoutIcon: Story = {
  args: {
    name: 'story',
    label: 'Input with no icon',
  },
  decorators: [
    (Story) => {
      const initialValues = {
        story: '',
      }
      return wrapper(Story, initialValues);
    }
  ]
};

export const ReadOnly: Story = {
  args: {
    label: 'Address',
    name: 'story',
    readOnly: true,
  },
  decorators: [
    (Story) => {
      const initialValues = {
        story: 'Camí dels Reis 308, 3A, 1a planta',
      }
      return wrapper(Story, initialValues);
    }
  ]
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Nothing to see here',
    name: 'story',
  },
  decorators: [
    (Story) => {
      const initialValues = {
        story: 'Can\'t touch this',
      }
      return wrapper(Story, initialValues);
    }
  ]
};