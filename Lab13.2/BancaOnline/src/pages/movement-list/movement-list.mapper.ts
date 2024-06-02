import * as apiModel from "./api";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVM = (
    movementList: apiModel.Movement[]
) : viewModel.MovementVM[] => 
    movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
    transaction: new Date (movement.transaction),
    realTransaction: new Date (movement.realTransaction),
    accountId: movement.accountId,
}));


export const mapSingleAccountFromApiToVm = (account: apiModel.Account): viewModel.AccountVm => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
});