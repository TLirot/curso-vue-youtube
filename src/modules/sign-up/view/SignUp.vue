<template>
    <h2>Login form</h2>
    <Form :validation-schema="validationSchema" :initial-values="initialValues" @submit="onSubmit">
        <div id="name-field" class="form-field">
            <label for="name">Name: </label>
            <Field type="text" name="name" id="name"/>
            <ErrorMessage name="name" class="error-message"/>
        </div>
        <div id="email-field" class="form-field">
            <label for="email">Email: </label>
            <Field type="email" name="email" id="email"/>
            <ErrorMessage name="email" class="error-message"/>
        </div>
        <div>
            <button type="submit">Sign up</button>
         </div>
    </Form>
</template>
<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useSignUp } from './SignUp';

const {validationSchema, initialValues, onSubmit} = useSignUp();

</script>
<style scoped>
.form-field {
    margin-bottom: 1rem;
}

#name-field {
    margin-top: 1rem;
}
</style>
