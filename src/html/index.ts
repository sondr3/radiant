import type { HTMLElementAttributes } from "./html_attributes.js";
import { h as h_ } from "./html_builders.js";
import type { CHILDREN_MAP } from "./html_content_categories.js";
import type { BaseHTMLElement, VoidBaseHTMLElement } from "./html_element.js";
import type { HTMLTag, VoidHTMLTag } from "./html_tags.js";

export type { CHILDREN_MAP } from "./html_content_categories.js";
export type { ELEMENT_MAP } from "./html_elements.js";
export type { ChildrenOf, AttributesOf } from "./html_types.js";
export * from "./html_attributes.js";
export * from "./html_element.js";
export * from "./render_html.js";
export * from "./html_tags.js";

/**
 * Conditionally renders an HTML element
 */
export function addIf<T extends HTMLTag, A extends HTMLElementAttributes, C extends CHILDREN_MAP[T]>(
	condition: boolean,
	element: BaseHTMLElement<T, A, C> | VoidBaseHTMLElement<Extract<T, VoidHTMLTag>, A> | null,
): BaseHTMLElement<T, A, C> | VoidBaseHTMLElement<Extract<T, VoidHTMLTag>, A> | null {
	return condition ? element : null;
}

/** A type-safe builder for all HTML elements, with some added utility functions. */
export const h = {
	...h_,
	addIf,
};
