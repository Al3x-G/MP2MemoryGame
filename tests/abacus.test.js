const { TestScheduler } = require("jest");
const addition = require("./abacus");

describe("calculator", () => {
    describe("Addition function", () => {
        test("should return 44 for 20 + 24", () => {
            expect(addition(20, 24)).toBe(44);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });

    describe("Subtract function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
})

