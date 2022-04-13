import { ErrorMessage, useField } from "formik"

interface Props {
    label?: string;
    name: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    [x: string]: any
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [field, meta] = useField(props);
    return (
        <>
            { label && <label htmlFor={ props.id || props.name }>{label}</label>}
            <input className="text-input" {...field} {...props}/>
            <ErrorMessage name={props.name} component="span" className="my-custom-class"/>
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            } */}
        </>
    )
}
