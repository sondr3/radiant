/**
 * This module provides functions for rendering XML elements and documents to strings.
 * @module
 */

import { PrettyPrinter } from "./pretty_printer.js";
import type { VoidXMLElement, XMLAttributes, XMLDeclaration, XMLDocument, XMLElement } from "./xml.js";

/**
 * Renders an XML element or declaration to a string.
 *
 * @param node - The XML element or declaration to render.
 * @param opts - Optional formatting options.
 * @returns The rendered XML as a string.
 * @throws Error if the element type is not supported.
 */
export const renderElement = <T extends string, A extends XMLAttributes, C>(
	node: XMLElement<T, A, C> | VoidXMLElement<T, A> | XMLDeclaration<T, A>,
	opts?: { pretty: boolean },
): string => {
	return new PrettyPrinter(opts?.pretty ?? false, "xml").printNode(node);
};

/**
 * Renders an XML document as a string.
 *
 * @param doc - The XML document to render.
 * @returns The rendered XML document as a string.
 */
export const renderDocument = (doc: XMLDocument, opts?: { pretty: boolean }): string => {
	return new PrettyPrinter(opts?.pretty ?? false, "xml").print(doc);
};
