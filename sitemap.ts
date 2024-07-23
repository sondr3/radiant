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

import {
  type XMLAttributes,
  type XMLDeclarationType,
  xmlDoctype,
  XMLDocument,
  XMLElement,
  type XMLStyleSheet,
  xmlStylesheet,
} from "./xml.ts";
import { format } from "@std/datetime";
export { renderXMLDocument as renderSitemap } from "./render_xml.ts";

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
export type SitemapElements =
  | LocElement
  | LastModElement
  | ChangeFreqElement
  | PriorityElement
  | UrlElement
  | UrlSetElement
  | SitemapElement
  | SitemapIndexElement;

const BaseAttributes: UrlSetAttributes = { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" };

function urlsetElement(...children: Array<UrlElement>): UrlSetElement;
function urlsetElement(attributes: UrlSetAttributes, ...children: Array<UrlElement>): UrlSetElement;
function urlsetElement(
  attrsOrChild: UrlSetAttributes | UrlElement | Array<UrlElement>,
  ...children: Array<UrlElement>
): UrlSetElement {
  if (attrsOrChild instanceof XMLElement) {
    return new XMLElement("urlset", BaseAttributes, [attrsOrChild, ...children]);
  } else if (Array.isArray(attrsOrChild)) {
    return new XMLElement("urlset", BaseAttributes, [...attrsOrChild, ...children]);
  }

  return new XMLElement("urlset", { ...BaseAttributes, ...attrsOrChild }, children);
}

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

function locElement(loc: string): LocElement {
  return new XMLElement("loc", {}, [loc]);
}

function lastModElement(date: Date): LastModElement {
  return new XMLElement("lastmod", {}, [format(date, "yyyy-MM-dd")]);
}

function changeFreqElement(freq: ChangeFreq): ChangeFreqElement {
  return new XMLElement("changefreq", {}, [freq]);
}

function priorityElement(priority: number): PriorityElement {
  return new XMLElement("priority", {}, [priority.toString()]);
}

function urlElement(...children: Array<LocElement | LastModElement | ChangeFreqElement | PriorityElement>): UrlElement {
  return new XMLElement("url", {}, children);
}

function sitemapIndexElement(...children: Array<SitemapElement>): SitemapIndexElement;
function sitemapIndexElement(attributes: UrlSetAttributes, ...children: Array<SitemapElement>): SitemapIndexElement;
function sitemapIndexElement(
  attrsOrChild: UrlSetAttributes | SitemapElement | Array<SitemapElement>,
  ...children: Array<SitemapElement>
): SitemapIndexElement {
  if (attrsOrChild instanceof XMLElement) {
    return new XMLElement("sitemapindex", BaseAttributes, [attrsOrChild, ...children]);
  } else if (Array.isArray(attrsOrChild)) {
    return new XMLElement("sitemapindex", BaseAttributes, [...attrsOrChild, ...children]);
  }

  return new XMLElement("sitemapindex", { ...BaseAttributes, ...attrsOrChild }, children);
}

function sitemapElement(...children: Array<LocElement | LastModElement>): SitemapElement {
  return new XMLElement("sitemap", {}, children);
}

const document = (
  doctype: XMLDeclarationType,
  ...children: Array<UrlSetElement | SitemapIndexElement | XMLStyleSheet>
): XMLDocument => {
  return new XMLDocument(doctype, children);
};

/**
 * A type-safe builder for XML elements in a sitemap.
 */
export const sitemap = {
  /** A type-safe builder for the `<document>` element */
  document: document,

  /** A type-safe builder for the `<doctype>` element */
  doctype: () => xmlDoctype,

  /** A type-safe builder for the `<stylesheet>` element */
  stylesheet: xmlStylesheet,

  /** A type-safe builder for the `<urlset>` element */
  urlset: urlsetElement,

  /** A type-safe builder for the `<url>` element */
  url: urlElement,

  /** A type-safe builder for the `<loc>` element */
  loc: locElement,

  /** A type-safe builder for the `<lastmod>` element */
  lastmod: lastModElement,

  /** A type-safe builder for the `<changefreq>` element */
  changefreq: changeFreqElement,

  /** A type-safe builder for the `<priority>` element */
  priority: priorityElement,

  /** A type-safe builder for the `<sitemapindex>` element */
  sitemapindex: sitemapIndexElement,

  /** A type-safe builder for the `<sitemap>` element */
  sitemap: sitemapElement,
};

/**
 * A type-safe builder for XML elements in a sitemap.
 */
export const s = sitemap;
