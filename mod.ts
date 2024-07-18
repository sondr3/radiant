export type Child = string | HTMLElement;
export type Children = Child[];

export type HTMLAttributes = { [key: string]: string };

type HTMLOptions = {
  selfClosing: boolean;
};

export class HTMLElement {
  private readonly tag: string;
  private readonly attributes: HTMLAttributes;
  private readonly children: Children;
  private readonly selfClosing: boolean;

  constructor(tag: string, options: HTMLOptions, attributes: HTMLAttributes, ...children: Children) {
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
    this.selfClosing = options.selfClosing;
  }

  toHtml(): string {
    console.log(this);
    let result = `<${this.tag}`;
    for (const [key, value] of Object.entries(this.attributes)) {
      result += ` ${key}="${value}"`;
    }

    if (this.selfClosing) {
      result += "/>";
      return result;
    }

    result += ">";
    for (const child of this.children) {
      if (typeof child === "string") {
        result += child;
      } else {
        result += child.toHtml();
      }
    }
    result += `</${this.tag}>`;

    return result;
  }
}

const createElementInner = (...attrs: ConstructorParameters<typeof HTMLElement>): HTMLElement => {
  return new HTMLElement(...attrs);
};

const createElement = (
  tag: string,
  options: HTMLOptions,
  childrenOrAttrs: Child | Children | HTMLAttributes,
  ...children: Children
): HTMLElement => {
  console.log(tag, options, childrenOrAttrs, children);
  if (Array.isArray(childrenOrAttrs)) {
    return createElementInner(tag, options, {}, ...childrenOrAttrs)
  } else if (typeof childrenOrAttrs === "string") {
    return createElementInner(tag, options, {}, childrenOrAttrs, ...children);
  } else if (childrenOrAttrs instanceof HTMLElement) {
    return createElementInner(tag, options, {}, childrenOrAttrs, ...children);
  }

  return createElementInner(tag, options, childrenOrAttrs, ...children);
};

const regularTag: HTMLOptions = { selfClosing: false };
const selfClosingTag: HTMLOptions = { selfClosing: true };

export function html(...children: Children): HTMLElement;
export function html(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function html(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return createElement("html", regularTag, childrenOrAttrs, ...children);
}

export function head(...children: Children): HTMLElement;
export function head(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function head(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return createElement("head", regularTag, childrenOrAttrs, ...children);
}

export function title(...children: Children): HTMLElement;
export function title(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function title(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return createElement("title", regularTag, childrenOrAttrs, ...children);
}

export function meta(attrs: HTMLAttributes): HTMLElement {
  return createElement("meta", selfClosingTag, attrs);
}

export function body(...children: Children): HTMLElement;
export function body(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function body(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return createElement("body", regularTag, childrenOrAttrs, ...children);
}

export function h1(...children: Children): HTMLElement;
export function h1(attrs: HTMLAttributes, ...children: Children): HTMLElement;
export function h1(childrenOrAttrs: Child | Children | HTMLAttributes, ...children: Children): HTMLElement {
  return createElement("h1", regularTag, childrenOrAttrs, ...children);
}