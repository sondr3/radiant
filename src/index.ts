/**
 * A module for generating HTML documents in type-safe and ergonomic TypeScript.
 *
 * ## Example
 * ```ts
 * import { h, renderDocument } from "jsr:@sondr3/radiant";
 *
 * const doc = h.document(
 *   h.doctype(),
 *   h.html(
 *     h.head(
 *       h.meta({ charset: "utf-8" }),
 *       h.title("Hello, world!"),
 *     ),
 *     h.body(
 *       h.h1({ class: "blah" }, "Hello, world!"),
 *     ),
 *   ),
 * );
 *
 * console.log(renderDocument(doc));
 * ```
 *
 * @module
 */

export { elementToObject } from "./ast.js";
export { h } from "./html_tags.js";
export * from "./attributes.js";
export * from "./html_element.js";
export * from "./render_html.js";
export * from "./tags.js";
export type { CHILDREN_MAP } from "./content_categories.js";
export type { ELEMENT_MAP } from "./elements.js";
