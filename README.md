# @devniklesh/remove-spaces

[![npm (scoped)](https://img.shields.io/npm/v/@devniklesh/remove-spaces)](https://www.npmjs.com/package/@devniklesh/remove-spaces)

Removes all spaces from a string.

## Install

```
$ npm install @devniklesh/remove-spaces
```

## Usage

```js
const removeSpaces = require("@devniklesh/remove-spaces");

removeSpaces("So much space!");
//=> "Somuchspace!"

removeSpaces(1337);
//=> Uncaught TypeError: Remove spaces package wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
