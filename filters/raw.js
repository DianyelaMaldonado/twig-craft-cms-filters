module.exports = function (value) {
    // Ensure a valid string is being passed.
    if (!value) {
        return "";
    }
    return value.replace(/<\/?[^>]+(>|$)/g, "");
}