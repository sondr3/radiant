import type { SitemapElements } from "./sitemap.ts";

export type XMLAttributes = Record<string, string | boolean>;

type AllXMLChildren = SitemapElements;

export interface XMLType<T, A> {
  readonly tag: T;
  readonly attributes: A;
}

export class XMLElement<T, A, C> implements XMLType<T, A> {
  readonly tag: T;
  readonly attributes: A;
  readonly children: Array<C | string>;

  constructor(tag: T, attributes: A, children: Array<C | string>) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }
}

export class VoidXMLElement<T extends string, A extends Record<string, string>> implements XMLType<T, A> {
  readonly tag: T;
  readonly attributes: A;

  constructor(tag: T, attributes: A) {
    this.tag = tag;
    this.attributes = attributes;
  }
}

export class XMLDoctype {
  readonly tag: string = `<?xml version="1.0" encoding="utf-8"?>`;
}

export class XMLDocument {
  readonly docType: XMLDoctype;
  readonly children: Array<AllXMLChildren>;

  constructor(docType: XMLDoctype, children: Array<AllXMLChildren>) {
    this.docType = docType;
    this.children = children;
  }
}
