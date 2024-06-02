import { AppLayout } from "@/layouts";
import React from "react";
import { CreateAccountFormComponent } from "./component";
import classes from "./create-account-page.module.css";
import { CreateAccountVm } from "./create-account.vm";
import { saveAccount } from "./api";
import { mapCreateAccountListFromVmiToApi } from "./create-account.mapper";

export const CreateAccountPage : React.FC = () => {
   

    const handleCreateAccount = (accountInfo: CreateAccountVm) => {
        const account = mapCreateAccountListFromVmiToApi(accountInfo)
        saveAccount(account).then((result) => {
            if(result){
                console.log("Se ha guardado con exito su nueva cuenta");
            } else {
                console.log("Ha habido un error al guardar la cuenta nueva");   
            }
        });
    };

    return (
        <AppLayout>
            <div className={classes.container}>
                <h1 className={classes.title}>Cuenta Bancaria</h1>
            
            <CreateAccountFormComponent 
                onSent={handleCreateAccount}

            />
            </div>
            
        </AppLayout>
    );
};