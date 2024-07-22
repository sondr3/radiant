/**
 * This module provides functions for rendering XML elements and documents to strings.
 * @module
 */

import { stringifyAttributes } from "./render.ts";
import type { VoidXMLElement, XMLDocument, XMLElement } from "./xml.ts";

/**
 * Renders a void XML element as a string.
 *
 * @param element - The void XML element to render.
 * @returns The rendered XML string.
 */
export const renderVoidXMLElement = (element: VoidXMLElement) => {
  return `<${element.tag}${stringifyAttributes(element.attributes)}>`;
};

/**
 * Renders an XML element as a string.
 *
 * @param element - The XML element to render.
 * @returns The rendered XML element as a string.
 */
export const renderXMLElement = (element: XMLElement) => {
  let result = `<${element.tag}${stringifyAttributes(element.attributes)}>`;

  for (const child of element.children) {
    if (typeof child === "string") {
      result += child;
    } else {
      result += renderXMLElement(child);
    }
  }

  result += `</${element.tag}>`;
  return result;
};

/**
 * Renders an XML document as a string.
 *
 * @param doc - The XML document to render.
 * @returns The rendered XML document as a string.
 */
export const renderXMLDocument = (doc: XMLDocument) => {
  let result = `${doc.docType.tag}`;
  for (const child of doc.children) {
    result += renderXMLElement(child);
  }
  return result;
};
