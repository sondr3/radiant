import { label } from "./html_tags.ts";
import { textarea } from "./html_tags.ts";
import { video } from "./html_tags.ts";
import { template } from "./html_tags.ts";
import { img } from "./html_tags.ts";
import { audio } from "./html_tags.ts";
import { select } from "./html_tags.ts";
import { i } from "./html_tags.ts";
import { em } from "./html_tags.ts";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
export const HTML_TAGS = {
  html: "html",
  base: "base",
  head: "head",
  link: "link",
  meta: "meta",
  style: "style",
  title: "title",
  body: "body",
  address: "address",
  article: "article",
  aside: "aside",
  footer: "footer",
  header: "header",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  hgroup: "hgroup",
  main: "main",
  nav: "nav",
  section: "section",
  search: "search",
  blockquote: "blockquote",
  dd: "dd",
  div: "div",
  dl: "dl",
  dt: "dt",
  figcaption: "figcaption",
  figure: "figure",
  hr: "hr",
  li: "li",
  menu: "menu",
  ol: "ol",
  p: "p",
  pre: "pre",
  ul: "ul",
  a: "a",
  abbr: "abbr",
  b: "b",
  bdi: "bdi",
  bdo: "bdo",
  br: "br",
  cite: "cite",
  code: "code",
  data: "data",
  dfn: "dfn",
  em: "em",
  i: "i",
  kbd: "kbd",
  mark: "mark",
  q: "q",
  rp: "rp",
  rt: "rt",
  ruby: "ruby",
  s: "s",
  samp: "samp",
  small: "small",
  span: "span",
  strong: "strong",
  sub: "sub",
  sup: "sup",
  time: "time",
  u: "u",
  var: "var_",
  wbr: "wbr",
  area: "area",
  audio: "audio",
  img: "img",
  map: "map",
  track: "track",
  video: "video",
  embed: "embed",
  iframe: "iframe",
  object: "object",
  picture: "picture",
  portal: "portal",
  source: "source",
  svg: "svg",
  math: "math",
  canvas: "canvas",
  noscript: "noscript",
  script: "script",
  del: "del",
  ins: "ins",
  caption: "caption",
  col: "col",
  colgroup: "colgroup",
  table: "table",
  tbody: "tbody",
  td: "td",
  tfoot: "tfoot",
  th: "th",
  thead: "thead",
  tr: "tr",
  button: "button",
  datalist: "datalist",
  fieldset: "fieldset",
  form: "form",
  input: "input",
  label: "label",
  legend: "legend",
  meter: "meter",
  optgroup: "optgroup",
  option: "option",
  output: "output",
  progress: "progress",
  select: "select",
  textarea: "textarea",
  details: "details",
  dialog: "dialog",
  summary: "summary",
  slot: "slot",
  template: "template",
};

export type HTMLTag = keyof typeof HTML_TAGS;
export const htmlTags: Array<HTMLTag> = Object.keys(HTML_TAGS) as Array<HTMLTag>;

// https://developer.mozilla.org/en-US/docs/Glossary/Void_element
// Void elements close themselves, and can't have any content.
const VOID_HTML_TAGS = {
  area: "area",
  base: "base",
  br: "br",
  col: "col",
  embed: "embed",
  hr: "hr",
  img: "img",
  input: "input",
  link: "link",
  meta: "meta",
  source: "source",
  track: "track",
  wbr: "wbr",
} as const;

export type VoidHTMLTag = keyof typeof VOID_HTML_TAGS;
export const voidHTMLTags: Array<VoidHTMLTag> = Object.keys(VOID_HTML_TAGS) as Array<VoidHTMLTag>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#metadata_content
// Content that goes in the <head> tag
export const METADATA_CONTENT = {
  base: "base",
  link: "link",
  meta: "meta",
  noscript: "noscript",
  script: "script",
  style: "style",
  title: "title",
} as const;
export type MetadataContent = keyof typeof METADATA_CONTENT;
export const metadataContentTags: Array<MetadataContent> = Object.keys(METADATA_CONTENT) as Array<MetadataContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content
// Content that can go in the <body> tag
export const FLOW_CONTENT = {
  a: "a",
  abbr: "abbr",
  address: "address",
  article: "article",
  aside: "aside",
  audio: "audio",
  b: "b",
  bdo: "bdo",
  bdi: "bdi",
  blockquote: "blockquote",
  br: "br",
  button: "button",
  canvas: "canvas",
  cite: "cite",
  code: "code",
  data: "data",
  datalist: "datalist",
  del: "del",
  details: "details",
  dfn: "dfn",
  dialog: "dialog",
  div: "div",
  dl: "dl",
  em: "em",
  embed: "embed",
  fieldset: "fieldset",
  figure: "figure",
  footer: "footer",
  form: "form",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  header: "header",
  hgroup: "hgroup",
  hr: "hr",
  i: "i",
  iframe: "iframe",
  img: "img",
  input: "input",
  ins: "ins",
  kbd: "kbd",
  label: "label",
  main: "main",
  map: "map",
  mark: "mark",
  math: "math",
  menu: "menu",
  meter: "meter",
  nav: "nav",
  noscript: "noscript",
  object: "object",
  ol: "ol",
  output: "output",
  p: "p",
  picture: "picture",
  pre: "pre",
  progress: "progress",
  q: "q",
  ruby: "ruby",
  s: "s",
  samp: "samp",
  search: "search",
  script: "script",
  section: "section",
  select: "select",
  slot: "slot",
  small: "small",
  span: "span",
  strong: "strong",
  sub: "sub",
  sup: "sup",
  svg: "svg",
  table: "table",
  template: "template",
  textarea: "textarea",
  time: "time",
  u: "u",
  ul: "ul",
  var: "var",
  video: "video",
  wbr: "wbr",
} as const;
export type FlowContent = keyof typeof FLOW_CONTENT;
export const flowContentTags: Array<FlowContent> = Object.keys(FLOW_CONTENT) as Array<FlowContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#sectioning_content
export const SECTION_CONTENT = {
  article: "article",
  aside: "aside",
  nav: "nav",
  section: "section",
};

export type SectionContent = keyof typeof SECTION_CONTENT;
export const sectionContentTags: Array<SectionContent> = Object.keys(SECTION_CONTENT) as Array<SectionContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#heading_content
export const HEADING_CONTENT = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  hgroup: "hgroup",
};

export type HeadingContent = keyof typeof HEADING_CONTENT;
export const headingContentTags: Array<HeadingContent> = Object.keys(HEADING_CONTENT) as Array<HeadingContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content
export const PHRASING_CONTENT = {
  abbr: "abbr",
  audio: "audio",
  b: "b",
  bdi: "bdi",
  bdo: "bdo",
  br: "br",
  button: "button",
  canvas: "canvas",
  cite: "cite",
  code: "code",
  data: "data",
  datalist: "datalist",
  dfn: "dfn",
  em: "em",
  embed: "embed",
  i: "i",
  iframe: "iframe",
  img: "img",
  input: "input",
  kbd: "kbd",
  label: "label",
  mark: "mark",
  math: "math",
  meter: "meter",
  noscript: "noscript",
  object: "object",
  output: "output",
  picture: "picture",
  progress: "progress",
  q: "q",
  ruby: "ruby",
  s: "s",
  samp: "samp",
  script: "script",
  select: "select",
  slot: "slot",
  small: "small",
  span: "span",
  strong: "strong",
  sub: "sub",
  sup: "sup",
  svg: "svg",
  template: "template",
  textarea: "textarea",
  time: "time",
  u: "u",
  var: "var",
  video: "video",
  wbr: "wbr",
  a: "a",
  del: "del",
  ins: "ins",
};

export type PhrasingContent = keyof typeof PHRASING_CONTENT;
export const phrasingContentTags: Array<PhrasingContent> = Object.keys(PHRASING_CONTENT) as Array<PhrasingContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#embedded_content
export const EMBEDDED_CONTENT = {
  audio: "audio",
  canvas: "canvas",
  embed: "embed",
  iframe: "iframe",
  img: "img",
  math: "math",
  object: "object",
  picture: "picture",
  svg: "svg",
  video: "video",
};

export type EmbeddedContent = keyof typeof EMBEDDED_CONTENT;
export const embeddedContentTags: Array<EmbeddedContent> = Object.keys(EMBEDDED_CONTENT) as Array<EmbeddedContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content
export const INTERACTIVE_CONTENT = {
  a: "a",
  button: "button",
  details: "details",
  embed: "embed",
  iframe: "iframe",
  label: "label",
  select: "select",
  audio: "audio",
  video: "video",
};

export type InteractiveContent = keyof typeof INTERACTIVE_CONTENT;
export const interactiveContentTags: Array<InteractiveContent> = Object.keys(INTERACTIVE_CONTENT) as Array<
  InteractiveContent
>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#palpable_content
export const PALPABLE_CONTENT = {
  a: "a",
  abbr: "abbr",
  address: "address",
  article: "article",
  aside: "aside",
  b: "b",
  bdi: "bdi",
  bdo: "bdo",
  blockquote: "blockquote",
  button: "button",
  canvas: "canvas",
  cite: "cite",
  code: "code",
  data: "data",
  del: "del",
  details: "details",
  dfn: "dfn",
  div: "div",
  em: "em",
  embed: "embed",
  fieldset: "fieldset",
  footer: "footer",
  figure: "figure",
  form: "form",
  iframe: "iframe",
  img: "img",
  ins: "ins",
  kbd: "kbd",
  label: "label",
  main: "main",
  map: "map",
  mark: "mark",
  math: "math",
  meter: "meter",
  nav: "nav",
  object: "object",
  p: "p",
  picture: "picture",
  pre: "pre",
  progress: "progress",
  q: "q",
  ruby: "ruby",
  s: "s",
  samp: "samp",
  search: "search",
  section: "section",
  select: "select",
  small: "small",
  span: "span",
  strong: "strong",
  sub: "sub",
  sup: "sup",
  svg: "svg",
  table: "table",
  textarea: "textarea",
  time: "time",
  u: "u",
  var: "var",
  video: "video",
  audio: "audio",
  dl: "dl",
  input: "input",
  ol: "ol",
  ul: "ul",
};

export type PalpableContent = keyof typeof PALPABLE_CONTENT;
export const palpableContentTags: Array<PalpableContent> = Object.keys(PALPABLE_CONTENT) as Array<PalpableContent>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#form-associated_content
export const FORM_ASSOCIATED_CONTENT = {
  button: "button",
  fieldset: "fieldset",
  input: "input",
  label: "label",
  meter: "meter",
  object: "object",
  output: "output",
  progress: "progress",
  select: "select",
  textarea: "textarea",
};

export type FormAssociatedContent = keyof typeof FORM_ASSOCIATED_CONTENT;
export const formAssociatedContentTags: Array<FormAssociatedContent> = Object.keys(FORM_ASSOCIATED_CONTENT) as Array<
  FormAssociatedContent
>;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#script-supporting_elements
export const SCRIPT_SUPPORTING_ELEMENTS = {
  script: "script",
  template: "template",
};

export type ScriptSupportingElement = keyof typeof SCRIPT_SUPPORTING_ELEMENTS;
export const scriptSupportingElementTags: Array<ScriptSupportingElement> = Object.keys(
  SCRIPT_SUPPORTING_ELEMENTS,
) as Array<ScriptSupportingElement>;
