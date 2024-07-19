import type { HTMLAttributes, HTMLElement } from "./html_element.ts";
import { escape } from "@std/html/entities";

const stringifyAttributes = (attributes: HTMLAttributes): string => {
  const result = Array.from(Object.entries(attributes)).map(([key, value]) => {
    const escapedKey = escape(key);
    if (Array.isArray(value)) {
      return `${escapedKey}="${escape(value.join(" "))}"`;
    }

    return `${escapedKey}="${escape(value)}"`;
  });

  return result.length > 0 ? " " + result.join(" ") : "";
};

export const render = (element: HTMLElement): string => {
  let result = `<${element.tag}${stringifyAttributes(element.attributes)}>`;

  if (!element.isVoid) {
    for (const child of element.children) {
      if (typeof child === "string") {
        result += child;
      } else {
        result += render(child);
      }
    }

    result += `</${element.tag}>`;
  }

  return result;
};
