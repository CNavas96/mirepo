import { REQUIRED_FIELD_MESSAGE } from "@/common/validation/validation.const";
import { validateNameField } from "./create-account-field.validation";


describe("transfer-field.validation specs", () => {
    describe("validateNameField", () => {
        it("should return false when name is empty", () => {
            // Arrange
            const value = "";
            // Act
            const result = validateNameField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });

        it("should return true when name is well formed", () => {
            // Arrange
            const value = "ES91 2100 0418 4502 0005 1332";
            // Act
            const result = validateNameField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        });
    });

    describe("validateAccountIdField", () => {
        it("should return false when name is empty", () => {
            // Arrange
            const value = "";
            // Act
            const result = validateNameField(value);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });

        it("should return true when name is well formed", () => {
            // Arrange
            const value = "ES91 2100 0418 4502 0005 1332";
            // Act
            const result = validateNameField(value);
            // Assert
            expect(result.succeeded).toBeTruthy();
        });
    });
});         
        


