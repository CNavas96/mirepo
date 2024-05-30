import React from "react";
import  {
    HeaderComponent, 
    NavBarComponent, 
    FooterComponent
} from "./components";
import classes from "./app-layout.module.css";
import { useProfileContext } from "@/core/profile";


interface Props {
    children: React.ReactNode;

}


export const AppLayout : React.FC<Props> = (props) =>{
    const {children} = props;
    useProfileContext();

    return(
        <>
            <HeaderComponent />
            <NavBarComponent />
            <main className={classes.mainContent}> {children} </main>
            <FooterComponent />
        </>
    )
};