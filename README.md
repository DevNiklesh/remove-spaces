# @devniklesh/remove-spaces

[![npm (scoped)](https://img.shields.io/npm/v/@devniklesh/remove-spaces.svg)](https://github.com/DevNiklesh/remove-spaces)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@devniklesh/remove-spaces)](https://github.com/DevNiklesh/remove-spaces)

Removes all spaces from a string.

## Install

```
$ npm install @devniklesh/remove-spaces
```

## Usage

```js
const tiny = require("@bamblehorse/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
