// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See tag-generator.ts to make changes.
import {
  type Child,
  type Children,
  type HTMLAttributes,
  HTMLDocument,
  HTMLElement,
  type TagBase,
  VoidHTMLElement,
} from "./html_element.ts";
import type { HTMLTag } from "./tags.ts";

export function document(...children: Array<TagBase>): HTMLDocument {
  return new HTMLDocument(...children);
}

export function doctype(): VoidHTMLElement {
  return new VoidHTMLElement("!DOCTYPE" as unknown as HTMLTag, { html: true });
}
export function html(...children: Children): HTMLElement;
export function html(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function html(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("html", childrenOrAttrs, ...children);
}

export function base(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("base", attrs);
}

export function head(...children: Children): HTMLElement;
export function head(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function head(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("head", childrenOrAttrs, ...children);
}

export function link(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("link", attrs);
}

export function meta(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("meta", attrs);
}

export function style(...children: Children): HTMLElement;
export function style(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function style(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("style", childrenOrAttrs, ...children);
}

export function title(...children: Children): HTMLElement;
export function title(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function title(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("title", childrenOrAttrs, ...children);
}

export function body(...children: Children): HTMLElement;
export function body(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function body(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("body", childrenOrAttrs, ...children);
}

export function address(...children: Children): HTMLElement;
export function address(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function address(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("address", childrenOrAttrs, ...children);
}

export function article(...children: Children): HTMLElement;
export function article(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function article(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("article", childrenOrAttrs, ...children);
}

export function aside(...children: Children): HTMLElement;
export function aside(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function aside(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("aside", childrenOrAttrs, ...children);
}

export function footer(...children: Children): HTMLElement;
export function footer(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function footer(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("footer", childrenOrAttrs, ...children);
}

export function header(...children: Children): HTMLElement;
export function header(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function header(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("header", childrenOrAttrs, ...children);
}

export function h1(...children: Children): HTMLElement;
export function h1(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h1(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("h1", childrenOrAttrs, ...children);
}

export function h2(...children: Children): HTMLElement;
export function h2(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h2(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("h2", childrenOrAttrs, ...children);
}

export function h3(...children: Children): HTMLElement;
export function h3(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h3(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("h3", childrenOrAttrs, ...children);
}

export function h4(...children: Children): HTMLElement;
export function h4(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h4(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("h4", childrenOrAttrs, ...children);
}

export function h5(...children: Children): HTMLElement;
export function h5(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h5(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("h5", childrenOrAttrs, ...children);
}

export function h6(...children: Children): HTMLElement;
export function h6(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h6(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("h6", childrenOrAttrs, ...children);
}

export function hgroup(...children: Children): HTMLElement;
export function hgroup(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function hgroup(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("hgroup", childrenOrAttrs, ...children);
}

export function main(...children: Children): HTMLElement;
export function main(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function main(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("main", childrenOrAttrs, ...children);
}

export function nav(...children: Children): HTMLElement;
export function nav(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function nav(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("nav", childrenOrAttrs, ...children);
}

export function section(...children: Children): HTMLElement;
export function section(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function section(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("section", childrenOrAttrs, ...children);
}

export function search(...children: Children): HTMLElement;
export function search(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function search(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("search", childrenOrAttrs, ...children);
}

export function blockquote(...children: Children): HTMLElement;
export function blockquote(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function blockquote(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("blockquote", childrenOrAttrs, ...children);
}

export function dd(...children: Children): HTMLElement;
export function dd(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function dd(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("dd", childrenOrAttrs, ...children);
}

export function div(...children: Children): HTMLElement;
export function div(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function div(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("div", childrenOrAttrs, ...children);
}

export function dl(...children: Children): HTMLElement;
export function dl(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function dl(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("dl", childrenOrAttrs, ...children);
}

export function dt(...children: Children): HTMLElement;
export function dt(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function dt(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("dt", childrenOrAttrs, ...children);
}

export function figcaption(...children: Children): HTMLElement;
export function figcaption(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function figcaption(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("figcaption", childrenOrAttrs, ...children);
}

export function figure(...children: Children): HTMLElement;
export function figure(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function figure(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("figure", childrenOrAttrs, ...children);
}

export function hr(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("hr", attrs);
}

export function li(...children: Children): HTMLElement;
export function li(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function li(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("li", childrenOrAttrs, ...children);
}

export function menu(...children: Children): HTMLElement;
export function menu(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function menu(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("menu", childrenOrAttrs, ...children);
}

export function ol(...children: Children): HTMLElement;
export function ol(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function ol(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("ol", childrenOrAttrs, ...children);
}

export function p(...children: Children): HTMLElement;
export function p(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function p(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("p", childrenOrAttrs, ...children);
}

export function pre(...children: Children): HTMLElement;
export function pre(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function pre(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("pre", childrenOrAttrs, ...children);
}

export function ul(...children: Children): HTMLElement;
export function ul(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function ul(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("ul", childrenOrAttrs, ...children);
}

export function a(...children: Children): HTMLElement;
export function a(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function a(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("a", childrenOrAttrs, ...children);
}

export function abbr(...children: Children): HTMLElement;
export function abbr(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function abbr(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("abbr", childrenOrAttrs, ...children);
}

export function b(...children: Children): HTMLElement;
export function b(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function b(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("b", childrenOrAttrs, ...children);
}

export function bdi(...children: Children): HTMLElement;
export function bdi(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function bdi(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("bdi", childrenOrAttrs, ...children);
}

export function bdo(...children: Children): HTMLElement;
export function bdo(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function bdo(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("bdo", childrenOrAttrs, ...children);
}

export function br(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("br", attrs);
}

export function cite(...children: Children): HTMLElement;
export function cite(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function cite(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("cite", childrenOrAttrs, ...children);
}

export function code(...children: Children): HTMLElement;
export function code(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function code(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("code", childrenOrAttrs, ...children);
}

export function data(...children: Children): HTMLElement;
export function data(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function data(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("data", childrenOrAttrs, ...children);
}

export function dfn(...children: Children): HTMLElement;
export function dfn(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function dfn(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("dfn", childrenOrAttrs, ...children);
}

export function em(...children: Children): HTMLElement;
export function em(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function em(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("em", childrenOrAttrs, ...children);
}

export function i(...children: Children): HTMLElement;
export function i(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function i(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("i", childrenOrAttrs, ...children);
}

export function kbd(...children: Children): HTMLElement;
export function kbd(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function kbd(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("kbd", childrenOrAttrs, ...children);
}

export function mark(...children: Children): HTMLElement;
export function mark(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function mark(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("mark", childrenOrAttrs, ...children);
}

export function q(...children: Children): HTMLElement;
export function q(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function q(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("q", childrenOrAttrs, ...children);
}

export function rp(...children: Children): HTMLElement;
export function rp(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function rp(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("rp", childrenOrAttrs, ...children);
}

export function rt(...children: Children): HTMLElement;
export function rt(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function rt(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("rt", childrenOrAttrs, ...children);
}

export function ruby(...children: Children): HTMLElement;
export function ruby(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function ruby(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("ruby", childrenOrAttrs, ...children);
}

export function s(...children: Children): HTMLElement;
export function s(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function s(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("s", childrenOrAttrs, ...children);
}

export function samp(...children: Children): HTMLElement;
export function samp(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function samp(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("samp", childrenOrAttrs, ...children);
}

export function small(...children: Children): HTMLElement;
export function small(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function small(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("small", childrenOrAttrs, ...children);
}

export function span(...children: Children): HTMLElement;
export function span(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function span(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("span", childrenOrAttrs, ...children);
}

export function strong(...children: Children): HTMLElement;
export function strong(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function strong(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("strong", childrenOrAttrs, ...children);
}

export function sub(...children: Children): HTMLElement;
export function sub(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function sub(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("sub", childrenOrAttrs, ...children);
}

export function sup(...children: Children): HTMLElement;
export function sup(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function sup(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("sup", childrenOrAttrs, ...children);
}

export function time(...children: Children): HTMLElement;
export function time(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function time(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("time", childrenOrAttrs, ...children);
}

export function u(...children: Children): HTMLElement;
export function u(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function u(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("u", childrenOrAttrs, ...children);
}

export function var_(...children: Children): HTMLElement;
export function var_(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function var_(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("var", childrenOrAttrs, ...children);
}

export function wbr(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("wbr", attrs);
}

export function area(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("area", attrs);
}

export function audio(...children: Children): HTMLElement;
export function audio(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function audio(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("audio", childrenOrAttrs, ...children);
}

export function img(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("img", attrs);
}

export function map(...children: Children): HTMLElement;
export function map(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function map(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("map", childrenOrAttrs, ...children);
}

export function track(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("track", attrs);
}

export function video(...children: Children): HTMLElement;
export function video(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function video(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("video", childrenOrAttrs, ...children);
}

export function embed(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("embed", attrs);
}

export function iframe(...children: Children): HTMLElement;
export function iframe(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function iframe(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("iframe", childrenOrAttrs, ...children);
}

export function object(...children: Children): HTMLElement;
export function object(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function object(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("object", childrenOrAttrs, ...children);
}

export function picture(...children: Children): HTMLElement;
export function picture(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function picture(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("picture", childrenOrAttrs, ...children);
}

export function portal(...children: Children): HTMLElement;
export function portal(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function portal(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("portal", childrenOrAttrs, ...children);
}

export function source(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("source", attrs);
}

export function svg(...children: Children): HTMLElement;
export function svg(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function svg(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("svg", childrenOrAttrs, ...children);
}

export function math(...children: Children): HTMLElement;
export function math(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function math(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("math", childrenOrAttrs, ...children);
}

export function canvas(...children: Children): HTMLElement;
export function canvas(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function canvas(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("canvas", childrenOrAttrs, ...children);
}

export function noscript(...children: Children): HTMLElement;
export function noscript(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function noscript(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("noscript", childrenOrAttrs, ...children);
}

export function script(...children: Children): HTMLElement;
export function script(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function script(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("script", childrenOrAttrs, ...children);
}

export function del(...children: Children): HTMLElement;
export function del(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function del(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("del", childrenOrAttrs, ...children);
}

export function ins(...children: Children): HTMLElement;
export function ins(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function ins(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("ins", childrenOrAttrs, ...children);
}

export function caption(...children: Children): HTMLElement;
export function caption(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function caption(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("caption", childrenOrAttrs, ...children);
}

export function col(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("col", attrs);
}

export function colgroup(...children: Children): HTMLElement;
export function colgroup(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function colgroup(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("colgroup", childrenOrAttrs, ...children);
}

export function table(...children: Children): HTMLElement;
export function table(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function table(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("table", childrenOrAttrs, ...children);
}

export function tbody(...children: Children): HTMLElement;
export function tbody(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function tbody(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("tbody", childrenOrAttrs, ...children);
}

export function td(...children: Children): HTMLElement;
export function td(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function td(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("td", childrenOrAttrs, ...children);
}

export function tfoot(...children: Children): HTMLElement;
export function tfoot(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function tfoot(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("tfoot", childrenOrAttrs, ...children);
}

export function th(...children: Children): HTMLElement;
export function th(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function th(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("th", childrenOrAttrs, ...children);
}

export function thead(...children: Children): HTMLElement;
export function thead(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function thead(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("thead", childrenOrAttrs, ...children);
}

export function tr(...children: Children): HTMLElement;
export function tr(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function tr(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("tr", childrenOrAttrs, ...children);
}

export function button(...children: Children): HTMLElement;
export function button(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function button(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("button", childrenOrAttrs, ...children);
}

export function datalist(...children: Children): HTMLElement;
export function datalist(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function datalist(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("datalist", childrenOrAttrs, ...children);
}

export function fieldset(...children: Children): HTMLElement;
export function fieldset(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function fieldset(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("fieldset", childrenOrAttrs, ...children);
}

export function form(...children: Children): HTMLElement;
export function form(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function form(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("form", childrenOrAttrs, ...children);
}

export function input(attrs: HTMLAttributes): VoidHTMLElement {
  return new VoidHTMLElement("input", attrs);
}

export function label(...children: Children): HTMLElement;
export function label(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function label(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("label", childrenOrAttrs, ...children);
}

export function legend(...children: Children): HTMLElement;
export function legend(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function legend(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("legend", childrenOrAttrs, ...children);
}

export function meter(...children: Children): HTMLElement;
export function meter(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function meter(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("meter", childrenOrAttrs, ...children);
}

export function optgroup(...children: Children): HTMLElement;
export function optgroup(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function optgroup(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("optgroup", childrenOrAttrs, ...children);
}

export function option(...children: Children): HTMLElement;
export function option(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function option(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("option", childrenOrAttrs, ...children);
}

export function output(...children: Children): HTMLElement;
export function output(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function output(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("output", childrenOrAttrs, ...children);
}

export function progress(...children: Children): HTMLElement;
export function progress(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function progress(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("progress", childrenOrAttrs, ...children);
}

export function select(...children: Children): HTMLElement;
export function select(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function select(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("select", childrenOrAttrs, ...children);
}

export function textarea(...children: Children): HTMLElement;
export function textarea(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function textarea(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("textarea", childrenOrAttrs, ...children);
}

export function details(...children: Children): HTMLElement;
export function details(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function details(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("details", childrenOrAttrs, ...children);
}

export function dialog(...children: Children): HTMLElement;
export function dialog(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function dialog(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("dialog", childrenOrAttrs, ...children);
}

export function summary(...children: Children): HTMLElement;
export function summary(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function summary(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("summary", childrenOrAttrs, ...children);
}

export function slot(...children: Children): HTMLElement;
export function slot(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function slot(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("slot", childrenOrAttrs, ...children);
}

export function template(...children: Children): HTMLElement;
export function template(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function template(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return HTMLElement.create("template", childrenOrAttrs, ...children);
}
