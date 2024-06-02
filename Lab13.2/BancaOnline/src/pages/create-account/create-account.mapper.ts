import * as apiModel from "./api";
import * as viewModel from "./create-account.vm";




export const mapCreateAccountListFromVmiToApi = (
    creteAccount: viewModel.CreateAccountVm
): apiModel.CreateAccount => ({
    type: creteAccount.type,
    name: creteAccount.name,
});