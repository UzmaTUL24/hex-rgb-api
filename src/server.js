
const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();
const PORT = 3000;

/**
 * Converts a hexadecimal color to RGB through a REST API.
 * @route GET /api/hex-to-rgb?hex=FF8000
 * @returns {object} The hexadecimal color and its RGB values.
 */
app.get("/api/hex-to-rgb", (req, res) => {
    try {
        const hex = req.query.hex;
        const rgb = hexToRgb(hex);

        res.status(200).json({
            hex: hex.startsWith("#") ? hex : `#${hex}`,
            rgb: rgb
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// Start the server only when this file is run directly.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
