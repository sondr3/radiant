import { assertEquals } from "jsr:@std/assert";
import * as h from "./mod.ts";

Deno.test("it works", () => {
  const doc = h.html(
    h.head(
      h.meta({ charset: "utf-8" }),
      h.title("Hello, world!")
    ),
    h.body(
      h.h1({ class: "blah" }, "Hello, world!")
    )
  );

  console.log(doc.toHtml())
});
