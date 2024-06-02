import React from "react";
import { 
    Credentials, 
    CredentialsFormErrors, 
    createEmptyCredentials, 
    createEmptyCredentialsFormErrors 
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";


interface Props {
    onLogin: (credentials : Credentials) => void;
}

export const LoginFormComponent : React.FC<Props> = (props) => {
    const { onLogin } = props;
    const [credentials, setCredentials] = React.useState<Credentials> (
        createEmptyCredentials()
    );

    const [errors, setErrors] = React.useState<CredentialsFormErrors> (
        createEmptyCredentialsFormErrors()
    );

    
    const handleFieldChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit =( e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationResult = validateForm(credentials);
        setErrors(validationResult.errors);

        if(validationResult) {
            onLogin(credentials)
        }
    };


    return(
        <form onSubmit={handleSumbit} className={classes.form}>
                <div>
                    <label htmlFor="username">Usuario</label>
                    <input 
                        type="text" 
                        id="username" 
                        autoComplete="off"
                        name="user" 
                        placeholder="Usuario"
                        onChange={handleFieldChange}
                        className={errors.user ? classes.error : ""}
                    ></input>
                    {errors.user && <p className={classes.error}> {errors.user}</p>}
                </div>
                <div>
                    <label htmlFor="passowrd">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        autoComplete="off"
                        name="password" 
                        placeholder="Clave"
                        onChange={handleFieldChange}
                        className={errors.password ? classes.error : ""}
                    ></input>
                    {errors.password && <p className={classes.error}>{errors.password}</p>}
                </div>
                <button 
                    type="submit" 
                    className={classes.btnEnviar}
                >
                    Acceder
                </button>
            </form>
    );
};