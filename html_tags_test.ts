import { assertEquals } from "jsr:@std/assert";
import * as h from "./mod.ts";
import { render } from "./render.ts";

Deno.test("basic output", () => {
  const input = h.document(
    h.doctype(),
    h.html(h.title("Hello, world!")),
  );

  assertEquals(render(input), `<!DOCTYPE html><html><title>Hello, world!</title></html>`);
});

Deno.test("attributes works", () => {
  const input = h.input({ type: "text", disabled: true });
  assertEquals(render(input), `<input type="text" disabled>`);
});
