/**
 * Returns the length of a string or array.
 *
 * @param {string | array} element
 *   The string or array.
 *
 * @return {string}
 *   The element length.
 */
module.exports = function (element) {
    // Ensure a valid string is being passed.
    if (!element) {
        return element;
    }

    return element.length
};