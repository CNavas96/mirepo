import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { MovementVM } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import {  getAccountList, getMovementsList } from "./api";
import { mapMovementListFromApiToVM, mapSingleAccountFromApiToVm } from "./movement-list.mapper";
import { MovementListTableComponent } from "./component";
import {  } from "../account-list/account-list.mapper";
import { AccountVm } from "../account-list/account-list.vm";



export const MovementListPage : React.FC = () => {
    const { id } = useParams<{id: string}>()
    const [ account, setAccount] = React.useState<AccountVm>();
    const [ movementList, setMovementList] = React.useState<MovementVM[]>([]);
  
    React.useEffect(() => {
        getAccountList().then((accountList) => {
            const rawAccount = (accountList.filter(e => e.id == id))[0]

            if(rawAccount){
                setAccount(mapSingleAccountFromApiToVm(rawAccount));
            }
        });
    }, [])

    React.useEffect(() => {
        if(id){
          getMovementsList(id)
            .then((result) => {
                setMovementList(mapMovementListFromApiToVM(result));
            });    
        } 
    }, []);

    return (
        <AppLayout>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <h1>Saldos y Últimos movimientos</h1>
                    <div>
                        <h5>SALDO DISPONIBLE </h5>
                        <span className={classes.heacerContainerSpan}>
                            {account?.balance} €
                        </span>  
                    </div>
                </div>

                <div className={classes.estiloAlias}>
                    <div>
                       <span>Alias: {account?.name}</span> 
                    </div>
                    <div>
                       <span>IBAN: {account?.iban} </span>  
                    </div>
                </div>

                <MovementListTableComponent
                    movementList={movementList} 
                />
           </div>
        </AppLayout>
    );
};
