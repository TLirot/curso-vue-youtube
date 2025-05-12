import * as yup from 'yup';

export type SignUpFormValues = {
    name: string | undefined;
    email: string | undefined;
}

export const useSignUp = () => {

    const initialValues: SignUpFormValues = {
        name: undefined,
        email: undefined,
    }

    const validationSchema = yup.object<SignUpFormValues>().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
    })

    const onSubmit = () => {
        alert('Form submitted with values:');
    }

    return {validationSchema, initialValues, onSubmit};
}