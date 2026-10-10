
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/server");

describe("Hex-to-RGB API integration tests", function () {
    it("returns RGB values for a valid hex color", async function () {
        const res = await request(app)
            .get("/api/hex-to-rgb")
            .query({ hex: "#FF8000" });

        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({
            hex: "#FF8000",
            rgb: { r: 255, g: 128, b: 0 }
        });
    });

    it("returns 400 for an invalid hex color", async function () {
        const res = await request(app)
            .get("/api/hex-to-rgb")
            .query({ hex: "GGGGGG" });

        expect(res.status).to.equal(400);
        expect(res.body).to.have.property("error");
    });

    it("returns 400 when the hex value is missing", async function () {
        const res = await request(app)
            .get("/api/hex-to-rgb");

        expect(res.status).to.equal(400);
        expect(res.body).to.have.property("error");
    });
});
