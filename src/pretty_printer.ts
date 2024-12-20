import { stringifyEntities } from "stringify-entities";
import { isPhrasingTag } from "./html/html_content_categories.js";
import { BaseHTMLElement, Doctype, type HTMLDocument, RawHTML, VoidBaseHTMLElement } from "./html/html_element.js";
import { SVGElement } from "./svg/svg.js";
import { VoidXMLElement, XMLDeclaration, type XMLDocument, XMLElement } from "./xml/xml.js";

const escapeXml = (text: string): string => stringifyEntities(text, { escapeOnly: true });
const escapeHtml = (text: string): string => stringifyEntities(text, { escapeOnly: true, useNamedReferences: true });

const escapeText = (mode: FormatterMode, text: string): string => (mode === "xml" ? escapeXml(text) : escapeHtml(text));
const trimAttribute = (attribute: string): string => (attribute.startsWith("_") ? attribute.slice(1) : attribute);
/**
 * Converts an object of attributes into a string representation.
 *
 * @param attributes - The attributes to stringify.
 * @returns The string representation of the attributes.
 */
export const stringifyAttributes = (mode: FormatterMode, attributes: Record<string, string | boolean>): string => {
	const result = Array.from(Object.entries(attributes)).map(([key, value]) => {
		const escapedKey = escapeText(mode, trimAttribute(key));
		if (Array.isArray(value)) {
			return `${escapedKey}="${escapeText(mode, value.join(" "))}"`;
		}

		if (typeof value === "boolean") {
			return value ? escapedKey : "";
		}

		return `${escapedKey}="${escapeText(mode, value)}"`;
	});

	return result.length > 0 ? ` ${result.join(" ")}` : "";
};

type BaseAttributes = Record<string, string | boolean>;

interface BaseElement<T, A> {
	readonly tag: T;
	readonly attributes: A;
}

type HasChildren<T, C> = T extends { children: Array<C> } ? T : never;

type FormatterMode = "html" | "xml" | "svg";

export class PrettyPrinter {
	private readonly preserveWhitespaceTags = new Set(["pre", "textarea", "script", "style"]);

	constructor(
		private pretty = true,
		private readonly mode: FormatterMode = "html",
		private readonly indent: string = "  ",
		private skipEscape = false,
		private level = 0,
	) {}

	private escape(text: string): string {
		return escapeText(this.mode, text);
	}

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
		const openingTag = `${this.getIndent()}<${tag}${attributes ? stringifyAttributes(this.mode, attributes) : ""}>`;
		const closingTag = `</${tag}>`;

		if (children.length === 0) {
			return `${openingTag}${closingTag}`;
		}

		const preserverWhitespace = this.preserveWhitespaceTags.has(tag as string);
		this.skipEscape = preserverWhitespace;
		if (isPhrasingTag(tag)) {
			const wasPretty = this.pretty;
			this.pretty = false;
			const nonPretty = this.printChildren(children, preserverWhitespace);
			this.pretty = wasPretty;
			return `${openingTag}${nonPretty}${closingTag}`;
		}

		return `${openingTag}${this.printChildren(children, preserverWhitespace)}${closingTag}`;
	}

	private printChildren<C extends string | BaseElement<unknown, BaseAttributes>>(
		children: C[],
		whitespacePreserving: boolean,
	): string {
		if (children.length === 1 && typeof children[0] === "string") {
			return this.printSingleTextChild(this.skipEscape ? children[0] : this.escape(children[0]));
		}

		if (!whitespacePreserving) this.increaseIndent();
		const childrenContent = children.map((child) => this.printNode(child)).join(this.pretty ? "\n" : "");
		if (!whitespacePreserving) this.decreaseIndent();
		return this.pretty ? `\n${childrenContent}\n${this.getIndent()}` : childrenContent;
	}

	private printSingleTextChild(child: string): string {
		return child;
	}

	private printVoidElement<T, A extends BaseAttributes>(element: BaseElement<T, A>): string {
		const { tag, attributes } = element;
		const isSvgElement = element instanceof SVGElement;
		return `${this.getIndent()}<${tag}${stringifyAttributes(this.mode, attributes)}${isSvgElement ? "/" : ""}>`;
	}

	private printDoctype(_doctype: Doctype): string {
		return `${this.getIndent()}<!DOCTYPE html>`;
	}

	private printXMLDeclaration<T extends string, A extends BaseAttributes>(declaration: BaseElement<T, A>): string {
		return `${this.getIndent()}<?${declaration.tag}${stringifyAttributes(this.mode, declaration.attributes)}?>`;
	}

	private printTextNode(text: string): string {
		return `${this.getIndent()}${this.skipEscape ? text : this.escape(text)}`;
	}

	printNode<T, A extends BaseAttributes, N extends Doctype | BaseElement<T, A> | string | null>(node: N): string {
		if (node === null) {
			return "";
		}

		if (node instanceof RawHTML) {
			return `${this.getIndent()}${node.content}`;
		}

		if (node instanceof SVGElement) {
			return this.printVoidElement(node);
		}

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
