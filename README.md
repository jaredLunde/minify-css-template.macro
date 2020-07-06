<hr>
<div align="center">
  <h1 align="center">
    minify-css.macro
  </h1>
</div>

<p align="center">
  <a aria-label="Code coverage report" href="https://codecov.io/gh/jaredLunde/minify-css.macro">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/jaredLunde/minify-css.macro?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/jaredLunde/minify-css.macro">
    <img alt="Build status" src="https://img.shields.io/travis/jaredLunde/minify-css.macro?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/minify-css.macro">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/minify-css.macro?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/minify-css.macro?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i minify-css.macro</pre>
<hr>

A babel plugin for removing the whitespace from a CSS-generating tagged template literal while preserving function/variable instances.

## Prerequisites

Using this plugin requires that you are also using `babel-plugin-macros` (included in `create-react-app` by default)

## Usage

```js
// [Input]
import css from 'minify-css.macro'

const getStyle = (theme) => css`
  text-align: center;
  font: ${theme.font.primary};
`

// [Output]

const getStyle = (theme) => 'text-align:center;font:' + theme.font.primary + ';'
```

## LICENSE

MIT
