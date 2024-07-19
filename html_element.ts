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

const findSameHeadTag = (tag: TagBase, tags: Array<TagBase>): number | null => {
  for (let i = 0; i < tags.length; i++) {
    const other = tags[i];
    if (other.tag === tag.tag && tag.tag === "meta") {
      if (other.attributes["name"] === tag.attributes["name"]) {
        return i;
      } else if (other.attributes["http-equiv"] === tag.attributes["http-equiv"]) {
        return i;
      } else if (other.attributes["charset"] === tag.attributes["charset"]) {
        return i;
      } else {
        continue;
      }
    } else if (other.tag === tag.tag) {
      return i;
    }
  }

  return null;
};

const META_ATTRIBUTES = ["charset", "content", "http-equiv", "name"];

export const mergeHead = (h1: HTMLElement, h2: HTMLElement): HTMLElement => {
  if (h1.tag !== "head" || h2.tag !== "head") {
    throw new Error("Both elements must be <head> tags");
  }

  const children: Array<Child> = [...h2.children];
  for (const child of h1.children) {
    // this should never happen
    if (typeof child === "string") {
      continue;
    }

    const sameTag = findSameHeadTag(child, children as Array<TagBase>);
    if (sameTag !== null) {
      children[sameTag] = child;
    } else {
      children.push(child);
    }
  }

  return new HTMLElement("head", { ...h1.attributes, ...h2.attributes }, ...children);
};
