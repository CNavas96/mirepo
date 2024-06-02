export interface CreateAccountVm {
    type: string;
    name: string;
}

export const createEmptyCreateAccount = (): CreateAccountVm => ({
    type: "",
    name: "",
});

export interface CreateAccountError {
    type: string
    name: string
}

export const createEmptyCreateAccountError = (): CreateAccountError=> ({
    type: "",
    name: "",
});


