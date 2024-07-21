import { stringifyAttributes } from "./render.ts";
import type { HTMLTag, VoidHTMLTag } from "./tags.ts";

export type ContentCategory =
  | "MetadataContent"
  | "FlowContent"
  | "SectioningContent"
  | "HeadingContent"
  | "PhrasingContent"
  | "EmbeddedContent"
  | "InteractiveContent"
  | "PalpableContent";

type FlowContent =
  | AnchorElement
  | AbbrElement
  | AddressElement
  | ParagraphElement;

type PhrasingContent =
  | AnchorElement
  | AbbrElement;

type InteractiveContent = AnchorElement;

type PalpableContent =
  | AnchorElement
  | AbbrElement
  | AddressElement
  | ParagraphElement;

export type AttributeValue = string | Array<string> | boolean;

export type GlobalAttributes = {
  accesskey?: string;
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  autofocus?: boolean;
  contenteditable?: boolean | "plaintext-only";
  dir?: "ltr" | "rtl" | "auto";
  draggable?: boolean;
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden?: boolean;
  inert?: boolean;
  inputmode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  is?: string;
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: boolean;
  itemtype?: string;
  lang?: string;
  nonce?: string;
  popover?: boolean | "manual";
  spellcheck?: boolean;
  style?: string;
  tabindex?: string;
  title?: string;
  translate?: "yes" | "no";
  writingsuggestions?: boolean;
};

export type DataAttributes = GlobalAttributes & {
  [key: `data-${string}`]: string | boolean;
}

export type DefaultAttributes = DataAttributes;

export type HTMLElementAttributes = DefaultAttributes & {
  class?: string;
  id?: string;
  slot?: string;
};;

export type FlowContentChildren = FlowContent | string;
export type PhrasingContentChildren = PhrasingContent | string;
export type InteractiveContentChildren = InteractiveContent | string;
export type PalpableContentChildren = PalpableContent | string;

type AllChildren =
  | FlowContentChildren
  | PhrasingContentChildren
  | InteractiveContentChildren
  | PalpableContentChildren;

const isHtmlTag = <T extends HTMLTag, A, C extends AllChildren>(obj: unknown): obj is BaseHTMLElement<T, A, C> => {
  return obj instanceof BaseHTMLElement;
};

export interface HTMLElement<T extends HTMLTag, A, C> {
  readonly tag: T;
  readonly attributes: A;
  readonly children: Array<C>;
}

class BaseHTMLElement<T extends HTMLTag, A, C extends AllChildren> implements HTMLElement<T, A, C> {
  readonly tag: T;
  readonly attributes: A;
  readonly children: Array<C>;

  constructor(tag: T, attributes: A, children: Array<C>) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }
}

class HTMLElementFactory {
  static create<T extends HTMLTag, A, C extends AllChildren>(
    tag: T,
    attributes: string | A | C | Array<C>,
    children: Array<C>,
  ): BaseHTMLElement<T, A, C> {
    if (typeof attributes === "string" || isHtmlTag(attributes)) {
      return new BaseHTMLElement(tag, {} as A, [attributes as unknown as C, ...children]);
    }

    if (Array.isArray(attributes)) {
      return new BaseHTMLElement(tag, {} as A, [...attributes, ...children]);
    }

    return new BaseHTMLElement(tag, attributes as A, children);
  }
}

export interface VoidHTMLElement<T extends Extract<HTMLTag, VoidHTMLTag>, A> {
  readonly tag: T;
  readonly attributes: A;
}

class VoidBaseHTMLElement<T extends Extract<HTMLTag, VoidHTMLTag>, A> implements VoidHTMLElement<T, A> {
  readonly tag: T;
  readonly attributes: A;

  constructor(tag: T, attributes: A) {
    this.tag = tag;
    this.attributes = attributes;
  }
}

export type AnchorAttributes = HTMLElementAttributes & {
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
  rel?: string;
  download?: string | boolean;
  hreflang?: string;
  ping?: string;
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
};

export type BaseAttributes = HTMLElementAttributes & Pick<AnchorAttributes, "href" | "target">;

export interface AnchorElement extends HTMLElement<"a", AnchorAttributes, FlowContentChildren> {}
export interface AbbrElement extends HTMLElement<"abbr", HTMLElementAttributes, PhrasingContentChildren> {}
export interface AddressElement extends HTMLElement<"address", HTMLElementAttributes, FlowContentChildren> {}

interface BaseElement extends VoidHTMLElement<"base", BaseAttributes> {}

interface ParagraphElement extends HTMLElement<"p", HTMLElementAttributes, FlowContentChildren> {}

export function anchorElement(attributes: AnchorAttributes, ...children: Array<FlowContentChildren>): AnchorElement;
export function anchorElement(
  attributes: AnchorAttributes | FlowContentChildren | Array<FlowContentChildren>,
  ...children: Array<FlowContentChildren>
): AnchorElement {
  return HTMLElementFactory.create<"a", AnchorAttributes, FlowContentChildren>(
    "a",
    attributes,
    children,
  );
}

export function baseElement(attributes: BaseAttributes): BaseElement {
  return new VoidBaseHTMLElement("base", attributes);
}

export function paragraphElement(...children: Array<FlowContentChildren>): ParagraphElement;
export function paragraphElement(
  attributes: HTMLElementAttributes,
  ...children: Array<FlowContentChildren>
): ParagraphElement;
export function paragraphElement(
  attrsOrChild: HTMLElementAttributes | FlowContentChildren | Array<FlowContentChildren>,
  ...children: Array<FlowContentChildren>
): ParagraphElement {
  return HTMLElementFactory.create<"p", HTMLElementAttributes, FlowContentChildren>(
    "p",
    attrsOrChild,
    children,
  );
}

export const h = {
  a: anchorElement,
  base: baseElement,
  p: paragraphElement,
};

export const renderElement = <T extends HTMLTag, A, C extends AllChildren>(
  element: BaseHTMLElement<T, A, C>,
): string => {
  let result = `<${element.tag}${stringifyAttributes(element.attributes ?? {})}>`;

  if (element instanceof BaseHTMLElement) {
    for (const child of element.children) {
      if (typeof child === "string") {
        result += child;
      } else {
        result += renderElement(child);
      }
    }

    result += `</${element.tag}>`;
  }

  return result;
};
