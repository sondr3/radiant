import type { SVGContent } from "../svg/svg_children.js";
import type { ELEMENT_MAP } from "./html_elements.js";

export type ContentCategory =
	| "MetadataContent"
	| "FlowContent"
	| "SectioningContent"
	| "HeadingContent"
	| "PhrasingContent"
	| "EmbeddedContent"
	| "InteractiveContent"
	| "PalpableContent";

type HtmlContent = ELEMENT_MAP["head"] | ELEMENT_MAP["body"];

type MetadataContent =
	| ELEMENT_MAP["base"]
	| ELEMENT_MAP["link"]
	| ELEMENT_MAP["meta"]
	| ELEMENT_MAP["noscript"]
	| ELEMENT_MAP["script"]
	| ELEMENT_MAP["style"]
	| ELEMENT_MAP["template"]
	| ELEMENT_MAP["title"];

type FlowContent =
	| string
	| ELEMENT_MAP["a"]
	| ELEMENT_MAP["abbr"]
	| ELEMENT_MAP["address"]
	| ELEMENT_MAP["area"]
	| ELEMENT_MAP["article"]
	| ELEMENT_MAP["aside"]
	| ELEMENT_MAP["audio"]
	| ELEMENT_MAP["b"]
	| ELEMENT_MAP["bdi"]
	| ELEMENT_MAP["bdo"]
	| ELEMENT_MAP["blockquote"]
	| ELEMENT_MAP["br"]
	| ELEMENT_MAP["button"]
	| ELEMENT_MAP["canvas"]
	| ELEMENT_MAP["cite"]
	| ELEMENT_MAP["code"]
	| ELEMENT_MAP["data"]
	| ELEMENT_MAP["datalist"]
	| ELEMENT_MAP["del"]
	| ELEMENT_MAP["details"]
	| ELEMENT_MAP["dfn"]
	| ELEMENT_MAP["dialog"]
	| ELEMENT_MAP["div"]
	| ELEMENT_MAP["dl"]
	| ELEMENT_MAP["em"]
	| ELEMENT_MAP["embed"]
	| ELEMENT_MAP["fieldset"]
	| ELEMENT_MAP["figure"]
	| ELEMENT_MAP["footer"]
	| ELEMENT_MAP["form"]
	| ELEMENT_MAP["h1"]
	| ELEMENT_MAP["h2"]
	| ELEMENT_MAP["h3"]
	| ELEMENT_MAP["h4"]
	| ELEMENT_MAP["h5"]
	| ELEMENT_MAP["h6"]
	| ELEMENT_MAP["header"]
	| ELEMENT_MAP["hgroup"]
	| ELEMENT_MAP["hr"]
	| ELEMENT_MAP["i"]
	| ELEMENT_MAP["iframe"]
	| ELEMENT_MAP["img"]
	| ELEMENT_MAP["input"]
	| ELEMENT_MAP["ins"]
	| ELEMENT_MAP["kbd"]
	| ELEMENT_MAP["label"]
	| ELEMENT_MAP["link"]
	| ELEMENT_MAP["main"]
	| ELEMENT_MAP["map"]
	| ELEMENT_MAP["mark"]
	| ELEMENT_MAP["math"]
	| ELEMENT_MAP["menu"]
	| ELEMENT_MAP["meta"]
	| ELEMENT_MAP["meter"]
	| ELEMENT_MAP["nav"]
	| ELEMENT_MAP["noscript"]
	| ELEMENT_MAP["object"]
	| ELEMENT_MAP["ol"]
	| ELEMENT_MAP["output"]
	| ELEMENT_MAP["p"]
	| ELEMENT_MAP["picture"]
	| ELEMENT_MAP["pre"]
	| ELEMENT_MAP["progress"]
	| ELEMENT_MAP["q"]
	| ELEMENT_MAP["ruby"]
	| ELEMENT_MAP["s"]
	| ELEMENT_MAP["samp"]
	| ELEMENT_MAP["script"]
	| ELEMENT_MAP["search"]
	| ELEMENT_MAP["section"]
	| ELEMENT_MAP["select"]
	| ELEMENT_MAP["slot"]
	| ELEMENT_MAP["small"]
	| ELEMENT_MAP["span"]
	| ELEMENT_MAP["strong"]
	| ELEMENT_MAP["sub"]
	| ELEMENT_MAP["sup"]
	| ELEMENT_MAP["svg"]
	| ELEMENT_MAP["table"]
	| ELEMENT_MAP["template"]
	| ELEMENT_MAP["textarea"]
	| ELEMENT_MAP["time"]
	| ELEMENT_MAP["u"]
	| ELEMENT_MAP["ul"]
	| ELEMENT_MAP["var"]
	| ELEMENT_MAP["video"]
	| ELEMENT_MAP["wbr"];

type PhrasingContent =
	| string
	| ELEMENT_MAP["a"]
	| ELEMENT_MAP["abbr"]
	| ELEMENT_MAP["area"]
	| ELEMENT_MAP["audio"]
	| ELEMENT_MAP["b"]
	| ELEMENT_MAP["bdi"]
	| ELEMENT_MAP["bdo"]
	| ELEMENT_MAP["br"]
	| ELEMENT_MAP["button"]
	| ELEMENT_MAP["canvas"]
	| ELEMENT_MAP["cite"]
	| ELEMENT_MAP["code"]
	| ELEMENT_MAP["data"]
	| ELEMENT_MAP["datalist"]
	| ELEMENT_MAP["del"]
	| ELEMENT_MAP["dfn"]
	| ELEMENT_MAP["em"]
	| ELEMENT_MAP["embed"]
	| ELEMENT_MAP["i"]
	| ELEMENT_MAP["iframe"]
	| ELEMENT_MAP["img"]
	| ELEMENT_MAP["input"]
	| ELEMENT_MAP["ins"]
	| ELEMENT_MAP["kbd"]
	| ELEMENT_MAP["label"]
	| ELEMENT_MAP["link"]
	| ELEMENT_MAP["map"]
	| ELEMENT_MAP["mark"]
	| ELEMENT_MAP["math"]
	| ELEMENT_MAP["meta"]
	| ELEMENT_MAP["meter"]
	| ELEMENT_MAP["noscript"]
	| ELEMENT_MAP["object"]
	| ELEMENT_MAP["output"]
	| ELEMENT_MAP["picture"]
	| ELEMENT_MAP["progress"]
	| ELEMENT_MAP["q"]
	| ELEMENT_MAP["ruby"]
	| ELEMENT_MAP["s"]
	| ELEMENT_MAP["samp"]
	| ELEMENT_MAP["script"]
	| ELEMENT_MAP["select"]
	| ELEMENT_MAP["slot"]
	| ELEMENT_MAP["small"]
	| ELEMENT_MAP["span"]
	| ELEMENT_MAP["strong"]
	| ELEMENT_MAP["sub"]
	| ELEMENT_MAP["sup"]
	| ELEMENT_MAP["svg"]
	| ELEMENT_MAP["template"]
	| ELEMENT_MAP["textarea"]
	| ELEMENT_MAP["time"]
	| ELEMENT_MAP["u"]
	| ELEMENT_MAP["var"]
	| ELEMENT_MAP["video"]
	| ELEMENT_MAP["wbr"];

type EmbeddedContent =
	| ELEMENT_MAP["audio"]
	| ELEMENT_MAP["canvas"]
	| ELEMENT_MAP["embed"]
	| ELEMENT_MAP["iframe"]
	| ELEMENT_MAP["img"]
	| ELEMENT_MAP["math"]
	| ELEMENT_MAP["object"]
	| ELEMENT_MAP["picture"]
	| ELEMENT_MAP["svg"]
	| ELEMENT_MAP["video"];

type InteractiveContent =
	| ELEMENT_MAP["a"]
	| ELEMENT_MAP["audio"]
	| ELEMENT_MAP["button"]
	| ELEMENT_MAP["details"]
	| ELEMENT_MAP["embed"]
	| ELEMENT_MAP["iframe"]
	| ELEMENT_MAP["img"]
	| ELEMENT_MAP["input"]
	| ELEMENT_MAP["label"]
	| ELEMENT_MAP["select"]
	| ELEMENT_MAP["textarea"]
	| ELEMENT_MAP["video"];

type SectioningContent = ELEMENT_MAP["article"] | ELEMENT_MAP["aside"] | ELEMENT_MAP["nav"] | ELEMENT_MAP["section"];

type HeadingContent =
	| ELEMENT_MAP["h1"]
	| ELEMENT_MAP["h2"]
	| ELEMENT_MAP["h3"]
	| ELEMENT_MAP["h4"]
	| ELEMENT_MAP["h5"]
	| ELEMENT_MAP["h6"]
	| ELEMENT_MAP["hgroup"];

type PalpableContent =
	| string
	| ELEMENT_MAP["a"]
	| ELEMENT_MAP["abbr"]
	| ELEMENT_MAP["address"]
	| ELEMENT_MAP["article"]
	| ELEMENT_MAP["aside"]
	| ELEMENT_MAP["audio"]
	| ELEMENT_MAP["b"]
	| ELEMENT_MAP["bdi"]
	| ELEMENT_MAP["bdo"]
	| ELEMENT_MAP["blockquote"]
	| ELEMENT_MAP["button"]
	| ELEMENT_MAP["canvas"]
	| ELEMENT_MAP["cite"]
	| ELEMENT_MAP["code"]
	| ELEMENT_MAP["data"]
	| ELEMENT_MAP["del"]
	| ELEMENT_MAP["details"]
	| ELEMENT_MAP["dfn"]
	| ELEMENT_MAP["div"]
	| ELEMENT_MAP["dl"]
	| ELEMENT_MAP["em"]
	| ELEMENT_MAP["embed"]
	| ELEMENT_MAP["fieldset"]
	| ELEMENT_MAP["figure"]
	| ELEMENT_MAP["footer"]
	| ELEMENT_MAP["form"]
	| ELEMENT_MAP["h1"]
	| ELEMENT_MAP["h2"]
	| ELEMENT_MAP["h3"]
	| ELEMENT_MAP["h4"]
	| ELEMENT_MAP["h5"]
	| ELEMENT_MAP["h6"]
	| ELEMENT_MAP["header"]
	| ELEMENT_MAP["hgroup"]
	| ELEMENT_MAP["i"]
	| ELEMENT_MAP["iframe"]
	| ELEMENT_MAP["img"]
	| ELEMENT_MAP["input"]
	| ELEMENT_MAP["ins"]
	| ELEMENT_MAP["kbd"]
	| ELEMENT_MAP["label"]
	| ELEMENT_MAP["main"]
	| ELEMENT_MAP["map"]
	| ELEMENT_MAP["mark"]
	| ELEMENT_MAP["math"]
	| ELEMENT_MAP["menu"]
	| ELEMENT_MAP["meter"]
	| ELEMENT_MAP["nav"]
	| ELEMENT_MAP["object"]
	| ELEMENT_MAP["ol"]
	| ELEMENT_MAP["output"]
	| ELEMENT_MAP["p"]
	| ELEMENT_MAP["picture"]
	| ELEMENT_MAP["pre"]
	| ELEMENT_MAP["progress"]
	| ELEMENT_MAP["q"]
	| ELEMENT_MAP["ruby"]
	| ELEMENT_MAP["s"]
	| ELEMENT_MAP["samp"]
	| ELEMENT_MAP["search"]
	| ELEMENT_MAP["section"]
	| ELEMENT_MAP["select"]
	| ELEMENT_MAP["small"]
	| ELEMENT_MAP["span"]
	| ELEMENT_MAP["strong"]
	| ELEMENT_MAP["sub"]
	| ELEMENT_MAP["sup"]
	| ELEMENT_MAP["svg"]
	| ELEMENT_MAP["table"]
	| ELEMENT_MAP["textarea"]
	| ELEMENT_MAP["time"]
	| ELEMENT_MAP["u"]
	| ELEMENT_MAP["ul"]
	| ELEMENT_MAP["var"]
	| ELEMENT_MAP["video"];

type ScriptSupportingContent = ELEMENT_MAP["script"] | ELEMENT_MAP["template"];

export type AllChildren =
	| HeadingContent
	| MetadataContent
	| FlowContent
	| PhrasingContent
	| InteractiveContent
	| SectioningContent
	| PalpableContent
	| EmbeddedContent;

type BASE_CHILDREN_MAP = {
	a: PhrasingContent;
	abbr: PhrasingContent;
	address: FlowContent;
	area: undefined;
	article: FlowContent;
	aside: FlowContent;
	audio: ELEMENT_MAP["source"] | ELEMENT_MAP["track"] | PhrasingContent;
	b: PhrasingContent;
	base: undefined;
	bdi: PhrasingContent;
	bdo: PhrasingContent;
	blockquote: FlowContent;
	body: FlowContent;
	br: undefined;
	button: PhrasingContent;
	canvas: undefined;
	caption: FlowContent;
	cite: PhrasingContent;
	code: PhrasingContent;
	col: undefined;
	colgroup: ELEMENT_MAP["col"] | ELEMENT_MAP["template"];
	data: PhrasingContent;
	datalist: PhrasingContent | ELEMENT_MAP["option"] | ScriptSupportingContent;
	dd: FlowContent;
	del: PhrasingContent;
	details: ELEMENT_MAP["summary"] | FlowContent;
	dfn: PhrasingContent;
	dialog: FlowContent;
	div: FlowContent;
	dl: ELEMENT_MAP["dt"] | ELEMENT_MAP["dd"] | ELEMENT_MAP["div"] | ScriptSupportingContent;
	dt: FlowContent;
	em: PhrasingContent;
	embed: undefined;
	fieldset: ELEMENT_MAP["legend"] | FlowContent;
	figcaption: FlowContent;
	figure: ELEMENT_MAP["figcaption"] | FlowContent;
	footer: FlowContent;
	form: FlowContent;
	h1: PhrasingContent;
	h2: PhrasingContent;
	h3: PhrasingContent;
	h4: PhrasingContent;
	h5: PhrasingContent;
	h6: PhrasingContent;
	head: MetadataContent;
	header: FlowContent;
	hgroup: HeadingContent | ScriptSupportingContent;
	hr: undefined;
	html: HtmlContent;
	i: PhrasingContent;
	iframe: undefined;
	img: undefined;
	input: undefined;
	ins: PhrasingContent;
	kbd: PhrasingContent;
	label: PhrasingContent;
	legend: PhrasingContent | HeadingContent;
	li: FlowContent;
	link: undefined;
	main: FlowContent;
	map: PhrasingContent;
	mark: PhrasingContent;
	math: undefined;
	menu: ELEMENT_MAP["li"] | ScriptSupportingContent;
	meta: undefined;
	meter: PhrasingContent;
	nav: FlowContent;
	noscript: undefined;
	object: PhrasingContent;
	ol: ELEMENT_MAP["li"] | ScriptSupportingContent;
	optgroup: ELEMENT_MAP["option"] | ScriptSupportingContent;
	option: string;
	output: PhrasingContent;
	p: PhrasingContent;
	picture: ELEMENT_MAP["source"] | ELEMENT_MAP["img"] | ScriptSupportingContent;
	portal: FlowContent;
	pre: PhrasingContent;
	progress: PhrasingContent;
	q: PhrasingContent;
	rp: string;
	rt: PhrasingContent;
	ruby: PhrasingContent;
	s: PhrasingContent;
	samp: PhrasingContent;
	script: string;
	search: FlowContent;
	section: FlowContent;
	select: ELEMENT_MAP["option"] | ELEMENT_MAP["optgroup"] | ScriptSupportingContent;
	slot: PhrasingContent;
	small: PhrasingContent;
	source: undefined;
	span: PhrasingContent;
	strong: PhrasingContent;
	style: string;
	sub: PhrasingContent;
	summary: PhrasingContent | HeadingContent;
	sup: PhrasingContent;
	svg: SVGContent;
	table:
		| ELEMENT_MAP["caption"]
		| ELEMENT_MAP["colgroup"]
		| ELEMENT_MAP["thead"]
		| ELEMENT_MAP["tfoot"]
		| ELEMENT_MAP["tbody"]
		| ELEMENT_MAP["tr"]
		| ScriptSupportingContent;
	tbody: ELEMENT_MAP["tr"] | ScriptSupportingContent;
	td: FlowContent;
	template: undefined;
	textarea: string;
	tfoot: ELEMENT_MAP["tr"] | ScriptSupportingContent;
	th: FlowContent;
	thead: ELEMENT_MAP["tr"] | ScriptSupportingContent;
	time: PhrasingContent;
	title: string;
	tr: ELEMENT_MAP["th"] | ELEMENT_MAP["td"] | ScriptSupportingContent;
	track: undefined;
	u: PhrasingContent;
	ul: ELEMENT_MAP["li"] | ScriptSupportingContent;
	var: PhrasingContent;
	video: ELEMENT_MAP["source"] | ELEMENT_MAP["track"] | PhrasingContent;
	wbr: undefined;
};

export type CHILDREN_MAP = {
	[K in keyof BASE_CHILDREN_MAP]: BASE_CHILDREN_MAP[K] | null;
};

type ElementsWithPhrasingContent = {
	[K in keyof CHILDREN_MAP]: CHILDREN_MAP[K] extends PhrasingContent ? K : never;
}[keyof CHILDREN_MAP];

const phrasingElementsMap: Record<ElementsWithPhrasingContent, boolean> = {
	a: true,
	abbr: true,
	b: true,
	bdi: true,
	bdo: true,
	button: true,
	cite: true,
	code: true,
	data: true,
	del: true,
	dfn: true,
	em: true,
	h1: true,
	h2: true,
	h3: true,
	h4: true,
	h5: true,
	h6: true,
	i: true,
	ins: true,
	kbd: true,
	label: true,
	map: true,
	mark: true,
	meter: true,
	object: true,
	option: true,
	output: true,
	p: true,
	pre: true,
	progress: true,
	q: true,
	rp: true,
	rt: true,
	ruby: true,
	s: true,
	samp: true,
	script: true,
	slot: true,
	small: true,
	span: true,
	strong: true,
	style: true,
	sub: true,
	sup: true,
	textarea: true,
	time: true,
	title: true,
	u: true,
	var: true,
};

export const isPhrasingTag = <T>(tag: T): boolean => {
	return phrasingElementsMap[tag] ?? false;
};
