import { 
    buildRequiredFieldValidationFailedResponse,
    buildValidationSucceededResult,
    isStringValueInformed, 
} from "@/common/validation"
import { FieldValidationResult } from "@/common/validation/validation.model";




export const validateNameField = (value: string): FieldValidationResult => {
    if(!isStringValueInformed(value))  {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
};



export const validateAccountIdField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
};