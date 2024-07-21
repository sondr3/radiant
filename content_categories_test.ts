import { assertEquals } from "jsr:@std/assert/equals";
import { describe, it, } from "jsr:@std/testing/bdd";
import { h, renderElement } from "./content_categories.ts";
import { assertObjectMatch } from "jsr:@std/assert";

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

describe("attributes", () => {
  it("html element attributes", () => {
    const p = h.p({ class: "blah", id: "it" }, "Hello, world!");

    assertObjectMatch(p.attributes, { class: "blah", id: "it" });
  })

  it("global attributes", () => {
    const a = h.a({ hidden: true, href: "/abc" }, "Hello, world!");

    assertObjectMatch(a.attributes, { hidden: true, href: "/abc" });
  })

  it("types correctly", () => {
    h.p({ "data-attr": "attr" }, "Hello, world!");
    // @ts-expect-error invalid attribute name
    h.p({ "invalid-attr": "attr" }, "Hello, world!");
    // @ts-expect-error href is not an attribute on `<p>`
    h.p({ "href": "attr" }, "Hello, world!");
  })
})