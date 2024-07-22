/**
 * https://html.spec.whatwg.org/dev/dom.html#global-attributes
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

export type UserDataAttributes = GlobalAttributes & {
  [key: `data-${string}`]: string | boolean;
};

export type DefaultAttributes = UserDataAttributes;

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

type AreaAttributes = HTMLElementAttributes & Pick<AnchorAttributes, "href" | "target" | "referrerpolicy"> & {
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
  onafterprint: string;
  onbeforeprint: string;
  onbeforeunload: string;
  onhashchange: string;
  onlanguagechange: string;
  onmessage: string;
  onmessageerror: string;
  onoffline: string;
  ononline: string;
  onpageswap: string;
  onpagehide: string;
  onpagereveal: string;
  onpageshow: string;
  onpopstate: string;
  onrejectionhandled: string;
  onstorage: string;
  onunhandledrejection: string;
  onunload: string;
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

type FormAttributes = HTMLElementAttributes & {
  "accept-charset"?: string;
  action: "get" | "post" | "dialog";
  autocomplete?: "on" | "off" | boolean;
  enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  method?: "get" | "post" | "dialog";
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

type InputAttributes = HTMLElementAttributes & Omit<ButtonAttributes, "type" | "value"> & {
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

export type ATTRIBUTE_MAP = {
  a: AnchorAttributes;
  abbr: HTMLElementAttributes;
  address: HTMLElementAttributes;
  area: AreaAttributes;
  article: HTMLElementAttributes;
  aside: HTMLElementAttributes;
  audio: AudioAttributes;
  b: HTMLElementAttributes;
  base: BaseAttributes;
  bdi: HTMLElementAttributes;
  bdo: HTMLElementAttributes;
  blockquote: BlockquoteAttributes;
  body: BodyAttributes;
  br: HTMLElementAttributes;
  button: ButtonAttributes;
  canvas: CanvasAttributes;
  caption: HTMLElementAttributes;
  cite: HTMLElementAttributes;
  code: HTMLElementAttributes;
  col: ColAttributes;
  colgroup: ColGroupAttributes;
  data: DataAttributes;
  datalist: HTMLElementAttributes;
  dd: HTMLElementAttributes;
  del: DelAttributes;
  details: DetailsAttributes;
  dfn: HTMLElementAttributes;
  dialog: DialogAttributes;
  div: HTMLElementAttributes;
  dl: HTMLElementAttributes;
  dt: HTMLElementAttributes;
  em: HTMLElementAttributes;
  embed: EmbedAttributes;
  fieldset: FieldSetAttributes;
  figcaption: HTMLElementAttributes;
  figure: HTMLElementAttributes;
  footer: HTMLElementAttributes;
  form: FormAttributes;
  h1: HTMLElementAttributes;
  h2: HTMLElementAttributes;
  h3: HTMLElementAttributes;
  h4: HTMLElementAttributes;
  h5: HTMLElementAttributes;
  h6: HTMLElementAttributes;
  head: HTMLElementAttributes;
  header: HTMLElementAttributes;
  hgroup: HTMLElementAttributes;
  hr: HTMLElementAttributes;
  html: HTMLAttributes;
  i: HTMLElementAttributes;
  iframe: IFrameAttributes;
  img: ImgAttributes;
  input: InputAttributes;
  ins: InsAttributes;
  kbd: HTMLElementAttributes;
  label: LabelAttributes;
  legend: HTMLElementAttributes;
  li: LiAttributes;
  link: LinkAttributes;
  main: HTMLElementAttributes;
  map: MapAttributes;
  mark: HTMLElementAttributes;
  math: HTMLElementAttributes;
  menu: HTMLElementAttributes;
  meta: MetaAttributes;
  meter: MeterAttributes;
  nav: HTMLElementAttributes;
  noscript: HTMLElementAttributes;
  object: ObjectAttributes;
  ol: OlAttributes;
  optgroup: OptGroupAttributes;
  option: OptionAttributes;
  output: OutputAttributes;
  p: HTMLElementAttributes;
  picture: HTMLElementAttributes;
  portal: HTMLElementAttributes;
  pre: HTMLElementAttributes;
  progress: ProgressAttributes;
  q: QAttributes;
  rp: HTMLElementAttributes;
  rt: HTMLElementAttributes;
  ruby: HTMLElementAttributes;
  s: HTMLElementAttributes;
  samp: HTMLElementAttributes;
  script: ScriptAttributes;
  search: HTMLElementAttributes;
  section: HTMLElementAttributes;
  select: SelectAttributes;
  slot: SlotAttributes;
  small: HTMLElementAttributes;
  source: SourceAttributes;
  span: HTMLAttributes;
  strong: HTMLAttributes;
  style: StyleAttributes;
  sub: HTMLElementAttributes;
  summary: HTMLElementAttributes;
  sup: HTMLElementAttributes;
  svg: HTMLElementAttributes;
  table: HTMLElementAttributes;
  tbody: HTMLElementAttributes;
  td: TdAttributes;
  template: TemplateAttributes;
  textarea: TextAreaAttributes;
  tfoot: HTMLElementAttributes;
  th: ThAttributes;
  thead: HTMLElementAttributes;
  time: TimeAttributes;
  title: HTMLElementAttributes;
  tr: HTMLElementAttributes;
  track: TrackAttributes;
  u: HTMLElementAttributes;
  ul: HTMLElementAttributes;
  var: HTMLElementAttributes;
  video: VideoAttributes;
  wbr: HTMLElementAttributes;
};
