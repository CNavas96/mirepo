import { 
    buildRequiredFieldValidationFailedResponse,
    buildValidationFieldResult,
    buildValidationSucceededResult,
    isDateAfterToday, 
    isEMailWellFormed, 
    isPositiveNumber, 
    isStringValueInformed, 
    isValidIban, 
    isValueNotNullOrUndefined
} from "@/common/validation"
import { 
    INVALID_AMOUNT_MESSAGE, 
    INVALID_EMAIL_MESSAGE, 
    INVALID_IBAN_MESSAGE, 
    INVALID_REAL_DATE_TRANSFER_MESSAGE, 
} from "@/common/validation/validation.const";
import { FieldValidationResult } from "@/common/validation/validation.model";


export const validateIBANField  = (value: string) : FieldValidationResult => {
    if(!isStringValueInformed(value)){
        return buildRequiredFieldValidationFailedResponse();
    }

    if(!isValidIban(value)) {
        return buildValidationFieldResult(INVALID_IBAN_MESSAGE);
    }

    return buildValidationSucceededResult()
};

export const validateAccountIdField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
    if(!isStringValueInformed(value))  {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
};

export const validateAmountField = (value: number) : FieldValidationResult => {
    if(!isPositiveNumber(value)){
        return buildValidationFieldResult(INVALID_AMOUNT_MESSAGE);
    }

    return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
   };
   

export const validateNotesField = (_: string) : FieldValidationResult => 
    buildValidationSucceededResult();
 

export const validateRealDateTransferField = (value?: string) : FieldValidationResult => {
    if(!isValueNotNullOrUndefined(value)){
        return buildValidationSucceededResult();
    } 
        
    if(value && !isDateAfterToday(new Date(value))) {
        return buildValidationFieldResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    }  

    return buildValidationSucceededResult();
}


export const validateEmailField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildValidationSucceededResult();
    }

    if (value && !isEMailWellFormed(value)) {
        return buildValidationFieldResult(INVALID_EMAIL_MESSAGE);
    }

    return buildValidationSucceededResult();
};
   