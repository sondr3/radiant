import type { HTMLElementAttributes } from "./html_attributes.js";
import { h as h_ } from "./html_builders.js";
import type { CHILDREN_MAP } from "./html_content_categories.js";
import { type BaseHTMLElement, RawHTML, type VoidBaseHTMLElement } from "./html_element.js";
import type { HTMLTag, VoidHTMLTag } from "./html_tags.js";

/**
 * Conditionally renders an HTML element
 */
function addIf<T extends HTMLTag, A extends HTMLElementAttributes, C extends CHILDREN_MAP[T]>(
	condition: boolean,
	element: BaseHTMLElement<T, A, C> | VoidBaseHTMLElement<Extract<T, VoidHTMLTag>, A> | null,
): BaseHTMLElement<T, A, C> | VoidBaseHTMLElement<Extract<T, VoidHTMLTag>, A> | null {
	return condition ? element : null;
}

/** A type-safe builder for all HTML elements, with some added utility functions. */
export const h = {
	...h_,
	/**
	 * Conditionally renders an HTML element
	 */
	addIf,
	/**
	 * Creates a raw HTML element that will be rendered without escaping.
	 * Use with caution as this can lead to XSS vulnerabilities if used with untrusted input.
	 */
	raw: (content: string): RawHTML => {
		return new RawHTML(content);
	},
};
