import { assertEquals } from "jsr:@std/assert";
import { h } from "./mod.ts";
import { renderDocument, renderElement } from "./render.ts";
import { it } from "jsr:@std/testing/bdd";

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

it("attributes works", () => {
  const input = h.input({ type: "text", disabled: true });
  assertEquals(renderElement(input), `<input type="text" disabled>`);
});
