import { HTML_TAGS, VOID_HTML_TAGS, type VoidHTMLTag } from "../tags.ts";

const main = async () => {
  let elements = `
// deno-fmt-ignore-file
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See tag-generator.ts to make changes.
import { HTMLDocument, VoidBaseHTMLElement, Doctype, HTMLElementFactory } from "./html_element.ts";
import type { ATTRIBUTE_MAP } from "./attributes.ts";
import type { ELEMENT_MAP } from "./elements.ts";
import type { AllChildren, CHILDREN_MAP } from "./content_categories.ts";

function documentElement(doctype: Doctype, ...children: Array<AllChildren | ELEMENT_MAP["html"]>): HTMLDocument {
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
  return HTMLElementFactory.create<"${tag}", ATTRIBUTE_MAP["${tag}"], CHILDREN_MAP["${tag}"]>(
    "${tag}",
    attrsOrChild,
    children,
  );
}
`;
    }
  }

  let map = `export const h = {
  document: documentElement,
  doctype: doctypeElement,
`;

  for (const tag of HTML_TAGS) {
    map += `  ${tag}: ${tag}Element,\n`;
  }

  map += `}`;

  const result = elements + map;

  await Deno.writeTextFile("html_tags.ts", result);
};

await main();
