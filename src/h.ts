import type { HTMLElementAttributes } from "./attributes.js";
import type { CHILDREN_MAP } from "./content_categories.js";
import type { BaseHTMLElement, VoidBaseHTMLElement } from "./html_element.js";
import { h as h_ } from "./html_tags.js";
import type { HTMLTag, VoidHTMLTag } from "./tags.js";

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
