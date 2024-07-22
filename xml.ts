export type XMLAttributes = Record<string, string | boolean>;

export interface XMLType {
  readonly tag: string;
  readonly attributes: XMLAttributes;
}

export class XMLElement implements XMLType {
  readonly tag: string;
  readonly attributes: XMLAttributes;
  readonly children: Array<XMLElement | string>;

  constructor(tag: string, attributes: XMLAttributes, children: Array<XMLElement | string>) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }
}

export class VoidXMLElement implements XMLType {
  readonly tag: string;
  readonly attributes: XMLAttributes;

  constructor(tag: string, attributes: XMLAttributes) {
    this.tag = tag;
    this.attributes = attributes;
  }
}

export class XMLDoctype {
  readonly tag = `<?xml version="1.0" encoding="utf-8"?>`;
}

export class XMLDocument {
  readonly docType: XMLDoctype;
  readonly children: Array<XMLElement>;

  constructor(docType: XMLDoctype, children: Array<XMLElement>) {
    this.docType = docType;
    this.children = children;
  }
}
