export interface MovementVM {
    id: string;
    description: string;
    amount: number;
    balance: number;
    transaction: Date;
    realTransaction: Date;
    accountId: string;
}

export interface AccountVm {
    id: string;
    iban: string;
    name: string;
    balance: string;
    lastTransaction: Date;
}
