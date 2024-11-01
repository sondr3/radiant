/**
 * This module contains the attribute types for each HTML element.
 * @module
 */

import type { HasRequiredKeys, Merge } from "type-fest";

/**
 * Optional, allow-all attributes for any element, but prefixed with a underscore.
 */
export type OptionalAttributes = { [key: `_${string}`]: string | boolean | number | undefined };

/**
 * Attributes that can be applied to any HTML element.
 *
 * See https://html.spec.whatwg.org/dev/dom.html#global-attributes
 */
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

/**
 * Attributes that can be applied to any user-defined data attribute.
 */
export type UserDataAttributes = {
	[key: `data-${string}`]: string | boolean;
};

/**
 * ARIA attributes, for now without full typing.
 */
export type AriaAttributes = {
	[key: `aria-${string}`]: string;
};

/**
 * The base attributes for any HTML element.
 */
export type DefaultAttributes = Merge<GlobalAttributes, Merge<UserDataAttributes, AriaAttributes>>;

/**
 * Attributes that can be applied to any HTML element.
 */
export type HTMLElementAttributes = DefaultAttributes & {
	class?: string;
	id?: string;
	slot?: string;
};

type AnchorAttributes = HTMLElementAttributes & {
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

type BaseAttributes = HTMLElementAttributes & Pick<AnchorAttributes, "href" | "target">;

type AreaAttributes = HTMLElementAttributes &
	Pick<AnchorAttributes, "href" | "target" | "referrerpolicy"> & {
		alt?: string;
		coords?: string;
		shape?: "rect" | "circle" | "poly" | "default";
		download?: string | boolean;
		ping?: string;
		rel?: string;
	};

type AudioAttributes = HTMLElementAttributes & {
	src?: string;
	crossorigin?: "anonymous" | "use-credentials" | boolean;
	preload?: "none" | "metadata" | "auto";
	autoplay?: boolean;
	loop?: boolean;
	muted?: boolean;
	controls?: boolean;
};

type BlockquoteAttributes = HTMLElementAttributes & {
	cite?: string;
};

type BodyAttributes = HTMLElementAttributes & {
	onafterprint?: string;
	onbeforeprint?: string;
	onbeforeunload?: string;
	onhashchange?: string;
	onlanguagechange?: string;
	onmessage?: string;
	onmessageerror?: string;
	onoffline?: string;
	ononline?: string;
	onpageswap?: string;
	onpagehide?: string;
	onpagereveal?: string;
	onpageshow?: string;
	onpopstate?: string;
	onrejectionhandled?: string;
	onstorage?: string;
	onunhandledrejection?: string;
	onunload?: string;
};

type ButtonAttributes = HTMLElementAttributes & {
	disabled?: boolean;
	form?: string;
	formaction?: "get" | "post" | "dialog";
	formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
	formmethod?: "get" | "post" | "dialog";
	formnovalidate?: boolean;
	formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;
	name?: string;
	popovertarget?: string;
	popovertargetaction?: "toggle" | "show" | "hide";
	type?: "submit" | "reset" | "button";
	value?: string;
};

type CanvasAttributes = HTMLElementAttributes & {
	width?: number;
	height?: number;
};

type ColAttributes = HTMLElementAttributes & {
	span?: number;
};
type ColGroupAttributes = ColAttributes;

type DataAttributes = HTMLElementAttributes & {
	value?: string;
};

type DelAttributes = HTMLElementAttributes & {
	cite?: string;
	datetime?: string;
};

type DetailsAttributes = HTMLElementAttributes & {
	open?: boolean;
	name?: string;
};

type DialogAttributes = HTMLElementAttributes & Pick<DetailsAttributes, "open">;

type EmbedAttributes = HTMLElementAttributes & {
	src?: string;
	type?: string;
	width?: number;
	height?: number;
};

type FieldSetAttributes = HTMLElementAttributes & Pick<ButtonAttributes, "disabled" | "form" | "name">;

type FormActionAttributes =
	| {
			action?: never;
			method: "dialog";
	  }
	| {
			action: string;
			method: "get" | "post";
	  };
type FormAttributes = HTMLElementAttributes &
	FormActionAttributes & {
		"accept-charset"?: string;
		// action: string;
		autocomplete?: "on" | "off" | boolean;
		enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
		// method?: "get" | "post" | "dialog";
		name?: string;
		novalidate?: boolean;
		rel?: string;
		target?: "_self" | "_blank" | "_parent" | "_top" | string;
	};

type HTMLAttributes = HTMLElementAttributes & {
	manifest?: string;
};

type IFrameAttributes = HTMLElementAttributes & {
	alt?: string;
	src?: string;
	name?: string;
	sandbox?:
		| "allow-downloads"
		| "allow-forms"
		| "allow-modals"
		| "allow-orientation-lock"
		| "allow-pointer-lock"
		| "allow-popups"
		| "allow-popups-to-escape-sandbox"
		| "allow-presentation"
		| "allow-same-origin"
		| "allow-scripts"
		| "allow-top-navigation"
		| "allow-top-navigation-by-user-activation"
		| "allow-top-navigation-to-custom-protocols";
	allow?: string;
	allowfullscreen?: boolean;
	width?: number;
	height?: number;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	loading?: "eager" | "lazy";
};

type ImgAttributes = HTMLElementAttributes & {
	alt?: string;
	src?: string;
	srcset?: string;
	sizes?: string;
	crossorigin?: "anonymous" | "use-credentials" | boolean;
	usemap?: string;
	ismap?: boolean;
	width?: number;
	height?: number;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	decoding?: "sync" | "async" | "auto";
	fetchpriority?: "auto" | "high" | "low";
	loading?: "eager" | "lazy";
};

type InputAttributes = HTMLElementAttributes &
	Omit<ButtonAttributes, "type" | "value"> & {
		accept?: string;
		alt?: string;
		autocomplete?: "on" | "off" | boolean;
		checked?: boolean;
		dirname?: string;
		height?: number;
		list?: string;
		max?: number | string;
		maxlength?: number;
		min?: number | string;
		minlength?: number;
		multiple?: boolean;
		pattern?: string;
		placeholder?: string;
		readonly?: boolean;
		required?: boolean;
		size?: number;
		src?: string;
		step?: number | string;
		type?:
			| "hidden"
			| "text"
			| "search"
			| "tel"
			| "url"
			| "email"
			| "password"
			| "date"
			| "month"
			| "week"
			| "time"
			| "datetime-local"
			| "number"
			| "range"
			| "color"
			| "checkbox"
			| "radio"
			| "file"
			| "submit"
			| "image"
			| "reset"
			| "button";
		value?: string;
		width?: number;
	};

type InsAttributes = DelAttributes;

type LabelAttributes = HTMLElementAttributes & {
	for?: string;
};

type LiAttributes = HTMLElementAttributes & {
	value?: number;
};

type LinkAttributes = HTMLElementAttributes & {
	href: string;
	crossorigin?: "anonymous" | "use-credentials" | boolean;
	rel?: string;
	as?: string;
	media?: string;
	hreflang?: string;
	type?: string;
	sizes?: string;
	imagesrcset?: string;
	imagesizes?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	integrity?: string;
	blocking?: boolean;
	color?: string;
	disabled?: boolean;
	fetchpriority?: "auto" | "high" | "low";
};

type MapAttributes = HTMLElementAttributes & {
	name: string;
};

type MetaAttributes = HTMLElementAttributes & {
	name?: string;
	"http-equiv"?: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy";
	charset?: "utf-8";
	content?: string;
	media?: string;
	property?: string;
};

type MeterAttributes = HTMLElementAttributes & {
	value?: number;
	min?: number;
	max?: number;
	low?: number;
	high?: number;
	optimum?: number;
};

type ObjectAttributes = HTMLElementAttributes & {
	data?: string;
	type?: string;
	name?: string;
	usemap?: string;
	form?: string;
	width?: number;
	height?: number;
};

type OlAttributes = HTMLElementAttributes & {
	reversed?: boolean;
	start?: number;
	type?: "1" | "a" | "A" | "i" | "I";
};

type OptGroupAttributes = HTMLElementAttributes & {
	disabled?: boolean;
	label?: string;
};

type OptionAttributes = HTMLElementAttributes & {
	disabled?: boolean;
	label?: string;
	selected?: boolean;
	value?: string;
};

type OutputAttributes = HTMLElementAttributes & {
	for?: string;
	form?: string;
	name?: string;
};

type ProgressAttributes = HTMLElementAttributes & {
	value?: number;
	max?: number;
};

type QAttributes = HTMLElementAttributes & {
	cite?: string;
};

type ScriptAttributes = HTMLElementAttributes & {
	src?: string;
	type?: string;
	nomodule?: boolean;
	async?: boolean;
	defer?: boolean;
	crossorigin?: "anonymous" | "use-credentials" | boolean;
	integrity?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	blocking?: boolean;
	fetchpriority?: "auto" | "high" | "low";
};

type SelectAttributes = HTMLElementAttributes & {
	autocomplete?: "on" | "off" | boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;
};

type SlotAttributes = MapAttributes;

type SourceAttributes = HTMLElementAttributes & {
	type?: string;
	media?: string;
	src?: string;
	srcset?: string;
	sizes?: string;
	width?: number;
	height?: number;
};

type StyleAttributes = HTMLElementAttributes & {
	media?: string;
	blocking?: boolean;
};

type TdAttributes = HTMLElementAttributes & {
	colspan?: number;
	rowspan?: number;
	headers?: string;
};

type TemplateAttributes = HTMLElementAttributes & {
	shadowrootmode?: "open" | "closed";
	shadowrootdelegatesfocus?: boolean;
	shadowrootclonable?: boolean;
	shadowrootserializable?: boolean;
};

type ThAttributes = TdAttributes & {
	scope?: "row" | "col" | "rowgroup" | "colgroup";
	abbr?: string;
};

type TextAreaAttributes = HTMLElementAttributes & {
	autocomplete?: "on" | "off" | boolean;
	cols?: number;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	maxlength?: number;
	minlength?: number;
	name?: string;
	placeholder?: string;
	readonly?: boolean;
	required?: boolean;
	rows?: number;
	wrap?: "hard" | "soft";
};

type TimeAttributes = HTMLElementAttributes & {
	datetime?: string;
};

type TrackAttributes = HTMLElementAttributes & {
	default?: boolean;
	kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
	label?: string;
	src?: string;
	srclang?: string;
};

type VideoAttributes = HTMLElementAttributes & {
	src?: string;
	crossorigin?: "anonymous" | "use-credentials" | boolean;
	poster?: string;
	preload?: "none" | "metadata" | "auto" | boolean;
	autoplay?: boolean;
	playsinline?: boolean;
	loop?: boolean;
	muted?: boolean;
	controls?: boolean;
	width?: number;
	height?: number;
};

type SVGElementAttributes = HTMLElementAttributes & {
	xmlns?: string;
	height?: string;
	width?: string;
	preserveaspectratio?: string;
	version?: number;
	viewBox?: string;
	x?: string;
	y?: string;
} & OptionalAttributes;

/** A mapping of attributes for each HTML element. */
export type ATTRIBUTE_MAP = {
	/** Attributes for the anchor (`<a>`) element. */
	a: AnchorAttributes;
	/** Attributes for the abbreviation (`<abbr>`) element. */
	abbr: HTMLElementAttributes;
	/** Attributes for the address (`<address>`) element. */
	address: HTMLElementAttributes;
	/** Attributes for the area (`<area>`) element. */
	area: AreaAttributes;
	/** Attributes for the article (`<article>`) element. */
	article: HTMLElementAttributes;
	/** Attributes for the aside (`<aside>`) element. */
	aside: HTMLElementAttributes;
	/** Attributes for the audio (`<audio>`) element. */
	audio: AudioAttributes;
	/** Attributes for the bold (`<b>`) element. */
	b: HTMLElementAttributes;
	/** Attributes for the base (`<base>`) element. */
	base: BaseAttributes;
	/** Attributes for the bidirectional isolation (`<bdi>`) element. */
	bdi: HTMLElementAttributes;
	/** Attributes for the bidirectional override (`<bdo>`) element. */
	bdo: HTMLElementAttributes;
	/** Attributes for the blockquote (`<blockquote>`) element. */
	blockquote: BlockquoteAttributes;
	/** Attributes for the body (`<body>`) element. */
	body: BodyAttributes;
	/** Attributes for the line break (`<br>`) element. */
	br: HTMLElementAttributes;
	/** Attributes for the button (`<button>`) element. */
	button: ButtonAttributes;
	/** Attributes for the canvas (`<canvas>`) element. */
	canvas: CanvasAttributes;
	/** Attributes for the table caption (`<caption>`) element. */
	caption: HTMLElementAttributes;
	/** Attributes for the citation (`<cite>`) element. */
	cite: HTMLElementAttributes;
	/** Attributes for the inline code (`<code>`) element. */
	code: HTMLElementAttributes;
	/** Attributes for the table column (`<col>`) element. */
	col: ColAttributes;
	/** Attributes for the table column group (`<colgroup>`) element. */
	colgroup: ColGroupAttributes;
	/** Attributes for the data (`<data>`) element. */
	data: DataAttributes;
	/** Attributes for the datalist (`<datalist>`) element. */
	datalist: HTMLElementAttributes;
	/** Attributes for the description details (`<dd>`) element. */
	dd: HTMLElementAttributes;
	/** Attributes for the deleted text (`<del>`) element. */
	del: DelAttributes;
	/** Attributes for the details (`<details>`) element. */
	details: DetailsAttributes;
	/** Attributes for the definition (`<dfn>`) element. */
	dfn: HTMLElementAttributes;
	/** Attributes for the dialog (`<dialog>`) element. */
	dialog: DialogAttributes;
	/** Attributes for the division (`<div>`) element. */
	div: HTMLElementAttributes;
	/** Attributes for the description list (`<dl>`) element. */
	dl: HTMLElementAttributes;
	/** Attributes for the description term (`<dt>`) element. */
	dt: HTMLElementAttributes;
	/** Attributes for the emphasis (`<em>`) element. */
	em: HTMLElementAttributes;
	/** Attributes for the embed (`<embed>`) element. */
	embed: EmbedAttributes;
	/** Attributes for the fieldset (`<fieldset>`) element. */
	fieldset: FieldSetAttributes;
	/** Attributes for the figure caption (`<figcaption>`) element. */
	figcaption: HTMLElementAttributes;
	/** Attributes for the figure (`<figure>`) element. */
	figure: HTMLElementAttributes;
	/** Attributes for the footer (`<footer>`) element. */
	footer: HTMLElementAttributes;
	/** Attributes for the form (`<form>`) element. */
	form: FormAttributes;
	/** Attributes for the heading level 1 (`<h1>`) element. */
	h1: HTMLElementAttributes;
	/** Attributes for the heading level 2 (`<h2>`) element. */
	h2: HTMLElementAttributes;
	/** Attributes for the heading level 3 (`<h3>`) element. */
	h3: HTMLElementAttributes;
	/** Attributes for the heading level 4 (`<h4>`) element. */
	h4: HTMLElementAttributes;
	/** Attributes for the heading level 5 (`<h5>`) element. */
	h5: HTMLElementAttributes;
	/** Attributes for the heading level 6 (`<h6>`) element. */
	h6: HTMLElementAttributes;
	/** Attributes for the head (`<head>`) element. */
	head: HTMLElementAttributes;
	/** Attributes for the header (`<header>`) element. */
	header: HTMLElementAttributes;
	/** Attributes for the heading group (`<hgroup>`) element. */
	hgroup: HTMLElementAttributes;
	/** Attributes for the horizontal rule (`<hr>`) element. */
	hr: HTMLElementAttributes;
	/** Attributes for the HTML (`<html>`) element. */
	html: HTMLAttributes;
	/** Attributes for the italic (`<i>`) element. */
	i: HTMLElementAttributes;
	/** Attributes for the inline frame (`<iframe>`) element. */
	iframe: IFrameAttributes;
	/** Attributes for the image (`<img>`) element. */
	img: ImgAttributes;
	/** Attributes for the input (`<input>`) element. */
	input: InputAttributes;
	/** Attributes for the inserted text (`<ins>`) element. */
	ins: InsAttributes;
	/** Attributes for the keyboard input (`<kbd>`) element. */
	kbd: HTMLElementAttributes;
	/** Attributes for the label (`<label>`) element. */
	label: LabelAttributes;
	/** Attributes for the legend (`<legend>`) element. */
	legend: HTMLElementAttributes;
	/** Attributes for the list item (`<li>`) element. */
	li: LiAttributes;
	/** Attributes for the link (`<link>`) element. */
	link: LinkAttributes;
	/** Attributes for the main (`<main>`) element. */
	main: HTMLElementAttributes;
	/** Attributes for the image map (`<map>`) element. */
	map: MapAttributes;
	/** Attributes for the marked text (`<mark>`) element. */
	mark: HTMLElementAttributes;
	/** Attributes for the math (`<math>`) element. */
	math: HTMLElementAttributes;
	/** Attributes for the menu (`<menu>`) element. */
	menu: HTMLElementAttributes;
	/** Attributes for the metadata (`<meta>`) element. */
	meta: MetaAttributes;
	/** Attributes for the meter (`<meter>`) element. */
	meter: MeterAttributes;
	/** Attributes for the navigation (`<nav>`) element. */
	nav: HTMLElementAttributes;
	/** Attributes for the noscript (`<noscript>`) element. */
	noscript: HTMLElementAttributes;
	/** Attributes for the object (`<object>`) element. */
	object: ObjectAttributes;
	/** Attributes for the ordered list (`<ol>`) element. */
	ol: OlAttributes;
	/** Attributes for the option group (`<optgroup>`) element. */
	optgroup: OptGroupAttributes;
	/** Attributes for the option (`<option>`) element. */
	option: OptionAttributes;
	/** Attributes for the output (`<output>`) element. */
	output: OutputAttributes;
	/** Attributes for the paragraph (`<p>`) element. */
	p: HTMLElementAttributes;
	/** Attributes for the picture (`<picture>`) element. */
	picture: HTMLElementAttributes;
	/** Attributes for the portal (`<portal>`) element. */
	portal: HTMLElementAttributes;
	/** Attributes for the preformatted text (`<pre>`) element. */
	pre: HTMLElementAttributes;
	/** Attributes for the progress (`<progress>`) element. */
	progress: ProgressAttributes;
	/** Attributes for the quotation (`<q>`) element. */
	q: QAttributes;
	/** Attributes for the ruby parenthesis (`<rp>`) element. */
	rp: HTMLElementAttributes;
	/** Attributes for the ruby text (`<rt>`) element. */
	rt: HTMLElementAttributes;
	/** Attributes for the ruby annotation (`<ruby>`) element. */
	ruby: HTMLElementAttributes;
	/** Attributes for the strikethrough (`<s>`) element. */
	s: HTMLElementAttributes;
	/** Attributes for the sample output (`<samp>`) element. */
	samp: HTMLElementAttributes;
	/** Attributes for the script (`<script>`) element. */
	script: ScriptAttributes;
	/** Attributes for the search (`<search>`) element. */
	search: HTMLElementAttributes;
	/** Attributes for the section (`<section>`) element. */
	section: HTMLElementAttributes;
	/** Attributes for the select (`<select>`) element. */
	select: SelectAttributes;
	/** Attributes for the slot (`<slot>`) element. */
	slot: SlotAttributes;
	/** Attributes for the small text (`<small>`) element. */
	small: HTMLElementAttributes;
	/** Attributes for the media source (`<source>`) element. */
	source: SourceAttributes;
	/** Attributes for the span (`<span>`) element. */
	span: HTMLAttributes;
	/** Attributes for the strong importance (`<strong>`) element. */
	strong: HTMLAttributes;
	/** Attributes for the style information (`<style>`) element. */
	style: StyleAttributes;
	/** Attributes for the subscript (`<sub>`) element. */
	sub: HTMLElementAttributes;
	/** Attributes for the summary (`<summary>`) element. */
	summary: HTMLElementAttributes;
	/** Attributes for the superscript (`<sup>`) element. */
	sup: HTMLElementAttributes;
	/** Attributes for the SVG (`<svg>`) element. */
	svg: SVGElementAttributes;
	/** Attributes for the table (`<table>`) element. */
	table: HTMLElementAttributes;
	/** Attributes for the table body (`<tbody>`) element. */
	tbody: HTMLElementAttributes;
	/** Attributes for the table cell (`<td>`) element. */
	td: TdAttributes;
	/** Attributes for the template (`<template>`) element. */
	template: TemplateAttributes;
	/** Attributes for the text area (`<textarea>`) element. */
	textarea: TextAreaAttributes;
	/** Attributes for the table footer (`<tfoot>`) element. */
	tfoot: HTMLElementAttributes;
	/** Attributes for the table header cell (`<th>`) element. */
	th: ThAttributes;
	/** Attributes for the table head (`<thead>`) element. */
	thead: HTMLElementAttributes;
	/** Attributes for the time (`<time>`) element. */
	time: TimeAttributes;
	/** Attributes for the document title (`<title>`) element. */
	title: HTMLElementAttributes;
	/** Attributes for the table row (`<tr>`) element. */
	tr: HTMLElementAttributes;
	/** Attributes for the text track (`<track>`) element. */
	track: TrackAttributes;
	/** Attributes for the unarticulated annotation (`<u>`) element. */
	u: HTMLElementAttributes;
	/** Attributes for the unordered list (`<ul>`) element. */
	ul: HTMLElementAttributes;
	/** Attributes for the variable (`<var>`) element. */
	var: HTMLElementAttributes;
	/** Attributes for the video (`<video>`) element. */
	video: VideoAttributes;
	/** Attributes for the line break opportunity (`<wbr>`) element. */
	wbr: HTMLElementAttributes;
};

export type HAS_REQUIRED_ATTRIBUTES_MAP = {
	[K in keyof ATTRIBUTE_MAP]: HasRequiredKeys<
		Omit<ATTRIBUTE_MAP[K], `data-${string}` | `aria-${string}` | `_${string}`>
	> extends true
		? true
		: false;
};

const hasRequiredAttributesMap: HAS_REQUIRED_ATTRIBUTES_MAP = {
	a: true,
	abbr: false,
	address: false,
	area: true,
	article: false,
	aside: false,
	audio: false,
	b: false,
	base: true,
	bdi: false,
	bdo: false,
	blockquote: false,
	body: false,
	br: false,
	button: false,
	canvas: false,
	caption: false,
	cite: false,
	code: false,
	col: false,
	colgroup: false,
	data: false,
	datalist: false,
	dd: false,
	del: false,
	details: false,
	dfn: false,
	dialog: false,
	div: false,
	dl: false,
	dt: false,
	em: false,
	embed: false,
	fieldset: false,
	figcaption: false,
	figure: false,
	footer: false,
	form: true,
	h1: false,
	h2: false,
	h3: false,
	h4: false,
	h5: false,
	h6: false,
	head: false,
	header: false,
	hgroup: false,
	hr: false,
	html: false,
	i: false,
	iframe: false,
	img: false,
	input: false,
	ins: false,
	kbd: false,
	label: false,
	legend: false,
	li: false,
	link: true,
	main: false,
	map: true,
	mark: false,
	math: false,
	menu: false,
	meta: false,
	meter: false,
	nav: false,
	noscript: false,
	object: false,
	ol: false,
	optgroup: false,
	option: false,
	output: false,
	p: false,
	picture: false,
	portal: false,
	pre: false,
	progress: false,
	q: false,
	rp: false,
	rt: false,
	ruby: false,
	s: false,
	samp: false,
	script: false,
	search: false,
	section: false,
	select: false,
	slot: true,
	small: false,
	source: false,
	span: false,
	strong: false,
	style: false,
	sub: false,
	summary: false,
	sup: false,
	svg: false,
	table: false,
	tbody: false,
	td: false,
	template: false,
	textarea: false,
	tfoot: false,
	th: false,
	thead: false,
	time: false,
	title: false,
	tr: false,
	track: false,
	u: false,
	ul: false,
	var: false,
	video: false,
	wbr: false,
};

export const hasRequiredAttributes = <K extends keyof ATTRIBUTE_MAP>(tag: K): boolean => hasRequiredAttributesMap[tag];
