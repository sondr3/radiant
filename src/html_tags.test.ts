import { test } from "vitest";
import { elementToObject } from "./ast.js";
import { h } from "./index.js";
import { renderDocument, renderElement } from "./render_html.js";

test("basic output", ({ expect }) => {
	const input = h.document(h.doctype(), h.html(h.head(h.title("Hello, world!"))));

	expect(renderDocument(input)).toBe("<!DOCTYPE html><html><head><title>Hello, world!</title></head></html>");
});

test("it works", ({ expect }) => {
	const a1 = h.a({ href: "https://example.com" }, "Hello, world!");
	const a2 = h.a({ class: "link", href: "https://www.example.org" }, "Hello, world!");

	expect(a1.children).toStrictEqual(a2.children);
});

test("rendering works", ({ expect }) => {
	const p = h.p(h.a({ href: "https://example.com" }, "Hello, world!"), " With some text.");

	expect(renderElement(p)).toBe(`<p><a href="https://example.com">Hello, world!</a> With some text.</p>`);
});

test("it works redux ", ({ expect }) => {
	const doc = h.html(
		h.head(h.meta({ charset: "utf-8" }), h.title("Hello, world!")),
		h.body(h.h1({ class: "blah" }, "Hello, world!")),
	);

	expect(renderElement(doc)).toBe(
		`<html><head><meta charset="utf-8" /><title>Hello, world!</title></head><body><h1 class="blah">Hello, world!</h1></body></html>`,
	);

	expect(elementToObject(doc)).toMatchObject({
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
				children: [{ tag: "h1", attributes: { class: "blah" }, children: ["Hello, world!"] }],
			},
		],
	});
});

test("it renders empty elements correctly", ({ expect }) => {
	expect(renderElement(h.div())).toBe("<div></div>");
	expect(renderElement(h.div({ class: "foo" }))).toBe(`<div class="foo"></div>`);
	expect(renderElement(h.br())).toBe("<br />");
	expect(renderElement(h.br({ class: "foo" }))).toBe(`<br class="foo" />`);
});

test("it renders html-unsafe characters correctly", ({ expect }) => {
	expect(renderElement(h.div(`'&"><`))).toBe("<div>&#39;&amp;&quot;&gt;&lt;</div>");
	expect(renderElement(h.div({ class: `'&"><` }))).toBe(`<div class="&#39;&amp;&quot;&gt;&lt;"></div>`);
	expect(renderElement(h.div({ class: `'&"><` }, `'&"><`, h.div(`'&"><`), `'&"><`))).toBe(
		`<div class="&#39;&amp;&quot;&gt;&lt;">&#39;&amp;&quot;&gt;&lt;<div>&#39;&amp;&quot;&gt;&lt;</div>&#39;&amp;&quot;&gt;&lt;</div>`,
	);
});
