import { BaseHTMLElement, VoidBaseHTMLElement } from "./html/html_element.js";
import type { HTMLTag, VoidHTMLTag } from "./html/html_tags.js";

/**
 * Converts an HTML element (BaseHTMLElement or VoidBaseHTMLElement) into a regular object.
 *
 * @param element - The HTML element to convert.
 * @returns The converted object representation of the HTML element.
 */
export function elementToObject<T extends HTMLTag>(
	element: BaseHTMLElement<T, unknown, unknown> | VoidBaseHTMLElement<Extract<T, VoidHTMLTag>, unknown>,
): Record<string, unknown> {
	if (element instanceof BaseHTMLElement) {
		return {
			tag: element.tag,
			attributes: element.attributes,
			children: element.children.map((child) => {
				if (typeof child === "string") {
					return child;
				}
				if (child instanceof BaseHTMLElement || child instanceof VoidBaseHTMLElement) {
					return elementToObject(child);
				}

				return child;
			}),
		};
	}

	if (element instanceof VoidBaseHTMLElement) {
		return {
			tag: element.tag,
			attributes: element.attributes,
		};
	}

	throw new Error("Unsupported element type");
}
