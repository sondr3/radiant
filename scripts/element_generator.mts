import { writeFile } from "node:fs/promises";
import camelCase from "camelcase";
import { HTML_TAGS, VOID_HTML_TAGS, type VoidHTMLTag } from "../src/html/html_tags.js";

const pascalCase = (str: string) => camelCase(str, { pascalCase: true });

const main = async () => {
	let elements = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/element-generator.mts to make changes.
import type { VoidHTMLElement, HTMLElement } from "./html_element.ts";
import type { ATTRIBUTE_MAP } from "./attributes.ts";
import type { CHILDREN_MAP } from "./content_categories.ts";
`.trimStart();
	for (const tag of HTML_TAGS) {
		const isVoid = VOID_HTML_TAGS.includes(tag as unknown as VoidHTMLTag);

		if (isVoid) {
			elements += `
interface ${pascalCase(tag)}Element extends VoidHTMLElement<"${tag}", ATTRIBUTE_MAP["${tag}"]> {}
`;
		} else {
			elements += `
interface ${pascalCase(tag)}Element extends HTMLElement<"${tag}", ATTRIBUTE_MAP["${tag}"], CHILDREN_MAP["${tag}"]> {}
`;
		}
	}

	let map = `
/** A type-safe representation of all HTML elements. */
export type ELEMENT_MAP = {
`;

	for (const tag of HTML_TAGS) {
		map += `
  /** A type-safe representation of the \`<${tag}>\` element. */
  ${tag}: ${pascalCase(tag)}Element;\n`;
	}

	map += "}";

	const result = elements + map;

	await writeFile("./src/html/elements.ts", result, { encoding: "utf-8" });
};

await main();
