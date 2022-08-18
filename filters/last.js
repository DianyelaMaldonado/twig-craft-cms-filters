/**
 * Return last element of array.
 *
 * @param {array} array
 *   The array to pop.
 *
 * @return
 *   The last element.
 */
module.exports = function (array) {
    // Ensure a valid string is being passed.
    if (!array) {
        return [];
    }

    return array.pop();
};