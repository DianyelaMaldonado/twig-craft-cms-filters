/**
 * Return capitalized string.
 *
 * @param {string} string
 *   The string to capitalized.
 *
 * @return {string}
 *   The capitalized string.
 */
module.exports = function (string) {
    // Ensure a valid string is being passed.
    if (!string) {
        return "";
    }

    return string.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
};