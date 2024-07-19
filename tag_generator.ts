import { HTML_TAGS, type VoidHTMLTag, voidHTMLTags } from "./tags.ts";

const main = async () => {
  let result = `
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See tag-generator.ts to make changes.
import { type Child, type Children, type HTMLAttributes, HTMLElement, HTMLDocument, VoidHTMLElement, type TagBase } from "./html_element.ts";
import type { HTMLTag } from "./tags.ts";

export function document(...children: Array<TagBase>): HTMLDocument {
  return new HTMLDocument(...children);
}

export function doctype(): VoidHTMLElement {
  return new VoidHTMLElement("!DOCTYPE" as unknown as HTMLTag, { html: true });
}
`.trimStart();
  for (const [tag, name] of Object.entries(HTML_TAGS)) {
    const isVoid = voidHTMLTags.includes(tag as unknown as VoidHTMLTag);

    if (isVoid) {
      result += `
export function ${name}(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("${tag}", attrs);
}

`.trimStart();
    } else {
      result += `
export function ${name}(...children: Children): HTMLElement;
export function ${name}(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function ${name}(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("${tag}", childrenOrAttrs, ...children);
}

`.trimStart();
    }
  }

  await Deno.writeTextFile("html_tags.ts", result);
};

await main();
