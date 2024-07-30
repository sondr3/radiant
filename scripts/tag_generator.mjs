import { writeFile } from "node:fs/promises";
import { HTML_TAGS, VOID_HTML_TAGS } from "../dist/tags.js";

const main = async () => {
	let elements = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/tag-generator.ts to make changes.
import { HTMLDocument, VoidBaseHTMLElement, Doctype, createHTMLElement } from "./html_element.js"
import type { ATTRIBUTE_MAP } from "./attributes.js"
import type { ELEMENT_MAP } from "./elements.js"
import type { CHILDREN_MAP } from "./content_categories.js"

function documentElement(doctype: Doctype, ...children: Array<ELEMENT_MAP["html"]>): HTMLDocument {
  return new HTMLDocument(doctype, ...children);
}

function doctypeElement(): Doctype {
  return new Doctype();
}
`.trimStart();
	for (const tag of HTML_TAGS) {
		const isVoid = VOID_HTML_TAGS.includes(tag);

		if (isVoid) {
			elements += `
function ${tag}Element(attrs: ATTRIBUTE_MAP["${tag}"]): ELEMENT_MAP["${tag}"] {
  return new VoidBaseHTMLElement("${tag}", attrs);
}

`.trimStart();
		} else {
			elements += `
function ${tag}Element(...children: Array<CHILDREN_MAP["${tag}"]>): ELEMENT_MAP["${tag}"];
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

	await writeFile("./src/html_tags.ts", result, { encoding: "utf-8" });
};

await main();
