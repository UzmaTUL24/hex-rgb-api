
const { expect } = require("chai");
const hexToRgb = require("../src/hexToRgb");

describe("hexToRgb", function () {
    it("converts a hexadecimal color to RGB", function () {
        expect(hexToRgb("#FF8000")).to.deep.equal({
            r: 255,
            g: 128,
            b: 0
        });
    });

    it("accepts hexadecimal colors without #", function () {
        expect(hexToRgb("00FF00")).to.deep.equal({
            r: 0,
            g: 255,
            b: 0
        });
    });

    it("throws an error for an invalid hexadecimal color", function () {
        expect(() => hexToRgb("#GGGGGG")).to.throw(
            "Invalid hex color"
        );
    });

    it("throws an error for an incomplete hexadecimal color", function () {
        expect(() => hexToRgb("#FFF")).to.throw(
            "Invalid hex color"
        );
    });
});
