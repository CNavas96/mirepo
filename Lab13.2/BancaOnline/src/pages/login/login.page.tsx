import React from "react";
import { useNavigate } from "react-router-dom";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components/";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";
import { useProfileContext } from "@/core/profile";
import classes from "./login.page.module.css";




export const LoginPage: React.FC = () => {
    const navigate= useNavigate();
    const {setUserProfile} = useProfileContext();

    const handleSumbit =(credentials: Credentials) => {
       const apiCredential = mapCredentialsFromVmToApi(credentials);
       isValidLogin(apiCredential).then((isvalid) => {
        if(isvalid){
            setUserProfile(credentials.user);
            navigate(appRoutes.accounList);
        } else {
            throw new Error("Claver o contraseña Erroneas");
        }
       })
    };

    return (
        <>
            <header className={classes.header}>
                <img src="assets/logo_header.svg" className={classes.logo}/>
            </header>
            <div className={classes.bgImg}></div>
            <div className={classes.box}>
                <h1>Acceso</h1>
                <LoginFormComponent onLogin={handleSumbit}/>
                <h4 className={classes.inputFooter}>
                    Está Usted en un <strong>sitio seguro</strong>
                </h4>
            </div>
        </>
    );  
};