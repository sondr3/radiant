import { writeFile } from "node:fs/promises";
import camelCase from "camelcase";
import { SVG_TAGS } from "../src/svg/svg_tags.js";

const pascalCase = (str: string) => camelCase(str, { pascalCase: true });

export const main = async () => {
	let elements = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/svg-element-generator.mts to make changes.
import type { SVGElement } from "./svg.js";
import type { CHILDREN_MAP } from "./svg_children.ts";
`.trimStart();
	for (const tag of SVG_TAGS) {
		elements += `
interface ${pascalCase(tag)}Element extends SVGElement<"${tag}", CHILDREN_MAP["${tag}"]> {}
`;
	}

	let map = `
/** A type-safe representation of all SVG elements. */
export type ELEMENT_MAP = {
`;

	for (const tag of SVG_TAGS) {
		map += `
  /** A not-so type-safe representation of the \`<${tag}>\` element. */
  ${tag}: ${pascalCase(tag)}Element;\n`;
	}

	map += "}";

	const result = elements + map;

	await writeFile("./src/svg/svg_elements.ts", result, { encoding: "utf-8" });
};
