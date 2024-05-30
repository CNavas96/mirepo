


export const routesPrefixes = {
    accountList: "/account-list",
    transfer: "/transfer",
    movements: "/movements",
};
    

export const appRoutes = {
    root:"/",
    accounList: routesPrefixes.accountList,
    editAccount: "/edit-account/:id",
    movements: `${routesPrefixes.movements}/:id`,
    transfer: routesPrefixes.transfer,
    tranferFromAccount: `${routesPrefixes.transfer}/:id`,
};