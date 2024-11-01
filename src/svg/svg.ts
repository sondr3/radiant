import type { SVGContent } from "./svg_children.js";
import type { SVGTag } from "./svg_tags.js";

export type SVGAttributes = Record<string, string | boolean>;

export class SVGElement<T, C> {
	readonly tag: T;
	readonly attributes: SVGAttributes;
	readonly children: Array<C | string>;

	constructor(tag: T, attributes: SVGAttributes, children: Array<C | string>) {
		this.tag = tag;
		this.attributes = attributes;
		this.children = children;
	}
}

const isSVGElement = <T extends SVGTag, C extends SVGContent>(obj: unknown): obj is SVGElement<T, C> => {
	return obj instanceof SVGElement;
};

/**
 * Creates a new instance of `SVGElement` with the specified tag, attributes, and children.
 *
 * @template T - The SVG tag type.
 * @template C - The type of the children array elements.
 * @param {T} tag - The HTML tag.
 * @param {string | SVGAttributes | C | Array<C>} attributes - The attributes of the HTML element.
 * @param {Array<C>} children - The children of the SVG element.
 * @returns {SVGElement<T, C>} - The created `SVGElement` instance.
 */
export const createSVGElement = <T extends SVGTag, C>(
	tag: T,
	attributes: string | SVGAttributes | C | Array<C>,
	children: Array<C>,
): SVGElement<T, C> => {
	if (typeof attributes === "string" || isSVGElement(attributes)) {
		return new SVGElement(tag, {} as SVGAttributes, [attributes as unknown as C, ...children]);
	}

	if (Array.isArray(attributes)) {
		return new SVGElement(tag, {} as SVGAttributes, [...attributes, ...children]);
	}

	return new SVGElement(tag, attributes as SVGAttributes, children);
};
