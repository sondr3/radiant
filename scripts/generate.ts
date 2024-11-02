import { main as generateHtmlElements } from "./html_element_generator.js";
import { main as generateHtmlTags } from "./html_tag_generator.js";
import { main as generateSvgElements } from "./svg_element_generator.js";
import { main as generateSvgTags } from "./svg_tag_generator.js";

await generateHtmlElements();
await generateHtmlTags();
await generateSvgElements();
await generateSvgTags();
