/**
 * This module provides functions for rendering HTML elements and documents to strings.
 * @module
 */

import { BaseHTMLElement, type Doctype, type HTMLDocument, VoidBaseHTMLElement } from "./html_element.ts";
import { escape } from "@std/html/entities";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

/**
 * Converts an object of attributes into a string representation.
 *
 * @param attributes - The attributes to stringify.
 * @returns The string representation of the attributes.
 */
export const stringifyAttributes = (attributes: Record<string, string | boolean>): string => {
  const result = Array.from(Object.entries(attributes)).map(([key, value]) => {
    const escapedKey = escape(key);
    if (Array.isArray(value)) {
      return `${escapedKey}="${escape(value.join(" "))}"`;
    }

    if (typeof value === "boolean") {
      return value ? escapedKey : "";
    }

    return `${escapedKey}="${escape(value)}"`;
  });

  return result.length > 0 ? " " + result.join(" ") : "";
};

/**
 * Renders the doctype declaration for an HTML document.
 *
 * @param _doc - The document object.
 * @returns The doctype declaration as a string.
 */
export const renderDoctype = (_doc: Doctype): string => {
  return "<!DOCTYPE html>";
};

/**
 * Renders a void HTML element as a string.
 *
 * @template T - The HTML tag type.
 * @template A - The attributes type.
 * @param {VoidBaseHTMLElement<T, A>} element - The void HTML element to render.
 * @returns {string} - The rendered HTML string.
 */
export const renderVoidElement = <T extends Extract<HTMLTag, VoidHTMLTag>, A>(
  element: VoidBaseHTMLElement<T, A>,
): string => {
  return `<${element.tag}${stringifyAttributes(element.attributes ?? {})}>`;
};

/**
 * Renders an HTML element as a string.
 *
 * @template T - The HTML tag type.
 * @template A - The attributes type.
 * @template C - The children type.
 * @param element - The HTML element to render.
 * @returns The rendered HTML element as a string.
 */
export const renderHtmlElement = <T extends HTMLTag, A, C>(
  element: BaseHTMLElement<T, A, C>,
): string => {
  let result = `<${element.tag}${stringifyAttributes(element.attributes ?? {})}>`;

  for (const child of element.children) {
    if (typeof child === "string") {
      result += child;
    } else {
      result += renderElement(child);
    }
  }

  result += `</${element.tag}>`;

  return result;
};

/**
 * Renders an HTML element or void element to a string.
 *
 * @param tag - The HTML element or void element to render.
 * @returns The rendered element as a string.
 */
export const renderElement = (tag: unknown): string => {
  if (tag instanceof BaseHTMLElement) {
    return renderHtmlElement(tag);
  }

  if (tag instanceof VoidBaseHTMLElement) {
    return renderVoidElement(tag);
  }

  // This should never happen
  return "UNREACHABLE";
};

/**
 * Renders an HTML document to a string.
 *
 * @param doc - The HTML document to render.
 * @returns The rendered HTML document as a string.
 */
export const renderDocument = (doc: HTMLDocument): string => {
  let result = renderDoctype(doc.doctype);

  for (const child of doc.children) {
    result += renderElement(child);
  }

  return result;
};
