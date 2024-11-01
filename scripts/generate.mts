import { main as generateHtmlElements } from "./html_element_generator.mjs";
import { main as generateHtmlTags } from "./html_tag_generator.mjs";
import { main as generateSvgElements } from "./svg_element_generator.mjs";
import { main as generateSvgTags } from "./svg_tag_generator.mjs";

await generateHtmlElements();
await generateHtmlTags();
await generateSvgElements();
await generateSvgTags();
