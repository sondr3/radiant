import type { ELEMENT_MAP } from "./svg_elements.js";

export type SVGContent =
	| ELEMENT_MAP["a"]
	| ELEMENT_MAP["animate"]
	| ELEMENT_MAP["animateMotion"]
	| ELEMENT_MAP["animateTransform"]
	| ELEMENT_MAP["audio"]
	| ELEMENT_MAP["canvas"]
	| ELEMENT_MAP["circle"]
	| ELEMENT_MAP["clipPath"]
	| ELEMENT_MAP["defs"]
	| ELEMENT_MAP["desc"]
	| ELEMENT_MAP["discard"]
	| ELEMENT_MAP["ellipse"]
	| ELEMENT_MAP["feBlend"]
	| ELEMENT_MAP["feColorMatrix"]
	| ELEMENT_MAP["feComponentTransfer"]
	| ELEMENT_MAP["feComposite"]
	| ELEMENT_MAP["feConvolveMatrix"]
	| ELEMENT_MAP["feDiffuseLighting"]
	| ELEMENT_MAP["feDisplacementMap"]
	| ELEMENT_MAP["feDistantLight"]
	| ELEMENT_MAP["feDropShadow"]
	| ELEMENT_MAP["feFlood"]
	| ELEMENT_MAP["feFuncA"]
	| ELEMENT_MAP["feFuncB"]
	| ELEMENT_MAP["feFuncG"]
	| ELEMENT_MAP["feFuncR"]
	| ELEMENT_MAP["feGaussianBlur"]
	| ELEMENT_MAP["feImage"]
	| ELEMENT_MAP["feMerge"]
	| ELEMENT_MAP["feMergeNode"]
	| ELEMENT_MAP["feMorphology"]
	| ELEMENT_MAP["feOffset"]
	| ELEMENT_MAP["fePointLight"]
	| ELEMENT_MAP["feSpecularLighting"]
	| ELEMENT_MAP["feSpotLight"]
	| ELEMENT_MAP["feTile"]
	| ELEMENT_MAP["feTurbulence"]
	| ELEMENT_MAP["filter"]
	| ELEMENT_MAP["foreignObject"]
	| ELEMENT_MAP["g"]
	| ELEMENT_MAP["iframe"]
	| ELEMENT_MAP["image"]
	| ELEMENT_MAP["line"]
	| ELEMENT_MAP["linearGradient"]
	| ELEMENT_MAP["marker"]
	| ELEMENT_MAP["mask"]
	| ELEMENT_MAP["metadata"]
	| ELEMENT_MAP["mpath"]
	| ELEMENT_MAP["path"]
	| ELEMENT_MAP["pattern"]
	| ELEMENT_MAP["polygon"]
	| ELEMENT_MAP["polyline"]
	| ELEMENT_MAP["radialGradient"]
	| ELEMENT_MAP["rect"]
	| ELEMENT_MAP["script"]
	| ELEMENT_MAP["set"]
	| ELEMENT_MAP["stop"]
	| ELEMENT_MAP["style"]
	| ELEMENT_MAP["svg"]
	| ELEMENT_MAP["switch"]
	| ELEMENT_MAP["symbol"]
	| ELEMENT_MAP["text"]
	| ELEMENT_MAP["textPath"]
	| ELEMENT_MAP["title"]
	| ELEMENT_MAP["tspan"]
	| ELEMENT_MAP["unknown"]
	| ELEMENT_MAP["use"]
	| ELEMENT_MAP["video"]
	| ELEMENT_MAP["view"];

export type CHILDREN_MAP = {
	a: SVGContent;
	animate: SVGContent;
	animateMotion: SVGContent;
	animateTransform: SVGContent;
	audio: SVGContent;
	canvas: SVGContent;
	circle: SVGContent;
	clipPath: SVGContent;
	defs: SVGContent;
	desc: SVGContent;
	discard: SVGContent;
	ellipse: SVGContent;
	feBlend: SVGContent;
	feColorMatrix: SVGContent;
	feComponentTransfer: SVGContent;
	feComposite: SVGContent;
	feConvolveMatrix: SVGContent;
	feDiffuseLighting: SVGContent;
	feDisplacementMap: SVGContent;
	feDistantLight: SVGContent;
	feDropShadow: SVGContent;
	feFlood: SVGContent;
	feFuncA: SVGContent;
	feFuncB: SVGContent;
	feFuncG: SVGContent;
	feFuncR: SVGContent;
	feGaussianBlur: SVGContent;
	feImage: SVGContent;
	feMerge: SVGContent;
	feMergeNode: SVGContent;
	feMorphology: SVGContent;
	feOffset: SVGContent;
	fePointLight: SVGContent;
	feSpecularLighting: SVGContent;
	feSpotLight: SVGContent;
	feTile: SVGContent;
	feTurbulence: SVGContent;
	filter: SVGContent;
	foreignObject: SVGContent;
	g: SVGContent;
	iframe: SVGContent;
	image: SVGContent;
	line: SVGContent;
	linearGradient: SVGContent;
	marker: SVGContent;
	mask: SVGContent;
	metadata: SVGContent;
	mpath: SVGContent;
	path: SVGContent;
	pattern: SVGContent;
	polygon: SVGContent;
	polyline: SVGContent;
	radialGradient: SVGContent;
	rect: SVGContent;
	script: SVGContent;
	set: SVGContent;
	stop: SVGContent;
	style: SVGContent;
	svg: SVGContent;
	switch: SVGContent;
	symbol: SVGContent;
	text: SVGContent;
	textPath: SVGContent;
	title: SVGContent;
	tspan: SVGContent;
	unknown: SVGContent;
	use: SVGContent;
	video: SVGContent;
	view: SVGContent;
};
