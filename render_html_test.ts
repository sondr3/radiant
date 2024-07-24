import { describe, it } from "jsr:@std/testing/bdd";
import { renderDocument } from "./render_html.ts";
import { h } from "./html_tags.ts";
import { assertSnapshot } from "jsr:@std/testing/snapshot";

describe("HTML rendering", () => {
  it("works without pretty", async (t) => {
    const input = h.document(
      h.doctype(),
      h.html(
        h.head(
          h.title("Hello, world!"),
        ),
      ),
    );

    await assertSnapshot(t, renderDocument(input));
  });

  it("works with pretty", async (t) => {
    const doc = h.document(
      h.doctype(),
      h.html(
        h.head(
          h.meta({ charset: "utf-8" }),
          h.title("Hello, world!"),
        ),
        h.body(
          h.h1({ class: "blah" }, "Hello, world!"),
          h.p("This is a bunch of text... blah blah blah"),
          h.p("With some more ", h.b("bold"), " text."),
        ),
      ),
    );

    await assertSnapshot(t, renderDocument(doc, { pretty: true }));
  });
});
