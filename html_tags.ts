// deno-fmt-ignore-file
// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See tag-generator.ts to make changes.
import { type Children, type Child, type HTMLAttributes, HTMLElement, HTMLDocument, VoidHTMLElement, Doctype } from "./html_element.ts";

export function document(doctype: Doctype, ...children: Array<HTMLElement<"html">>): HTMLDocument {
  return new HTMLDocument(doctype, ...children);
}

export function doctype(): Doctype {
  return new Doctype();
}

export function html(...children: Children<"html">): HTMLElement<"html">;
export function html(attrs: HTMLAttributes, ...children: Children<"html">): HTMLElement<"html">;
export function html(childrenOrAttrs: Child<"html"> | HTMLAttributes, ...children: Children<"html">): HTMLElement<"html"> {
  return HTMLElement.create("html", childrenOrAttrs, ...children);
}

export function base(attrs: HTMLAttributes): VoidHTMLElement<"base"> {
  return new VoidHTMLElement("base", attrs);
}

export function head(...children: Children<"head">): HTMLElement<"head">;
export function head(attrs: HTMLAttributes, ...children: Children<"head">): HTMLElement<"head">;
export function head(childrenOrAttrs: Child<"head"> | HTMLAttributes, ...children: Children<"head">): HTMLElement<"head"> {
  return HTMLElement.create("head", childrenOrAttrs, ...children);
}

export function link(attrs: HTMLAttributes): VoidHTMLElement<"link"> {
  return new VoidHTMLElement("link", attrs);
}

export function meta(attrs: HTMLAttributes): VoidHTMLElement<"meta"> {
  return new VoidHTMLElement("meta", attrs);
}

export function style(...children: Children<"style">): HTMLElement<"style">;
export function style(attrs: HTMLAttributes, ...children: Children<"style">): HTMLElement<"style">;
export function style(childrenOrAttrs: Child<"style"> | HTMLAttributes, ...children: Children<"style">): HTMLElement<"style"> {
  return HTMLElement.create("style", childrenOrAttrs, ...children);
}

export function title(...children: Children<"title">): HTMLElement<"title">;
export function title(attrs: HTMLAttributes, ...children: Children<"title">): HTMLElement<"title">;
export function title(childrenOrAttrs: Child<"title"> | HTMLAttributes, ...children: Children<"title">): HTMLElement<"title"> {
  return HTMLElement.create("title", childrenOrAttrs, ...children);
}

export function body(...children: Children<"body">): HTMLElement<"body">;
export function body(attrs: HTMLAttributes, ...children: Children<"body">): HTMLElement<"body">;
export function body(childrenOrAttrs: Child<"body"> | HTMLAttributes, ...children: Children<"body">): HTMLElement<"body"> {
  return HTMLElement.create("body", childrenOrAttrs, ...children);
}

export function address(...children: Children<"address">): HTMLElement<"address">;
export function address(attrs: HTMLAttributes, ...children: Children<"address">): HTMLElement<"address">;
export function address(childrenOrAttrs: Child<"address"> | HTMLAttributes, ...children: Children<"address">): HTMLElement<"address"> {
  return HTMLElement.create("address", childrenOrAttrs, ...children);
}

export function article(...children: Children<"article">): HTMLElement<"article">;
export function article(attrs: HTMLAttributes, ...children: Children<"article">): HTMLElement<"article">;
export function article(childrenOrAttrs: Child<"article"> | HTMLAttributes, ...children: Children<"article">): HTMLElement<"article"> {
  return HTMLElement.create("article", childrenOrAttrs, ...children);
}

export function aside(...children: Children<"aside">): HTMLElement<"aside">;
export function aside(attrs: HTMLAttributes, ...children: Children<"aside">): HTMLElement<"aside">;
export function aside(childrenOrAttrs: Child<"aside"> | HTMLAttributes, ...children: Children<"aside">): HTMLElement<"aside"> {
  return HTMLElement.create("aside", childrenOrAttrs, ...children);
}

export function footer(...children: Children<"footer">): HTMLElement<"footer">;
export function footer(attrs: HTMLAttributes, ...children: Children<"footer">): HTMLElement<"footer">;
export function footer(childrenOrAttrs: Child<"footer"> | HTMLAttributes, ...children: Children<"footer">): HTMLElement<"footer"> {
  return HTMLElement.create("footer", childrenOrAttrs, ...children);
}

export function header(...children: Children<"header">): HTMLElement<"header">;
export function header(attrs: HTMLAttributes, ...children: Children<"header">): HTMLElement<"header">;
export function header(childrenOrAttrs: Child<"header"> | HTMLAttributes, ...children: Children<"header">): HTMLElement<"header"> {
  return HTMLElement.create("header", childrenOrAttrs, ...children);
}

export function h1(...children: Children<"h1">): HTMLElement<"h1">;
export function h1(attrs: HTMLAttributes, ...children: Children<"h1">): HTMLElement<"h1">;
export function h1(childrenOrAttrs: Child<"h1"> | HTMLAttributes, ...children: Children<"h1">): HTMLElement<"h1"> {
  return HTMLElement.create("h1", childrenOrAttrs, ...children);
}

export function h2(...children: Children<"h2">): HTMLElement<"h2">;
export function h2(attrs: HTMLAttributes, ...children: Children<"h2">): HTMLElement<"h2">;
export function h2(childrenOrAttrs: Child<"h2"> | HTMLAttributes, ...children: Children<"h2">): HTMLElement<"h2"> {
  return HTMLElement.create("h2", childrenOrAttrs, ...children);
}

export function h3(...children: Children<"h3">): HTMLElement<"h3">;
export function h3(attrs: HTMLAttributes, ...children: Children<"h3">): HTMLElement<"h3">;
export function h3(childrenOrAttrs: Child<"h3"> | HTMLAttributes, ...children: Children<"h3">): HTMLElement<"h3"> {
  return HTMLElement.create("h3", childrenOrAttrs, ...children);
}

export function h4(...children: Children<"h4">): HTMLElement<"h4">;
export function h4(attrs: HTMLAttributes, ...children: Children<"h4">): HTMLElement<"h4">;
export function h4(childrenOrAttrs: Child<"h4"> | HTMLAttributes, ...children: Children<"h4">): HTMLElement<"h4"> {
  return HTMLElement.create("h4", childrenOrAttrs, ...children);
}

export function h5(...children: Children<"h5">): HTMLElement<"h5">;
export function h5(attrs: HTMLAttributes, ...children: Children<"h5">): HTMLElement<"h5">;
export function h5(childrenOrAttrs: Child<"h5"> | HTMLAttributes, ...children: Children<"h5">): HTMLElement<"h5"> {
  return HTMLElement.create("h5", childrenOrAttrs, ...children);
}

export function h6(...children: Children<"h6">): HTMLElement<"h6">;
export function h6(attrs: HTMLAttributes, ...children: Children<"h6">): HTMLElement<"h6">;
export function h6(childrenOrAttrs: Child<"h6"> | HTMLAttributes, ...children: Children<"h6">): HTMLElement<"h6"> {
  return HTMLElement.create("h6", childrenOrAttrs, ...children);
}

export function hgroup(...children: Children<"hgroup">): HTMLElement<"hgroup">;
export function hgroup(attrs: HTMLAttributes, ...children: Children<"hgroup">): HTMLElement<"hgroup">;
export function hgroup(childrenOrAttrs: Child<"hgroup"> | HTMLAttributes, ...children: Children<"hgroup">): HTMLElement<"hgroup"> {
  return HTMLElement.create("hgroup", childrenOrAttrs, ...children);
}

export function main(...children: Children<"main">): HTMLElement<"main">;
export function main(attrs: HTMLAttributes, ...children: Children<"main">): HTMLElement<"main">;
export function main(childrenOrAttrs: Child<"main"> | HTMLAttributes, ...children: Children<"main">): HTMLElement<"main"> {
  return HTMLElement.create("main", childrenOrAttrs, ...children);
}

export function nav(...children: Children<"nav">): HTMLElement<"nav">;
export function nav(attrs: HTMLAttributes, ...children: Children<"nav">): HTMLElement<"nav">;
export function nav(childrenOrAttrs: Child<"nav"> | HTMLAttributes, ...children: Children<"nav">): HTMLElement<"nav"> {
  return HTMLElement.create("nav", childrenOrAttrs, ...children);
}

export function section(...children: Children<"section">): HTMLElement<"section">;
export function section(attrs: HTMLAttributes, ...children: Children<"section">): HTMLElement<"section">;
export function section(childrenOrAttrs: Child<"section"> | HTMLAttributes, ...children: Children<"section">): HTMLElement<"section"> {
  return HTMLElement.create("section", childrenOrAttrs, ...children);
}

export function search(...children: Children<"search">): HTMLElement<"search">;
export function search(attrs: HTMLAttributes, ...children: Children<"search">): HTMLElement<"search">;
export function search(childrenOrAttrs: Child<"search"> | HTMLAttributes, ...children: Children<"search">): HTMLElement<"search"> {
  return HTMLElement.create("search", childrenOrAttrs, ...children);
}

export function blockquote(...children: Children<"blockquote">): HTMLElement<"blockquote">;
export function blockquote(attrs: HTMLAttributes, ...children: Children<"blockquote">): HTMLElement<"blockquote">;
export function blockquote(childrenOrAttrs: Child<"blockquote"> | HTMLAttributes, ...children: Children<"blockquote">): HTMLElement<"blockquote"> {
  return HTMLElement.create("blockquote", childrenOrAttrs, ...children);
}

export function dd(...children: Children<"dd">): HTMLElement<"dd">;
export function dd(attrs: HTMLAttributes, ...children: Children<"dd">): HTMLElement<"dd">;
export function dd(childrenOrAttrs: Child<"dd"> | HTMLAttributes, ...children: Children<"dd">): HTMLElement<"dd"> {
  return HTMLElement.create("dd", childrenOrAttrs, ...children);
}

export function div(...children: Children<"div">): HTMLElement<"div">;
export function div(attrs: HTMLAttributes, ...children: Children<"div">): HTMLElement<"div">;
export function div(childrenOrAttrs: Child<"div"> | HTMLAttributes, ...children: Children<"div">): HTMLElement<"div"> {
  return HTMLElement.create("div", childrenOrAttrs, ...children);
}

export function dl(...children: Children<"dl">): HTMLElement<"dl">;
export function dl(attrs: HTMLAttributes, ...children: Children<"dl">): HTMLElement<"dl">;
export function dl(childrenOrAttrs: Child<"dl"> | HTMLAttributes, ...children: Children<"dl">): HTMLElement<"dl"> {
  return HTMLElement.create("dl", childrenOrAttrs, ...children);
}

export function dt(...children: Children<"dt">): HTMLElement<"dt">;
export function dt(attrs: HTMLAttributes, ...children: Children<"dt">): HTMLElement<"dt">;
export function dt(childrenOrAttrs: Child<"dt"> | HTMLAttributes, ...children: Children<"dt">): HTMLElement<"dt"> {
  return HTMLElement.create("dt", childrenOrAttrs, ...children);
}

export function figcaption(...children: Children<"figcaption">): HTMLElement<"figcaption">;
export function figcaption(attrs: HTMLAttributes, ...children: Children<"figcaption">): HTMLElement<"figcaption">;
export function figcaption(childrenOrAttrs: Child<"figcaption"> | HTMLAttributes, ...children: Children<"figcaption">): HTMLElement<"figcaption"> {
  return HTMLElement.create("figcaption", childrenOrAttrs, ...children);
}

export function figure(...children: Children<"figure">): HTMLElement<"figure">;
export function figure(attrs: HTMLAttributes, ...children: Children<"figure">): HTMLElement<"figure">;
export function figure(childrenOrAttrs: Child<"figure"> | HTMLAttributes, ...children: Children<"figure">): HTMLElement<"figure"> {
  return HTMLElement.create("figure", childrenOrAttrs, ...children);
}

export function hr(attrs: HTMLAttributes): VoidHTMLElement<"hr"> {
  return new VoidHTMLElement("hr", attrs);
}

export function li(...children: Children<"li">): HTMLElement<"li">;
export function li(attrs: HTMLAttributes, ...children: Children<"li">): HTMLElement<"li">;
export function li(childrenOrAttrs: Child<"li"> | HTMLAttributes, ...children: Children<"li">): HTMLElement<"li"> {
  return HTMLElement.create("li", childrenOrAttrs, ...children);
}

export function menu(...children: Children<"menu">): HTMLElement<"menu">;
export function menu(attrs: HTMLAttributes, ...children: Children<"menu">): HTMLElement<"menu">;
export function menu(childrenOrAttrs: Child<"menu"> | HTMLAttributes, ...children: Children<"menu">): HTMLElement<"menu"> {
  return HTMLElement.create("menu", childrenOrAttrs, ...children);
}

export function ol(...children: Children<"ol">): HTMLElement<"ol">;
export function ol(attrs: HTMLAttributes, ...children: Children<"ol">): HTMLElement<"ol">;
export function ol(childrenOrAttrs: Child<"ol"> | HTMLAttributes, ...children: Children<"ol">): HTMLElement<"ol"> {
  return HTMLElement.create("ol", childrenOrAttrs, ...children);
}

export function p(...children: Children<"p">): HTMLElement<"p">;
export function p(attrs: HTMLAttributes, ...children: Children<"p">): HTMLElement<"p">;
export function p(childrenOrAttrs: Child<"p"> | HTMLAttributes, ...children: Children<"p">): HTMLElement<"p"> {
  return HTMLElement.create("p", childrenOrAttrs, ...children);
}

export function pre(...children: Children<"pre">): HTMLElement<"pre">;
export function pre(attrs: HTMLAttributes, ...children: Children<"pre">): HTMLElement<"pre">;
export function pre(childrenOrAttrs: Child<"pre"> | HTMLAttributes, ...children: Children<"pre">): HTMLElement<"pre"> {
  return HTMLElement.create("pre", childrenOrAttrs, ...children);
}

export function ul(...children: Children<"ul">): HTMLElement<"ul">;
export function ul(attrs: HTMLAttributes, ...children: Children<"ul">): HTMLElement<"ul">;
export function ul(childrenOrAttrs: Child<"ul"> | HTMLAttributes, ...children: Children<"ul">): HTMLElement<"ul"> {
  return HTMLElement.create("ul", childrenOrAttrs, ...children);
}

export function a(...children: Children<"a">): HTMLElement<"a">;
export function a(attrs: HTMLAttributes, ...children: Children<"a">): HTMLElement<"a">;
export function a(childrenOrAttrs: Child<"a"> | HTMLAttributes, ...children: Children<"a">): HTMLElement<"a"> {
  return HTMLElement.create("a", childrenOrAttrs, ...children);
}

export function abbr(...children: Children<"abbr">): HTMLElement<"abbr">;
export function abbr(attrs: HTMLAttributes, ...children: Children<"abbr">): HTMLElement<"abbr">;
export function abbr(childrenOrAttrs: Child<"abbr"> | HTMLAttributes, ...children: Children<"abbr">): HTMLElement<"abbr"> {
  return HTMLElement.create("abbr", childrenOrAttrs, ...children);
}

export function b(...children: Children<"b">): HTMLElement<"b">;
export function b(attrs: HTMLAttributes, ...children: Children<"b">): HTMLElement<"b">;
export function b(childrenOrAttrs: Child<"b"> | HTMLAttributes, ...children: Children<"b">): HTMLElement<"b"> {
  return HTMLElement.create("b", childrenOrAttrs, ...children);
}

export function bdi(...children: Children<"bdi">): HTMLElement<"bdi">;
export function bdi(attrs: HTMLAttributes, ...children: Children<"bdi">): HTMLElement<"bdi">;
export function bdi(childrenOrAttrs: Child<"bdi"> | HTMLAttributes, ...children: Children<"bdi">): HTMLElement<"bdi"> {
  return HTMLElement.create("bdi", childrenOrAttrs, ...children);
}

export function bdo(...children: Children<"bdo">): HTMLElement<"bdo">;
export function bdo(attrs: HTMLAttributes, ...children: Children<"bdo">): HTMLElement<"bdo">;
export function bdo(childrenOrAttrs: Child<"bdo"> | HTMLAttributes, ...children: Children<"bdo">): HTMLElement<"bdo"> {
  return HTMLElement.create("bdo", childrenOrAttrs, ...children);
}

export function br(attrs: HTMLAttributes): VoidHTMLElement<"br"> {
  return new VoidHTMLElement("br", attrs);
}

export function cite(...children: Children<"cite">): HTMLElement<"cite">;
export function cite(attrs: HTMLAttributes, ...children: Children<"cite">): HTMLElement<"cite">;
export function cite(childrenOrAttrs: Child<"cite"> | HTMLAttributes, ...children: Children<"cite">): HTMLElement<"cite"> {
  return HTMLElement.create("cite", childrenOrAttrs, ...children);
}

export function code(...children: Children<"code">): HTMLElement<"code">;
export function code(attrs: HTMLAttributes, ...children: Children<"code">): HTMLElement<"code">;
export function code(childrenOrAttrs: Child<"code"> | HTMLAttributes, ...children: Children<"code">): HTMLElement<"code"> {
  return HTMLElement.create("code", childrenOrAttrs, ...children);
}

export function data(...children: Children<"data">): HTMLElement<"data">;
export function data(attrs: HTMLAttributes, ...children: Children<"data">): HTMLElement<"data">;
export function data(childrenOrAttrs: Child<"data"> | HTMLAttributes, ...children: Children<"data">): HTMLElement<"data"> {
  return HTMLElement.create("data", childrenOrAttrs, ...children);
}

export function dfn(...children: Children<"dfn">): HTMLElement<"dfn">;
export function dfn(attrs: HTMLAttributes, ...children: Children<"dfn">): HTMLElement<"dfn">;
export function dfn(childrenOrAttrs: Child<"dfn"> | HTMLAttributes, ...children: Children<"dfn">): HTMLElement<"dfn"> {
  return HTMLElement.create("dfn", childrenOrAttrs, ...children);
}

export function em(...children: Children<"em">): HTMLElement<"em">;
export function em(attrs: HTMLAttributes, ...children: Children<"em">): HTMLElement<"em">;
export function em(childrenOrAttrs: Child<"em"> | HTMLAttributes, ...children: Children<"em">): HTMLElement<"em"> {
  return HTMLElement.create("em", childrenOrAttrs, ...children);
}

export function i(...children: Children<"i">): HTMLElement<"i">;
export function i(attrs: HTMLAttributes, ...children: Children<"i">): HTMLElement<"i">;
export function i(childrenOrAttrs: Child<"i"> | HTMLAttributes, ...children: Children<"i">): HTMLElement<"i"> {
  return HTMLElement.create("i", childrenOrAttrs, ...children);
}

export function kbd(...children: Children<"kbd">): HTMLElement<"kbd">;
export function kbd(attrs: HTMLAttributes, ...children: Children<"kbd">): HTMLElement<"kbd">;
export function kbd(childrenOrAttrs: Child<"kbd"> | HTMLAttributes, ...children: Children<"kbd">): HTMLElement<"kbd"> {
  return HTMLElement.create("kbd", childrenOrAttrs, ...children);
}

export function mark(...children: Children<"mark">): HTMLElement<"mark">;
export function mark(attrs: HTMLAttributes, ...children: Children<"mark">): HTMLElement<"mark">;
export function mark(childrenOrAttrs: Child<"mark"> | HTMLAttributes, ...children: Children<"mark">): HTMLElement<"mark"> {
  return HTMLElement.create("mark", childrenOrAttrs, ...children);
}

export function q(...children: Children<"q">): HTMLElement<"q">;
export function q(attrs: HTMLAttributes, ...children: Children<"q">): HTMLElement<"q">;
export function q(childrenOrAttrs: Child<"q"> | HTMLAttributes, ...children: Children<"q">): HTMLElement<"q"> {
  return HTMLElement.create("q", childrenOrAttrs, ...children);
}

export function rp(...children: Children<"rp">): HTMLElement<"rp">;
export function rp(attrs: HTMLAttributes, ...children: Children<"rp">): HTMLElement<"rp">;
export function rp(childrenOrAttrs: Child<"rp"> | HTMLAttributes, ...children: Children<"rp">): HTMLElement<"rp"> {
  return HTMLElement.create("rp", childrenOrAttrs, ...children);
}

export function rt(...children: Children<"rt">): HTMLElement<"rt">;
export function rt(attrs: HTMLAttributes, ...children: Children<"rt">): HTMLElement<"rt">;
export function rt(childrenOrAttrs: Child<"rt"> | HTMLAttributes, ...children: Children<"rt">): HTMLElement<"rt"> {
  return HTMLElement.create("rt", childrenOrAttrs, ...children);
}

export function ruby(...children: Children<"ruby">): HTMLElement<"ruby">;
export function ruby(attrs: HTMLAttributes, ...children: Children<"ruby">): HTMLElement<"ruby">;
export function ruby(childrenOrAttrs: Child<"ruby"> | HTMLAttributes, ...children: Children<"ruby">): HTMLElement<"ruby"> {
  return HTMLElement.create("ruby", childrenOrAttrs, ...children);
}

export function s(...children: Children<"s">): HTMLElement<"s">;
export function s(attrs: HTMLAttributes, ...children: Children<"s">): HTMLElement<"s">;
export function s(childrenOrAttrs: Child<"s"> | HTMLAttributes, ...children: Children<"s">): HTMLElement<"s"> {
  return HTMLElement.create("s", childrenOrAttrs, ...children);
}

export function samp(...children: Children<"samp">): HTMLElement<"samp">;
export function samp(attrs: HTMLAttributes, ...children: Children<"samp">): HTMLElement<"samp">;
export function samp(childrenOrAttrs: Child<"samp"> | HTMLAttributes, ...children: Children<"samp">): HTMLElement<"samp"> {
  return HTMLElement.create("samp", childrenOrAttrs, ...children);
}

export function small(...children: Children<"small">): HTMLElement<"small">;
export function small(attrs: HTMLAttributes, ...children: Children<"small">): HTMLElement<"small">;
export function small(childrenOrAttrs: Child<"small"> | HTMLAttributes, ...children: Children<"small">): HTMLElement<"small"> {
  return HTMLElement.create("small", childrenOrAttrs, ...children);
}

export function span(...children: Children<"span">): HTMLElement<"span">;
export function span(attrs: HTMLAttributes, ...children: Children<"span">): HTMLElement<"span">;
export function span(childrenOrAttrs: Child<"span"> | HTMLAttributes, ...children: Children<"span">): HTMLElement<"span"> {
  return HTMLElement.create("span", childrenOrAttrs, ...children);
}

export function strong(...children: Children<"strong">): HTMLElement<"strong">;
export function strong(attrs: HTMLAttributes, ...children: Children<"strong">): HTMLElement<"strong">;
export function strong(childrenOrAttrs: Child<"strong"> | HTMLAttributes, ...children: Children<"strong">): HTMLElement<"strong"> {
  return HTMLElement.create("strong", childrenOrAttrs, ...children);
}

export function sub(...children: Children<"sub">): HTMLElement<"sub">;
export function sub(attrs: HTMLAttributes, ...children: Children<"sub">): HTMLElement<"sub">;
export function sub(childrenOrAttrs: Child<"sub"> | HTMLAttributes, ...children: Children<"sub">): HTMLElement<"sub"> {
  return HTMLElement.create("sub", childrenOrAttrs, ...children);
}

export function sup(...children: Children<"sup">): HTMLElement<"sup">;
export function sup(attrs: HTMLAttributes, ...children: Children<"sup">): HTMLElement<"sup">;
export function sup(childrenOrAttrs: Child<"sup"> | HTMLAttributes, ...children: Children<"sup">): HTMLElement<"sup"> {
  return HTMLElement.create("sup", childrenOrAttrs, ...children);
}

export function time(...children: Children<"time">): HTMLElement<"time">;
export function time(attrs: HTMLAttributes, ...children: Children<"time">): HTMLElement<"time">;
export function time(childrenOrAttrs: Child<"time"> | HTMLAttributes, ...children: Children<"time">): HTMLElement<"time"> {
  return HTMLElement.create("time", childrenOrAttrs, ...children);
}

export function u(...children: Children<"u">): HTMLElement<"u">;
export function u(attrs: HTMLAttributes, ...children: Children<"u">): HTMLElement<"u">;
export function u(childrenOrAttrs: Child<"u"> | HTMLAttributes, ...children: Children<"u">): HTMLElement<"u"> {
  return HTMLElement.create("u", childrenOrAttrs, ...children);
}

export function var_(...children: Children<"var">): HTMLElement<"var">;
export function var_(attrs: HTMLAttributes, ...children: Children<"var">): HTMLElement<"var">;
export function var_(childrenOrAttrs: Child<"var"> | HTMLAttributes, ...children: Children<"var">): HTMLElement<"var"> {
  return HTMLElement.create("var", childrenOrAttrs, ...children);
}

export function wbr(attrs: HTMLAttributes): VoidHTMLElement<"wbr"> {
  return new VoidHTMLElement("wbr", attrs);
}

export function area(attrs: HTMLAttributes): VoidHTMLElement<"area"> {
  return new VoidHTMLElement("area", attrs);
}

export function audio(...children: Children<"audio">): HTMLElement<"audio">;
export function audio(attrs: HTMLAttributes, ...children: Children<"audio">): HTMLElement<"audio">;
export function audio(childrenOrAttrs: Child<"audio"> | HTMLAttributes, ...children: Children<"audio">): HTMLElement<"audio"> {
  return HTMLElement.create("audio", childrenOrAttrs, ...children);
}

export function img(attrs: HTMLAttributes): VoidHTMLElement<"img"> {
  return new VoidHTMLElement("img", attrs);
}

export function map(...children: Children<"map">): HTMLElement<"map">;
export function map(attrs: HTMLAttributes, ...children: Children<"map">): HTMLElement<"map">;
export function map(childrenOrAttrs: Child<"map"> | HTMLAttributes, ...children: Children<"map">): HTMLElement<"map"> {
  return HTMLElement.create("map", childrenOrAttrs, ...children);
}

export function track(attrs: HTMLAttributes): VoidHTMLElement<"track"> {
  return new VoidHTMLElement("track", attrs);
}

export function video(...children: Children<"video">): HTMLElement<"video">;
export function video(attrs: HTMLAttributes, ...children: Children<"video">): HTMLElement<"video">;
export function video(childrenOrAttrs: Child<"video"> | HTMLAttributes, ...children: Children<"video">): HTMLElement<"video"> {
  return HTMLElement.create("video", childrenOrAttrs, ...children);
}

export function embed(attrs: HTMLAttributes): VoidHTMLElement<"embed"> {
  return new VoidHTMLElement("embed", attrs);
}

export function iframe(...children: Children<"iframe">): HTMLElement<"iframe">;
export function iframe(attrs: HTMLAttributes, ...children: Children<"iframe">): HTMLElement<"iframe">;
export function iframe(childrenOrAttrs: Child<"iframe"> | HTMLAttributes, ...children: Children<"iframe">): HTMLElement<"iframe"> {
  return HTMLElement.create("iframe", childrenOrAttrs, ...children);
}

export function object(...children: Children<"object">): HTMLElement<"object">;
export function object(attrs: HTMLAttributes, ...children: Children<"object">): HTMLElement<"object">;
export function object(childrenOrAttrs: Child<"object"> | HTMLAttributes, ...children: Children<"object">): HTMLElement<"object"> {
  return HTMLElement.create("object", childrenOrAttrs, ...children);
}

export function picture(...children: Children<"picture">): HTMLElement<"picture">;
export function picture(attrs: HTMLAttributes, ...children: Children<"picture">): HTMLElement<"picture">;
export function picture(childrenOrAttrs: Child<"picture"> | HTMLAttributes, ...children: Children<"picture">): HTMLElement<"picture"> {
  return HTMLElement.create("picture", childrenOrAttrs, ...children);
}

export function portal(...children: Children<"portal">): HTMLElement<"portal">;
export function portal(attrs: HTMLAttributes, ...children: Children<"portal">): HTMLElement<"portal">;
export function portal(childrenOrAttrs: Child<"portal"> | HTMLAttributes, ...children: Children<"portal">): HTMLElement<"portal"> {
  return HTMLElement.create("portal", childrenOrAttrs, ...children);
}

export function source(attrs: HTMLAttributes): VoidHTMLElement<"source"> {
  return new VoidHTMLElement("source", attrs);
}

export function svg(...children: Children<"svg">): HTMLElement<"svg">;
export function svg(attrs: HTMLAttributes, ...children: Children<"svg">): HTMLElement<"svg">;
export function svg(childrenOrAttrs: Child<"svg"> | HTMLAttributes, ...children: Children<"svg">): HTMLElement<"svg"> {
  return HTMLElement.create("svg", childrenOrAttrs, ...children);
}

export function math(...children: Children<"math">): HTMLElement<"math">;
export function math(attrs: HTMLAttributes, ...children: Children<"math">): HTMLElement<"math">;
export function math(childrenOrAttrs: Child<"math"> | HTMLAttributes, ...children: Children<"math">): HTMLElement<"math"> {
  return HTMLElement.create("math", childrenOrAttrs, ...children);
}

export function canvas(...children: Children<"canvas">): HTMLElement<"canvas">;
export function canvas(attrs: HTMLAttributes, ...children: Children<"canvas">): HTMLElement<"canvas">;
export function canvas(childrenOrAttrs: Child<"canvas"> | HTMLAttributes, ...children: Children<"canvas">): HTMLElement<"canvas"> {
  return HTMLElement.create("canvas", childrenOrAttrs, ...children);
}

export function noscript(...children: Children<"noscript">): HTMLElement<"noscript">;
export function noscript(attrs: HTMLAttributes, ...children: Children<"noscript">): HTMLElement<"noscript">;
export function noscript(childrenOrAttrs: Child<"noscript"> | HTMLAttributes, ...children: Children<"noscript">): HTMLElement<"noscript"> {
  return HTMLElement.create("noscript", childrenOrAttrs, ...children);
}

export function script(...children: Children<"script">): HTMLElement<"script">;
export function script(attrs: HTMLAttributes, ...children: Children<"script">): HTMLElement<"script">;
export function script(childrenOrAttrs: Child<"script"> | HTMLAttributes, ...children: Children<"script">): HTMLElement<"script"> {
  return HTMLElement.create("script", childrenOrAttrs, ...children);
}

export function del(...children: Children<"del">): HTMLElement<"del">;
export function del(attrs: HTMLAttributes, ...children: Children<"del">): HTMLElement<"del">;
export function del(childrenOrAttrs: Child<"del"> | HTMLAttributes, ...children: Children<"del">): HTMLElement<"del"> {
  return HTMLElement.create("del", childrenOrAttrs, ...children);
}

export function ins(...children: Children<"ins">): HTMLElement<"ins">;
export function ins(attrs: HTMLAttributes, ...children: Children<"ins">): HTMLElement<"ins">;
export function ins(childrenOrAttrs: Child<"ins"> | HTMLAttributes, ...children: Children<"ins">): HTMLElement<"ins"> {
  return HTMLElement.create("ins", childrenOrAttrs, ...children);
}

export function caption(...children: Children<"caption">): HTMLElement<"caption">;
export function caption(attrs: HTMLAttributes, ...children: Children<"caption">): HTMLElement<"caption">;
export function caption(childrenOrAttrs: Child<"caption"> | HTMLAttributes, ...children: Children<"caption">): HTMLElement<"caption"> {
  return HTMLElement.create("caption", childrenOrAttrs, ...children);
}

export function col(attrs: HTMLAttributes): VoidHTMLElement<"col"> {
  return new VoidHTMLElement("col", attrs);
}

export function colgroup(...children: Children<"colgroup">): HTMLElement<"colgroup">;
export function colgroup(attrs: HTMLAttributes, ...children: Children<"colgroup">): HTMLElement<"colgroup">;
export function colgroup(childrenOrAttrs: Child<"colgroup"> | HTMLAttributes, ...children: Children<"colgroup">): HTMLElement<"colgroup"> {
  return HTMLElement.create("colgroup", childrenOrAttrs, ...children);
}

export function table(...children: Children<"table">): HTMLElement<"table">;
export function table(attrs: HTMLAttributes, ...children: Children<"table">): HTMLElement<"table">;
export function table(childrenOrAttrs: Child<"table"> | HTMLAttributes, ...children: Children<"table">): HTMLElement<"table"> {
  return HTMLElement.create("table", childrenOrAttrs, ...children);
}

export function tbody(...children: Children<"tbody">): HTMLElement<"tbody">;
export function tbody(attrs: HTMLAttributes, ...children: Children<"tbody">): HTMLElement<"tbody">;
export function tbody(childrenOrAttrs: Child<"tbody"> | HTMLAttributes, ...children: Children<"tbody">): HTMLElement<"tbody"> {
  return HTMLElement.create("tbody", childrenOrAttrs, ...children);
}

export function td(...children: Children<"td">): HTMLElement<"td">;
export function td(attrs: HTMLAttributes, ...children: Children<"td">): HTMLElement<"td">;
export function td(childrenOrAttrs: Child<"td"> | HTMLAttributes, ...children: Children<"td">): HTMLElement<"td"> {
  return HTMLElement.create("td", childrenOrAttrs, ...children);
}

export function tfoot(...children: Children<"tfoot">): HTMLElement<"tfoot">;
export function tfoot(attrs: HTMLAttributes, ...children: Children<"tfoot">): HTMLElement<"tfoot">;
export function tfoot(childrenOrAttrs: Child<"tfoot"> | HTMLAttributes, ...children: Children<"tfoot">): HTMLElement<"tfoot"> {
  return HTMLElement.create("tfoot", childrenOrAttrs, ...children);
}

export function th(...children: Children<"th">): HTMLElement<"th">;
export function th(attrs: HTMLAttributes, ...children: Children<"th">): HTMLElement<"th">;
export function th(childrenOrAttrs: Child<"th"> | HTMLAttributes, ...children: Children<"th">): HTMLElement<"th"> {
  return HTMLElement.create("th", childrenOrAttrs, ...children);
}

export function thead(...children: Children<"thead">): HTMLElement<"thead">;
export function thead(attrs: HTMLAttributes, ...children: Children<"thead">): HTMLElement<"thead">;
export function thead(childrenOrAttrs: Child<"thead"> | HTMLAttributes, ...children: Children<"thead">): HTMLElement<"thead"> {
  return HTMLElement.create("thead", childrenOrAttrs, ...children);
}

export function tr(...children: Children<"tr">): HTMLElement<"tr">;
export function tr(attrs: HTMLAttributes, ...children: Children<"tr">): HTMLElement<"tr">;
export function tr(childrenOrAttrs: Child<"tr"> | HTMLAttributes, ...children: Children<"tr">): HTMLElement<"tr"> {
  return HTMLElement.create("tr", childrenOrAttrs, ...children);
}

export function button(...children: Children<"button">): HTMLElement<"button">;
export function button(attrs: HTMLAttributes, ...children: Children<"button">): HTMLElement<"button">;
export function button(childrenOrAttrs: Child<"button"> | HTMLAttributes, ...children: Children<"button">): HTMLElement<"button"> {
  return HTMLElement.create("button", childrenOrAttrs, ...children);
}

export function datalist(...children: Children<"datalist">): HTMLElement<"datalist">;
export function datalist(attrs: HTMLAttributes, ...children: Children<"datalist">): HTMLElement<"datalist">;
export function datalist(childrenOrAttrs: Child<"datalist"> | HTMLAttributes, ...children: Children<"datalist">): HTMLElement<"datalist"> {
  return HTMLElement.create("datalist", childrenOrAttrs, ...children);
}

export function fieldset(...children: Children<"fieldset">): HTMLElement<"fieldset">;
export function fieldset(attrs: HTMLAttributes, ...children: Children<"fieldset">): HTMLElement<"fieldset">;
export function fieldset(childrenOrAttrs: Child<"fieldset"> | HTMLAttributes, ...children: Children<"fieldset">): HTMLElement<"fieldset"> {
  return HTMLElement.create("fieldset", childrenOrAttrs, ...children);
}

export function form(...children: Children<"form">): HTMLElement<"form">;
export function form(attrs: HTMLAttributes, ...children: Children<"form">): HTMLElement<"form">;
export function form(childrenOrAttrs: Child<"form"> | HTMLAttributes, ...children: Children<"form">): HTMLElement<"form"> {
  return HTMLElement.create("form", childrenOrAttrs, ...children);
}

export function input(attrs: HTMLAttributes): VoidHTMLElement<"input"> {
  return new VoidHTMLElement("input", attrs);
}

export function label(...children: Children<"label">): HTMLElement<"label">;
export function label(attrs: HTMLAttributes, ...children: Children<"label">): HTMLElement<"label">;
export function label(childrenOrAttrs: Child<"label"> | HTMLAttributes, ...children: Children<"label">): HTMLElement<"label"> {
  return HTMLElement.create("label", childrenOrAttrs, ...children);
}

export function legend(...children: Children<"legend">): HTMLElement<"legend">;
export function legend(attrs: HTMLAttributes, ...children: Children<"legend">): HTMLElement<"legend">;
export function legend(childrenOrAttrs: Child<"legend"> | HTMLAttributes, ...children: Children<"legend">): HTMLElement<"legend"> {
  return HTMLElement.create("legend", childrenOrAttrs, ...children);
}

export function meter(...children: Children<"meter">): HTMLElement<"meter">;
export function meter(attrs: HTMLAttributes, ...children: Children<"meter">): HTMLElement<"meter">;
export function meter(childrenOrAttrs: Child<"meter"> | HTMLAttributes, ...children: Children<"meter">): HTMLElement<"meter"> {
  return HTMLElement.create("meter", childrenOrAttrs, ...children);
}

export function optgroup(...children: Children<"optgroup">): HTMLElement<"optgroup">;
export function optgroup(attrs: HTMLAttributes, ...children: Children<"optgroup">): HTMLElement<"optgroup">;
export function optgroup(childrenOrAttrs: Child<"optgroup"> | HTMLAttributes, ...children: Children<"optgroup">): HTMLElement<"optgroup"> {
  return HTMLElement.create("optgroup", childrenOrAttrs, ...children);
}

export function option(...children: Children<"option">): HTMLElement<"option">;
export function option(attrs: HTMLAttributes, ...children: Children<"option">): HTMLElement<"option">;
export function option(childrenOrAttrs: Child<"option"> | HTMLAttributes, ...children: Children<"option">): HTMLElement<"option"> {
  return HTMLElement.create("option", childrenOrAttrs, ...children);
}

export function output(...children: Children<"output">): HTMLElement<"output">;
export function output(attrs: HTMLAttributes, ...children: Children<"output">): HTMLElement<"output">;
export function output(childrenOrAttrs: Child<"output"> | HTMLAttributes, ...children: Children<"output">): HTMLElement<"output"> {
  return HTMLElement.create("output", childrenOrAttrs, ...children);
}

export function progress(...children: Children<"progress">): HTMLElement<"progress">;
export function progress(attrs: HTMLAttributes, ...children: Children<"progress">): HTMLElement<"progress">;
export function progress(childrenOrAttrs: Child<"progress"> | HTMLAttributes, ...children: Children<"progress">): HTMLElement<"progress"> {
  return HTMLElement.create("progress", childrenOrAttrs, ...children);
}

export function select(...children: Children<"select">): HTMLElement<"select">;
export function select(attrs: HTMLAttributes, ...children: Children<"select">): HTMLElement<"select">;
export function select(childrenOrAttrs: Child<"select"> | HTMLAttributes, ...children: Children<"select">): HTMLElement<"select"> {
  return HTMLElement.create("select", childrenOrAttrs, ...children);
}

export function textarea(...children: Children<"textarea">): HTMLElement<"textarea">;
export function textarea(attrs: HTMLAttributes, ...children: Children<"textarea">): HTMLElement<"textarea">;
export function textarea(childrenOrAttrs: Child<"textarea"> | HTMLAttributes, ...children: Children<"textarea">): HTMLElement<"textarea"> {
  return HTMLElement.create("textarea", childrenOrAttrs, ...children);
}

export function details(...children: Children<"details">): HTMLElement<"details">;
export function details(attrs: HTMLAttributes, ...children: Children<"details">): HTMLElement<"details">;
export function details(childrenOrAttrs: Child<"details"> | HTMLAttributes, ...children: Children<"details">): HTMLElement<"details"> {
  return HTMLElement.create("details", childrenOrAttrs, ...children);
}

export function dialog(...children: Children<"dialog">): HTMLElement<"dialog">;
export function dialog(attrs: HTMLAttributes, ...children: Children<"dialog">): HTMLElement<"dialog">;
export function dialog(childrenOrAttrs: Child<"dialog"> | HTMLAttributes, ...children: Children<"dialog">): HTMLElement<"dialog"> {
  return HTMLElement.create("dialog", childrenOrAttrs, ...children);
}

export function summary(...children: Children<"summary">): HTMLElement<"summary">;
export function summary(attrs: HTMLAttributes, ...children: Children<"summary">): HTMLElement<"summary">;
export function summary(childrenOrAttrs: Child<"summary"> | HTMLAttributes, ...children: Children<"summary">): HTMLElement<"summary"> {
  return HTMLElement.create("summary", childrenOrAttrs, ...children);
}

export function slot(...children: Children<"slot">): HTMLElement<"slot">;
export function slot(attrs: HTMLAttributes, ...children: Children<"slot">): HTMLElement<"slot">;
export function slot(childrenOrAttrs: Child<"slot"> | HTMLAttributes, ...children: Children<"slot">): HTMLElement<"slot"> {
  return HTMLElement.create("slot", childrenOrAttrs, ...children);
}

export function template(...children: Children<"template">): HTMLElement<"template">;
export function template(attrs: HTMLAttributes, ...children: Children<"template">): HTMLElement<"template">;
export function template(childrenOrAttrs: Child<"template"> | HTMLAttributes, ...children: Children<"template">): HTMLElement<"template"> {
  return HTMLElement.create("template", childrenOrAttrs, ...children);
}

