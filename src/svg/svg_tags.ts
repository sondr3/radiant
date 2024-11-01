/**
 * This module provides a list of all SVG tags.
 * @module
 */

/*
 * A list of all SVG tags, from https://www.w3.org/TR/SVG2/eltindex.html.
 */
export const SVG_TAGS = [
	"a",
	"animate",
	"animateMotion",
	"animateTransform",
	"audio",
	"canvas",
	"circle",
	"clipPath",
	"defs",
	"desc",
	"discard",
	"ellipse",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"filter",
	"foreignObject",
	"g",
	"iframe",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"metadata",
	"mpath",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"script",
	"set",
	"stop",
	"style",
	"svg",
	"switch",
	"symbol",
	"text",
	"textPath",
	"title",
	"tspan",
	"unknown",
	"use",
	"video",
	"view",
] as const;

/** Represents an SVG tag. */
export type SVGTag = (typeof SVG_TAGS)[number];
