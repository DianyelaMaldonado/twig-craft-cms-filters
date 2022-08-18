const objectKeys = require('object-keys')

/**
 * Filter child elements from a copy of the original array.
 *
 * @param {Array|Object} element
 *   The parent renderable array to exclude the child items.
 * @param {...string} ...
 *   The string keys of element to prevent printing.
 *
 * @return {Object}
 *   The filtered renderable array.
 */
module.exports = function (element) {
  let filteredElement = {}

  if (!element) {
    return []
  }

  let args = Array.prototype.slice.call(arguments, 1)
  if (args[0]) {
    for (let name of objectKeys(element)) {
      if (args[0].includes(name)) {
        filteredElement[name] = element[name]
      }
    }
  }

  return filteredElement
}