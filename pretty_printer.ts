import { BaseHTMLElement, Doctype, type HTMLDocument, VoidBaseHTMLElement } from "./html_element.ts";
import { stringifyAttributes } from "./render.ts";
import { VoidXMLElement, XMLDeclaration, type XMLDocument, XMLElement } from "./xml.ts";
import { escape } from "@std/html";

type BaseAttributes = Record<string, string | boolean>;

interface BaseElement<T, A> {
  readonly tag: T;
  readonly attributes: A;
}

type HasChildren<T, C> = T extends { children: Array<C> } ? T : never;

type FormatterMode = "html" | "xml";

export const defaultPrettyPrinterOptions = {
  indent: "  ",
  level: 0,
  pretty: true,
};

export class PrettyPrinter {
  constructor(
    private readonly pretty: boolean = true,
    private readonly mode: FormatterMode = "html",
    private readonly indent: string = "  ",
    private level: number = 0,
  ) {}

  private increaseIndent() {
    this.level++;
  }

  private decreaseIndent() {
    this.level--;
  }

  private getIndent() {
    return this.pretty ? this.indent.repeat(this.level) : "";
  }

  private printElement<T, A extends BaseAttributes, C extends BaseElement<T, A>>(
    element: HasChildren<BaseElement<T, A> & { children: C[] }, C>,
  ): string {
    const { tag, children, attributes } = element;
    const hasChildren = children.length > 0;

    let result = `${this.getIndent()}<${tag}${stringifyAttributes(attributes)}`;

    if (hasChildren) {
      result += this.pretty ? ">\n" : ">";
      this.increaseIndent();
      result += children.map((child) => this.printNode(child)).join(this.pretty ? "\n" : "");
      this.decreaseIndent();
      result += this.pretty ? `\n${this.getIndent()}</${tag}>` : `</${tag}>`;
    } else {
      result += " />";
    }

    return result;
  }

  private printVoidElement<T, A extends BaseAttributes>(element: BaseElement<T, A>): string {
    const { tag, attributes } = element;
    return `${this.getIndent()}<${tag}${stringifyAttributes(attributes)} />`;
  }

  private printDoctype(_doctype: Doctype): string {
    return `${this.getIndent()}<!DOCTYPE html>`;
  }

  private printXMLDeclaration<T extends string, A extends BaseAttributes>(
    declaration: BaseElement<T, A>,
  ): string {
    return `${this.getIndent()}<?${declaration.tag}${stringifyAttributes(declaration.attributes)}?>`;
  }

  private printTextNode(text: string): string {
    const escaped = this.mode === "xml" ? escape(text) : text;
    return `${this.getIndent()}${escaped}`;
  }

  printNode<T, A extends BaseAttributes, N extends Doctype | BaseElement<T, A> | string>(
    node: N,
  ): string {
    if (node instanceof BaseHTMLElement || node instanceof XMLElement) {
      return this.printElement(node);
    } else if (node instanceof VoidBaseHTMLElement || node instanceof VoidXMLElement) {
      return this.printVoidElement(node);
    } else if (node instanceof Doctype) {
      return this.printDoctype(node);
    } else if (node instanceof XMLDeclaration) {
      return this.printXMLDeclaration(node);
    } else if (typeof node === "string") {
      return this.printTextNode(node);
    }
    throw new Error(`Unsupported node type: ${node.constructor.name}`);
  }

  print(document: HTMLDocument | XMLDocument): string {
    return document.children.map((child) => this.printNode(child)).join(this.pretty ? "\n" : "");
  }
}
