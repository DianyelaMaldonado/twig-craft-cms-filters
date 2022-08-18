/**
 * Return lower string.
 *
 * @param {string} string
 *   The string convert in lower.
 *
 * @return {string}
 *   The lower string.
 */
module.exports = function (string) {
    // Ensure a valid string is being passed.
    if (!string) {
        return "";
    }

    return string.toLowerCase();
};