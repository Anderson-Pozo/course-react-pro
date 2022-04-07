import { FormEvent } from "react"
import { useForm } from "03-forms/hooks/useForm"

import "../styles/styles.css"

export const RegisterPage = () => {

    const { 
        formData,onChange, resetForm, isValidEmail,
        name, email, password1, password2,
    } = useForm({
        name: 'Anderson095',
        email: 'ander012@gmail.com',
        password1: '',
        password2: '',
    });

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }
    
    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={ `${ name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>Nombre requerido</span> }
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    autoComplete="off"
                />
                { !isValidEmail(email) && <span>Email inválido</span> }
                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                />
                { password1.trim().length <= 0 && <span>Password requerido</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span> }
                <input
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                />
                { password2.trim().length <= 0 && <span>Repeat password requerido</span> }
                { password2.trim().length > 0 && password2 !== password1 && <span>Las contraseñas no coinciden</span> }
                <button type="submit">Login</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}
