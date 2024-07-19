import { HTML_TAGS, type VoidHTMLTag, voidHTMLTags } from "./tags.ts";

const main = async () => {
  let result = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See tag-generator.ts to make changes.
import { type Child, type Children, type HTMLAttributes, HTMLElement, HTMLDocument } from "./mod.ts";

export function document(...children: Array<HTMLElement>): HTMLDocument {
  return new HTMLDocument(...children);
}

export function doctype(): HTMLElement {
  return new HTMLElement("!DOCTYPE", true, { html: true });
}
`.trimStart();
  for (const [tag, name] of Object.entries(HTML_TAGS)) {
      result += `
export function ${name}(...children: Children): HTMLElement;
export function ${name}(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function ${name}(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("${tag}", childrenOrAttrs, ...children);
}

`.trimStart();
  }

  await Deno.writeTextFile("html_tags.ts", result);
};

await main();
