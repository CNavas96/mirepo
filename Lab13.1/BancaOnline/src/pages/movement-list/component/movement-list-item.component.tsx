import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";



interface Props {
    movementItem: MovementVM;
}


export const MovementListItemComponent: React.FC<Props> = (props) => {
    const { movementItem } = props;
  
    const formattedTransactionDate = new Date(movementItem.transaction).toLocaleDateString();
    const formattedRealTransactionDate = new Date(movementItem.realTransaction).toLocaleDateString();

    return (
        <div className={classes.row}>
            <span className={`
                ${classes.dataCell}
                ${classes.bold}
            `}
                
            >
                {formattedTransactionDate}
            </span>
            <span className={`
                ${classes.dataCell}
                ${classes.bold}
            `}>
                {formattedRealTransactionDate}
            </span>
            <span className={classes.dataCell}>
                {movementItem.description}
            </span>
            <span className={`
                ${classes.dataCell} 
                ${classes.alingRight}
                ${classes.bold}
                ${movementItem.amount < 0 ? classes.red : "" }
            `}>
                {movementItem.amount}
            </span>
            <span className={`
                ${classes.dataCell} 
                ${classes.alingRight}
                ${classes.bold}
                ${movementItem.balance < 0 ? classes.red : classes.green}
            `}
            >
                {movementItem.balance}
            </span>
        </div>
    );
};