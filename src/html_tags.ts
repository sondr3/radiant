// THIS FILE IS AUTO-GENERATED, DO NOT MODIFY.
// See ./scripts/tag-generator.mts to make changes.
import { HTMLDocument, VoidBaseHTMLElement, Doctype, createHTMLElement } from "./html_element.js"
import type { ATTRIBUTE_MAP } from "./attributes.js"
import type { ELEMENT_MAP } from "./elements.js"
import type { CHILDREN_MAP } from "./content_categories.js"

function documentElement(doctype: Doctype, ...children: Array<ELEMENT_MAP["html"]>): HTMLDocument {
  return new HTMLDocument(doctype, ...children);
}

function doctypeElement(): Doctype {
  return new Doctype();
}


function aElement(attributes: ATTRIBUTE_MAP["a"], ...children: Array<CHILDREN_MAP["a"]>): ELEMENT_MAP["a"];
function aElement(
  attrsOrChild: ATTRIBUTE_MAP["a"] | CHILDREN_MAP["a"] | Array<CHILDREN_MAP["a"]>,
  ...children: Array<CHILDREN_MAP["a"]>
): ELEMENT_MAP["a"] {
  return createHTMLElement<"a", ATTRIBUTE_MAP["a"], CHILDREN_MAP["a"]>(
    "a",
    attrsOrChild,
    children,
  );
}

function abbrElement(...children: Array<CHILDREN_MAP["abbr"]>): ELEMENT_MAP["abbr"];
function abbrElement(attributes: ATTRIBUTE_MAP["abbr"], ...children: Array<CHILDREN_MAP["abbr"]>): ELEMENT_MAP["abbr"];
function abbrElement(
  attrsOrChild: ATTRIBUTE_MAP["abbr"] | CHILDREN_MAP["abbr"] | Array<CHILDREN_MAP["abbr"]>,
  ...children: Array<CHILDREN_MAP["abbr"]>
): ELEMENT_MAP["abbr"] {
  return createHTMLElement<"abbr", ATTRIBUTE_MAP["abbr"], CHILDREN_MAP["abbr"]>(
    "abbr",
    attrsOrChild,
    children,
  );
}

function addressElement(...children: Array<CHILDREN_MAP["address"]>): ELEMENT_MAP["address"];
function addressElement(attributes: ATTRIBUTE_MAP["address"], ...children: Array<CHILDREN_MAP["address"]>): ELEMENT_MAP["address"];
function addressElement(
  attrsOrChild: ATTRIBUTE_MAP["address"] | CHILDREN_MAP["address"] | Array<CHILDREN_MAP["address"]>,
  ...children: Array<CHILDREN_MAP["address"]>
): ELEMENT_MAP["address"] {
  return createHTMLElement<"address", ATTRIBUTE_MAP["address"], CHILDREN_MAP["address"]>(
    "address",
    attrsOrChild,
    children,
  );
}
function areaElement(attrs?: ATTRIBUTE_MAP["area"]): ELEMENT_MAP["area"] {
  return new VoidBaseHTMLElement("area", attrs ?? {} as ATTRIBUTE_MAP["area"]);
}


function articleElement(...children: Array<CHILDREN_MAP["article"]>): ELEMENT_MAP["article"];
function articleElement(attributes: ATTRIBUTE_MAP["article"], ...children: Array<CHILDREN_MAP["article"]>): ELEMENT_MAP["article"];
function articleElement(
  attrsOrChild: ATTRIBUTE_MAP["article"] | CHILDREN_MAP["article"] | Array<CHILDREN_MAP["article"]>,
  ...children: Array<CHILDREN_MAP["article"]>
): ELEMENT_MAP["article"] {
  return createHTMLElement<"article", ATTRIBUTE_MAP["article"], CHILDREN_MAP["article"]>(
    "article",
    attrsOrChild,
    children,
  );
}

function asideElement(...children: Array<CHILDREN_MAP["aside"]>): ELEMENT_MAP["aside"];
function asideElement(attributes: ATTRIBUTE_MAP["aside"], ...children: Array<CHILDREN_MAP["aside"]>): ELEMENT_MAP["aside"];
function asideElement(
  attrsOrChild: ATTRIBUTE_MAP["aside"] | CHILDREN_MAP["aside"] | Array<CHILDREN_MAP["aside"]>,
  ...children: Array<CHILDREN_MAP["aside"]>
): ELEMENT_MAP["aside"] {
  return createHTMLElement<"aside", ATTRIBUTE_MAP["aside"], CHILDREN_MAP["aside"]>(
    "aside",
    attrsOrChild,
    children,
  );
}

function audioElement(...children: Array<CHILDREN_MAP["audio"]>): ELEMENT_MAP["audio"];
function audioElement(attributes: ATTRIBUTE_MAP["audio"], ...children: Array<CHILDREN_MAP["audio"]>): ELEMENT_MAP["audio"];
function audioElement(
  attrsOrChild: ATTRIBUTE_MAP["audio"] | CHILDREN_MAP["audio"] | Array<CHILDREN_MAP["audio"]>,
  ...children: Array<CHILDREN_MAP["audio"]>
): ELEMENT_MAP["audio"] {
  return createHTMLElement<"audio", ATTRIBUTE_MAP["audio"], CHILDREN_MAP["audio"]>(
    "audio",
    attrsOrChild,
    children,
  );
}

function bElement(...children: Array<CHILDREN_MAP["b"]>): ELEMENT_MAP["b"];
function bElement(attributes: ATTRIBUTE_MAP["b"], ...children: Array<CHILDREN_MAP["b"]>): ELEMENT_MAP["b"];
function bElement(
  attrsOrChild: ATTRIBUTE_MAP["b"] | CHILDREN_MAP["b"] | Array<CHILDREN_MAP["b"]>,
  ...children: Array<CHILDREN_MAP["b"]>
): ELEMENT_MAP["b"] {
  return createHTMLElement<"b", ATTRIBUTE_MAP["b"], CHILDREN_MAP["b"]>(
    "b",
    attrsOrChild,
    children,
  );
}
function baseElement(attrs?: ATTRIBUTE_MAP["base"]): ELEMENT_MAP["base"] {
  return new VoidBaseHTMLElement("base", attrs ?? {} as ATTRIBUTE_MAP["base"]);
}


function bdiElement(...children: Array<CHILDREN_MAP["bdi"]>): ELEMENT_MAP["bdi"];
function bdiElement(attributes: ATTRIBUTE_MAP["bdi"], ...children: Array<CHILDREN_MAP["bdi"]>): ELEMENT_MAP["bdi"];
function bdiElement(
  attrsOrChild: ATTRIBUTE_MAP["bdi"] | CHILDREN_MAP["bdi"] | Array<CHILDREN_MAP["bdi"]>,
  ...children: Array<CHILDREN_MAP["bdi"]>
): ELEMENT_MAP["bdi"] {
  return createHTMLElement<"bdi", ATTRIBUTE_MAP["bdi"], CHILDREN_MAP["bdi"]>(
    "bdi",
    attrsOrChild,
    children,
  );
}

function bdoElement(...children: Array<CHILDREN_MAP["bdo"]>): ELEMENT_MAP["bdo"];
function bdoElement(attributes: ATTRIBUTE_MAP["bdo"], ...children: Array<CHILDREN_MAP["bdo"]>): ELEMENT_MAP["bdo"];
function bdoElement(
  attrsOrChild: ATTRIBUTE_MAP["bdo"] | CHILDREN_MAP["bdo"] | Array<CHILDREN_MAP["bdo"]>,
  ...children: Array<CHILDREN_MAP["bdo"]>
): ELEMENT_MAP["bdo"] {
  return createHTMLElement<"bdo", ATTRIBUTE_MAP["bdo"], CHILDREN_MAP["bdo"]>(
    "bdo",
    attrsOrChild,
    children,
  );
}

function blockquoteElement(...children: Array<CHILDREN_MAP["blockquote"]>): ELEMENT_MAP["blockquote"];
function blockquoteElement(attributes: ATTRIBUTE_MAP["blockquote"], ...children: Array<CHILDREN_MAP["blockquote"]>): ELEMENT_MAP["blockquote"];
function blockquoteElement(
  attrsOrChild: ATTRIBUTE_MAP["blockquote"] | CHILDREN_MAP["blockquote"] | Array<CHILDREN_MAP["blockquote"]>,
  ...children: Array<CHILDREN_MAP["blockquote"]>
): ELEMENT_MAP["blockquote"] {
  return createHTMLElement<"blockquote", ATTRIBUTE_MAP["blockquote"], CHILDREN_MAP["blockquote"]>(
    "blockquote",
    attrsOrChild,
    children,
  );
}

function bodyElement(...children: Array<CHILDREN_MAP["body"]>): ELEMENT_MAP["body"];
function bodyElement(attributes: ATTRIBUTE_MAP["body"], ...children: Array<CHILDREN_MAP["body"]>): ELEMENT_MAP["body"];
function bodyElement(
  attrsOrChild: ATTRIBUTE_MAP["body"] | CHILDREN_MAP["body"] | Array<CHILDREN_MAP["body"]>,
  ...children: Array<CHILDREN_MAP["body"]>
): ELEMENT_MAP["body"] {
  return createHTMLElement<"body", ATTRIBUTE_MAP["body"], CHILDREN_MAP["body"]>(
    "body",
    attrsOrChild,
    children,
  );
}
function brElement(attrs?: ATTRIBUTE_MAP["br"]): ELEMENT_MAP["br"] {
  return new VoidBaseHTMLElement("br", attrs ?? {} as ATTRIBUTE_MAP["br"]);
}


function buttonElement(...children: Array<CHILDREN_MAP["button"]>): ELEMENT_MAP["button"];
function buttonElement(attributes: ATTRIBUTE_MAP["button"], ...children: Array<CHILDREN_MAP["button"]>): ELEMENT_MAP["button"];
function buttonElement(
  attrsOrChild: ATTRIBUTE_MAP["button"] | CHILDREN_MAP["button"] | Array<CHILDREN_MAP["button"]>,
  ...children: Array<CHILDREN_MAP["button"]>
): ELEMENT_MAP["button"] {
  return createHTMLElement<"button", ATTRIBUTE_MAP["button"], CHILDREN_MAP["button"]>(
    "button",
    attrsOrChild,
    children,
  );
}

function canvasElement(...children: Array<CHILDREN_MAP["canvas"]>): ELEMENT_MAP["canvas"];
function canvasElement(attributes: ATTRIBUTE_MAP["canvas"], ...children: Array<CHILDREN_MAP["canvas"]>): ELEMENT_MAP["canvas"];
function canvasElement(
  attrsOrChild: ATTRIBUTE_MAP["canvas"] | CHILDREN_MAP["canvas"] | Array<CHILDREN_MAP["canvas"]>,
  ...children: Array<CHILDREN_MAP["canvas"]>
): ELEMENT_MAP["canvas"] {
  return createHTMLElement<"canvas", ATTRIBUTE_MAP["canvas"], CHILDREN_MAP["canvas"]>(
    "canvas",
    attrsOrChild,
    children,
  );
}

function captionElement(...children: Array<CHILDREN_MAP["caption"]>): ELEMENT_MAP["caption"];
function captionElement(attributes: ATTRIBUTE_MAP["caption"], ...children: Array<CHILDREN_MAP["caption"]>): ELEMENT_MAP["caption"];
function captionElement(
  attrsOrChild: ATTRIBUTE_MAP["caption"] | CHILDREN_MAP["caption"] | Array<CHILDREN_MAP["caption"]>,
  ...children: Array<CHILDREN_MAP["caption"]>
): ELEMENT_MAP["caption"] {
  return createHTMLElement<"caption", ATTRIBUTE_MAP["caption"], CHILDREN_MAP["caption"]>(
    "caption",
    attrsOrChild,
    children,
  );
}

function citeElement(...children: Array<CHILDREN_MAP["cite"]>): ELEMENT_MAP["cite"];
function citeElement(attributes: ATTRIBUTE_MAP["cite"], ...children: Array<CHILDREN_MAP["cite"]>): ELEMENT_MAP["cite"];
function citeElement(
  attrsOrChild: ATTRIBUTE_MAP["cite"] | CHILDREN_MAP["cite"] | Array<CHILDREN_MAP["cite"]>,
  ...children: Array<CHILDREN_MAP["cite"]>
): ELEMENT_MAP["cite"] {
  return createHTMLElement<"cite", ATTRIBUTE_MAP["cite"], CHILDREN_MAP["cite"]>(
    "cite",
    attrsOrChild,
    children,
  );
}

function codeElement(...children: Array<CHILDREN_MAP["code"]>): ELEMENT_MAP["code"];
function codeElement(attributes: ATTRIBUTE_MAP["code"], ...children: Array<CHILDREN_MAP["code"]>): ELEMENT_MAP["code"];
function codeElement(
  attrsOrChild: ATTRIBUTE_MAP["code"] | CHILDREN_MAP["code"] | Array<CHILDREN_MAP["code"]>,
  ...children: Array<CHILDREN_MAP["code"]>
): ELEMENT_MAP["code"] {
  return createHTMLElement<"code", ATTRIBUTE_MAP["code"], CHILDREN_MAP["code"]>(
    "code",
    attrsOrChild,
    children,
  );
}
function colElement(attrs?: ATTRIBUTE_MAP["col"]): ELEMENT_MAP["col"] {
  return new VoidBaseHTMLElement("col", attrs ?? {} as ATTRIBUTE_MAP["col"]);
}


function colgroupElement(...children: Array<CHILDREN_MAP["colgroup"]>): ELEMENT_MAP["colgroup"];
function colgroupElement(attributes: ATTRIBUTE_MAP["colgroup"], ...children: Array<CHILDREN_MAP["colgroup"]>): ELEMENT_MAP["colgroup"];
function colgroupElement(
  attrsOrChild: ATTRIBUTE_MAP["colgroup"] | CHILDREN_MAP["colgroup"] | Array<CHILDREN_MAP["colgroup"]>,
  ...children: Array<CHILDREN_MAP["colgroup"]>
): ELEMENT_MAP["colgroup"] {
  return createHTMLElement<"colgroup", ATTRIBUTE_MAP["colgroup"], CHILDREN_MAP["colgroup"]>(
    "colgroup",
    attrsOrChild,
    children,
  );
}

function dataElement(...children: Array<CHILDREN_MAP["data"]>): ELEMENT_MAP["data"];
function dataElement(attributes: ATTRIBUTE_MAP["data"], ...children: Array<CHILDREN_MAP["data"]>): ELEMENT_MAP["data"];
function dataElement(
  attrsOrChild: ATTRIBUTE_MAP["data"] | CHILDREN_MAP["data"] | Array<CHILDREN_MAP["data"]>,
  ...children: Array<CHILDREN_MAP["data"]>
): ELEMENT_MAP["data"] {
  return createHTMLElement<"data", ATTRIBUTE_MAP["data"], CHILDREN_MAP["data"]>(
    "data",
    attrsOrChild,
    children,
  );
}

function datalistElement(...children: Array<CHILDREN_MAP["datalist"]>): ELEMENT_MAP["datalist"];
function datalistElement(attributes: ATTRIBUTE_MAP["datalist"], ...children: Array<CHILDREN_MAP["datalist"]>): ELEMENT_MAP["datalist"];
function datalistElement(
  attrsOrChild: ATTRIBUTE_MAP["datalist"] | CHILDREN_MAP["datalist"] | Array<CHILDREN_MAP["datalist"]>,
  ...children: Array<CHILDREN_MAP["datalist"]>
): ELEMENT_MAP["datalist"] {
  return createHTMLElement<"datalist", ATTRIBUTE_MAP["datalist"], CHILDREN_MAP["datalist"]>(
    "datalist",
    attrsOrChild,
    children,
  );
}

function ddElement(...children: Array<CHILDREN_MAP["dd"]>): ELEMENT_MAP["dd"];
function ddElement(attributes: ATTRIBUTE_MAP["dd"], ...children: Array<CHILDREN_MAP["dd"]>): ELEMENT_MAP["dd"];
function ddElement(
  attrsOrChild: ATTRIBUTE_MAP["dd"] | CHILDREN_MAP["dd"] | Array<CHILDREN_MAP["dd"]>,
  ...children: Array<CHILDREN_MAP["dd"]>
): ELEMENT_MAP["dd"] {
  return createHTMLElement<"dd", ATTRIBUTE_MAP["dd"], CHILDREN_MAP["dd"]>(
    "dd",
    attrsOrChild,
    children,
  );
}

function delElement(...children: Array<CHILDREN_MAP["del"]>): ELEMENT_MAP["del"];
function delElement(attributes: ATTRIBUTE_MAP["del"], ...children: Array<CHILDREN_MAP["del"]>): ELEMENT_MAP["del"];
function delElement(
  attrsOrChild: ATTRIBUTE_MAP["del"] | CHILDREN_MAP["del"] | Array<CHILDREN_MAP["del"]>,
  ...children: Array<CHILDREN_MAP["del"]>
): ELEMENT_MAP["del"] {
  return createHTMLElement<"del", ATTRIBUTE_MAP["del"], CHILDREN_MAP["del"]>(
    "del",
    attrsOrChild,
    children,
  );
}

function detailsElement(...children: Array<CHILDREN_MAP["details"]>): ELEMENT_MAP["details"];
function detailsElement(attributes: ATTRIBUTE_MAP["details"], ...children: Array<CHILDREN_MAP["details"]>): ELEMENT_MAP["details"];
function detailsElement(
  attrsOrChild: ATTRIBUTE_MAP["details"] | CHILDREN_MAP["details"] | Array<CHILDREN_MAP["details"]>,
  ...children: Array<CHILDREN_MAP["details"]>
): ELEMENT_MAP["details"] {
  return createHTMLElement<"details", ATTRIBUTE_MAP["details"], CHILDREN_MAP["details"]>(
    "details",
    attrsOrChild,
    children,
  );
}

function dfnElement(...children: Array<CHILDREN_MAP["dfn"]>): ELEMENT_MAP["dfn"];
function dfnElement(attributes: ATTRIBUTE_MAP["dfn"], ...children: Array<CHILDREN_MAP["dfn"]>): ELEMENT_MAP["dfn"];
function dfnElement(
  attrsOrChild: ATTRIBUTE_MAP["dfn"] | CHILDREN_MAP["dfn"] | Array<CHILDREN_MAP["dfn"]>,
  ...children: Array<CHILDREN_MAP["dfn"]>
): ELEMENT_MAP["dfn"] {
  return createHTMLElement<"dfn", ATTRIBUTE_MAP["dfn"], CHILDREN_MAP["dfn"]>(
    "dfn",
    attrsOrChild,
    children,
  );
}

function dialogElement(...children: Array<CHILDREN_MAP["dialog"]>): ELEMENT_MAP["dialog"];
function dialogElement(attributes: ATTRIBUTE_MAP["dialog"], ...children: Array<CHILDREN_MAP["dialog"]>): ELEMENT_MAP["dialog"];
function dialogElement(
  attrsOrChild: ATTRIBUTE_MAP["dialog"] | CHILDREN_MAP["dialog"] | Array<CHILDREN_MAP["dialog"]>,
  ...children: Array<CHILDREN_MAP["dialog"]>
): ELEMENT_MAP["dialog"] {
  return createHTMLElement<"dialog", ATTRIBUTE_MAP["dialog"], CHILDREN_MAP["dialog"]>(
    "dialog",
    attrsOrChild,
    children,
  );
}

function divElement(...children: Array<CHILDREN_MAP["div"]>): ELEMENT_MAP["div"];
function divElement(attributes: ATTRIBUTE_MAP["div"], ...children: Array<CHILDREN_MAP["div"]>): ELEMENT_MAP["div"];
function divElement(
  attrsOrChild: ATTRIBUTE_MAP["div"] | CHILDREN_MAP["div"] | Array<CHILDREN_MAP["div"]>,
  ...children: Array<CHILDREN_MAP["div"]>
): ELEMENT_MAP["div"] {
  return createHTMLElement<"div", ATTRIBUTE_MAP["div"], CHILDREN_MAP["div"]>(
    "div",
    attrsOrChild,
    children,
  );
}

function dlElement(...children: Array<CHILDREN_MAP["dl"]>): ELEMENT_MAP["dl"];
function dlElement(attributes: ATTRIBUTE_MAP["dl"], ...children: Array<CHILDREN_MAP["dl"]>): ELEMENT_MAP["dl"];
function dlElement(
  attrsOrChild: ATTRIBUTE_MAP["dl"] | CHILDREN_MAP["dl"] | Array<CHILDREN_MAP["dl"]>,
  ...children: Array<CHILDREN_MAP["dl"]>
): ELEMENT_MAP["dl"] {
  return createHTMLElement<"dl", ATTRIBUTE_MAP["dl"], CHILDREN_MAP["dl"]>(
    "dl",
    attrsOrChild,
    children,
  );
}

function dtElement(...children: Array<CHILDREN_MAP["dt"]>): ELEMENT_MAP["dt"];
function dtElement(attributes: ATTRIBUTE_MAP["dt"], ...children: Array<CHILDREN_MAP["dt"]>): ELEMENT_MAP["dt"];
function dtElement(
  attrsOrChild: ATTRIBUTE_MAP["dt"] | CHILDREN_MAP["dt"] | Array<CHILDREN_MAP["dt"]>,
  ...children: Array<CHILDREN_MAP["dt"]>
): ELEMENT_MAP["dt"] {
  return createHTMLElement<"dt", ATTRIBUTE_MAP["dt"], CHILDREN_MAP["dt"]>(
    "dt",
    attrsOrChild,
    children,
  );
}

function emElement(...children: Array<CHILDREN_MAP["em"]>): ELEMENT_MAP["em"];
function emElement(attributes: ATTRIBUTE_MAP["em"], ...children: Array<CHILDREN_MAP["em"]>): ELEMENT_MAP["em"];
function emElement(
  attrsOrChild: ATTRIBUTE_MAP["em"] | CHILDREN_MAP["em"] | Array<CHILDREN_MAP["em"]>,
  ...children: Array<CHILDREN_MAP["em"]>
): ELEMENT_MAP["em"] {
  return createHTMLElement<"em", ATTRIBUTE_MAP["em"], CHILDREN_MAP["em"]>(
    "em",
    attrsOrChild,
    children,
  );
}
function embedElement(attrs?: ATTRIBUTE_MAP["embed"]): ELEMENT_MAP["embed"] {
  return new VoidBaseHTMLElement("embed", attrs ?? {} as ATTRIBUTE_MAP["embed"]);
}


function fieldsetElement(...children: Array<CHILDREN_MAP["fieldset"]>): ELEMENT_MAP["fieldset"];
function fieldsetElement(attributes: ATTRIBUTE_MAP["fieldset"], ...children: Array<CHILDREN_MAP["fieldset"]>): ELEMENT_MAP["fieldset"];
function fieldsetElement(
  attrsOrChild: ATTRIBUTE_MAP["fieldset"] | CHILDREN_MAP["fieldset"] | Array<CHILDREN_MAP["fieldset"]>,
  ...children: Array<CHILDREN_MAP["fieldset"]>
): ELEMENT_MAP["fieldset"] {
  return createHTMLElement<"fieldset", ATTRIBUTE_MAP["fieldset"], CHILDREN_MAP["fieldset"]>(
    "fieldset",
    attrsOrChild,
    children,
  );
}

function figcaptionElement(...children: Array<CHILDREN_MAP["figcaption"]>): ELEMENT_MAP["figcaption"];
function figcaptionElement(attributes: ATTRIBUTE_MAP["figcaption"], ...children: Array<CHILDREN_MAP["figcaption"]>): ELEMENT_MAP["figcaption"];
function figcaptionElement(
  attrsOrChild: ATTRIBUTE_MAP["figcaption"] | CHILDREN_MAP["figcaption"] | Array<CHILDREN_MAP["figcaption"]>,
  ...children: Array<CHILDREN_MAP["figcaption"]>
): ELEMENT_MAP["figcaption"] {
  return createHTMLElement<"figcaption", ATTRIBUTE_MAP["figcaption"], CHILDREN_MAP["figcaption"]>(
    "figcaption",
    attrsOrChild,
    children,
  );
}

function figureElement(...children: Array<CHILDREN_MAP["figure"]>): ELEMENT_MAP["figure"];
function figureElement(attributes: ATTRIBUTE_MAP["figure"], ...children: Array<CHILDREN_MAP["figure"]>): ELEMENT_MAP["figure"];
function figureElement(
  attrsOrChild: ATTRIBUTE_MAP["figure"] | CHILDREN_MAP["figure"] | Array<CHILDREN_MAP["figure"]>,
  ...children: Array<CHILDREN_MAP["figure"]>
): ELEMENT_MAP["figure"] {
  return createHTMLElement<"figure", ATTRIBUTE_MAP["figure"], CHILDREN_MAP["figure"]>(
    "figure",
    attrsOrChild,
    children,
  );
}

function footerElement(...children: Array<CHILDREN_MAP["footer"]>): ELEMENT_MAP["footer"];
function footerElement(attributes: ATTRIBUTE_MAP["footer"], ...children: Array<CHILDREN_MAP["footer"]>): ELEMENT_MAP["footer"];
function footerElement(
  attrsOrChild: ATTRIBUTE_MAP["footer"] | CHILDREN_MAP["footer"] | Array<CHILDREN_MAP["footer"]>,
  ...children: Array<CHILDREN_MAP["footer"]>
): ELEMENT_MAP["footer"] {
  return createHTMLElement<"footer", ATTRIBUTE_MAP["footer"], CHILDREN_MAP["footer"]>(
    "footer",
    attrsOrChild,
    children,
  );
}

function formElement(attributes: ATTRIBUTE_MAP["form"], ...children: Array<CHILDREN_MAP["form"]>): ELEMENT_MAP["form"];
function formElement(
  attrsOrChild: ATTRIBUTE_MAP["form"] | CHILDREN_MAP["form"] | Array<CHILDREN_MAP["form"]>,
  ...children: Array<CHILDREN_MAP["form"]>
): ELEMENT_MAP["form"] {
  return createHTMLElement<"form", ATTRIBUTE_MAP["form"], CHILDREN_MAP["form"]>(
    "form",
    attrsOrChild,
    children,
  );
}

function h1Element(...children: Array<CHILDREN_MAP["h1"]>): ELEMENT_MAP["h1"];
function h1Element(attributes: ATTRIBUTE_MAP["h1"], ...children: Array<CHILDREN_MAP["h1"]>): ELEMENT_MAP["h1"];
function h1Element(
  attrsOrChild: ATTRIBUTE_MAP["h1"] | CHILDREN_MAP["h1"] | Array<CHILDREN_MAP["h1"]>,
  ...children: Array<CHILDREN_MAP["h1"]>
): ELEMENT_MAP["h1"] {
  return createHTMLElement<"h1", ATTRIBUTE_MAP["h1"], CHILDREN_MAP["h1"]>(
    "h1",
    attrsOrChild,
    children,
  );
}

function h2Element(...children: Array<CHILDREN_MAP["h2"]>): ELEMENT_MAP["h2"];
function h2Element(attributes: ATTRIBUTE_MAP["h2"], ...children: Array<CHILDREN_MAP["h2"]>): ELEMENT_MAP["h2"];
function h2Element(
  attrsOrChild: ATTRIBUTE_MAP["h2"] | CHILDREN_MAP["h2"] | Array<CHILDREN_MAP["h2"]>,
  ...children: Array<CHILDREN_MAP["h2"]>
): ELEMENT_MAP["h2"] {
  return createHTMLElement<"h2", ATTRIBUTE_MAP["h2"], CHILDREN_MAP["h2"]>(
    "h2",
    attrsOrChild,
    children,
  );
}

function h3Element(...children: Array<CHILDREN_MAP["h3"]>): ELEMENT_MAP["h3"];
function h3Element(attributes: ATTRIBUTE_MAP["h3"], ...children: Array<CHILDREN_MAP["h3"]>): ELEMENT_MAP["h3"];
function h3Element(
  attrsOrChild: ATTRIBUTE_MAP["h3"] | CHILDREN_MAP["h3"] | Array<CHILDREN_MAP["h3"]>,
  ...children: Array<CHILDREN_MAP["h3"]>
): ELEMENT_MAP["h3"] {
  return createHTMLElement<"h3", ATTRIBUTE_MAP["h3"], CHILDREN_MAP["h3"]>(
    "h3",
    attrsOrChild,
    children,
  );
}

function h4Element(...children: Array<CHILDREN_MAP["h4"]>): ELEMENT_MAP["h4"];
function h4Element(attributes: ATTRIBUTE_MAP["h4"], ...children: Array<CHILDREN_MAP["h4"]>): ELEMENT_MAP["h4"];
function h4Element(
  attrsOrChild: ATTRIBUTE_MAP["h4"] | CHILDREN_MAP["h4"] | Array<CHILDREN_MAP["h4"]>,
  ...children: Array<CHILDREN_MAP["h4"]>
): ELEMENT_MAP["h4"] {
  return createHTMLElement<"h4", ATTRIBUTE_MAP["h4"], CHILDREN_MAP["h4"]>(
    "h4",
    attrsOrChild,
    children,
  );
}

function h5Element(...children: Array<CHILDREN_MAP["h5"]>): ELEMENT_MAP["h5"];
function h5Element(attributes: ATTRIBUTE_MAP["h5"], ...children: Array<CHILDREN_MAP["h5"]>): ELEMENT_MAP["h5"];
function h5Element(
  attrsOrChild: ATTRIBUTE_MAP["h5"] | CHILDREN_MAP["h5"] | Array<CHILDREN_MAP["h5"]>,
  ...children: Array<CHILDREN_MAP["h5"]>
): ELEMENT_MAP["h5"] {
  return createHTMLElement<"h5", ATTRIBUTE_MAP["h5"], CHILDREN_MAP["h5"]>(
    "h5",
    attrsOrChild,
    children,
  );
}

function h6Element(...children: Array<CHILDREN_MAP["h6"]>): ELEMENT_MAP["h6"];
function h6Element(attributes: ATTRIBUTE_MAP["h6"], ...children: Array<CHILDREN_MAP["h6"]>): ELEMENT_MAP["h6"];
function h6Element(
  attrsOrChild: ATTRIBUTE_MAP["h6"] | CHILDREN_MAP["h6"] | Array<CHILDREN_MAP["h6"]>,
  ...children: Array<CHILDREN_MAP["h6"]>
): ELEMENT_MAP["h6"] {
  return createHTMLElement<"h6", ATTRIBUTE_MAP["h6"], CHILDREN_MAP["h6"]>(
    "h6",
    attrsOrChild,
    children,
  );
}

function headElement(...children: Array<CHILDREN_MAP["head"]>): ELEMENT_MAP["head"];
function headElement(attributes: ATTRIBUTE_MAP["head"], ...children: Array<CHILDREN_MAP["head"]>): ELEMENT_MAP["head"];
function headElement(
  attrsOrChild: ATTRIBUTE_MAP["head"] | CHILDREN_MAP["head"] | Array<CHILDREN_MAP["head"]>,
  ...children: Array<CHILDREN_MAP["head"]>
): ELEMENT_MAP["head"] {
  return createHTMLElement<"head", ATTRIBUTE_MAP["head"], CHILDREN_MAP["head"]>(
    "head",
    attrsOrChild,
    children,
  );
}

function headerElement(...children: Array<CHILDREN_MAP["header"]>): ELEMENT_MAP["header"];
function headerElement(attributes: ATTRIBUTE_MAP["header"], ...children: Array<CHILDREN_MAP["header"]>): ELEMENT_MAP["header"];
function headerElement(
  attrsOrChild: ATTRIBUTE_MAP["header"] | CHILDREN_MAP["header"] | Array<CHILDREN_MAP["header"]>,
  ...children: Array<CHILDREN_MAP["header"]>
): ELEMENT_MAP["header"] {
  return createHTMLElement<"header", ATTRIBUTE_MAP["header"], CHILDREN_MAP["header"]>(
    "header",
    attrsOrChild,
    children,
  );
}

function hgroupElement(...children: Array<CHILDREN_MAP["hgroup"]>): ELEMENT_MAP["hgroup"];
function hgroupElement(attributes: ATTRIBUTE_MAP["hgroup"], ...children: Array<CHILDREN_MAP["hgroup"]>): ELEMENT_MAP["hgroup"];
function hgroupElement(
  attrsOrChild: ATTRIBUTE_MAP["hgroup"] | CHILDREN_MAP["hgroup"] | Array<CHILDREN_MAP["hgroup"]>,
  ...children: Array<CHILDREN_MAP["hgroup"]>
): ELEMENT_MAP["hgroup"] {
  return createHTMLElement<"hgroup", ATTRIBUTE_MAP["hgroup"], CHILDREN_MAP["hgroup"]>(
    "hgroup",
    attrsOrChild,
    children,
  );
}
function hrElement(attrs?: ATTRIBUTE_MAP["hr"]): ELEMENT_MAP["hr"] {
  return new VoidBaseHTMLElement("hr", attrs ?? {} as ATTRIBUTE_MAP["hr"]);
}


function htmlElement(...children: Array<CHILDREN_MAP["html"]>): ELEMENT_MAP["html"];
function htmlElement(attributes: ATTRIBUTE_MAP["html"], ...children: Array<CHILDREN_MAP["html"]>): ELEMENT_MAP["html"];
function htmlElement(
  attrsOrChild: ATTRIBUTE_MAP["html"] | CHILDREN_MAP["html"] | Array<CHILDREN_MAP["html"]>,
  ...children: Array<CHILDREN_MAP["html"]>
): ELEMENT_MAP["html"] {
  return createHTMLElement<"html", ATTRIBUTE_MAP["html"], CHILDREN_MAP["html"]>(
    "html",
    attrsOrChild,
    children,
  );
}

function iElement(...children: Array<CHILDREN_MAP["i"]>): ELEMENT_MAP["i"];
function iElement(attributes: ATTRIBUTE_MAP["i"], ...children: Array<CHILDREN_MAP["i"]>): ELEMENT_MAP["i"];
function iElement(
  attrsOrChild: ATTRIBUTE_MAP["i"] | CHILDREN_MAP["i"] | Array<CHILDREN_MAP["i"]>,
  ...children: Array<CHILDREN_MAP["i"]>
): ELEMENT_MAP["i"] {
  return createHTMLElement<"i", ATTRIBUTE_MAP["i"], CHILDREN_MAP["i"]>(
    "i",
    attrsOrChild,
    children,
  );
}

function iframeElement(...children: Array<CHILDREN_MAP["iframe"]>): ELEMENT_MAP["iframe"];
function iframeElement(attributes: ATTRIBUTE_MAP["iframe"], ...children: Array<CHILDREN_MAP["iframe"]>): ELEMENT_MAP["iframe"];
function iframeElement(
  attrsOrChild: ATTRIBUTE_MAP["iframe"] | CHILDREN_MAP["iframe"] | Array<CHILDREN_MAP["iframe"]>,
  ...children: Array<CHILDREN_MAP["iframe"]>
): ELEMENT_MAP["iframe"] {
  return createHTMLElement<"iframe", ATTRIBUTE_MAP["iframe"], CHILDREN_MAP["iframe"]>(
    "iframe",
    attrsOrChild,
    children,
  );
}
function imgElement(attrs?: ATTRIBUTE_MAP["img"]): ELEMENT_MAP["img"] {
  return new VoidBaseHTMLElement("img", attrs ?? {} as ATTRIBUTE_MAP["img"]);
}

function inputElement(attrs?: ATTRIBUTE_MAP["input"]): ELEMENT_MAP["input"] {
  return new VoidBaseHTMLElement("input", attrs ?? {} as ATTRIBUTE_MAP["input"]);
}


function insElement(...children: Array<CHILDREN_MAP["ins"]>): ELEMENT_MAP["ins"];
function insElement(attributes: ATTRIBUTE_MAP["ins"], ...children: Array<CHILDREN_MAP["ins"]>): ELEMENT_MAP["ins"];
function insElement(
  attrsOrChild: ATTRIBUTE_MAP["ins"] | CHILDREN_MAP["ins"] | Array<CHILDREN_MAP["ins"]>,
  ...children: Array<CHILDREN_MAP["ins"]>
): ELEMENT_MAP["ins"] {
  return createHTMLElement<"ins", ATTRIBUTE_MAP["ins"], CHILDREN_MAP["ins"]>(
    "ins",
    attrsOrChild,
    children,
  );
}

function kbdElement(...children: Array<CHILDREN_MAP["kbd"]>): ELEMENT_MAP["kbd"];
function kbdElement(attributes: ATTRIBUTE_MAP["kbd"], ...children: Array<CHILDREN_MAP["kbd"]>): ELEMENT_MAP["kbd"];
function kbdElement(
  attrsOrChild: ATTRIBUTE_MAP["kbd"] | CHILDREN_MAP["kbd"] | Array<CHILDREN_MAP["kbd"]>,
  ...children: Array<CHILDREN_MAP["kbd"]>
): ELEMENT_MAP["kbd"] {
  return createHTMLElement<"kbd", ATTRIBUTE_MAP["kbd"], CHILDREN_MAP["kbd"]>(
    "kbd",
    attrsOrChild,
    children,
  );
}

function labelElement(...children: Array<CHILDREN_MAP["label"]>): ELEMENT_MAP["label"];
function labelElement(attributes: ATTRIBUTE_MAP["label"], ...children: Array<CHILDREN_MAP["label"]>): ELEMENT_MAP["label"];
function labelElement(
  attrsOrChild: ATTRIBUTE_MAP["label"] | CHILDREN_MAP["label"] | Array<CHILDREN_MAP["label"]>,
  ...children: Array<CHILDREN_MAP["label"]>
): ELEMENT_MAP["label"] {
  return createHTMLElement<"label", ATTRIBUTE_MAP["label"], CHILDREN_MAP["label"]>(
    "label",
    attrsOrChild,
    children,
  );
}

function legendElement(...children: Array<CHILDREN_MAP["legend"]>): ELEMENT_MAP["legend"];
function legendElement(attributes: ATTRIBUTE_MAP["legend"], ...children: Array<CHILDREN_MAP["legend"]>): ELEMENT_MAP["legend"];
function legendElement(
  attrsOrChild: ATTRIBUTE_MAP["legend"] | CHILDREN_MAP["legend"] | Array<CHILDREN_MAP["legend"]>,
  ...children: Array<CHILDREN_MAP["legend"]>
): ELEMENT_MAP["legend"] {
  return createHTMLElement<"legend", ATTRIBUTE_MAP["legend"], CHILDREN_MAP["legend"]>(
    "legend",
    attrsOrChild,
    children,
  );
}

function liElement(...children: Array<CHILDREN_MAP["li"]>): ELEMENT_MAP["li"];
function liElement(attributes: ATTRIBUTE_MAP["li"], ...children: Array<CHILDREN_MAP["li"]>): ELEMENT_MAP["li"];
function liElement(
  attrsOrChild: ATTRIBUTE_MAP["li"] | CHILDREN_MAP["li"] | Array<CHILDREN_MAP["li"]>,
  ...children: Array<CHILDREN_MAP["li"]>
): ELEMENT_MAP["li"] {
  return createHTMLElement<"li", ATTRIBUTE_MAP["li"], CHILDREN_MAP["li"]>(
    "li",
    attrsOrChild,
    children,
  );
}
function linkElement(attrs?: ATTRIBUTE_MAP["link"]): ELEMENT_MAP["link"] {
  return new VoidBaseHTMLElement("link", attrs ?? {} as ATTRIBUTE_MAP["link"]);
}


function mainElement(...children: Array<CHILDREN_MAP["main"]>): ELEMENT_MAP["main"];
function mainElement(attributes: ATTRIBUTE_MAP["main"], ...children: Array<CHILDREN_MAP["main"]>): ELEMENT_MAP["main"];
function mainElement(
  attrsOrChild: ATTRIBUTE_MAP["main"] | CHILDREN_MAP["main"] | Array<CHILDREN_MAP["main"]>,
  ...children: Array<CHILDREN_MAP["main"]>
): ELEMENT_MAP["main"] {
  return createHTMLElement<"main", ATTRIBUTE_MAP["main"], CHILDREN_MAP["main"]>(
    "main",
    attrsOrChild,
    children,
  );
}

function mapElement(attributes: ATTRIBUTE_MAP["map"], ...children: Array<CHILDREN_MAP["map"]>): ELEMENT_MAP["map"];
function mapElement(
  attrsOrChild: ATTRIBUTE_MAP["map"] | CHILDREN_MAP["map"] | Array<CHILDREN_MAP["map"]>,
  ...children: Array<CHILDREN_MAP["map"]>
): ELEMENT_MAP["map"] {
  return createHTMLElement<"map", ATTRIBUTE_MAP["map"], CHILDREN_MAP["map"]>(
    "map",
    attrsOrChild,
    children,
  );
}

function markElement(...children: Array<CHILDREN_MAP["mark"]>): ELEMENT_MAP["mark"];
function markElement(attributes: ATTRIBUTE_MAP["mark"], ...children: Array<CHILDREN_MAP["mark"]>): ELEMENT_MAP["mark"];
function markElement(
  attrsOrChild: ATTRIBUTE_MAP["mark"] | CHILDREN_MAP["mark"] | Array<CHILDREN_MAP["mark"]>,
  ...children: Array<CHILDREN_MAP["mark"]>
): ELEMENT_MAP["mark"] {
  return createHTMLElement<"mark", ATTRIBUTE_MAP["mark"], CHILDREN_MAP["mark"]>(
    "mark",
    attrsOrChild,
    children,
  );
}

function mathElement(...children: Array<CHILDREN_MAP["math"]>): ELEMENT_MAP["math"];
function mathElement(attributes: ATTRIBUTE_MAP["math"], ...children: Array<CHILDREN_MAP["math"]>): ELEMENT_MAP["math"];
function mathElement(
  attrsOrChild: ATTRIBUTE_MAP["math"] | CHILDREN_MAP["math"] | Array<CHILDREN_MAP["math"]>,
  ...children: Array<CHILDREN_MAP["math"]>
): ELEMENT_MAP["math"] {
  return createHTMLElement<"math", ATTRIBUTE_MAP["math"], CHILDREN_MAP["math"]>(
    "math",
    attrsOrChild,
    children,
  );
}

function menuElement(...children: Array<CHILDREN_MAP["menu"]>): ELEMENT_MAP["menu"];
function menuElement(attributes: ATTRIBUTE_MAP["menu"], ...children: Array<CHILDREN_MAP["menu"]>): ELEMENT_MAP["menu"];
function menuElement(
  attrsOrChild: ATTRIBUTE_MAP["menu"] | CHILDREN_MAP["menu"] | Array<CHILDREN_MAP["menu"]>,
  ...children: Array<CHILDREN_MAP["menu"]>
): ELEMENT_MAP["menu"] {
  return createHTMLElement<"menu", ATTRIBUTE_MAP["menu"], CHILDREN_MAP["menu"]>(
    "menu",
    attrsOrChild,
    children,
  );
}
function metaElement(attrs?: ATTRIBUTE_MAP["meta"]): ELEMENT_MAP["meta"] {
  return new VoidBaseHTMLElement("meta", attrs ?? {} as ATTRIBUTE_MAP["meta"]);
}


function meterElement(...children: Array<CHILDREN_MAP["meter"]>): ELEMENT_MAP["meter"];
function meterElement(attributes: ATTRIBUTE_MAP["meter"], ...children: Array<CHILDREN_MAP["meter"]>): ELEMENT_MAP["meter"];
function meterElement(
  attrsOrChild: ATTRIBUTE_MAP["meter"] | CHILDREN_MAP["meter"] | Array<CHILDREN_MAP["meter"]>,
  ...children: Array<CHILDREN_MAP["meter"]>
): ELEMENT_MAP["meter"] {
  return createHTMLElement<"meter", ATTRIBUTE_MAP["meter"], CHILDREN_MAP["meter"]>(
    "meter",
    attrsOrChild,
    children,
  );
}

function navElement(...children: Array<CHILDREN_MAP["nav"]>): ELEMENT_MAP["nav"];
function navElement(attributes: ATTRIBUTE_MAP["nav"], ...children: Array<CHILDREN_MAP["nav"]>): ELEMENT_MAP["nav"];
function navElement(
  attrsOrChild: ATTRIBUTE_MAP["nav"] | CHILDREN_MAP["nav"] | Array<CHILDREN_MAP["nav"]>,
  ...children: Array<CHILDREN_MAP["nav"]>
): ELEMENT_MAP["nav"] {
  return createHTMLElement<"nav", ATTRIBUTE_MAP["nav"], CHILDREN_MAP["nav"]>(
    "nav",
    attrsOrChild,
    children,
  );
}

function noscriptElement(...children: Array<CHILDREN_MAP["noscript"]>): ELEMENT_MAP["noscript"];
function noscriptElement(attributes: ATTRIBUTE_MAP["noscript"], ...children: Array<CHILDREN_MAP["noscript"]>): ELEMENT_MAP["noscript"];
function noscriptElement(
  attrsOrChild: ATTRIBUTE_MAP["noscript"] | CHILDREN_MAP["noscript"] | Array<CHILDREN_MAP["noscript"]>,
  ...children: Array<CHILDREN_MAP["noscript"]>
): ELEMENT_MAP["noscript"] {
  return createHTMLElement<"noscript", ATTRIBUTE_MAP["noscript"], CHILDREN_MAP["noscript"]>(
    "noscript",
    attrsOrChild,
    children,
  );
}

function objectElement(...children: Array<CHILDREN_MAP["object"]>): ELEMENT_MAP["object"];
function objectElement(attributes: ATTRIBUTE_MAP["object"], ...children: Array<CHILDREN_MAP["object"]>): ELEMENT_MAP["object"];
function objectElement(
  attrsOrChild: ATTRIBUTE_MAP["object"] | CHILDREN_MAP["object"] | Array<CHILDREN_MAP["object"]>,
  ...children: Array<CHILDREN_MAP["object"]>
): ELEMENT_MAP["object"] {
  return createHTMLElement<"object", ATTRIBUTE_MAP["object"], CHILDREN_MAP["object"]>(
    "object",
    attrsOrChild,
    children,
  );
}

function olElement(...children: Array<CHILDREN_MAP["ol"]>): ELEMENT_MAP["ol"];
function olElement(attributes: ATTRIBUTE_MAP["ol"], ...children: Array<CHILDREN_MAP["ol"]>): ELEMENT_MAP["ol"];
function olElement(
  attrsOrChild: ATTRIBUTE_MAP["ol"] | CHILDREN_MAP["ol"] | Array<CHILDREN_MAP["ol"]>,
  ...children: Array<CHILDREN_MAP["ol"]>
): ELEMENT_MAP["ol"] {
  return createHTMLElement<"ol", ATTRIBUTE_MAP["ol"], CHILDREN_MAP["ol"]>(
    "ol",
    attrsOrChild,
    children,
  );
}

function optgroupElement(...children: Array<CHILDREN_MAP["optgroup"]>): ELEMENT_MAP["optgroup"];
function optgroupElement(attributes: ATTRIBUTE_MAP["optgroup"], ...children: Array<CHILDREN_MAP["optgroup"]>): ELEMENT_MAP["optgroup"];
function optgroupElement(
  attrsOrChild: ATTRIBUTE_MAP["optgroup"] | CHILDREN_MAP["optgroup"] | Array<CHILDREN_MAP["optgroup"]>,
  ...children: Array<CHILDREN_MAP["optgroup"]>
): ELEMENT_MAP["optgroup"] {
  return createHTMLElement<"optgroup", ATTRIBUTE_MAP["optgroup"], CHILDREN_MAP["optgroup"]>(
    "optgroup",
    attrsOrChild,
    children,
  );
}

function optionElement(...children: Array<CHILDREN_MAP["option"]>): ELEMENT_MAP["option"];
function optionElement(attributes: ATTRIBUTE_MAP["option"], ...children: Array<CHILDREN_MAP["option"]>): ELEMENT_MAP["option"];
function optionElement(
  attrsOrChild: ATTRIBUTE_MAP["option"] | CHILDREN_MAP["option"] | Array<CHILDREN_MAP["option"]>,
  ...children: Array<CHILDREN_MAP["option"]>
): ELEMENT_MAP["option"] {
  return createHTMLElement<"option", ATTRIBUTE_MAP["option"], CHILDREN_MAP["option"]>(
    "option",
    attrsOrChild,
    children,
  );
}

function outputElement(...children: Array<CHILDREN_MAP["output"]>): ELEMENT_MAP["output"];
function outputElement(attributes: ATTRIBUTE_MAP["output"], ...children: Array<CHILDREN_MAP["output"]>): ELEMENT_MAP["output"];
function outputElement(
  attrsOrChild: ATTRIBUTE_MAP["output"] | CHILDREN_MAP["output"] | Array<CHILDREN_MAP["output"]>,
  ...children: Array<CHILDREN_MAP["output"]>
): ELEMENT_MAP["output"] {
  return createHTMLElement<"output", ATTRIBUTE_MAP["output"], CHILDREN_MAP["output"]>(
    "output",
    attrsOrChild,
    children,
  );
}

function pElement(...children: Array<CHILDREN_MAP["p"]>): ELEMENT_MAP["p"];
function pElement(attributes: ATTRIBUTE_MAP["p"], ...children: Array<CHILDREN_MAP["p"]>): ELEMENT_MAP["p"];
function pElement(
  attrsOrChild: ATTRIBUTE_MAP["p"] | CHILDREN_MAP["p"] | Array<CHILDREN_MAP["p"]>,
  ...children: Array<CHILDREN_MAP["p"]>
): ELEMENT_MAP["p"] {
  return createHTMLElement<"p", ATTRIBUTE_MAP["p"], CHILDREN_MAP["p"]>(
    "p",
    attrsOrChild,
    children,
  );
}

function pictureElement(...children: Array<CHILDREN_MAP["picture"]>): ELEMENT_MAP["picture"];
function pictureElement(attributes: ATTRIBUTE_MAP["picture"], ...children: Array<CHILDREN_MAP["picture"]>): ELEMENT_MAP["picture"];
function pictureElement(
  attrsOrChild: ATTRIBUTE_MAP["picture"] | CHILDREN_MAP["picture"] | Array<CHILDREN_MAP["picture"]>,
  ...children: Array<CHILDREN_MAP["picture"]>
): ELEMENT_MAP["picture"] {
  return createHTMLElement<"picture", ATTRIBUTE_MAP["picture"], CHILDREN_MAP["picture"]>(
    "picture",
    attrsOrChild,
    children,
  );
}

function portalElement(...children: Array<CHILDREN_MAP["portal"]>): ELEMENT_MAP["portal"];
function portalElement(attributes: ATTRIBUTE_MAP["portal"], ...children: Array<CHILDREN_MAP["portal"]>): ELEMENT_MAP["portal"];
function portalElement(
  attrsOrChild: ATTRIBUTE_MAP["portal"] | CHILDREN_MAP["portal"] | Array<CHILDREN_MAP["portal"]>,
  ...children: Array<CHILDREN_MAP["portal"]>
): ELEMENT_MAP["portal"] {
  return createHTMLElement<"portal", ATTRIBUTE_MAP["portal"], CHILDREN_MAP["portal"]>(
    "portal",
    attrsOrChild,
    children,
  );
}

function preElement(...children: Array<CHILDREN_MAP["pre"]>): ELEMENT_MAP["pre"];
function preElement(attributes: ATTRIBUTE_MAP["pre"], ...children: Array<CHILDREN_MAP["pre"]>): ELEMENT_MAP["pre"];
function preElement(
  attrsOrChild: ATTRIBUTE_MAP["pre"] | CHILDREN_MAP["pre"] | Array<CHILDREN_MAP["pre"]>,
  ...children: Array<CHILDREN_MAP["pre"]>
): ELEMENT_MAP["pre"] {
  return createHTMLElement<"pre", ATTRIBUTE_MAP["pre"], CHILDREN_MAP["pre"]>(
    "pre",
    attrsOrChild,
    children,
  );
}

function progressElement(...children: Array<CHILDREN_MAP["progress"]>): ELEMENT_MAP["progress"];
function progressElement(attributes: ATTRIBUTE_MAP["progress"], ...children: Array<CHILDREN_MAP["progress"]>): ELEMENT_MAP["progress"];
function progressElement(
  attrsOrChild: ATTRIBUTE_MAP["progress"] | CHILDREN_MAP["progress"] | Array<CHILDREN_MAP["progress"]>,
  ...children: Array<CHILDREN_MAP["progress"]>
): ELEMENT_MAP["progress"] {
  return createHTMLElement<"progress", ATTRIBUTE_MAP["progress"], CHILDREN_MAP["progress"]>(
    "progress",
    attrsOrChild,
    children,
  );
}

function qElement(...children: Array<CHILDREN_MAP["q"]>): ELEMENT_MAP["q"];
function qElement(attributes: ATTRIBUTE_MAP["q"], ...children: Array<CHILDREN_MAP["q"]>): ELEMENT_MAP["q"];
function qElement(
  attrsOrChild: ATTRIBUTE_MAP["q"] | CHILDREN_MAP["q"] | Array<CHILDREN_MAP["q"]>,
  ...children: Array<CHILDREN_MAP["q"]>
): ELEMENT_MAP["q"] {
  return createHTMLElement<"q", ATTRIBUTE_MAP["q"], CHILDREN_MAP["q"]>(
    "q",
    attrsOrChild,
    children,
  );
}

function rpElement(...children: Array<CHILDREN_MAP["rp"]>): ELEMENT_MAP["rp"];
function rpElement(attributes: ATTRIBUTE_MAP["rp"], ...children: Array<CHILDREN_MAP["rp"]>): ELEMENT_MAP["rp"];
function rpElement(
  attrsOrChild: ATTRIBUTE_MAP["rp"] | CHILDREN_MAP["rp"] | Array<CHILDREN_MAP["rp"]>,
  ...children: Array<CHILDREN_MAP["rp"]>
): ELEMENT_MAP["rp"] {
  return createHTMLElement<"rp", ATTRIBUTE_MAP["rp"], CHILDREN_MAP["rp"]>(
    "rp",
    attrsOrChild,
    children,
  );
}

function rtElement(...children: Array<CHILDREN_MAP["rt"]>): ELEMENT_MAP["rt"];
function rtElement(attributes: ATTRIBUTE_MAP["rt"], ...children: Array<CHILDREN_MAP["rt"]>): ELEMENT_MAP["rt"];
function rtElement(
  attrsOrChild: ATTRIBUTE_MAP["rt"] | CHILDREN_MAP["rt"] | Array<CHILDREN_MAP["rt"]>,
  ...children: Array<CHILDREN_MAP["rt"]>
): ELEMENT_MAP["rt"] {
  return createHTMLElement<"rt", ATTRIBUTE_MAP["rt"], CHILDREN_MAP["rt"]>(
    "rt",
    attrsOrChild,
    children,
  );
}

function rubyElement(...children: Array<CHILDREN_MAP["ruby"]>): ELEMENT_MAP["ruby"];
function rubyElement(attributes: ATTRIBUTE_MAP["ruby"], ...children: Array<CHILDREN_MAP["ruby"]>): ELEMENT_MAP["ruby"];
function rubyElement(
  attrsOrChild: ATTRIBUTE_MAP["ruby"] | CHILDREN_MAP["ruby"] | Array<CHILDREN_MAP["ruby"]>,
  ...children: Array<CHILDREN_MAP["ruby"]>
): ELEMENT_MAP["ruby"] {
  return createHTMLElement<"ruby", ATTRIBUTE_MAP["ruby"], CHILDREN_MAP["ruby"]>(
    "ruby",
    attrsOrChild,
    children,
  );
}

function sElement(...children: Array<CHILDREN_MAP["s"]>): ELEMENT_MAP["s"];
function sElement(attributes: ATTRIBUTE_MAP["s"], ...children: Array<CHILDREN_MAP["s"]>): ELEMENT_MAP["s"];
function sElement(
  attrsOrChild: ATTRIBUTE_MAP["s"] | CHILDREN_MAP["s"] | Array<CHILDREN_MAP["s"]>,
  ...children: Array<CHILDREN_MAP["s"]>
): ELEMENT_MAP["s"] {
  return createHTMLElement<"s", ATTRIBUTE_MAP["s"], CHILDREN_MAP["s"]>(
    "s",
    attrsOrChild,
    children,
  );
}

function sampElement(...children: Array<CHILDREN_MAP["samp"]>): ELEMENT_MAP["samp"];
function sampElement(attributes: ATTRIBUTE_MAP["samp"], ...children: Array<CHILDREN_MAP["samp"]>): ELEMENT_MAP["samp"];
function sampElement(
  attrsOrChild: ATTRIBUTE_MAP["samp"] | CHILDREN_MAP["samp"] | Array<CHILDREN_MAP["samp"]>,
  ...children: Array<CHILDREN_MAP["samp"]>
): ELEMENT_MAP["samp"] {
  return createHTMLElement<"samp", ATTRIBUTE_MAP["samp"], CHILDREN_MAP["samp"]>(
    "samp",
    attrsOrChild,
    children,
  );
}

function scriptElement(...children: Array<CHILDREN_MAP["script"]>): ELEMENT_MAP["script"];
function scriptElement(attributes: ATTRIBUTE_MAP["script"], ...children: Array<CHILDREN_MAP["script"]>): ELEMENT_MAP["script"];
function scriptElement(
  attrsOrChild: ATTRIBUTE_MAP["script"] | CHILDREN_MAP["script"] | Array<CHILDREN_MAP["script"]>,
  ...children: Array<CHILDREN_MAP["script"]>
): ELEMENT_MAP["script"] {
  return createHTMLElement<"script", ATTRIBUTE_MAP["script"], CHILDREN_MAP["script"]>(
    "script",
    attrsOrChild,
    children,
  );
}

function searchElement(...children: Array<CHILDREN_MAP["search"]>): ELEMENT_MAP["search"];
function searchElement(attributes: ATTRIBUTE_MAP["search"], ...children: Array<CHILDREN_MAP["search"]>): ELEMENT_MAP["search"];
function searchElement(
  attrsOrChild: ATTRIBUTE_MAP["search"] | CHILDREN_MAP["search"] | Array<CHILDREN_MAP["search"]>,
  ...children: Array<CHILDREN_MAP["search"]>
): ELEMENT_MAP["search"] {
  return createHTMLElement<"search", ATTRIBUTE_MAP["search"], CHILDREN_MAP["search"]>(
    "search",
    attrsOrChild,
    children,
  );
}

function sectionElement(...children: Array<CHILDREN_MAP["section"]>): ELEMENT_MAP["section"];
function sectionElement(attributes: ATTRIBUTE_MAP["section"], ...children: Array<CHILDREN_MAP["section"]>): ELEMENT_MAP["section"];
function sectionElement(
  attrsOrChild: ATTRIBUTE_MAP["section"] | CHILDREN_MAP["section"] | Array<CHILDREN_MAP["section"]>,
  ...children: Array<CHILDREN_MAP["section"]>
): ELEMENT_MAP["section"] {
  return createHTMLElement<"section", ATTRIBUTE_MAP["section"], CHILDREN_MAP["section"]>(
    "section",
    attrsOrChild,
    children,
  );
}

function selectElement(...children: Array<CHILDREN_MAP["select"]>): ELEMENT_MAP["select"];
function selectElement(attributes: ATTRIBUTE_MAP["select"], ...children: Array<CHILDREN_MAP["select"]>): ELEMENT_MAP["select"];
function selectElement(
  attrsOrChild: ATTRIBUTE_MAP["select"] | CHILDREN_MAP["select"] | Array<CHILDREN_MAP["select"]>,
  ...children: Array<CHILDREN_MAP["select"]>
): ELEMENT_MAP["select"] {
  return createHTMLElement<"select", ATTRIBUTE_MAP["select"], CHILDREN_MAP["select"]>(
    "select",
    attrsOrChild,
    children,
  );
}

function slotElement(attributes: ATTRIBUTE_MAP["slot"], ...children: Array<CHILDREN_MAP["slot"]>): ELEMENT_MAP["slot"];
function slotElement(
  attrsOrChild: ATTRIBUTE_MAP["slot"] | CHILDREN_MAP["slot"] | Array<CHILDREN_MAP["slot"]>,
  ...children: Array<CHILDREN_MAP["slot"]>
): ELEMENT_MAP["slot"] {
  return createHTMLElement<"slot", ATTRIBUTE_MAP["slot"], CHILDREN_MAP["slot"]>(
    "slot",
    attrsOrChild,
    children,
  );
}

function smallElement(...children: Array<CHILDREN_MAP["small"]>): ELEMENT_MAP["small"];
function smallElement(attributes: ATTRIBUTE_MAP["small"], ...children: Array<CHILDREN_MAP["small"]>): ELEMENT_MAP["small"];
function smallElement(
  attrsOrChild: ATTRIBUTE_MAP["small"] | CHILDREN_MAP["small"] | Array<CHILDREN_MAP["small"]>,
  ...children: Array<CHILDREN_MAP["small"]>
): ELEMENT_MAP["small"] {
  return createHTMLElement<"small", ATTRIBUTE_MAP["small"], CHILDREN_MAP["small"]>(
    "small",
    attrsOrChild,
    children,
  );
}
function sourceElement(attrs?: ATTRIBUTE_MAP["source"]): ELEMENT_MAP["source"] {
  return new VoidBaseHTMLElement("source", attrs ?? {} as ATTRIBUTE_MAP["source"]);
}


function spanElement(...children: Array<CHILDREN_MAP["span"]>): ELEMENT_MAP["span"];
function spanElement(attributes: ATTRIBUTE_MAP["span"], ...children: Array<CHILDREN_MAP["span"]>): ELEMENT_MAP["span"];
function spanElement(
  attrsOrChild: ATTRIBUTE_MAP["span"] | CHILDREN_MAP["span"] | Array<CHILDREN_MAP["span"]>,
  ...children: Array<CHILDREN_MAP["span"]>
): ELEMENT_MAP["span"] {
  return createHTMLElement<"span", ATTRIBUTE_MAP["span"], CHILDREN_MAP["span"]>(
    "span",
    attrsOrChild,
    children,
  );
}

function strongElement(...children: Array<CHILDREN_MAP["strong"]>): ELEMENT_MAP["strong"];
function strongElement(attributes: ATTRIBUTE_MAP["strong"], ...children: Array<CHILDREN_MAP["strong"]>): ELEMENT_MAP["strong"];
function strongElement(
  attrsOrChild: ATTRIBUTE_MAP["strong"] | CHILDREN_MAP["strong"] | Array<CHILDREN_MAP["strong"]>,
  ...children: Array<CHILDREN_MAP["strong"]>
): ELEMENT_MAP["strong"] {
  return createHTMLElement<"strong", ATTRIBUTE_MAP["strong"], CHILDREN_MAP["strong"]>(
    "strong",
    attrsOrChild,
    children,
  );
}

function styleElement(...children: Array<CHILDREN_MAP["style"]>): ELEMENT_MAP["style"];
function styleElement(attributes: ATTRIBUTE_MAP["style"], ...children: Array<CHILDREN_MAP["style"]>): ELEMENT_MAP["style"];
function styleElement(
  attrsOrChild: ATTRIBUTE_MAP["style"] | CHILDREN_MAP["style"] | Array<CHILDREN_MAP["style"]>,
  ...children: Array<CHILDREN_MAP["style"]>
): ELEMENT_MAP["style"] {
  return createHTMLElement<"style", ATTRIBUTE_MAP["style"], CHILDREN_MAP["style"]>(
    "style",
    attrsOrChild,
    children,
  );
}

function subElement(...children: Array<CHILDREN_MAP["sub"]>): ELEMENT_MAP["sub"];
function subElement(attributes: ATTRIBUTE_MAP["sub"], ...children: Array<CHILDREN_MAP["sub"]>): ELEMENT_MAP["sub"];
function subElement(
  attrsOrChild: ATTRIBUTE_MAP["sub"] | CHILDREN_MAP["sub"] | Array<CHILDREN_MAP["sub"]>,
  ...children: Array<CHILDREN_MAP["sub"]>
): ELEMENT_MAP["sub"] {
  return createHTMLElement<"sub", ATTRIBUTE_MAP["sub"], CHILDREN_MAP["sub"]>(
    "sub",
    attrsOrChild,
    children,
  );
}

function summaryElement(...children: Array<CHILDREN_MAP["summary"]>): ELEMENT_MAP["summary"];
function summaryElement(attributes: ATTRIBUTE_MAP["summary"], ...children: Array<CHILDREN_MAP["summary"]>): ELEMENT_MAP["summary"];
function summaryElement(
  attrsOrChild: ATTRIBUTE_MAP["summary"] | CHILDREN_MAP["summary"] | Array<CHILDREN_MAP["summary"]>,
  ...children: Array<CHILDREN_MAP["summary"]>
): ELEMENT_MAP["summary"] {
  return createHTMLElement<"summary", ATTRIBUTE_MAP["summary"], CHILDREN_MAP["summary"]>(
    "summary",
    attrsOrChild,
    children,
  );
}

function supElement(...children: Array<CHILDREN_MAP["sup"]>): ELEMENT_MAP["sup"];
function supElement(attributes: ATTRIBUTE_MAP["sup"], ...children: Array<CHILDREN_MAP["sup"]>): ELEMENT_MAP["sup"];
function supElement(
  attrsOrChild: ATTRIBUTE_MAP["sup"] | CHILDREN_MAP["sup"] | Array<CHILDREN_MAP["sup"]>,
  ...children: Array<CHILDREN_MAP["sup"]>
): ELEMENT_MAP["sup"] {
  return createHTMLElement<"sup", ATTRIBUTE_MAP["sup"], CHILDREN_MAP["sup"]>(
    "sup",
    attrsOrChild,
    children,
  );
}

function svgElement(...children: Array<CHILDREN_MAP["svg"]>): ELEMENT_MAP["svg"];
function svgElement(attributes: ATTRIBUTE_MAP["svg"], ...children: Array<CHILDREN_MAP["svg"]>): ELEMENT_MAP["svg"];
function svgElement(
  attrsOrChild: ATTRIBUTE_MAP["svg"] | CHILDREN_MAP["svg"] | Array<CHILDREN_MAP["svg"]>,
  ...children: Array<CHILDREN_MAP["svg"]>
): ELEMENT_MAP["svg"] {
  return createHTMLElement<"svg", ATTRIBUTE_MAP["svg"], CHILDREN_MAP["svg"]>(
    "svg",
    attrsOrChild,
    children,
  );
}

function tableElement(...children: Array<CHILDREN_MAP["table"]>): ELEMENT_MAP["table"];
function tableElement(attributes: ATTRIBUTE_MAP["table"], ...children: Array<CHILDREN_MAP["table"]>): ELEMENT_MAP["table"];
function tableElement(
  attrsOrChild: ATTRIBUTE_MAP["table"] | CHILDREN_MAP["table"] | Array<CHILDREN_MAP["table"]>,
  ...children: Array<CHILDREN_MAP["table"]>
): ELEMENT_MAP["table"] {
  return createHTMLElement<"table", ATTRIBUTE_MAP["table"], CHILDREN_MAP["table"]>(
    "table",
    attrsOrChild,
    children,
  );
}

function tbodyElement(...children: Array<CHILDREN_MAP["tbody"]>): ELEMENT_MAP["tbody"];
function tbodyElement(attributes: ATTRIBUTE_MAP["tbody"], ...children: Array<CHILDREN_MAP["tbody"]>): ELEMENT_MAP["tbody"];
function tbodyElement(
  attrsOrChild: ATTRIBUTE_MAP["tbody"] | CHILDREN_MAP["tbody"] | Array<CHILDREN_MAP["tbody"]>,
  ...children: Array<CHILDREN_MAP["tbody"]>
): ELEMENT_MAP["tbody"] {
  return createHTMLElement<"tbody", ATTRIBUTE_MAP["tbody"], CHILDREN_MAP["tbody"]>(
    "tbody",
    attrsOrChild,
    children,
  );
}

function tdElement(...children: Array<CHILDREN_MAP["td"]>): ELEMENT_MAP["td"];
function tdElement(attributes: ATTRIBUTE_MAP["td"], ...children: Array<CHILDREN_MAP["td"]>): ELEMENT_MAP["td"];
function tdElement(
  attrsOrChild: ATTRIBUTE_MAP["td"] | CHILDREN_MAP["td"] | Array<CHILDREN_MAP["td"]>,
  ...children: Array<CHILDREN_MAP["td"]>
): ELEMENT_MAP["td"] {
  return createHTMLElement<"td", ATTRIBUTE_MAP["td"], CHILDREN_MAP["td"]>(
    "td",
    attrsOrChild,
    children,
  );
}

function templateElement(...children: Array<CHILDREN_MAP["template"]>): ELEMENT_MAP["template"];
function templateElement(attributes: ATTRIBUTE_MAP["template"], ...children: Array<CHILDREN_MAP["template"]>): ELEMENT_MAP["template"];
function templateElement(
  attrsOrChild: ATTRIBUTE_MAP["template"] | CHILDREN_MAP["template"] | Array<CHILDREN_MAP["template"]>,
  ...children: Array<CHILDREN_MAP["template"]>
): ELEMENT_MAP["template"] {
  return createHTMLElement<"template", ATTRIBUTE_MAP["template"], CHILDREN_MAP["template"]>(
    "template",
    attrsOrChild,
    children,
  );
}

function textareaElement(...children: Array<CHILDREN_MAP["textarea"]>): ELEMENT_MAP["textarea"];
function textareaElement(attributes: ATTRIBUTE_MAP["textarea"], ...children: Array<CHILDREN_MAP["textarea"]>): ELEMENT_MAP["textarea"];
function textareaElement(
  attrsOrChild: ATTRIBUTE_MAP["textarea"] | CHILDREN_MAP["textarea"] | Array<CHILDREN_MAP["textarea"]>,
  ...children: Array<CHILDREN_MAP["textarea"]>
): ELEMENT_MAP["textarea"] {
  return createHTMLElement<"textarea", ATTRIBUTE_MAP["textarea"], CHILDREN_MAP["textarea"]>(
    "textarea",
    attrsOrChild,
    children,
  );
}

function tfootElement(...children: Array<CHILDREN_MAP["tfoot"]>): ELEMENT_MAP["tfoot"];
function tfootElement(attributes: ATTRIBUTE_MAP["tfoot"], ...children: Array<CHILDREN_MAP["tfoot"]>): ELEMENT_MAP["tfoot"];
function tfootElement(
  attrsOrChild: ATTRIBUTE_MAP["tfoot"] | CHILDREN_MAP["tfoot"] | Array<CHILDREN_MAP["tfoot"]>,
  ...children: Array<CHILDREN_MAP["tfoot"]>
): ELEMENT_MAP["tfoot"] {
  return createHTMLElement<"tfoot", ATTRIBUTE_MAP["tfoot"], CHILDREN_MAP["tfoot"]>(
    "tfoot",
    attrsOrChild,
    children,
  );
}

function thElement(...children: Array<CHILDREN_MAP["th"]>): ELEMENT_MAP["th"];
function thElement(attributes: ATTRIBUTE_MAP["th"], ...children: Array<CHILDREN_MAP["th"]>): ELEMENT_MAP["th"];
function thElement(
  attrsOrChild: ATTRIBUTE_MAP["th"] | CHILDREN_MAP["th"] | Array<CHILDREN_MAP["th"]>,
  ...children: Array<CHILDREN_MAP["th"]>
): ELEMENT_MAP["th"] {
  return createHTMLElement<"th", ATTRIBUTE_MAP["th"], CHILDREN_MAP["th"]>(
    "th",
    attrsOrChild,
    children,
  );
}

function theadElement(...children: Array<CHILDREN_MAP["thead"]>): ELEMENT_MAP["thead"];
function theadElement(attributes: ATTRIBUTE_MAP["thead"], ...children: Array<CHILDREN_MAP["thead"]>): ELEMENT_MAP["thead"];
function theadElement(
  attrsOrChild: ATTRIBUTE_MAP["thead"] | CHILDREN_MAP["thead"] | Array<CHILDREN_MAP["thead"]>,
  ...children: Array<CHILDREN_MAP["thead"]>
): ELEMENT_MAP["thead"] {
  return createHTMLElement<"thead", ATTRIBUTE_MAP["thead"], CHILDREN_MAP["thead"]>(
    "thead",
    attrsOrChild,
    children,
  );
}

function timeElement(...children: Array<CHILDREN_MAP["time"]>): ELEMENT_MAP["time"];
function timeElement(attributes: ATTRIBUTE_MAP["time"], ...children: Array<CHILDREN_MAP["time"]>): ELEMENT_MAP["time"];
function timeElement(
  attrsOrChild: ATTRIBUTE_MAP["time"] | CHILDREN_MAP["time"] | Array<CHILDREN_MAP["time"]>,
  ...children: Array<CHILDREN_MAP["time"]>
): ELEMENT_MAP["time"] {
  return createHTMLElement<"time", ATTRIBUTE_MAP["time"], CHILDREN_MAP["time"]>(
    "time",
    attrsOrChild,
    children,
  );
}

function titleElement(...children: Array<CHILDREN_MAP["title"]>): ELEMENT_MAP["title"];
function titleElement(attributes: ATTRIBUTE_MAP["title"], ...children: Array<CHILDREN_MAP["title"]>): ELEMENT_MAP["title"];
function titleElement(
  attrsOrChild: ATTRIBUTE_MAP["title"] | CHILDREN_MAP["title"] | Array<CHILDREN_MAP["title"]>,
  ...children: Array<CHILDREN_MAP["title"]>
): ELEMENT_MAP["title"] {
  return createHTMLElement<"title", ATTRIBUTE_MAP["title"], CHILDREN_MAP["title"]>(
    "title",
    attrsOrChild,
    children,
  );
}

function trElement(...children: Array<CHILDREN_MAP["tr"]>): ELEMENT_MAP["tr"];
function trElement(attributes: ATTRIBUTE_MAP["tr"], ...children: Array<CHILDREN_MAP["tr"]>): ELEMENT_MAP["tr"];
function trElement(
  attrsOrChild: ATTRIBUTE_MAP["tr"] | CHILDREN_MAP["tr"] | Array<CHILDREN_MAP["tr"]>,
  ...children: Array<CHILDREN_MAP["tr"]>
): ELEMENT_MAP["tr"] {
  return createHTMLElement<"tr", ATTRIBUTE_MAP["tr"], CHILDREN_MAP["tr"]>(
    "tr",
    attrsOrChild,
    children,
  );
}
function trackElement(attrs?: ATTRIBUTE_MAP["track"]): ELEMENT_MAP["track"] {
  return new VoidBaseHTMLElement("track", attrs ?? {} as ATTRIBUTE_MAP["track"]);
}


function uElement(...children: Array<CHILDREN_MAP["u"]>): ELEMENT_MAP["u"];
function uElement(attributes: ATTRIBUTE_MAP["u"], ...children: Array<CHILDREN_MAP["u"]>): ELEMENT_MAP["u"];
function uElement(
  attrsOrChild: ATTRIBUTE_MAP["u"] | CHILDREN_MAP["u"] | Array<CHILDREN_MAP["u"]>,
  ...children: Array<CHILDREN_MAP["u"]>
): ELEMENT_MAP["u"] {
  return createHTMLElement<"u", ATTRIBUTE_MAP["u"], CHILDREN_MAP["u"]>(
    "u",
    attrsOrChild,
    children,
  );
}

function ulElement(...children: Array<CHILDREN_MAP["ul"]>): ELEMENT_MAP["ul"];
function ulElement(attributes: ATTRIBUTE_MAP["ul"], ...children: Array<CHILDREN_MAP["ul"]>): ELEMENT_MAP["ul"];
function ulElement(
  attrsOrChild: ATTRIBUTE_MAP["ul"] | CHILDREN_MAP["ul"] | Array<CHILDREN_MAP["ul"]>,
  ...children: Array<CHILDREN_MAP["ul"]>
): ELEMENT_MAP["ul"] {
  return createHTMLElement<"ul", ATTRIBUTE_MAP["ul"], CHILDREN_MAP["ul"]>(
    "ul",
    attrsOrChild,
    children,
  );
}

function varElement(...children: Array<CHILDREN_MAP["var"]>): ELEMENT_MAP["var"];
function varElement(attributes: ATTRIBUTE_MAP["var"], ...children: Array<CHILDREN_MAP["var"]>): ELEMENT_MAP["var"];
function varElement(
  attrsOrChild: ATTRIBUTE_MAP["var"] | CHILDREN_MAP["var"] | Array<CHILDREN_MAP["var"]>,
  ...children: Array<CHILDREN_MAP["var"]>
): ELEMENT_MAP["var"] {
  return createHTMLElement<"var", ATTRIBUTE_MAP["var"], CHILDREN_MAP["var"]>(
    "var",
    attrsOrChild,
    children,
  );
}

function videoElement(...children: Array<CHILDREN_MAP["video"]>): ELEMENT_MAP["video"];
function videoElement(attributes: ATTRIBUTE_MAP["video"], ...children: Array<CHILDREN_MAP["video"]>): ELEMENT_MAP["video"];
function videoElement(
  attrsOrChild: ATTRIBUTE_MAP["video"] | CHILDREN_MAP["video"] | Array<CHILDREN_MAP["video"]>,
  ...children: Array<CHILDREN_MAP["video"]>
): ELEMENT_MAP["video"] {
  return createHTMLElement<"video", ATTRIBUTE_MAP["video"], CHILDREN_MAP["video"]>(
    "video",
    attrsOrChild,
    children,
  );
}
function wbrElement(attrs?: ATTRIBUTE_MAP["wbr"]): ELEMENT_MAP["wbr"] {
  return new VoidBaseHTMLElement("wbr", attrs ?? {} as ATTRIBUTE_MAP["wbr"]);
}


/** A type-safe builder for all HTML elements. */
export const h = {
  /** A type-safe builder for a HTML document. */
  document: documentElement,
  /** A type-safe builder for the `<!DOCTYPE html>` element. */
  doctype: doctypeElement,
  
  /** A type-safe builder for the `<a>` element. */
  a: aElement,
  
  /** A type-safe builder for the `<abbr>` element. */
  abbr: abbrElement,
  
  /** A type-safe builder for the `<address>` element. */
  address: addressElement,
  
  /** A type-safe builder for the `<area>` element. */
  area: areaElement,
  
  /** A type-safe builder for the `<article>` element. */
  article: articleElement,
  
  /** A type-safe builder for the `<aside>` element. */
  aside: asideElement,
  
  /** A type-safe builder for the `<audio>` element. */
  audio: audioElement,
  
  /** A type-safe builder for the `<b>` element. */
  b: bElement,
  
  /** A type-safe builder for the `<base>` element. */
  base: baseElement,
  
  /** A type-safe builder for the `<bdi>` element. */
  bdi: bdiElement,
  
  /** A type-safe builder for the `<bdo>` element. */
  bdo: bdoElement,
  
  /** A type-safe builder for the `<blockquote>` element. */
  blockquote: blockquoteElement,
  
  /** A type-safe builder for the `<body>` element. */
  body: bodyElement,
  
  /** A type-safe builder for the `<br>` element. */
  br: brElement,
  
  /** A type-safe builder for the `<button>` element. */
  button: buttonElement,
  
  /** A type-safe builder for the `<canvas>` element. */
  canvas: canvasElement,
  
  /** A type-safe builder for the `<caption>` element. */
  caption: captionElement,
  
  /** A type-safe builder for the `<cite>` element. */
  cite: citeElement,
  
  /** A type-safe builder for the `<code>` element. */
  code: codeElement,
  
  /** A type-safe builder for the `<col>` element. */
  col: colElement,
  
  /** A type-safe builder for the `<colgroup>` element. */
  colgroup: colgroupElement,
  
  /** A type-safe builder for the `<data>` element. */
  data: dataElement,
  
  /** A type-safe builder for the `<datalist>` element. */
  datalist: datalistElement,
  
  /** A type-safe builder for the `<dd>` element. */
  dd: ddElement,
  
  /** A type-safe builder for the `<del>` element. */
  del: delElement,
  
  /** A type-safe builder for the `<details>` element. */
  details: detailsElement,
  
  /** A type-safe builder for the `<dfn>` element. */
  dfn: dfnElement,
  
  /** A type-safe builder for the `<dialog>` element. */
  dialog: dialogElement,
  
  /** A type-safe builder for the `<div>` element. */
  div: divElement,
  
  /** A type-safe builder for the `<dl>` element. */
  dl: dlElement,
  
  /** A type-safe builder for the `<dt>` element. */
  dt: dtElement,
  
  /** A type-safe builder for the `<em>` element. */
  em: emElement,
  
  /** A type-safe builder for the `<embed>` element. */
  embed: embedElement,
  
  /** A type-safe builder for the `<fieldset>` element. */
  fieldset: fieldsetElement,
  
  /** A type-safe builder for the `<figcaption>` element. */
  figcaption: figcaptionElement,
  
  /** A type-safe builder for the `<figure>` element. */
  figure: figureElement,
  
  /** A type-safe builder for the `<footer>` element. */
  footer: footerElement,
  
  /** A type-safe builder for the `<form>` element. */
  form: formElement,
  
  /** A type-safe builder for the `<h1>` element. */
  h1: h1Element,
  
  /** A type-safe builder for the `<h2>` element. */
  h2: h2Element,
  
  /** A type-safe builder for the `<h3>` element. */
  h3: h3Element,
  
  /** A type-safe builder for the `<h4>` element. */
  h4: h4Element,
  
  /** A type-safe builder for the `<h5>` element. */
  h5: h5Element,
  
  /** A type-safe builder for the `<h6>` element. */
  h6: h6Element,
  
  /** A type-safe builder for the `<head>` element. */
  head: headElement,
  
  /** A type-safe builder for the `<header>` element. */
  header: headerElement,
  
  /** A type-safe builder for the `<hgroup>` element. */
  hgroup: hgroupElement,
  
  /** A type-safe builder for the `<hr>` element. */
  hr: hrElement,
  
  /** A type-safe builder for the `<html>` element. */
  html: htmlElement,
  
  /** A type-safe builder for the `<i>` element. */
  i: iElement,
  
  /** A type-safe builder for the `<iframe>` element. */
  iframe: iframeElement,
  
  /** A type-safe builder for the `<img>` element. */
  img: imgElement,
  
  /** A type-safe builder for the `<input>` element. */
  input: inputElement,
  
  /** A type-safe builder for the `<ins>` element. */
  ins: insElement,
  
  /** A type-safe builder for the `<kbd>` element. */
  kbd: kbdElement,
  
  /** A type-safe builder for the `<label>` element. */
  label: labelElement,
  
  /** A type-safe builder for the `<legend>` element. */
  legend: legendElement,
  
  /** A type-safe builder for the `<li>` element. */
  li: liElement,
  
  /** A type-safe builder for the `<link>` element. */
  link: linkElement,
  
  /** A type-safe builder for the `<main>` element. */
  main: mainElement,
  
  /** A type-safe builder for the `<map>` element. */
  map: mapElement,
  
  /** A type-safe builder for the `<mark>` element. */
  mark: markElement,
  
  /** A type-safe builder for the `<math>` element. */
  math: mathElement,
  
  /** A type-safe builder for the `<menu>` element. */
  menu: menuElement,
  
  /** A type-safe builder for the `<meta>` element. */
  meta: metaElement,
  
  /** A type-safe builder for the `<meter>` element. */
  meter: meterElement,
  
  /** A type-safe builder for the `<nav>` element. */
  nav: navElement,
  
  /** A type-safe builder for the `<noscript>` element. */
  noscript: noscriptElement,
  
  /** A type-safe builder for the `<object>` element. */
  object: objectElement,
  
  /** A type-safe builder for the `<ol>` element. */
  ol: olElement,
  
  /** A type-safe builder for the `<optgroup>` element. */
  optgroup: optgroupElement,
  
  /** A type-safe builder for the `<option>` element. */
  option: optionElement,
  
  /** A type-safe builder for the `<output>` element. */
  output: outputElement,
  
  /** A type-safe builder for the `<p>` element. */
  p: pElement,
  
  /** A type-safe builder for the `<picture>` element. */
  picture: pictureElement,
  
  /** A type-safe builder for the `<portal>` element. */
  portal: portalElement,
  
  /** A type-safe builder for the `<pre>` element. */
  pre: preElement,
  
  /** A type-safe builder for the `<progress>` element. */
  progress: progressElement,
  
  /** A type-safe builder for the `<q>` element. */
  q: qElement,
  
  /** A type-safe builder for the `<rp>` element. */
  rp: rpElement,
  
  /** A type-safe builder for the `<rt>` element. */
  rt: rtElement,
  
  /** A type-safe builder for the `<ruby>` element. */
  ruby: rubyElement,
  
  /** A type-safe builder for the `<s>` element. */
  s: sElement,
  
  /** A type-safe builder for the `<samp>` element. */
  samp: sampElement,
  
  /** A type-safe builder for the `<script>` element. */
  script: scriptElement,
  
  /** A type-safe builder for the `<search>` element. */
  search: searchElement,
  
  /** A type-safe builder for the `<section>` element. */
  section: sectionElement,
  
  /** A type-safe builder for the `<select>` element. */
  select: selectElement,
  
  /** A type-safe builder for the `<slot>` element. */
  slot: slotElement,
  
  /** A type-safe builder for the `<small>` element. */
  small: smallElement,
  
  /** A type-safe builder for the `<source>` element. */
  source: sourceElement,
  
  /** A type-safe builder for the `<span>` element. */
  span: spanElement,
  
  /** A type-safe builder for the `<strong>` element. */
  strong: strongElement,
  
  /** A type-safe builder for the `<style>` element. */
  style: styleElement,
  
  /** A type-safe builder for the `<sub>` element. */
  sub: subElement,
  
  /** A type-safe builder for the `<summary>` element. */
  summary: summaryElement,
  
  /** A type-safe builder for the `<sup>` element. */
  sup: supElement,
  
  /** A type-safe builder for the `<svg>` element. */
  svg: svgElement,
  
  /** A type-safe builder for the `<table>` element. */
  table: tableElement,
  
  /** A type-safe builder for the `<tbody>` element. */
  tbody: tbodyElement,
  
  /** A type-safe builder for the `<td>` element. */
  td: tdElement,
  
  /** A type-safe builder for the `<template>` element. */
  template: templateElement,
  
  /** A type-safe builder for the `<textarea>` element. */
  textarea: textareaElement,
  
  /** A type-safe builder for the `<tfoot>` element. */
  tfoot: tfootElement,
  
  /** A type-safe builder for the `<th>` element. */
  th: thElement,
  
  /** A type-safe builder for the `<thead>` element. */
  thead: theadElement,
  
  /** A type-safe builder for the `<time>` element. */
  time: timeElement,
  
  /** A type-safe builder for the `<title>` element. */
  title: titleElement,
  
  /** A type-safe builder for the `<tr>` element. */
  tr: trElement,
  
  /** A type-safe builder for the `<track>` element. */
  track: trackElement,
  
  /** A type-safe builder for the `<u>` element. */
  u: uElement,
  
  /** A type-safe builder for the `<ul>` element. */
  ul: ulElement,
  
  /** A type-safe builder for the `<var>` element. */
  var: varElement,
  
  /** A type-safe builder for the `<video>` element. */
  video: videoElement,
  
  /** A type-safe builder for the `<wbr>` element. */
  wbr: wbrElement,
}