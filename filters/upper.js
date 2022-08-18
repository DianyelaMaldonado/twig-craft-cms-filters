/**
 * Return uppercase string.
 *
 * @param {string} string
 *   The string to uppercase.
 *
 * @return {string}
 *   The uppercase string.
 */
module.exports = function (string) {
    // Ensure a valid string is being passed.
    if (!string) {
        return "";
    }

    return string.toUpperCase();
};