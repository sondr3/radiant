import { assertEquals } from "jsr:@std/assert/equals";
import { h, renderElement } from "./content_categories.ts";

Deno.test("it works", () => {
  const a1 = h.a({ href: "https://example.com" }, "Hello, world!");
  const a2 = h.a({ class: "link", href: "https://www.example.org" }, "Hello, world!");

  assertEquals(a1.children, a2.children);
});

Deno.test("rendering works", () => {
  const p = h.p(
    h.a({ href: "https://example.com" }, "Hello, world!"),
    " With some text.",
  );

  assertEquals(renderElement(p), `<p><a href="https://example.com">Hello, world!</a> With some text.</p>`);
});
