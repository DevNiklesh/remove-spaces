module.exports = function removeSpaces(string) {
    if (typeof string !== "string") throw new TypeError("Remove spaces package wants a string!");
    return string.replace(/\s/g, "");
};