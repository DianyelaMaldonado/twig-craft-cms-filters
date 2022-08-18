/**
 * Return string with cleaned breaklines.
 *
 * @param {string} string
 *   The string to clean.
 *
 * @return {string}
 *   The cleaned string.
 */
module.exports = function (string) {
    // Ensure a valid string is being passed.
    if (typeof string === 'undefined' || string === null) {
        return '';
    }
    var breakTag = '<br />';
    return (string + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};