<img src="https://i.imgur.com/sbGx1vY.png" width="60px" alt="Pinching hand emoji" />

## tiny-mark

A tiny "partial" markdown to html formatter

> Only a part of markdown is included. See [formatting table](#Formatting-Table) below.

## Install

```bash
$ npm install tiny-mark
```

## Usage

```ts
import format from "tiny-mark";
// or if you're using plain js
const format = require("tiny-mark");

format("*foo*");
// => "<b>foo</b>"

format("_foo_");
// => "<em>foo</em>"

format("_*foo*_");
// => "<em><b>foo</b></em>"

format("*long _foo* bar_");
// => "<b>long <em>foo</em></b><em> bar</em>"

format("*_foo_ \n bar*");
// => "<b><em>foo</em> <br /> bar</b>"
```

## Formatting Table

| Syntax                                        | Formatting        | Status                           |
| --------------------------------------------- | ----------------- | -------------------------------- |
| \*bold\*                                      | Bold (`<b>`)      | ✅ Added                         |
| \_italic\_                                    | Emphasis (`<em>`) | ✅ Added                         |
| new\nline                                     | Break (`<br />`)  | ✅ Added                         |
| \[Google\]\(https://<span>google</span>.com\) | Link              | 👀 [Coming Soon](../../issues/1) |