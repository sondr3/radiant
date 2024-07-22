/**
 * This module provides functions for rendering XML elements and documents to strings.
 * @module
 */

import { escape } from "@std/html";
import { stringifyAttributes } from "./render.ts";
import { VoidXMLElement, type XMLAttributes, XMLDeclaration, type XMLDocument, XMLElement } from "./xml.ts";

type XMLFormatOptions = {
  depth?: number;
  newline?: boolean;
};

const optionValues = ({ depth, newline }: XMLFormatOptions) => ({
  indent: depth !== undefined ? "  ".repeat(depth) : "",
  newline: newline ? "\n" : "",
});

/**
 * Renders a void XML element as a string.
 *
 * @param element - The void XML element to render.
 * @returns The rendered XML string.
 */
export const renderVoidXMLElement = <T extends string, A extends XMLAttributes>(
  element: VoidXMLElement<T, A>,
  opts?: XMLFormatOptions,
) => {
  const { indent, newline } = optionValues(opts ?? {});
  return `${indent}<${element.tag}${stringifyAttributes(element.attributes ?? {})}>${newline}`;
};

/**
 * Renders an XML element as a string.
 *
 * @param element - The XML element to render.
 * @returns The rendered XML element as a string.
 */
export const renderXMLElement = <T, A, C>(
  element: XMLElement<T, A, C>,
  opts?: XMLFormatOptions,
) => {
  const { indent, newline } = optionValues(opts ?? {});
  let result = `${indent}<${element.tag}${stringifyAttributes(element.attributes ?? {})}>${newline}`;

  for (const child of element.children) {
    if (typeof child === "string") {
      result += (indent.repeat(2)) + escape(child) + newline;
    } else {
      result += renderElement(child, { ...opts, depth: (opts?.depth ?? 0) + 1 });
    }
  }

  result += `${indent}</${element.tag}>${newline}`;
  return result;
};

export const renderXMLDeclaration = <T extends string, A extends XMLAttributes>(
  declaration: XMLDeclaration<T, A>,
  opts?: XMLFormatOptions,
) => {
  const { indent, newline } = optionValues(opts ?? {});
  return `${indent}<?${declaration.tag}${stringifyAttributes(declaration.attributes ?? {})}?>${newline}`;
};

export const renderElement = (tag: unknown, opts?: XMLFormatOptions): string => {
  if (tag instanceof XMLDeclaration) {
    return renderXMLDeclaration(tag, opts);
  }

  if (tag instanceof XMLElement) {
    return renderXMLElement(tag, opts);
  }

  if (tag instanceof VoidXMLElement) {
    return renderVoidXMLElement(tag, opts);
  }

  // This should never happen
  throw new Error("Unsupported element type");
};

/**
 * Renders an XML document as a string.
 *
 * @param doc - The XML document to render.
 * @returns The rendered XML document as a string.
 */
export const renderXMLDocument = (doc: XMLDocument, opts?: { pretty: boolean }) => {
  let result = "";
  for (const child of doc.children) {
    result += renderElement(child, opts?.pretty ? { depth: 0, newline: true } : undefined);
  }
  return result;
};
