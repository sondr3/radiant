import { assertEquals, assertObjectMatch } from "jsr:@std/assert";
import * as h from "./mod.ts";
import { render } from "./render.ts";
import { deepExplode } from "./utils.ts";

Deno.test("it works", () => {
  const doc = h.html(
    h.head(
      h.meta({ charset: "utf-8" }),
      h.title("Hello, world!"),
    ),
    h.body(
      h.h1({ class: "blah" }, "Hello, world!"),
    ),
  );

  assertEquals(
    render(doc),
    `<html><head><meta charset="utf-8"><title>Hello, world!</title></head><body><h1 class="blah">Hello, world!</h1></body></html>`,
  );

  assertObjectMatch(deepExplode(doc), {
    tag: "html",
    attributes: {},
    children: [
      {
        tag: "head",
        children: [
          { tag: "meta", attributes: { charset: "utf-8" } },
          { tag: "title", attributes: {}, children: ["Hello, world!"] },
        ],
      },
      {
        tag: "body",
        attributes: {},
        children: [
          { tag: "h1", attributes: { class: "blah" }, children: ["Hello, world!"] },
        ],
      },
    ],
  });
});
