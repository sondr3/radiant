import { HTML_TAGS, type VoidHTMLTag, voidHTMLTags } from "./tags.ts";

const main = async () => {
  let result = `
// deno-fmt-ignore-file
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See tag-generator.ts to make changes.
import { type Children, type Child, type HTMLAttributes, HTMLElement, HTMLDocument, VoidHTMLElement, Doctype } from "./html_element.ts";

export function document(doctype: Doctype, ...children: Array<HTMLElement<"html">>): HTMLDocument {
  return new HTMLDocument(doctype, ...children);
}

export function doctype(): Doctype {
  return new Doctype();
}

`.trimStart();
  for (const [tag, name] of Object.entries(HTML_TAGS)) {
    const isVoid = voidHTMLTags.includes(tag as unknown as VoidHTMLTag);

    if (isVoid) {
      result += `
export function ${name}(attrs: HTMLAttributes): VoidHTMLElement<"${tag}"> {
  return new VoidHTMLElement("${tag}", attrs);
}

`.trimStart();
    } else {
      result += `
export function ${name}(...children: Children<"${tag}">): HTMLElement<"${tag}">;
export function ${name}(attrs: HTMLAttributes, ...children: Children<"${tag}">): HTMLElement<"${tag}">;
export function ${name}(childrenOrAttrs: Child<"${tag}"> | HTMLAttributes, ...children: Children<"${tag}">): HTMLElement<"${tag}"> {
  return HTMLElement.create("${tag}", childrenOrAttrs, ...children);
}

`.trimStart();
    }
  }

  await Deno.writeTextFile("html_tags.ts", result);
};

await main();
