// import { assertSnapshot } from "jsr:@std/testing/snapshot";
import { describe, test } from "vitest";
import { h } from "./html_tags.js";
// import { describe, it } from "jsr:@std/testing/bdd";
import { renderDocument, renderElement } from "./render_html.js";

describe("HTML rendering", () => {
	test("works without pretty", ({ expect }) => {
		const input = h.document(h.doctype(), h.html(h.head(h.title("Hello, world!"))));

		expect(renderDocument(input)).toMatchSnapshot();
	});

	test("works with pretty", ({ expect }) => {
		const doc = h.document(
			h.doctype(),
			h.html(
				h.head(h.meta({ charset: "utf-8" }), h.title("Hello, world!")),
				h.body(
					h.h1({ class: "blah" }, "Hello, world!"),
					h.p("This is a bunch of text... blah blah blah"),
					h.p("With some more ", h.b("bold"), " text."),
				),
			),
		);

		expect(renderDocument(doc, { pretty: true })).toMatchSnapshot();
	});

	test("works with whitespace sensitive tags", ({ expect }) => {
		const doc = h.body(
			h.p("This is some regular text..."),
			h.pre(`     And this is a very long line of text that should be preserved
        
  this has
some 
    weird whitespace`),
		);

		expect(renderElement(doc, { pretty: true })).toMatchSnapshot();
	});

	test("nesting pre and code works", ({ expect }) => {
		const elem = h.pre(h.code("\n  def some_code():\n    pass\n"));
		expect(renderElement(elem)).toMatchSnapshot();
	});
});
