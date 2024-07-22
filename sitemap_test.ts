import { describe, it } from "jsr:@std/testing/bdd";
import { s } from "./sitemap.ts";
import { assertEquals } from "jsr:@std/assert";
import { renderXMLDocument } from "./render_xml.ts";

describe("sitemap", () => {
  it("works", () => {
    const sitemap = s.document(
      s.urlset(
        s.url(s.loc("https://example.com")),
        s.url(s.loc("https://example.com/about")),
        s.url(s.loc("https://example.com/contact")),
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
        s.sitemap(s.loc("https://example.com/sitemap1.xml")),
        s.sitemap(s.loc("https://example.com/sitemap2.xml")),
      ),
    );

    assertEquals(
      renderXMLDocument(sitemap),
      `<?xml version="1.0" encoding="utf-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://example.com/sitemap1.xml</loc></sitemap><sitemap><loc>https://example.com/sitemap2.xml</loc></sitemap></sitemapindex>`,
    );
  });

  it("sample works", () => {
    const sitemap = s.document(
      s.urlset(
        s.url(
          s.loc("http://www.example.com/"),
          s.lastmod(new Date("2005-01-01")),
          s.changefreq("monthly"),
          s.priority(0.8),
        ),
        s.url(
          s.loc("http://www.example.com/catalog?item=12&desc=vacation_hawaii"),
          s.changefreq("weekly"),
        ),
        s.url(
          s.loc("http://www.example.com/catalog?item=73&desc=vacation_new_zealand"),
          s.lastmod(new Date("2004-12-23")),
          s.changefreq("weekly"),
        ),
        s.url(
          s.loc("http://www.example.com/catalog?item=74&desc=vacation_newfoundland"),
          s.lastmod(new Date("2004-12-23T18:00:15Z")),
          s.priority(0.3),
        ),
        s.url(
          s.loc("http://www.example.com/catalog?item=83&desc=vacation_usa"),
          s.lastmod(new Date("2004-11-23")),
        ),
      ),
    );

    assertEquals(
      renderXMLDocument(sitemap),
      `<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>http://www.example.com/</loc><lastmod>2005-01-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url><url><loc>http://www.example.com/catalog?item=12&amp;desc=vacation_hawaii</loc><changefreq>weekly</changefreq></url><url><loc>http://www.example.com/catalog?item=73&amp;desc=vacation_new_zealand</loc><lastmod>2004-12-23</lastmod><changefreq>weekly</changefreq></url><url><loc>http://www.example.com/catalog?item=74&amp;desc=vacation_newfoundland</loc><lastmod>2004-12-23</lastmod><priority>0.3</priority></url><url><loc>http://www.example.com/catalog?item=83&amp;desc=vacation_usa</loc><lastmod>2004-11-23</lastmod></url></urlset>`,
    );
  });

  it("sitemap index sample works", () => {
    const sitemap = s.document(
      s.sitemapindex(
        s.sitemap(
          s.loc("http://www.example.com/sitemap1.xml.gz"),
          s.lastmod(new Date("2004-10-01T18:23:17Z")),
        ),
        s.sitemap(
          s.loc("http://www.example.com/sitemap2.xml.gz"),
          s.lastmod(new Date("2005-01-01")),
        ),
      ),
    );

    assertEquals(
      renderXMLDocument(sitemap),
      `<?xml version="1.0" encoding="utf-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>http://www.example.com/sitemap1.xml.gz</loc><lastmod>2004-10-01</lastmod></sitemap><sitemap><loc>http://www.example.com/sitemap2.xml.gz</loc><lastmod>2005-01-01</lastmod></sitemap></sitemapindex>`,
    );
  });
});
