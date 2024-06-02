import { 
    isStringValueInformed, 
    buildRequiredFieldValidationFailedResponse, 
    buildValidationSucceededResult 
} from "@/common/validation";
import { FieldValidationResult } from "@/common/validation/validation.model";

export const validateUserField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
};
   export const validatePasswordField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
};