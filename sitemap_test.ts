import { describe, it } from "jsr:@std/testing/bdd";
import { s } from "./sitemap.ts";
import { assertEquals } from "jsr:@std/assert";
import { renderXMLDocument } from "./render_xml.ts";

describe("sitemap", () => {
  it("works", () => {
    const sitemap = s.document(
      s.urlset(
        s.url("https://example.com"),
        s.url("https://example.com/about"),
        s.url("https://example.com/contact"),
      ),
    );

    assertEquals(
      renderXMLDocument(sitemap),
      `<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com</loc></url><url><loc>https://example.com/about</loc></url><url><loc>https://example.com/contact</loc></url></urlset>`,
    );
  });

  it("sitemap index", () => {
    const sitemap = s.document(
      s.sitemapindex(
        s.sitemap("https://example.com/sitemap1.xml"),
        s.sitemap("https://example.com/sitemap2.xml"),
      ),
    );

    assertEquals(
      renderXMLDocument(sitemap),
      `<?xml version="1.0" encoding="utf-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://example.com/sitemap1.xml</loc></sitemap><sitemap><loc>https://example.com/sitemap2.xml</loc></sitemap></sitemapindex>`,
    );
  });
});
