import { useUserStore } from '@/domain/stores/user.store';
import * as yup from 'yup';

export type SignUpFormValues = {
    name: string | undefined;
    email: string | undefined;
}

export type SignUpFormValuesValidated = {
    name: string;
    email: string;
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

    const onSubmit = (values: SignUpFormValuesValidated) => {
        useUserStore().setUser({
            name: values.name,
            email: values.email,
        })
    }

    return { validationSchema, initialValues, onSubmit };
}