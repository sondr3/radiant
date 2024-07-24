import { assertEquals, assertObjectMatch } from "jsr:@std/assert";
import { h } from "./mod.ts";
import { renderDocument, renderElement } from "./render_html.ts";
import { it } from "jsr:@std/testing/bdd";
import { elementToObject } from "./ast.ts";

it("basic output", () => {
  const input = h.document(
    h.doctype(),
    h.html(
      h.head(
        h.title("Hello, world!"),
      ),
    ),
  );

  assertEquals(renderDocument(input), `<!DOCTYPE html><html><head><title>Hello, world!</title></head></html>`);
});

it("it works", () => {
  const a1 = h.a({ href: "https://example.com" }, "Hello, world!");
  const a2 = h.a({ class: "link", href: "https://www.example.org" }, "Hello, world!");

  assertEquals(a1.children, a2.children);
});

it("rendering works", () => {
  const p = h.p(
    h.a({ href: "https://example.com" }, "Hello, world!"),
    " With some text.",
  );

  assertEquals(renderElement(p), `<p><a href="https://example.com">Hello, world!</a> With some text.</p>`);
});

it("it works redux ", () => {
  const doc = h.html(
    h.head(
      h.meta({ "charset": "utf-8" }),
      h.title("Hello, world!"),
    ),
    h.body(
      h.h1({ class: "blah" }, "Hello, world!"),
    ),
  );

  assertEquals(
    renderElement(doc),
    `<html><head><meta charset="utf-8"><title>Hello, world!</title></head><body><h1 class="blah">Hello, world!</h1></body></html>`,
  );

  assertObjectMatch(elementToObject(doc), {
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
