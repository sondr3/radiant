/**
 * Common utilities for rendering HTML/XML.
 * @module
 */

import { escape } from "@std/html/entities";

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
