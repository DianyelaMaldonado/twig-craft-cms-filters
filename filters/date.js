/**
 * Placeholder function
 */

const textTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
  return [
    textTo2Digits(date.getDate()),
    textTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
};

module.exports = function () {
  return formatDate(new Date());
};
