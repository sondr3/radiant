## v0.3.1
> 2024-08-15

## Summary

Fixed exports in `package.json` thanks to @coracuity, and fixes for the pretty printer
when handling white space sensitive tags.

## Commits
- [[`5073325`]](https://github.com/sondr3/radiant/commit/5073325) Add packageManager field for corepack 
- [[`aca8e2a`]](https://github.com/sondr3/radiant/commit/aca8e2a) Re-order export conditions 
- [[`5c0ba66`]](https://github.com/sondr3/radiant/commit/5c0ba66) Revert pre change, not sure it is correct 
- [[`583dd2e`]](https://github.com/sondr3/radiant/commit/583dd2e) Even more pretty printing fixing 
- [[`d48c798`]](https://github.com/sondr3/radiant/commit/d48c798) Further pretty printer fixes for phrasing content 
- [[`b7bb19b`]](https://github.com/sondr3/radiant/commit/b7bb19b) Non-void elements need two tags 
- [[`812e214`]](https://github.com/sondr3/radiant/commit/812e214) Don't run `lefthook install` in `prepare` script 
- [[`dd40ae5`]](https://github.com/sondr3/radiant/commit/dd40ae5) Fix build errors 
- [[`d01640c`]](https://github.com/sondr3/radiant/commit/d01640c) Export CHILDREN_MAP in index.ts 
- [[`bddead7`]](https://github.com/sondr3/radiant/commit/bddead7) Handle whitespace sensitive tags correctly 
- [[`6d57565`]](https://github.com/sondr3/radiant/commit/6d57565) Fix README 

## v0.3.0
> 2024-07-31

## Summary

Added a pretty printer so that both HTML and XML can be printed with 
indentation and newlines instead of a single line. Also fixed that some
HTML elements could be created without the required attributes.

On the backside of the project it was converted from Deno to Node.

### Commits
- [[`ff58c46`](https://github.com/sondr3/radiant/commit/ff58c46)] Lock dependencies exactly
- [[`3b70b51`](https://github.com/sondr3/radiant/commit/3b70b51)] Fix elements with required attributes constructor
- [[`d746ddf`](https://github.com/sondr3/radiant/commit/d746ddf)] Include the src folder when publishing
- [[`beebe85`](https://github.com/sondr3/radiant/commit/beebe85)] Add version to package.json, whoops
- [[`ed7711f`](https://github.com/sondr3/radiant/commit/ed7711f)] Remove installation from JSR as the types don't work
- [[`6419d22`](https://github.com/sondr3/radiant/commit/6419d22)] Update README
- [[`52bd486`](https://github.com/sondr3/radiant/commit/52bd486)] Update lefthook config
- [[`f4d6fc4`](https://github.com/sondr3/radiant/commit/f4d6fc4)] Remove .vscode folder
- [[`c22cd4c`](https://github.com/sondr3/radiant/commit/c22cd4c)] Add lefthook for pre-commit hooks
- [[`db4dd34`](https://github.com/sondr3/radiant/commit/db4dd34)] Fix linting issues
- [[`268ad27`](https://github.com/sondr3/radiant/commit/268ad27)] Update publishing configuration
- [[`d287118`](https://github.com/sondr3/radiant/commit/d287118)] Move tests to tests folder
- [[`7a26578`](https://github.com/sondr3/radiant/commit/7a26578)] Update CI pipeline, add JSR config
- [[`7dc68a8`](https://github.com/sondr3/radiant/commit/7dc68a8)] Convert from Deno to Node
- [[`c9f8be3`](https://github.com/sondr3/radiant/commit/c9f8be3)] Move code into src
- [[`624669e`](https://github.com/sondr3/radiant/commit/624669e)] Use correct path to scripts in generated files
- [[`424a314`](https://github.com/sondr3/radiant/commit/424a314)] Handle whitespace sensitive tags in pretty printer
- [[`35401ec`](https://github.com/sondr3/radiant/commit/35401ec)] Refactor and clean up pretty printing children
- [[`769f364`](https://github.com/sondr3/radiant/commit/769f364)] Add TODOs, a 'check' command
- [[`954ba37`](https://github.com/sondr3/radiant/commit/954ba37)] Handle the size of a single string child in renderer
- [[`b721ad2`](https://github.com/sondr3/radiant/commit/b721ad2)] Update HTML renderer to use pretty printer
- [[`dcba91a`](https://github.com/sondr3/radiant/commit/dcba91a)] Rename renderXML functions to remove XML from them
- [[`a5880b5`](https://github.com/sondr3/radiant/commit/a5880b5)] Move stringifyAttributes into pretty printer file
- [[`4cfc48b`](https://github.com/sondr3/radiant/commit/4cfc48b)] Escape XML strings in pretty printer
- [[`06e8467`](https://github.com/sondr3/radiant/commit/06e8467)] Update tests for HTML
- [[`d647d1c`](https://github.com/sondr3/radiant/commit/d647d1c)] Update XML renderer to use new PrettyPrinter
- [[`5bad042`](https://github.com/sondr3/radiant/commit/5bad042)] Create a pretty printer that's generic across HTML and XML

## v0.2.3

> 2024-07-23

## Summary

More documentation updates.

### Commits

- [[`ad09573`](https://github.com/sondr3/radiant/commit/ad09573)] Link to JSR
- [[`41dd24c`](https://github.com/sondr3/radiant/commit/41dd24c)] Better module docs
- [[`a68ad92`](https://github.com/sondr3/radiant/commit/a68ad92)] Update README

## v0.2.2

> 2024-07-22

## Summary

Add the remaining missing documentation.

### Commits

- [[`9086051`](https://github.com/sondr3/radiant)] More documentation

## v0.2.1

> 2024-07-22

## Summary

Add documentation to functions, types and README that was forgot in previous release. Whoops.

### Commits

- [[`5069abe`](https://github.com/sondr3/radiant/commit/5069abe)] Add documentation strings to XML module
- [[`2c95b10`](https://github.com/sondr3/radiant/commit/2c95b10)] Make test task check docs too
- [[`d5f9da0`](https://github.com/sondr3/radiant/commit/d5f9da0)] Add pretty option to XML renderer
- [[`234b1e5`](https://github.com/sondr3/radiant/commit/234b1e5)] Add RSS examples to README
- [[`70d6610`](https://github.com/sondr3/radiant/commit/70d6610)] Fix deploy task

## v0.2.0

> 2024-07-22

## Summary

Add XML and sitemap constructs to package.

### Commits

- [[`37418e1`](https://github.com/sondr3/radiant/commit/37418e1)] Fix NPM build
- [[`99b1b15`](https://github.com/sondr3/radiant/commit/99b1b15)] Add pretty printing of XML
- [[`ba31851`](https://github.com/sondr3/radiant/commit/ba31851)] Change types for HTMLDocument class
- [[`81cd14c`](https://github.com/sondr3/radiant/commit/81cd14c)] Allow xsi attributes on sitemaps
- [[`204f005`](https://github.com/sondr3/radiant/commit/204f005)] Make doctype required again, I liked it better
  explicit
- [[`a9ca309`](https://github.com/sondr3/radiant/commit/a9ca309)] Refactor XML types, add declarations
- [[`9349d24`](https://github.com/sondr3/radiant/commit/9349d24)] Fix README code, again
- [[`72b9814`](https://github.com/sondr3/radiant/commit/72b9814)] Make the sitemap DSL typesafe
- [[`4d1b9d6`](https://github.com/sondr3/radiant/commit/4d1b9d6)] Move rendering around, make doctype optional in DSL
- [[`7abc854`](https://github.com/sondr3/radiant/commit/7abc854)] Add sitemap and XML rendering/building
- [[`8d7a79f`](https://github.com/sondr3/radiant/commit/8d7a79f)] Fix README link to lucid
- [[`4c7f48d`](https://github.com/sondr3/radiant/commit/4c7f48d)] Remove redundant check in publish step
- [[`a1e1439`](https://github.com/sondr3/radiant/commit/a1e1439)] Correct repo in NPM package
- [[`caa2937`](https://github.com/sondr3/radiant/commit/caa2937)] Release v0.1.0

## v0.1.0

> 2024-07-22

## Summary

Initial release of `radiant`, a simple and type-safe HTML builder in TypeScript.

### Commits

- [[`3253ac5`](https://github.com/sondr3/radiant/commit/3253ac5)] Add elementToObject function, remove deepExplode
- [[`ba60bd6`](https://github.com/sondr3/radiant/commit/ba60bd6)] Fill out README, rename to radiant
- [[`d4a718d`](https://github.com/sondr3/radiant/commit/d4a718d)] Add documentation for any and all things
- [[`9df5fa9`](https://github.com/sondr3/radiant/commit/9df5fa9)] Add NPM build script
- [[`0f21911`](https://github.com/sondr3/radiant/commit/0f21911)] Fix example in README
- [[`6600cbd`](https://github.com/sondr3/radiant/commit/6600cbd)] Update scripts, create all tags and elements
- [[`31e6027`](https://github.com/sondr3/radiant/commit/31e6027)] More type fixing, things now work
- [[`9ff298c`](https://github.com/sondr3/radiant/commit/9ff298c)] Refactor tags and tag maps
- [[`ed8d18d`](https://github.com/sondr3/radiant/commit/ed8d18d)] Fill in all content categories
- [[`c5793ef`](https://github.com/sondr3/radiant/commit/c5793ef)] Extract new HTMLElement classes from experiment
- [[`9ea3f88`](https://github.com/sondr3/radiant/commit/9ea3f88)] Sort tags alphabetically
- [[`b2d6e3e`](https://github.com/sondr3/radiant/commit/b2d6e3e)] Add all attributes for HTML elements
- [[`f279e2c`](https://github.com/sondr3/radiant/commit/f279e2c)] Add `data-*` attributes, some tests
- [[`ad2a91b`](https://github.com/sondr3/radiant/commit/ad2a91b)] Caching didn't help or work
- [[`c11f3cb`](https://github.com/sondr3/radiant/commit/c11f3cb)] Add caching to CI
- [[`8717523`](https://github.com/sondr3/radiant/commit/8717523)] Rewrite with typings that actually work
- [[`540f835`](https://github.com/sondr3/radiant/commit/540f835)] Bump action-gh-release to v2
- [[`72ff11d`](https://github.com/sondr3/radiant/commit/72ff11d)] Fix README code
- [[`706aa3d`](https://github.com/sondr3/radiant/commit/706aa3d)] Major typing overhaul thanks to Claude
- [[`1d826a3`](https://github.com/sondr3/radiant/commit/1d826a3)] Apparently Copilot imported a bunch of stuff
- [[`00864e4`](https://github.com/sondr3/radiant/commit/00864e4)] Add a quick README and LICENSE file
- [[`1570546`](https://github.com/sondr3/radiant/commit/1570546)] Add rest of tags from MDN
- [[`3c77b97`](https://github.com/sondr3/radiant/commit/3c77b97)] Add deepExplode utility function for ease of testing
- [[`a663899`](https://github.com/sondr3/radiant/commit/a663899)] Refactor types and tags
- [[`2654a5b`](https://github.com/sondr3/radiant/commit/2654a5b)] Remove attempt at merging heads
- [[`7e8c4a2`](https://github.com/sondr3/radiant/commit/7e8c4a2)] Attempt at merging <head>s
- [[`77ce671`](https://github.com/sondr3/radiant/commit/77ce671)] Void elements can only have attributes
- [[`7d45573`](https://github.com/sondr3/radiant/commit/7d45573)] Add document and doctype elements
- [[`8799d58`](https://github.com/sondr3/radiant/commit/8799d58)] Add back previous content categories
- [[`b577e79`](https://github.com/sondr3/radiant/commit/b577e79)] Allow attributes to be booleans
- [[`691da66`](https://github.com/sondr3/radiant/commit/691da66)] Remove renderPretty, it definitely does not work
- [[`73206ab`](https://github.com/sondr3/radiant/commit/73206ab)] Remove content categories, don't want it
- [[`66b3959`](https://github.com/sondr3/radiant/commit/66b3959)] Add some content categories
- [[`f64d169`](https://github.com/sondr3/radiant/commit/f64d169)] Start filling in tag metadata
- [[`978c867`](https://github.com/sondr3/radiant/commit/978c867)] Configure CI/CD
- [[`5b35896`](https://github.com/sondr3/radiant/commit/5b35896)] Make something that barely works
