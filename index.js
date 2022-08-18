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

  const tags = require('./tags')
  for (let tagName in tags) {
    if (tags[tagName]) {
      let func = tags[tagName]
      Twig.extend(function(Twig) {
        Twig.exports.extendTag({
            // unique name for tag type
            type: tagName,
            // regex match for tag (flag white-space anything)
            regex: new RegExp(`/^${tagName}\s+(.+)$/`),
            // this is a standalone tag and doesn't require a following tag
            next: [ ],
            open: true,
    
            // runs on matched tokens when the template is loaded. (once per template)
            compile: function (token) {
                var expression = token.match[1];
    
                // Compile the expression. (turns the string into tokens)
                token.stack = Twig.expression.compile.apply(this, [{
                    type:  Twig.expression.type.expression,
                    value: expression
                }]).stack;
    
                delete token.match;
                return token;
            },
    
            // Runs when the template is rendered
            parse: func
        });
      });
    }
  }
};
