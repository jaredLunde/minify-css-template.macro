[![bundlephobia](https://img.shields.io/bundlephobia/minzip/minify-css-template.macro?style=plastic)](https://bundlephobia.com/result?p=minify-css-template.macro)
[![codecov](https://codecov.io/gh/jaredLunde/minify-css-template.macro/branch/master/graph/badge.svg)](https://codecov.io/gh/jaredLunde/minify-css-template.macro)
[![Build Status](https://travis-ci.org/jaredLunde/minify-css-template.macro.svg?branch=master)](https://travis-ci.org/jaredLunde/minify-css-template.macro)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://jaredlunde.mit-license.org/)

---

# minify-css-template.macro

A babel plugin for removing the whitespace from a CSS-generating tagged template literal while preserving functions/variables instances

## Installation

#### `npm i minify-css-template.macro`

#### `yarn add minify-css-template.macro`

## Usage

```js
// [Input]
import cleanCss from 'minify-css-template.macro'

const getStyle = theme => cleanCss`
  text-align: center;
  font: ${theme.font.primary};
`

// [Output]

const getStyle = theme => 'text-align:center;font:' + theme.font.primary + ';'
```

## LICENSE

MIT
