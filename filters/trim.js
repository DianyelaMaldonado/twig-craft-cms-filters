/**
 * Return trimmed string.
 *
 * @param {string} string
 *   The string to clean.
 *
 * @return {string}
 *   The cleaned string.
 */
module.exports = function (string) {
    // Ensure a valid string is being passed.
    if (!string) {
        return "";
    }

    return string.trim();
};