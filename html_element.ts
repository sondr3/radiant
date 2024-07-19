import { type VoidHTMLTag, voidHTMLTags } from "./tags.ts";

export type Child = string | HTMLElement;
export type Children = Child[];

export type HTMLAttributes = { [key: string]: string | Array<string> | boolean };

export class HTMLElement {
  readonly tag: string;
  readonly attributes: HTMLAttributes;
  readonly children: Children;
  readonly isVoid: boolean;

  constructor(tag: string, isVoid: boolean, attributes: HTMLAttributes, ...children: Children) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
    this.isVoid = isVoid;
  }

  static create = (
    tag: string,
    childrenOrAttrs: Child | Children | HTMLAttributes,
    ...children: Children
  ): HTMLElement => {
    const isVoid = voidHTMLTags.includes(tag as unknown as VoidHTMLTag);

    if (typeof childrenOrAttrs === "string" || childrenOrAttrs instanceof HTMLElement) {
      return new HTMLElement(tag, isVoid, {}, childrenOrAttrs, ...children);
    }

    if (Array.isArray(childrenOrAttrs)) {
      return new HTMLElement(tag, isVoid, {}, ...childrenOrAttrs);
    }

    return new HTMLElement(tag, isVoid, childrenOrAttrs, ...children);
  };
}

export class HTMLDocument {
  readonly children: Array<HTMLElement>;

  constructor(...children: Array<HTMLElement>) {
    this.children = children;
  }
}