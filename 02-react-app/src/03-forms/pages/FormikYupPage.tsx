import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {
    const { 
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log({ values });
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe tener 15 caracteres o menos')
                .required('Requerido'),
            lastName: Yup.string()
                .max(15, 'Debe tener 10 caracteres o menos')
                .required('Requerido'),
            email: Yup.string().email('Email inválido').required('Requerido')
        })
    })

    return (
        <div>
            <h1>Formik Yup Page</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" { ...getFieldProps('firstName')}/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                
                <label htmlFor="firstName">Email address</label>
                <input type="email" {...getFieldProps('email')}/>
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
