/**
 * Return first element of array.
 *
 * @param {array} array
 *   The array to shift.
 *
 * @return
 *   The first element.
 */
module.exports = function (array) {
    // Ensure a valid string is being passed.
    if (!array) {
        return [];
    }

    return array.shift();
};