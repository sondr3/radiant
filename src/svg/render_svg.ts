/**
 * This module provides functions for rendering XML elements and documents to strings.
 * @module
 */

import { PrettyPrinter } from "../pretty_printer.js";
import type { SVGElement } from "./svg.js";

/**
 * Renders an XML element or declaration to a string.
 *
 * @param node - The XML element or declaration to render.
 * @param opts - Optional formatting options.
 * @returns The rendered XML as a string.
 * @throws Error if the element type is not supported.
 */
export const renderElement = <T extends string, C>(node: SVGElement<T, C>, opts?: { pretty: boolean }): string => {
	return new PrettyPrinter(opts?.pretty ?? false, "svg").printNode(node);
};
