// Libraries imports
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Local imports
import BasicInput from '@/components/inputs/BasicInput';
import BasicRadioGroup from '@/components/radioGroups/BasicRadioGroup';
import Button from '@/components/buttons/Button';
import Checkbox from '@/components/checkbox/Checkbox';
import GroupItem from '@/components/layoutComponent/GroupItem';
import Select from '@/components/selects/Select';

interface Props {

}

export const FileMetaData = (props: Props) => {
    const initialValues = {
        email: 'Test@plattesgroup.net',
        acceptTerms: false,
        radio: '',
        select: ''
    }

    const handleSubmit = (values: any, formikHelpers: FormikHelpers<any>): void | Promise<any> => {
        alert(JSON.stringify(values, null, 2));
        formikHelpers.setSubmitting(false);
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Required').email(),
        acceptTerms: Yup.bool().isTrue('Terms and Conditions must be accepted.'),
        radio: Yup.string().required('Pick your poison, joder'),
        select: Yup.string().required(),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <FormikForm>
                <GroupItem
                    cols={2}
                    caption="File data"
                >

                    <BasicInput
                        name="email"
                        label='Test Input'
                    />

                    <Checkbox
                        name='acceptTerms'
                        text='Do you accept the terms and conditions?'
                        helpText='Please do so.'
                    />

                    <BasicRadioGroup
                        name='radio'
                        inputsList={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                        ]}
                        label='Choose an option'
                    />

                    <Select
                        inputsList={[
                            { label: 'Test 1', value: '1' },
                            { label: 'Test 2', value: '2' },
                            { label: 'Test 3', value: '3' },
                        ]}
                        name='select'
                    />
                </GroupItem>

                <div className='flex justify-end py-4'>
                    <div className='flex flex-row justify-between gap-2'>
                        <Button
                            elevated
                            style='outline'
                            type='reset'
                            text='Reset'
                        />
                        <Button
                            elevated
                            type='submit'
                            text='Submit'
                        />
                    </div>
                </div>
            </FormikForm>
        </Formik>
    )
}
