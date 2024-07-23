<h1 align="center">radiant</h1>
<p align="center">
    <a href="https://github.com/sondr3/radiant/actions"><img alt="GitHub Actions Status" src="https://github.com/sondr3/radiant/workflows/pipeline/badge.svg" /></a>
    <a href="https://www.npmjs.com/package/@sondr3/radiant"><img alt="npm" src="https://img.shields.io/npm/v/@sondr3/radiant" /></a>
    <a href="https://jsr.io/@sondr3/radiant"> <img src="https://jsr.io/badges/@sondr3/radiant" alt="" /></a>
</p>

<p align="center">
  <b>Blaze your way through HTML using the type-safety of TypeScript</b>
</p>

- **Simple**: no magic templating, just regular functions and objects.
- **No magic**: no template magics or string based APIs
- **Type-safe**: by exploiting the TypeScript type system you can guard against invalid HTML and XML

<details>
<summary>Table of Contents</summary>
<br />

- [Example](#example)
- [Installation](#installation)
- [Type safety](#type-safety)
- [Why](#why)
- [License](#license)

</details>

## Example

```ts
import { h, renderDocument } from "jsr:@sondr3/radiant";

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

See more details and documentations at [JSR](https://jsr.io/@sondr3/radiant).

## Installation

### Deno

- `deno add @sondr3/radiant` and import it `import { h } from "@sondr3/radiant"`
- Or import directly `import { h } from jsr:@sondr3/radiant`

### Node

- **`pnpm`**: `pnpm dlx jsr add @sondr3/radiant`
- **`npm`**: `npx jsr add @sondr3/radiant`
- **`yarn`**: `yarn dlx jsr add @sondr3/radiant`

### Bun

1. `bunx jsr add @sondr3/radiant`
1. `import { h } from "@sondr3/radiant`

## Type safety

```ts
import { h } from "jsr:@sondr3/radiant";

// @ts-expect-error missing href
h.a({ class: "link" }, "Missing href");

// @ts-expect-error invalid nesting
h.p(h.head(h.title("Not valid")));
```

## Sitemaps

Also included is a very basic XML renderer with support for building and rendering sitemaps.

```ts
import { renderSitemap, s } from "jsr:@sondr3/radiant/sitemap";

const sitemap = s.document(
  s.doctype(),
  s.urlset(
    s.url(
      s.loc("http://www.example.com/"),
      s.lastmod(new Date("2005-01-01")),
      s.changefreq("monthly"),
      s.priority(0.8),
    ),
    s.url(
      s.loc("http://www.example.com/catalog?item=73&desc=vacation_new_zealand"),
      s.lastmod(new Date("2004-12-23")),
      s.changefreq("weekly"),
    ),
    s.url(
      s.loc("http://www.example.com/catalog?item=74&desc=vacation_newfoundland"),
      s.lastmod(new Date("2004-12-23T18:00:15Z")),
      s.priority(0.3),
    ),
  ),
);

console.log(renderSitemap(sitemap, { pretty: true }));
```

## Why

After having used libraries like [blaze][blaze] and [lucid][lucid] in Haskell and [smolder][smolder] in PureScript, I
wanted something similar in TypeScript. This is my attempt at creating a variant of them in it. It's not 100% as
ergonomic in my opinion, but it's pretty close. Hence it's also named somewhat akin to `blaze` and `smolder`.

## License

MIT.

[blaze]: https://jaspervdj.be/blaze/
[lucid]: https://github.com/chrisdone/lucid/tree/master/lucid2
[smolder]: https://github.com/bodil/purescript-smolder
