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
export type { CHILDREN_MAP } from "./html/html_content_categories.js";
export type { ELEMENT_MAP } from "./html/html_elements.js";
export type { ChildrenOf, AttributesOf } from "./html/html_types.js";
export * from "./html/html_attributes.js";
export * from "./html/html_element.js";
export * from "./html/html_elements.js";
export * from "./html/render_html.js";
export * from "./html/html_tags.js";
export { h } from "./html/index.js";
