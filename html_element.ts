import type { HTMLTagChildren } from "./tag_maps.ts";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

export type Child<T extends HTMLTag> = HTMLElement<HTMLTagChildren<T>> | VoidHTMLElement<VoidHTMLTag> | string;
export type Children<T extends HTMLTag> = Array<Child<T>>;
export type HTMLAttributes = Record<string, string | Array<string> | boolean>;

export interface TagBase<T extends HTMLTag> {
  readonly tag: T;
  readonly attributes: HTMLAttributes;
}

const isHtmlTag = <T extends HTMLTag>(obj: unknown): obj is HTMLElement<T> => {
  return obj instanceof HTMLElement;
};

const isVoidHtmlTag = <T extends VoidHTMLTag>(obj: unknown): obj is VoidHTMLElement<T> => {
  return obj instanceof VoidHTMLElement;
};

export class HTMLElement<T extends HTMLTag> implements TagBase<T> {
  readonly tag: T;
  readonly attributes: HTMLAttributes;
  readonly children: Children<T>;

  constructor(tag: T, attributes: HTMLAttributes, ...children: Children<T>) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }

  static create<T extends HTMLTag>(
    tag: T,
    childrenOrAttrs: Child<T> | Children<T> | HTMLAttributes,
    ...children: Children<T>
  ): HTMLElement<T> {
    if (isHtmlTag(childrenOrAttrs) || isVoidHtmlTag(childrenOrAttrs) || typeof childrenOrAttrs === "string") {
      return new HTMLElement(tag, {}, childrenOrAttrs, ...children);
    }

    if (Array.isArray(childrenOrAttrs)) {
      return new HTMLElement(tag, {}, ...childrenOrAttrs);
    }

    return new HTMLElement(tag, childrenOrAttrs, ...children);
  }
}

export class VoidHTMLElement<T extends VoidHTMLTag> implements TagBase<T> {
  readonly tag: T;
  readonly attributes: HTMLAttributes;

  constructor(tag: T, attributes: HTMLAttributes) {
    this.tag = tag;
    this.attributes = attributes;
  }
}

export class Doctype {
  readonly tag: "!DOCTYPE" = "!DOCTYPE";
  readonly attributes: { html: true } = { html: true };
}

export class HTMLDocument {
  readonly doctype: Doctype;
  readonly children: Array<HTMLElement<HTMLTagChildren<"html">>>;

  constructor(doctype: Doctype, ...children: Array<HTMLElement<HTMLTagChildren<"html">>>) {
    this.doctype = doctype;
    this.children = children;
  }
}
