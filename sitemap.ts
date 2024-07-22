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

type UrlSetAttributes = XMLAttributes & {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9";
  [key: `xmlns:${string}`]: string;
  [key: `xsi:${string}`]: string;
};

type LocElement = XMLElement<"loc", XMLAttributes, string>;
type LastModElement = XMLElement<"lastmod", XMLAttributes, string>;
type ChangeFreqElement = XMLElement<"changefreq", XMLAttributes, string>;
type PriorityElement = XMLElement<"priority", XMLAttributes, string>;
type UrlElement = XMLElement<"url", XMLAttributes, LocElement | LastModElement | ChangeFreqElement | PriorityElement>;

type UrlSetElement = XMLElement<"urlset", UrlSetAttributes, UrlElement>;

type SitemapElement = XMLElement<"sitemap", XMLAttributes, LocElement | LastModElement>;
type SitemapIndexElement = XMLElement<"sitemapindex", UrlSetAttributes, SitemapElement>;

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

export const sitemap = {
  document: document,
  doctype: () => xmlDoctype,
  stylesheet: xmlStylesheet,
  urlset: urlsetElement,
  url: urlElement,
  loc: locElement,
  lastmod: lastModElement,
  changefreq: changeFreqElement,
  priority: priorityElement,
  sitemapindex: sitemapIndexElement,
  sitemap: sitemapElement,
};

export const s = sitemap;
