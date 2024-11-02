/**
 * This module provides classes and interfaces for working with HTML elements.
 * @module
 */

import type { ELEMENT_MAP } from "./html_elements.js";
import type { HTMLTag, VoidHTMLTag } from "./html_tags.js";

type AnyHTMLElement = BaseHTMLElement<HTMLTag, unknown, unknown> | VoidBaseHTMLElement<VoidHTMLTag, unknown>;
const isHTMLElement = (value: unknown): value is AnyHTMLElement => {
	return value instanceof BaseHTMLElement || value instanceof VoidBaseHTMLElement;
};
export const isAttributes = <A>(value: unknown): value is A => {
	if (value === null || typeof value !== "object") return false;
	if (Array.isArray(value)) return false;
	return !isHTMLElement(value);
};

/**
 * Represents raw HTML content, to avoid string escaping.
 */
export class RawHTML {
	constructor(public readonly content: string) {}
}

/**
 * Represents an HTML element.
 *
 * @template T - The HTML tag type.
 * @template A - The type of attributes for the HTML element.
 * @template C - The type of children for the HTML element.
 */
export interface HTMLElement<T extends HTMLTag, A, C> {
	readonly tag: T;
	readonly attributes: A;
	readonly children: Array<C>;
}

/**
 * A concrete implementation of the `HTMLElement` interface.
 */
export class BaseHTMLElement<T extends HTMLTag, A, C> implements HTMLElement<T, A, C> {
	readonly tag: T;
	readonly attributes: A;
	readonly children: Array<C>;

	/**
	 * Represents an HTML element.
	 * @template T - The type of the HTML tag.
	 * @template A - The type of the HTML attributes.
	 * @template C - The type of the HTML children.
	 */
	constructor(tag: T, attributes: A, children: Array<C>) {
		this.tag = tag;
		this.attributes = attributes;
		this.children = children;
	}
}

/**
 * Creates a new instance of `BaseHTMLElement` with the specified tag, attributes, and children.
 *
 * @template T - The HTML tag type.
 * @template A - The type of the attributes object.
 * @template C - The type of the children array elements.
 * @param {T} tag - The HTML tag.
 * @param {string | A | C | Array<C>} attrsOrChild - The attributes or first child of the HTML element.
 * @param {Array<C>} restOfChildren - The remaining children of the HTML element.
 * @returns {BaseHTMLElement<T, A, C>} - The created `BaseHTMLElement` instance.
 */
export const createHTMLElement = <T extends HTMLTag, A, C>(
	tag: T,
	attrsOrChild: string | A | C | Array<C> | null | undefined,
	restOfChildren: Array<C>,
): BaseHTMLElement<T, A, C> => {
	if (!attrsOrChild) {
		return new BaseHTMLElement<T, A, C>(tag, {} as A, []);
	}

	if (isAttributes<A>(attrsOrChild)) {
		return new BaseHTMLElement(tag, attrsOrChild, restOfChildren);
	}

	const children = Array.isArray(attrsOrChild)
		? [...attrsOrChild, ...restOfChildren]
		: [attrsOrChild as C, ...restOfChildren];

	return new BaseHTMLElement(tag, {} as A, children);
};

/**
 * Represents a void HTML element with a specific tag and attributes.
 *
 * @template T - The HTML tag type.
 * @template A - The attributes type.
 */
export interface VoidHTMLElement<T extends Extract<HTMLTag, VoidHTMLTag>, A> {
	readonly tag: T;
	readonly attributes: A;
}

/**
 * A concrete implementation of the `VoidHTMLElement` interface.
 */
export class VoidBaseHTMLElement<T extends Extract<HTMLTag, VoidHTMLTag>, A> implements VoidHTMLElement<T, A> {
	readonly tag: T;
	readonly attributes: A;

	/**
	 * Represents an HTML element.
	 * @template T - The type of the HTML tag.
	 * @template A - The type of the HTML attributes.
	 */
	constructor(tag: T, attributes: A) {
		this.tag = tag;
		this.attributes = attributes;
	}
}

/**
 * Represents a Doctype element in HTML.
 */
export class Doctype {
	readonly tag = "!DOCTYPE" as const;
	readonly attributes: { html: true } = { html: true };
}

/**
 * Represents an HTML document.
 */
export class HTMLDocument {
	readonly children: Array<Doctype | ELEMENT_MAP["html"]>;

	/**
	 * Creates a new HTMLDocument instance.
	 * @param doctype - The doctype of the HTML document.
	 * @param children - The children elements of the HTML document.
	 */
	constructor(doctype: Doctype, ...children: Array<ELEMENT_MAP["html"]>) {
		this.children = [doctype, ...children];
	}
}
