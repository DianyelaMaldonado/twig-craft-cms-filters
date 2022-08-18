import Twig from 'twig';

/**
 * Adds all the filters to the given Twig intstance.
 *
 * @param {Twig} twigInstance The instance of Twig to modify.
 */
module.exports = function (twigInstance) {
  const filters = require("./filters");
  for (let filterName in filters) {
    if (filters[filterName]) {
      let filter = filters[filterName];
      twigInstance.extendFilter(filterName, filter);
    }
  }
};
