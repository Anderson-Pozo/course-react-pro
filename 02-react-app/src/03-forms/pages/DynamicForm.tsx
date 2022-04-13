import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from './components';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue;

    let schema = Yup.string()
    
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min( 
                (rule as any).value || 2, 
                `Ingrese al menos ${(rule as any).value || 2 } caracteres`
            )
        }
        if (rule.type === 'email') {
            schema = schema.email('Email inválido')
        }
    }

    requiredFields[input.name] = schema;
}

console.log({ requiredFields });


const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log({ values });
                }}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(({ typeInput, name, label, type, placeholder, options }) => {

                                    if (typeInput === 'input') {
                                        return <MyTextInput
                                            key={name}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                            type={type}
                                        />

                                    } else if (typeInput === 'select') {
                                        return (
                                            <MySelect
                                                key={name}
                                                name={name}
                                                label={label}
                                            >
                                                <option value="">Select a game</option>
                                                {
                                                    options?.map(({ id, label }) => (
                                                        <option key={id} value={id}>{label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }
                                })
                            }
                            <button type="submit">Send</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
