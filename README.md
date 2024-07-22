<h1 align="center">hdsl</h1>
<p align="center">
    <a href="https://github.com/sondr3/hdsl/actions"><img alt="GitHub Actions Status" src="https://github.com/sondr3/hdsl/workflows/pipeline/badge.svg" /></a>
    <a href="https://www.npmjs.com/package/hdsl"><img alt="npm" src="https://img.shields.io/npm/v/hdsl" /></a>
    <a href="https://jsr.io/@sondr3/hdsl"> <img src="https://jsr.io/badges/@sondr3/hdsl" alt="" /></a>
</p>

<p align="center">
    <b>Construct type safe HTML documents in a TypeScript DSL.</b>
</p>

- **Simple**: no magic templating, just normal functions and objects.
- **TypeScript**: using the type system we can ensure better safety.

<details>
<summary>Table of Contents</summary>
<br />

- [How](#how)
- [License](#license)

</details>

## How

Simply import the tags and go to work. Example:

```ts
import { h, renderDocument } from "./mod.ts";

const doc = h.document(
  h.doctype(),
  h.html(
    h.head(
      h.meta({ charset: "utf-8" }),
      h.title("Hello, world!"),
    ),
    h.body(
      h.h1({ class: "blah" }, "Hello, world!"),
    ),
  ),
);

console.log(renderDocument(doc));
```

## License

MIT.
