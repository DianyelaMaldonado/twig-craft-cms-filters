# Twig.js Craft CMS Extensions

[![Build Status](https://travis-ci.org/kalamuna/twig-drupal-filters.svg?branch=master)](https://travis-ci.org/kalamuna/twig-drupal-filters)

Twig.js implementations of Craft CMS's Twig filters.

## Usage

```javascript
npm i twig-craft-cms-filters
```

``` javascript
var Twig = require('twig')
const twigCraftCms = require('twig-craft-cms-filters')

// Add Craft CMS filters.
twigCraftCms(Twig);
```

``` twig
{{ 'Hello World!'|id }}
```

### Filters

A comprehensive list of the filters is [available here](https://craftcms.com/docs/3.x/dev/filters.html).

- join
- lower
- upper
- capitalize
- length
- without
- time
- strip_tags
- json_encode
- json_decode
- last
- date
- replace
- timestamp
- split
- url_encode
- merge
- camel
- t
- camelToHypens

_*Some of these are dummy filters that don't do anything except keep Twig.js compilation from breaking when these specific functions are used in Twig templates._