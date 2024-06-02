import * as apiModel from "./api";
import { mapMovementListFromApiToVM, mapSingleAccountFromApiToVm } from "./movement-list.mapper";

describe("pages/movement-list/movement-list.mapper specs", () => {
    describe("mapMovementListFromApiToVM", () => {
        it("should return empty array when it feeds empty array", () => {
            // Arrange
            const movementList: apiModel.Movement[] = [
                {
                    id: "1",
                    description: "Nómina noviembre",
                    amount: 900,
                    balance: 1490,
                    transaction: "2019-12-09T21:30:00",
                    realTransaction: "2019-12-09T21:30:00",
                    accountId: "1"
                },
                
            ];
            // Act
            const result = mapMovementListFromApiToVM(movementList);
            // Assert
            expect(result).toEqual([
                {
                    id: "1",
                    description: "Nómina noviembre",
                    amount: 900,
                    balance: 1490,
                    transaction: new Date ("2019-12-09T21:30:00"),
                    realTransaction: new Date ("2019-12-09T21:30:00"),
                    accountId: "1"
                },
                
            ]);
        });
    });

    describe("mapSingleAccountFromApiToVm", () => {
        it("should return empty array when it feeds empty array", () => {
            // Arrange
            const accountMovementList: apiModel.Account = {
                    id: "1",
                    iban: "ES91 2100 0418 4502 0005 1332",
                    type: "1",
                    name: "Gastos mes",
                    balance: 1490,
                    lastTransaction: "2019-12-09T21:30:00",
                }
                
            ;
            // Act
            const result = mapSingleAccountFromApiToVm(accountMovementList);
            // Assert
            expect(result).toEqual(
                {
                    id: "1",
                    iban: "ES91 2100 0418 4502 0005 1332",
                    name: "Gastos mes",
                    balance: "1490",
                    lastTransaction: new Date("2019-12-09T21:30:00"),
                }
            );
        });
    });
});