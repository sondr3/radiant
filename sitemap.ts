import { type XMLAttributes, XMLDoctype, XMLDocument, XMLElement } from "./xml.ts";

const BaseAttributes: XMLAttributes = { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" };

function urlsetElement(...children: Array<XMLElement>): XMLElement;
function urlsetElement(attributes: XMLAttributes, ...children: Array<XMLElement>): XMLElement;
function urlsetElement(
  attrsOrChild: XMLAttributes | XMLElement | Array<XMLElement>,
  ...children: Array<XMLElement>
): XMLElement {
  if (attrsOrChild instanceof XMLElement) {
    return new XMLElement("urlset", BaseAttributes, [attrsOrChild, ...children]);
  } else if (Array.isArray(attrsOrChild)) {
    return new XMLElement("urlset", BaseAttributes, [...attrsOrChild, ...children]);
  }

  return new XMLElement("urlset", { ...BaseAttributes, ...attrsOrChild }, children);
}

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

function urlElement(
  loc: string,
  lastModified?: Date,
  changeFreq?: ChangeFreq,
  priority?: number,
  attributes?: XMLAttributes,
): XMLElement {
  const children = [new XMLElement("loc", {}, [loc])];

  if (lastModified) {
    children.push(new XMLElement("lastmod", {}, [lastModified.toISOString()]));
  }

  if (changeFreq) {
    children.push(new XMLElement("changefreq", {}, [changeFreq]));
  }

  if (priority) {
    children.push(new XMLElement("priority", {}, [priority.toString()]));
  }

  return new XMLElement("url", { ...attributes }, children);
}

function sitemapIndexElement(...children: Array<XMLElement>): XMLElement;
function sitemapIndexElement(attributes: XMLAttributes, ...children: Array<XMLElement>): XMLElement;
function sitemapIndexElement(
  attrsOrChild: XMLAttributes | XMLElement | Array<XMLElement>,
  ...children: Array<XMLElement>
): XMLElement {
  if (attrsOrChild instanceof XMLElement) {
    return new XMLElement("sitemapindex", BaseAttributes, [attrsOrChild, ...children]);
  } else if (Array.isArray(attrsOrChild)) {
    return new XMLElement("sitemapindex", BaseAttributes, [...attrsOrChild, ...children]);
  }

  return new XMLElement("sitemapindex", { ...BaseAttributes, ...attrsOrChild }, children);
}

function sitemapElement(loc: string, lastMod?: Date): XMLElement {
  const children = [new XMLElement("loc", {}, [loc])];

  if (lastMod) {
    children.push(new XMLElement("lastmod", {}, [lastMod.toISOString()]));
  }

  return new XMLElement("sitemap", {}, children);
}

const document = (...children: Array<XMLElement>): XMLDocument => {
  return new XMLDocument(new XMLDoctype(), children);
};

export const sitemap = {
  document: document,
  urlset: urlsetElement,
  url: urlElement,
  sitemapindex: sitemapIndexElement,
  sitemap: sitemapElement,
};

export const s = sitemap;
