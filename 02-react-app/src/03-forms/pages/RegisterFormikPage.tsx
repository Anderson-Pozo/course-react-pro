import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { MyTextInput } from './components';

import "../styles/styles.css"

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }} 
                onSubmit={ (values) => {
                    console.log({ values });
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .min(2, 'Debe tener mas de 2 caracteres')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Email inválido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Debe tener mas de 6 caracteres')
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                            .required('Requerido'),
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form noValidate>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Insert your name"
                            />
                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Insert your email address"
                            />
                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="Insert your password"
                            />
                            <MyTextInput
                                label="Repeat your password"
                                name="password2"
                                type="password"
                                placeholder="Repeat password"
                            />

                            <button type="submit">Login</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
