import { writeFile } from "node:fs/promises";
import { SVG_TAGS } from "../src/svg/svg_tags.js";

export const main = async () => {
	let elements = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/svg-tag-generator.mts to make changes.
import { type SVGAttributes, createSVGElement } from "./index.js"
import type { ELEMENT_MAP } from "./svg_elements.js"
import type { CHILDREN_MAP } from "./svg_children.js"
`.trimStart();
	for (const tag of SVG_TAGS) {
		elements += `
function ${tag}Element(...children: Array<CHILDREN_MAP["${tag}"]>): ELEMENT_MAP["${tag}"];
function ${tag}Element(attributes: SVGAttributes, ...children: Array<CHILDREN_MAP["${tag}"]>): ELEMENT_MAP["${tag}"];
function ${tag}Element(
  attrsOrChild: SVGAttributes | CHILDREN_MAP["${tag}"] | Array<CHILDREN_MAP["${tag}"]>,
  ...children: Array<CHILDREN_MAP["${tag}"]>
): ELEMENT_MAP["${tag}"] {
  return createSVGElement<"${tag}", CHILDREN_MAP["${tag}"]>(
    "${tag}",
    attrsOrChild,
    children,
  );
}
`.trimStart();
	}

	let map = `
/** A not-so type-safe builder for all S elements. */
export const s = {
`;

	for (const tag of SVG_TAGS) {
		map += `  
  /** A not-so type-safe builder for the \`<${tag}>\` element. */
  ${tag}: ${tag}Element,\n`;
	}

	map += "}";

	const result = elements + map;

	await writeFile("./src/svg/svg_builders.ts", result, { encoding: "utf-8" });
};
