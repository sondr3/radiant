type XMLAttributes = Record<string, string | boolean>;
type AllXMLChildren = SitemapElements | XMLDeclarationType | XMLStyleSheet;
interface XMLType<T, A> {
	readonly tag: T;
	readonly attributes: A;
}
declare class XMLElement<T, A, C> implements XMLType<T, A> {
	readonly tag: T;
	readonly attributes: A;
	readonly children: Array<C | string>;
	constructor(tag: T, attributes: A, children: Array<C | string>);
}
declare class XMLDeclaration<T extends string, A extends XMLAttributes> implements XMLType<T, A> {
	readonly tag: T;
	readonly attributes: A;
	constructor(tag: T, attributes: A);
}
type XMLDeclarationType = XMLDeclaration<
	"xml",
	{
		version: string;
		encoding: string;
	}
>;
type XMLStyleSheet = XMLDeclaration<
	"xml-stylesheet",
	{
		href: string;
		type: string;
	}
>;
declare class XMLDocument {
	readonly children: Array<AllXMLChildren>;
	constructor(doctype: XMLDeclarationType, children: Array<AllXMLChildren>);
}
/**
 * This module provides functions for rendering XML elements and documents to strings.
 * @module
 */
/**
 * Renders an XML document as a string.
 *
 * @param doc - The XML document to render.
 * @returns The rendered XML document as a string.
 */
declare const renderDocument: (
	doc: XMLDocument,
	opts?: {
		pretty: boolean;
	},
) => string;
/**
 * A type-safe builder for XML elements in a sitemap.
 *
 * ```ts
 * import { renderSitemap, s } from "jsr:@sondr3/radiant/sitemap";
 *
 * const sitemap = s.document(
 *   s.doctype(),
 *   s.urlset(
 *     s.url(
 *       s.loc("http://www.example.com/"),
 *       s.lastmod(new Date("2005-01-01")),
 *       s.changefreq("monthly"),
 *       s.priority(0.8),
 *     ),
 *     s.url(
 *       s.loc("http://www.example.com/catalog?item=73&desc=vacation_new_zealand"),
 *       s.lastmod(new Date("2004-12-23")),
 *       s.changefreq("weekly"),
 *     ),
 *     s.url(
 *       s.loc("http://www.example.com/catalog?item=74&desc=vacation_newfoundland"),
 *       s.lastmod(new Date("2004-12-23T18:00:15Z")),
 *       s.priority(0.3),
 *     ),
 *   ),
 * );
 *
 * console.log(renderSitemap(sitemap, { pretty: true }));
 * ```
 *
 * @module
 */
type UrlSetAttributes = XMLAttributes & {
	xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9";
	[key: `<xmlns:${string}`]: string;
	[key: `<xsi:${string}`]: string;
};
type LocElement = XMLElement<"loc", XMLAttributes, string>;
type LastModElement = XMLElement<"lastmod", XMLAttributes, string>;
type ChangeFreqElement = XMLElement<"changefreq", XMLAttributes, string>;
type PriorityElement = XMLElement<"priority", XMLAttributes, string>;
type UrlElement = XMLElement<"url", XMLAttributes, LocElement | LastModElement | ChangeFreqElement | PriorityElement>;
type UrlSetElement = XMLElement<"urlset", UrlSetAttributes, UrlElement>;
type SitemapElement = XMLElement<"sitemap", XMLAttributes, LocElement | LastModElement>;
type SitemapIndexElement = XMLElement<"sitemapindex", UrlSetAttributes, SitemapElement>;
/**
 * Represents the possible XML elements that can be included in a sitemap.
 */
type SitemapElements =
	| LocElement
	| LastModElement
	| ChangeFreqElement
	| PriorityElement
	| UrlElement
	| UrlSetElement
	| SitemapElement
	| SitemapIndexElement;
declare function urlsetElement(...children: Array<UrlElement>): UrlSetElement;
declare function urlsetElement(attributes: UrlSetAttributes, ...children: Array<UrlElement>): UrlSetElement;
type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
declare function locElement(loc: string): LocElement;
declare function lastModElement(date: Date): LastModElement;
declare function changeFreqElement(freq: ChangeFreq): ChangeFreqElement;
declare function priorityElement(priority: number): PriorityElement;
declare function urlElement(
	...children: Array<LocElement | LastModElement | ChangeFreqElement | PriorityElement>
): UrlElement;
declare function sitemapIndexElement(...children: Array<SitemapElement>): SitemapIndexElement;
declare function sitemapIndexElement(
	attributes: UrlSetAttributes,
	...children: Array<SitemapElement>
): SitemapIndexElement;
declare function sitemapElement(...children: Array<LocElement | LastModElement>): SitemapElement;
/**
 * A type-safe builder for XML elements in a sitemap.
 */
declare const sitemap: {
	/** A type-safe builder for the `<document>` element */
	document: (
		doctype: XMLDeclarationType,
		...children: Array<UrlSetElement | SitemapIndexElement | XMLStyleSheet>
	) => XMLDocument;
	/** A type-safe builder for the `<doctype>` element */
	doctype: () => XMLDeclarationType;
	/** A type-safe builder for the `<stylesheet>` element */
	stylesheet: (href: string, type: string) => XMLStyleSheet;
	/** A type-safe builder for the `<urlset>` element */
	urlset: typeof urlsetElement;
	/** A type-safe builder for the `<url>` element */
	url: typeof urlElement;
	/** A type-safe builder for the `<loc>` element */
	loc: typeof locElement;
	/** A type-safe builder for the `<lastmod>` element */
	lastmod: typeof lastModElement;
	/** A type-safe builder for the `<changefreq>` element */
	changefreq: typeof changeFreqElement;
	/** A type-safe builder for the `<priority>` element */
	priority: typeof priorityElement;
	/** A type-safe builder for the `<sitemapindex>` element */
	sitemapindex: typeof sitemapIndexElement;
	/** A type-safe builder for the `<sitemap>` element */
	sitemap: typeof sitemapElement;
};
/**
 * A type-safe builder for XML elements in a sitemap.
 */
declare const s: {
	/** A type-safe builder for the `<document>` element */
	document: (
		doctype: XMLDeclarationType,
		...children: Array<UrlSetElement | SitemapIndexElement | XMLStyleSheet>
	) => XMLDocument;
	/** A type-safe builder for the `<doctype>` element */
	doctype: () => XMLDeclarationType;
	/** A type-safe builder for the `<stylesheet>` element */
	stylesheet: (href: string, type: string) => XMLStyleSheet;
	/** A type-safe builder for the `<urlset>` element */
	urlset: typeof urlsetElement;
	/** A type-safe builder for the `<url>` element */
	url: typeof urlElement;
	/** A type-safe builder for the `<loc>` element */
	loc: typeof locElement;
	/** A type-safe builder for the `<lastmod>` element */
	lastmod: typeof lastModElement;
	/** A type-safe builder for the `<changefreq>` element */
	changefreq: typeof changeFreqElement;
	/** A type-safe builder for the `<priority>` element */
	priority: typeof priorityElement;
	/** A type-safe builder for the `<sitemapindex>` element */
	sitemapindex: typeof sitemapIndexElement;
	/** A type-safe builder for the `<sitemap>` element */
	sitemap: typeof sitemapElement;
};

export { type SitemapElements, renderDocument as renderSitemap, s, sitemap };
