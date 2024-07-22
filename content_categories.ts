import * as e from "./elements.ts";

export type ContentCategory =
  | "MetadataContent"
  | "FlowContent"
  | "SectioningContent"
  | "HeadingContent"
  | "PhrasingContent"
  | "EmbeddedContent"
  | "InteractiveContent"
  | "PalpableContent";

type HtmlContent = e.HeadElement | e.BodyElement;

type MetadataContent =
  | e.BaseElement
  | e.LinkElement
  | e.MetaElement
  | e.NoscriptElement
  | e.ScriptElement
  | e.StyleElement
  | e.TemplateElement
  | e.TitleElement;

type FlowContent =
  | e.AElement
  | e.AbbrElement
  | e.AddressElement
  | e.AreaElement
  | e.ArticleElement
  | e.AsideElement
  | e.AudioElement
  | e.BElement
  | e.BdiElement
  | e.BdoElement
  | e.BlockquoteElement
  | e.BrElement
  | e.ButtonElement
  | e.CanvasElement
  | e.CiteElement
  | e.CodeElement
  | e.DataElement
  | e.DatalistElement
  | e.DelElement
  | e.DetailsElement
  | e.DfnElement
  | e.DialogElement
  | e.DivElement
  | e.DlElement
  | e.EmElement
  | e.EmbedElement
  | e.FieldsetElement
  | e.FigureElement
  | e.FooterElement
  | e.FormElement
  | e.H1Element
  | e.H2Element
  | e.H3Element
  | e.H4Element
  | e.H5Element
  | e.H6Element
  | e.HeaderElement
  | e.HgroupElement
  | e.HrElement
  | e.IElement
  | e.IframeElement
  | e.ImgElement
  | e.InputElement
  | e.InsElement
  | e.KbdElement
  | e.LabelElement
  | e.LinkElement
  | e.MainElement
  | e.MapElement
  | e.MarkElement
  | e.MathElement
  | e.MenuElement
  | e.MetaElement
  | e.MeterElement
  | e.NavElement
  | e.NoscriptElement
  | e.ObjectElement
  | e.OlElement
  | e.OutputElement
  | e.PElement
  | e.PictureElement
  | e.PreElement
  | e.ProgressElement
  | e.QElement
  | e.RubyElement
  | e.SElement
  | e.SampElement
  | e.ScriptElement
  | e.SearchElement
  | e.SectionElement
  | e.SelectElement
  | e.SlotElement
  | e.SmallElement
  | e.SpanElement
  | e.StrongElement
  | e.SubElement
  | e.SupElement
  | e.SVGElement
  | e.TableElement
  | e.TemplateElement
  | e.TextareaElement
  | e.TimeElement
  | e.UElement
  | e.UlElement
  | e.VarElement
  | e.VideoElement
  | e.WbrElement
  | e.TextElement;

type PhrasingContent =
  | e.AElement
  | e.AbbrElement
  | e.AreaElement
  | e.AudioElement
  | e.BElement
  | e.BdiElement
  | e.BdoElement
  | e.BrElement
  | e.ButtonElement
  | e.CanvasElement
  | e.CiteElement
  | e.CodeElement
  | e.DataElement
  | e.DatalistElement
  | e.DelElement
  | e.DfnElement
  | e.EmElement
  | e.EmbedElement
  | e.IElement
  | e.IframeElement
  | e.ImgElement
  | e.InputElement
  | e.InsElement
  | e.KbdElement
  | e.LabelElement
  | e.LinkElement
  | e.MapElement
  | e.MarkElement
  | e.MathElement
  | e.MetaElement
  | e.MeterElement
  | e.NoscriptElement
  | e.ObjectElement
  | e.OutputElement
  | e.PictureElement
  | e.ProgressElement
  | e.QElement
  | e.RubyElement
  | e.SElement
  | e.SampElement
  | e.ScriptElement
  | e.SelectElement
  | e.SlotElement
  | e.SmallElement
  | e.SpanElement
  | e.StrongElement
  | e.SubElement
  | e.SupElement
  | e.SVGElement
  | e.TemplateElement
  | e.TextareaElement
  | e.TimeElement
  | e.UElement
  | e.VarElement
  | e.VideoElement
  | e.WbrElement
  | e.TextElement;

type EmbeddedContent =
  | e.AudioElement
  | e.CanvasElement
  | e.EmbedElement
  | e.IframeElement
  | e.ImgElement
  | e.MathElement
  | e.ObjectElement
  | e.PictureElement
  | e.SvgElement
  | e.VideoElement;

type InteractiveContent =
  | e.AElement
  | e.AudioElement
  | e.ButtonElement
  | e.DetailsElement
  | e.EmbedElement
  | e.IframeElement
  | e.ImgElement
  | e.InputElement
  | e.LabelElement
  | e.SelectElement
  | e.TextareaElement
  | e.VideoElement;

type SectioningContent =
  | e.ArticleElement
  | e.AsideElement
  | e.NavElement
  | e.SectionElement;

type HeadingContent =
  | e.H1Element
  | e.H2Element
  | e.H3Element
  | e.H4Element
  | e.H5Element
  | e.H6Element
  | e.HgroupElement;

type PalpableContent =
  | e.AElement
  | e.AbbrElement
  | e.AddressElement
  | e.ArticleElement
  | e.AsideElement
  | e.AudioElement
  | e.BElement
  | e.BdiElement
  | e.BdoElement
  | e.BlockquoteElement
  | e.ButtonElement
  | e.CanvasElement
  | e.CiteElement
  | e.CodeElement
  | e.DataElement
  | e.DelElement
  | e.DetailsElement
  | e.DfnElement
  | e.DivElement
  | e.DlElement
  | e.EmElement
  | e.EmbedElement
  | e.FieldsetElement
  | e.FigureElement
  | e.FooterElement
  | e.FormElement
  | e.H1Element
  | e.H2Element
  | e.H3Element
  | e.H4Element
  | e.H5Element
  | e.H6Element
  | e.HeaderElement
  | e.HgroupElement
  | e.IElement
  | e.IframeElement
  | e.ImgElement
  | e.InputElement
  | e.InsElement
  | e.KbdElement
  | e.LabelElement
  | e.MainElement
  | e.MapElement
  | e.MarkElement
  | e.MathElement
  | e.MenuElement
  | e.MeterElement
  | e.NavElement
  | e.ObjectElement
  | e.OlElement
  | e.OutputElement
  | e.PElement
  | e.PictureElement
  | e.PreElement
  | e.ProgressElement
  | e.QElement
  | e.RubyElement
  | e.SElement
  | e.SampElement
  | e.SearchElement
  | e.SectionElement
  | e.SelectElement
  | e.SmallElement
  | e.SpanElement
  | e.StrongElement
  | e.SubElement
  | e.SupElement
  | e.SvgElement
  | e.TableElement
  | e.TextareaElement
  | e.TimeElement
  | e.UElement
  | e.UlElement
  | e.VarElement
  | e.VideoElement;

type ScriptSupportingContent =
  | e.ScriptElement
  | e.TemplateElement;

export type AllChildren =
  | string
  | HeadingContent
  | MetadataContent
  | FlowContent
  | PhrasingContent
  | InteractiveContent
  | SectioningContent
  | PalpableContent
  | EmbeddedContent;

export type CONTENT_CATEGORY_MAP = {
  a: PhrasingContent;
  abbr: PhrasingContent;
  address: FlowContent;
  area: void;
  article: FlowContent;
  aside: FlowContent;
  audio: e.SourceElement | e.TrackElement | PhrasingContent;
  b: PhrasingContent;
  base: void;
  bdi: PhrasingContent;
  bdo: PhrasingContent;
  blockquote: FlowContent;
  body: FlowContent;
  br: void;
  button: PhrasingContent;
  canvas: void;
  caption: FlowContent;
  cite: PhrasingContent;
  code: PhrasingContent;
  col: void;
  colgroup: e.ColElement | e.TemplateElement;
  data: PhrasingContent;
  datalist: PhrasingContent | e.OptionElement | ScriptSupportingContent;
  dd: FlowContent;
  del: PhrasingContent;
  details: e.SummaryElement | FlowContent;
  dfn: PhrasingContent;
  dialog: FlowContent;
  div: FlowContent;
  dl: e.DtElement | e.DdElement | e.DivElement | ScriptSupportingContent;
  dt: FlowContent;
  em: PhrasingContent;
  embed: void;
  fieldset: e.LegendElement | FlowContent;
  figcaption: FlowContent;
  figure: e.FigcaptionElement | FlowContent;
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
  hr: void;
  html: HtmlContent;
  i: PhrasingContent;
  iframe: void;
  img: void;
  input: void;
  ins: PhrasingContent;
  kbd: PhrasingContent;
  label: PhrasingContent;
  legend: PhrasingContent | HeadingContent;
  li: FlowContent;
  link: void;
  main: FlowContent;
  map: PhrasingContent;
  mark: PhrasingContent;
  math: void;
  menu: e.LiElement | ScriptSupportingContent;
  meta: void;
  meter: PhrasingContent;
  nav: FlowContent;
  noscript: void;
  object: PhrasingContent;
  ol: e.LiElement | ScriptSupportingContent;
  optgroup: e.OptionElement | ScriptSupportingContent;
  option: string;
  output: PhrasingContent;
  p: PhrasingContent;
  picture: e.SourceElement | e.ImgElement | ScriptSupportingContent;
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
  select: e.OptionElement | e.OptgroupElement | ScriptSupportingContent;
  slot: PhrasingContent;
  small: PhrasingContent;
  source: void;
  span: PhrasingContent;
  strong: PhrasingContent;
  style: string;
  sub: PhrasingContent;
  summary: PhrasingContent | HeadingContent;
  sup: PhrasingContent;
  svg: void;
  table:
    | e.CaptionElement
    | e.ColgroupElement
    | e.TheadElement
    | e.TfootElement
    | e.TbodyElement
    | e.TrElement
    | ScriptSupportingContent;
  tbody: e.TrElement | ScriptSupportingContent;
  td: FlowContent;
  template: void;
  textarea: string;
  tfoot: e.TrElement | ScriptSupportingContent;
  th: FlowContent;
  thead: e.TrElement | ScriptSupportingContent;
  time: PhrasingContent;
  title: string;
  tr: e.ThElement | e.TdElement | ScriptSupportingContent;
  track: void;
  u: PhrasingContent;
  ul: e.LiElement | ScriptSupportingContent;
  var: PhrasingContent;
  video: e.SourceElement | e.TrackElement | PhrasingContent;
  wbr: void;
};
