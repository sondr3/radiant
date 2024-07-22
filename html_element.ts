import type { AllChildren } from "./content_categories.ts";
import type { ELEMENT_MAP } from "./elements.ts";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

const isHTMLElement = <T extends HTMLTag, A, C extends AllChildren>(obj: unknown): obj is BaseHTMLElement<T, A, C> => {
  return obj instanceof BaseHTMLElement;
};

const isVoidHTMLElement = <T extends Extract<HTMLTag, VoidHTMLTag>, A>(
  obj: unknown,
): obj is VoidBaseHTMLElement<T, A> => {
  return obj instanceof VoidBaseHTMLElement;
};

export interface HTMLElement<T extends HTMLTag, A, C> {
  readonly tag: T;
  readonly attributes: A;
  readonly children: Array<C>;
}

export class BaseHTMLElement<T extends HTMLTag, A, C> implements HTMLElement<T, A, C> {
  readonly tag: T;
  readonly attributes: A;
  readonly children: Array<C>;

  constructor(tag: T, attributes: A, children: Array<C>) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }
}

export class HTMLElementFactory {
  static create<T extends HTMLTag, A, C>(
    tag: T,
    attributes: string | A | C | Array<C>,
    children: Array<C>,
  ): BaseHTMLElement<T, A, C> {
    if (typeof attributes === "string" || isHTMLElement(attributes) || isVoidHTMLElement(attributes)) {
      return new BaseHTMLElement(tag, {} as A, [attributes as unknown as C, ...children]);
    }

    if (Array.isArray(attributes)) {
      return new BaseHTMLElement(tag, {} as A, [...attributes, ...children]);
    }

    return new BaseHTMLElement(tag, attributes as A, children);
  }
}

export interface VoidHTMLElement<T extends Extract<HTMLTag, VoidHTMLTag>, A> {
  readonly tag: T;
  readonly attributes: A;
}

export class VoidBaseHTMLElement<T extends Extract<HTMLTag, VoidHTMLTag>, A> implements VoidHTMLElement<T, A> {
  readonly tag: T;
  readonly attributes: A;

  constructor(tag: T, attributes: A) {
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
  readonly children: Array<Omit<AllChildren, "string"> | ELEMENT_MAP["html"]>;

  constructor(doctype: Doctype, ...children: Array<AllChildren | ELEMENT_MAP["html"]>) {
    this.doctype = doctype;
    this.children = children;
  }
}
