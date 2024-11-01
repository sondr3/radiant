import { writeFile } from "node:fs/promises";
import { hasRequiredAttributes } from "../src/html/html_attributes.js";
import { HTML_TAGS, VOID_HTML_TAGS, type VoidHTMLTag } from "../src/html/html_tags.js";

export const main = async () => {
	let elements = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/tag-generator.mts to make changes.
import { HTMLDocument, VoidBaseHTMLElement, Doctype, createHTMLElement } from "./html_element.js"
import type { ATTRIBUTE_MAP } from "./html_attributes.js"
import type { ELEMENT_MAP } from "./html_elements.js"
import type { CHILDREN_MAP } from "./html_content_categories.js"

function documentElement(doctype: Doctype, ...children: Array<ELEMENT_MAP["html"]>): HTMLDocument {
  return new HTMLDocument(doctype, ...children);
}

function doctypeElement(): Doctype {
  return new Doctype();
}

`.trimStart();
	for (const tag of HTML_TAGS) {
		const isVoid = VOID_HTML_TAGS.includes(tag as unknown as VoidHTMLTag);

		if (isVoid) {
			elements += `
function ${tag}Element(attrs?: ATTRIBUTE_MAP["${tag}"]): ELEMENT_MAP["${tag}"] {
  return new VoidBaseHTMLElement("${tag}", attrs ?? {} as ATTRIBUTE_MAP["${tag}"]);
}

`.trimStart();
		} else {
			if (!hasRequiredAttributes(tag)) {
				elements += "\n";
				elements += `function ${tag}Element(...children: Array<CHILDREN_MAP["${tag}"]>): ELEMENT_MAP["${tag}"];`;
			}

			elements += `
function ${tag}Element(attributes: ATTRIBUTE_MAP["${tag}"], ...children: Array<CHILDREN_MAP["${tag}"]>): ELEMENT_MAP["${tag}"];
function ${tag}Element(
  attrsOrChild: ATTRIBUTE_MAP["${tag}"] | CHILDREN_MAP["${tag}"] | Array<CHILDREN_MAP["${tag}"]>,
  ...children: Array<CHILDREN_MAP["${tag}"]>
): ELEMENT_MAP["${tag}"] {
  return createHTMLElement<"${tag}", ATTRIBUTE_MAP["${tag}"], CHILDREN_MAP["${tag}"]>(
    "${tag}",
    attrsOrChild,
    children,
  );
}
`;
		}
	}

	let map = `
/** A type-safe builder for all HTML elements. */
export const h = {
  /** A type-safe builder for a HTML document. */
  document: documentElement,
  /** A type-safe builder for the \`<!DOCTYPE html>\` element. */
  doctype: doctypeElement,
`;

	for (const tag of HTML_TAGS) {
		map += `  
  /** A type-safe builder for the \`<${tag}>\` element. */
  ${tag}: ${tag}Element,\n`;
	}

	map += "}";

	const result = elements + map;

	await writeFile("./src/html/html_builders.ts", result, { encoding: "utf-8" });
};
