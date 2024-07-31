import { stringifyEntities } from "stringify-entities";
import { BaseHTMLElement, Doctype, type HTMLDocument, VoidBaseHTMLElement } from "./html_element.js";
import { VoidXMLElement, XMLDeclaration, type XMLDocument, XMLElement } from "./xml.js";

const escapeStr = (text: string): string => {
	return stringifyEntities(text, { escapeOnly: true });
};

/**
 * Converts an object of attributes into a string representation.
 *
 * @param attributes - The attributes to stringify.
 * @returns The string representation of the attributes.
 */
export const stringifyAttributes = (attributes: Record<string, string | boolean>): string => {
	const result = Array.from(Object.entries(attributes)).map(([key, value]) => {
		const escapedKey = escapeStr(key);
		if (Array.isArray(value)) {
			return `${escapedKey}="${escapeStr(value.join(" "))}"`;
		}

		if (typeof value === "boolean") {
			return value ? escapedKey : "";
		}

		return `${escapedKey}="${escapeStr(value)}"`;
	});

	return result.length > 0 ? ` ${result.join(" ")}` : "";
};

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
	private readonly preserveWhitespaceTags = new Set(["pre", "code", "textarea", "script", "style"]);

	constructor(
		private readonly pretty: boolean = true,
		private readonly mode: FormatterMode = "html",
		private readonly indent: string = "  ",
		private level = 0,
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
		const result = `${this.getIndent()}<${tag}${stringifyAttributes(attributes)}`;

		if (children.length === 0) {
			return `${result} />`;
		}

		if (this.preserveWhitespaceTags.has(tag as string)) {
			return `${result}>${children.join("")}</${tag}>`;
		}

		return `${result}>${this.printChildren(children)}</${tag}>`;
	}

	private printChildren<C extends string | BaseElement<unknown, BaseAttributes>>(children: C[]): string {
		if (children.length === 1 && typeof children[0] === "string") {
			return this.printSingleTextChild(children[0]);
		}

		this.increaseIndent();
		const childrenContent = children.map((child) => this.printNode(child)).join(this.pretty ? "\n" : "");
		this.decreaseIndent();
		return this.pretty ? `\n${childrenContent}\n${this.getIndent()}` : childrenContent;
	}

	private printSingleTextChild(child: string): string {
		if (child.length < 100) {
			return child;
		}
		this.increaseIndent();
		const indentedChild = this.pretty ? `\n${this.getIndent()}${child}\n${this.getIndent()}` : child;
		this.decreaseIndent();
		return indentedChild;
	}

	private printVoidElement<T, A extends BaseAttributes>(element: BaseElement<T, A>): string {
		const { tag, attributes } = element;
		return `${this.getIndent()}<${tag}${stringifyAttributes(attributes)} />`;
	}

	private printDoctype(_doctype: Doctype): string {
		return `${this.getIndent()}<!DOCTYPE html>`;
	}

	private printXMLDeclaration<T extends string, A extends BaseAttributes>(declaration: BaseElement<T, A>): string {
		return `${this.getIndent()}<?${declaration.tag}${stringifyAttributes(declaration.attributes)}?>`;
	}

	private printTextNode(text: string): string {
		const escaped = this.mode === "xml" ? escapeStr(text) : text;
		return `${this.getIndent()}${escaped}`;
	}

	printNode<T, A extends BaseAttributes, N extends Doctype | BaseElement<T, A> | string>(node: N): string {
		if (node instanceof BaseHTMLElement || node instanceof XMLElement) {
			return this.printElement(node);
		}

		if (node instanceof VoidBaseHTMLElement || node instanceof VoidXMLElement) {
			return this.printVoidElement(node);
		}

		if (node instanceof Doctype) {
			return this.printDoctype(node);
		}

		if (node instanceof XMLDeclaration) {
			return this.printXMLDeclaration(node);
		}

		if (typeof node === "string") {
			return this.printTextNode(node);
		}

		throw new Error(`Unsupported node type: ${node.constructor.name}`);
	}

	print(document: HTMLDocument | XMLDocument): string {
		return document.children.map((child) => this.printNode(child)).join(this.pretty ? "\n" : "");
	}
}
