'use client'

import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

import BasicTextArea from "@/components/textArea/BasicTextArea"
import Button from '@/components/buttons/Button';
import GroupItem from '@/components/layoutComponent/GroupItem';
import BasicRadioGroup from '@/components/radioGroups/BasicRadioGroup';
import Select from '@/components/selects/Select';

const page = () => {
  return (
    <>
      <Formik
        initialValues={{
          test: '',
          test2: '',
          test4: ''
        }}
        validationSchema={Yup.object().shape({
          test: Yup.string().required('This field can not be empty!'),
          test2: Yup.string().required('Al least select one!'),
          test4: Yup.array().min(1, 'You have to eat fruit!').required('You have to eat fruit!')
        })}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <FormikForm>
          <GroupItem caption='Profile Page' cols={2} >

            <BasicTextArea
              name="test"
              label="LEMAO"
              required
            />

            <BasicRadioGroup
              name='test2'
              label='Select a Bazinga'
              inputsList={[
                { label: 'Banana', value: 'Ban' },
                { label: 'Orange', value: 'Ora' },
                { label: 'Strawberry', value: 'Straw' },
              ]}
              required
            />

            <Select
              name='test4'
              label='Select one:'
              inputsList={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ]}
              required
              isSearchable
              isMulti
            />

          </GroupItem>

          <div className="flex justify-end mt-4">
            <div className='w-60'>
              <Button
                type='submit'
                text={'Submit Form'}
              />
            </div>
          </div>
        </FormikForm>
      </Formik>
    </>
  )
}

export default page