import { BaseHTMLElement, type Doctype, type HTMLDocument, VoidBaseHTMLElement } from "./html_element.ts";
import { escape } from "@std/html/entities";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

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

export const renderDoctype = (_doc: Doctype): string => {
  return "<!DOCTYPE html>";
};

export const renderVoidElement = <T extends Extract<HTMLTag, VoidHTMLTag>, A>(
  element: VoidBaseHTMLElement<T, A>,
): string => {
  return `<${element.tag}${stringifyAttributes(element.attributes ?? {})}>`;
};

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

export const renderDocument = (doc: HTMLDocument): string => {
  let result = renderDoctype(doc.doctype);

  for (const child of doc.children) {
    result += renderElement(child);
  }

  return result;
};
