
/**
 * Converts a six-digit hexadecimal color to RGB values.
 * @param {string} hex - The hexadecimal color, e.g. "#FF8000".
 * @returns {{r: number, g: number, b: number}} RGB color values.
 * @throws {Error} If the hexadecimal color is invalid.
 */
function hexToRgb(hex) {
    if (typeof hex !== "string" || !/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
        throw new Error("Invalid hex color. Use six hexadecimal digits.");
    }

    const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

    return {
        r: parseInt(cleanHex.slice(0, 2), 16),
        g: parseInt(cleanHex.slice(2, 4), 16),
        b: parseInt(cleanHex.slice(4, 6), 16)
    };
}

module.exports = hexToRgb;
