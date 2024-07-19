import {
  type Doctype,
  type HTMLAttributes,
  type HTMLDocument,
  HTMLElement,
  type VoidHTMLElement,
} from "./html_element.ts";
import { escape } from "@std/html/entities";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

const stringifyAttributes = (attributes: HTMLAttributes): string => {
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

export const renderElement = <T extends HTMLTag>(element: HTMLElement<T> | VoidHTMLElement<VoidHTMLTag>): string => {
  let result = `<${element.tag}${stringifyAttributes(element.attributes ?? {})}>`;

  if (element instanceof HTMLElement) {
    for (const child of element.children) {
      if (typeof child === "string") {
        result += child;
      } else {
        result += renderElement(child);
      }
    }

    result += `</${element.tag}>`;
  }

  return result;
};

export const renderDocument = (doc: HTMLDocument): string => {
  let result = renderDoctype(doc.doctype);

  for (const child of doc.children) {
    result += renderElement(child);
  }

  return result;
};
