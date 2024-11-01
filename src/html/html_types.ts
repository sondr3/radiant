import type { ATTRIBUTE_MAP } from "./html_attributes.js";
import type { CHILDREN_MAP } from "./html_content_categories.js";
import type { HTMLTag } from "./html_tags.js";

/**
 * Gets the allowed children types for a given HTML element
 * @example
 * type DivChildren = ChildrenOf<"div">; // Returns FlowContent
 * type SpanChildren = ChildrenOf<"span">; // Returns PhrasingContent
 */
export type ChildrenOf<T extends HTMLTag> = CHILDREN_MAP[T];

/**
 * Gets the allowed properties/attributes for a given HTML element
 * @example
 * type DivProps = PropertiesOf<"div">; // Returns HTMLElementAttributes
 * type InputProps = PropertiesOf<"input">; // Returns InputAttributes
 */
export type AttributesOf<T extends HTMLTag> = ATTRIBUTE_MAP[T];
