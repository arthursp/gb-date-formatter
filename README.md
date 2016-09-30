# gb-date-formatter

[![Build Status](https://travis-ci.org/GaryB432/gb-date-formatter.svg?branch=master)](https://travis-ci.org/GaryB432/gb-date-formatter)

A partial re-engineering of [Angular1's date formatting](https://docs.angularjs.org/api/ng/filter/date).

## Install

    $ npm install gb-date-formatter

## API

To use the `DateFormatter` class in a TypeScript file

```ts
import { DateFormatter } from "gb-date-formatter";

const formatter = new DateFormatter();
console.log(formatter.format(new Date("1924-02-25T07:44:40.755Z"), "MMMM y"));
// February 1924

```

To use the `DateFormatter` class in a JavaScript file

```js
var DateFormatter = require("gb-date-formatter").DateFormatter;

var formatter = new DateFormatter();
console.log(formatter.format(new Date("1924-02-25T07:44:40.755Z"), "MMMM y"));
// February 1924
```
