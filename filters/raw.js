module.exports = function (value) {
    // Ensure a valid string is being passed.
    if (!string) {
        return "";
    }
    return value.replace(/<\/?[^>]+(>|$)/g, "");
}