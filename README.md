[![codecov](https://codecov.io/gh/jaredLunde/minify-css.macro/branch/master/graph/badge.svg)](https://codecov.io/gh/jaredLunde/minify-css.macro)
[![Build Status](https://travis-ci.org/jaredLunde/minify-css.macro.svg?branch=master)](https://travis-ci.org/jaredLunde/minify-css.macro)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://jaredlunde.mit-license.org/)

---

# minify-css.macro

A babel plugin for removing the whitespace from a CSS-generating tagged template literal while preserving function/variable instances.

## Peer dependencies
`babel-plugin-macros`

## Installation

#### `npm i minify-css.macro`

#### `yarn add minify-css.macro`

## Usage

```js
// [Input]
import cleanCss from 'minify-css.macro'

const getStyle = theme => cleanCss`
  text-align: center;
  font: ${theme.font.primary};
`

// [Output]

const getStyle = theme => 'text-align:center;font:' + theme.font.primary + ';'
```

## LICENSE

MIT
