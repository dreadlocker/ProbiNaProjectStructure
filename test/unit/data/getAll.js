const { expect } = require("chai");
const BaseData = require("../../../data/base/base.data");

describe("BaseData.getAll()", () => {
    describe("when there are items in db", () => {
        let db = null;
        let ModelClass = null;
        let validator = null;
        let data = null;

        beforeEach(() => {
            // Arrange
            data = new BaseData(db, ModelClass, validator);
        });

        it("expect to return items", () => {
            // Act
            return data.getAll()
                .then((models) => {

                });
            // Assert
        });
    });
});