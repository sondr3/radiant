import type { SitemapElements } from "./sitemap.js";

export type XMLAttributes = Record<string, string | boolean>;

type AllXMLChildren = SitemapElements | XMLDeclarationType | XMLStyleSheet;

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

export class VoidXMLElement<T extends string, A extends XMLAttributes> implements XMLType<T, A> {
	readonly tag: T;
	readonly attributes: A;

	constructor(tag: T, attributes: A) {
		this.tag = tag;
		this.attributes = attributes;
	}
}

export class XMLDeclaration<T extends string, A extends XMLAttributes> implements XMLType<T, A> {
	readonly tag: T;
	readonly attributes: A;

	constructor(tag: T, attributes: A) {
		this.tag = tag;
		this.attributes = attributes;
	}
}

export type XMLDeclarationType = XMLDeclaration<"xml", { version: string; encoding: string }>;
export const xmlDoctype: XMLDeclarationType = new XMLDeclaration("xml", { version: "1.0", encoding: "utf-8" });

export type XMLStyleSheet = XMLDeclaration<"xml-stylesheet", { href: string; type: string }>;
export const xmlStylesheet = (href: string, type: string): XMLStyleSheet =>
	new XMLDeclaration("xml-stylesheet", { href, type });

export class XMLDocument {
	readonly children: Array<AllXMLChildren>;

	constructor(doctype: XMLDeclarationType, children: Array<AllXMLChildren>) {
		this.children = [doctype, ...children];
	}
}
