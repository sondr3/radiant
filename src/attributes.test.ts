import { describe, test } from "vitest";
import { h } from "./html_tags.js";
import { renderElement } from "./render_html.js";

describe("attributes", () => {
	test("html element attributes", ({ expect }) => {
		const p = h.p({ class: "blah", id: "it" }, "Hello, world!");

		expect(p.attributes).toMatchObject({ class: "blah", id: "it" });
	});

	test("global attributes", ({ expect }) => {
		const a = h.a({ hidden: true, href: "/abc" }, "Hello, world!");

		expect(a.attributes).toMatchObject({ hidden: true, href: "/abc" });
	});

	test("types correctly", () => {
		h.p({ "data-attr": "attr" }, "Hello, world!");
		// @ts-expect-error invalid attribute name
		h.p({ "invalid-attr": "attr" }, "Hello, world!");
		// @ts-expect-error href is not an attribute on `<p>`
		h.p({ href: "attr" }, "Hello, world!");
	});

	test("attributes works", ({ expect }) => {
		const input = h.input({ type: "text", disabled: true });
		expect(renderElement(input)).toBe(`<input type="text" disabled />`);
	});

	test("form attributes", ({ expect }) => {
		const form = h.form({ method: "get", action: "" }, h.input({ type: "text" }));
		expect(renderElement(form)).toBe(`<form method="get" action=""><input type="text" /></form>`);

		const f2 = h.form({ method: "post", action: "" }, h.input({ type: "text" }));
		expect(renderElement(f2)).toBe(`<form method="post" action=""><input type="text" /></form>`);

		// @ts-expect-error dialog ignores action
		h.form({ action: "get", method: "dialog" }, h.input({ type: "text" }));
	});
});
