import { HTML_TAGS, VOID_HTML_TAGS, type VoidHTMLTag } from "../src/tags.ts";
import { toPascalCase } from "@std/text";

const main = async () => {
  let elements = `
// deno-fmt-ignore-file
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/element-generator.ts to make changes.
import type { VoidHTMLElement, HTMLElement } from "./html_element.ts";
import type { ATTRIBUTE_MAP } from "./attributes.ts";
import type { CHILDREN_MAP } from "./content_categories.ts";
`.trimStart();
  for (const tag of HTML_TAGS) {
    const isVoid = VOID_HTML_TAGS.includes(tag as unknown as VoidHTMLTag);

    if (isVoid) {
      elements += `
interface ${toPascalCase(tag)}Element extends VoidHTMLElement<"${tag}", ATTRIBUTE_MAP["${tag}"]> {}
`;
    } else {
      elements += `
interface ${toPascalCase(tag)}Element extends HTMLElement<"${tag}", ATTRIBUTE_MAP["${tag}"], CHILDREN_MAP["${tag}"]> {}
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
  ${tag}: ${toPascalCase(tag)}Element;\n`;
  }

  map += `}`;

  const result = elements + map;

  await Deno.writeTextFile("./src/elements.ts", result);
};

await main();
