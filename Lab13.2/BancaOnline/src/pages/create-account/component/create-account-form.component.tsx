import React from "react";
import classes from "./create-account-form.component.module.css";
import { 
    CreateAccountError, 
    CreateAccountVm, 
    createEmptyCreateAccount, 
    createEmptyCreateAccountError 
} from "../create-account.vm";
import { validateForm } from "../validation";

interface Props {
    onSent: (accountInfo: CreateAccountVm) => void;
}


export const CreateAccountFormComponent: React.FC<Props> = (props) => {
    const { onSent } = props;
    const [sent, setSent] = React.useState<CreateAccountVm>(
        createEmptyCreateAccount()
    );

    const [ errors, setErrors ] = React.useState<CreateAccountError>(
        createEmptyCreateAccountError()
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("eee")
        const formValidationResult = validateForm(sent);
        setErrors(formValidationResult.errors);

        if(formValidationResult){
            onSent(sent);  
        }
        
        console.log(formValidationResult);
    };

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
    ) =>{
        setSent({
            ...sent, 
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className={classes.container}>
            <form  onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                    <div>
                        <label>Tipo de cuenta:</label>
                        <select 
                            className={classes.select} 
                            onChange={handleFieldChange}
                            value={sent.type}
                            name="type"
                        >
                            <option value="">Seleccionar Cuenta</option>
                            <option value="1">Cuenta Corriente</option>
                            <option value="2">Cuenta de Ahorro</option>
                            <option value="3">Cuenta de Nómina</option>
                        </select>
                        <p className={classes.error}>{errors.type}</p>
                    </div>
                    <div>
                        <label>Alias: </label>
                        <input 
                            type="text" 
                            className={classes.larger} 
                            onChange={handleFieldChange}
                        />
                        <p className={classes.error}>{errors.name}</p>
                    </div>   
                </div>   
                <button type="submit" className={classes.button}>Guardar</button>
            </form> 
            
        </div>
        
        
    );
};