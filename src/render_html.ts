/**
 * This module provides functions for rendering HTML elements and documents to strings.
 * @module
 */

import type { HTMLElementAttributes } from "./attributes.ts";
import type { HTMLDocument, HTMLElement, VoidHTMLElement } from "./html_element.ts";
import { PrettyPrinter } from "./pretty_printer.ts";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

/**
 * Renders an HTML element or void element to a string.
 *
 * @param tag - The HTML element or void element to render.
 * @returns The rendered element as a string.
 * @throws Error if the element type is not supported.
 */
export const renderElement = <T extends HTMLTag, A extends HTMLElementAttributes, C>(
  tag: HTMLElement<T, A, C> | VoidHTMLElement<Extract<HTMLTag, VoidHTMLTag>, A>,
  opts?: { pretty: boolean },
): string => {
  return new PrettyPrinter(opts?.pretty ?? false, "html").printNode(tag);
};

/**
 * Renders an HTML document to a string.
 *
 * @param doc - The HTML document to render.
 * @returns The rendered HTML document as a string.
 */
export const renderDocument = (doc: HTMLDocument, opts?: { pretty: boolean }): string => {
  return new PrettyPrinter(opts?.pretty ?? false, "html").print(doc);
};
