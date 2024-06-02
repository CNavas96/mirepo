import { FormValidationResult } from "@/common/validation/validation.model";
import { CreateAccountError, CreateAccountVm } from "../create-account.vm";
import { validateAccountIdField, validateNameField } from "./create-account-field.validation";




export const validateForm = (createAccount : CreateAccountVm) : FormValidationResult<CreateAccountError> => {
    const fieldValidationResults = [
        validateNameField(createAccount.name),    
        validateAccountIdField(createAccount.type),
    ]

    
    return {
        succeeded: fieldValidationResults.every((f) => f.succeeded),
        errors: {
            type: fieldValidationResults[0].errorMessage ?? "",
            name: fieldValidationResults[1].errorMessage ?? "",   
        },
    };
};

