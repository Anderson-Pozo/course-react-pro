import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput, MyCheckbox } from './components';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    is_active: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log({ values });
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe tener 10 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Email inválido')
                            .required('Requerido'),
                        jobType: Yup.string()
                            .notOneOf(['it-junior'], 'Esta opción no está permitida')
                            .required('Requerido'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Debe aceptar las condiciones'),
                        is_active: Yup.boolean()
                            .oneOf([true], 'Debe activar la opcion'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder="Write your first name"
                            />
                            
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder="Write your last name"
                            />
                            
                            <MyTextInput 
                                label="Email address" 
                                name="email"
                                placeholder="Write your email"
                                type="email"
                            />
                            
                            <MySelect name="jobType" label="Job Type">
                                <option value="">Select something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms & conditions" name="terms"/>
                            <MyCheckbox label="Is Active" name="is_active"/>

                            <button type="submit">Send</button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    )
}
