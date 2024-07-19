import type { HTMLTag } from "./tags.ts";

export type Child = string | TagBase;
export type Children = Child[];

export type HTMLAttributes = Record<string, string | Array<string> | boolean>;

export interface TagBase {
  readonly tag: HTMLTag;
  readonly attributes: HTMLAttributes;
}

const isHtmlTag = (obj: unknown): obj is TagBase => {
  return typeof obj === "object" && obj !== null && "tag" in obj;
};

export class HTMLElement implements TagBase {
  readonly tag: HTMLTag;
  readonly attributes: HTMLAttributes;
  readonly children: Children;

  constructor(tag: HTMLTag, attributes: HTMLAttributes, ...children: Children) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }

  static create = (
    tag: HTMLTag,
    childrenOrAttrs: Child | Children | HTMLAttributes,
    ...children: Children
  ): HTMLElement => {
    if (typeof childrenOrAttrs === "string" || isHtmlTag(childrenOrAttrs)) {
      return new HTMLElement(tag, {}, childrenOrAttrs, ...children);
    }

    if (Array.isArray(childrenOrAttrs)) {
      return new HTMLElement(tag, {}, ...childrenOrAttrs);
    }

    return new HTMLElement(tag, childrenOrAttrs, ...children);
  };
}

export class VoidHTMLElement implements TagBase {
  readonly tag: HTMLTag;
  readonly attributes: HTMLAttributes;

  constructor(tag: HTMLTag, attributes: HTMLAttributes) {
    this.tag = tag;
    this.attributes = attributes;
  }
}

export class HTMLDocument {
  readonly children: Array<TagBase>;

  constructor(...children: Array<TagBase>) {
    this.children = children;
  }
}
