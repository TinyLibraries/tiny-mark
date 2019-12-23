<img src="https://i.imgur.com/sbGx1vY.png" width="60px" alt="Pinching hand emoji" />

![npm bundle size](https://img.shields.io/bundlephobia/min/tiny-mark?label=size)

## tiny-mark

A tiny "partial" markdown to html formatter

> Only a part of markdown is included. See [formatting table](#Formatting-Table) below.

## Install

### Node

```bash
$ npm install tiny-mark
```

### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/tiny-mark@1/dist/browser/tinymark.min.js"></script>
```

> Exported as a global function `tinymark`

## Usage

```ts
import tinymark from "tiny-mark";
// or if you're using plain js
const tinymark = require("tiny-mark");

tinymark("*foo*");
// => "<b>foo</b>"

tinymark("_foo_");
// => "<em>foo</em>"

tinymark("_*foo*_");
// => "<em><b>foo</b></em>"

tinymark("*long _foo* bar_");
// => "<b>long <em>foo</em></b><em> bar</em>"

tinymark("*_foo_ \n bar*");
// => "<b><em>foo</em> <br /> bar</b>"
```

## Formatting Table

| Syntax                                        | Formatting        | Status                           |
| --------------------------------------------- | ----------------- | -------------------------------- |
| \*bold\*                                      | Bold (`<b>`)      | ✅ Added                         |
| \_italic\_                                    | Emphasis (`<em>`) | ✅ Added                         |
| new\nline                                     | Break (`<br />`)  | ✅ Added                         |
| \[Google\]\(https://<span>google</span>.com\) | Link              | 👀 [Coming Soon](../../issues/1) |
