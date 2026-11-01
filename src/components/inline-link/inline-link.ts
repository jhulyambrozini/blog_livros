import { el, svgIcon } from "../base.ts";
import "../inline-link/inline-link.css";

export interface InlineLinkProps {
  label: string;
  href?: string;
}

export function createInlineLink(props: InlineLinkProps): HTMLAnchorElement {
  const link = el(
    "a",
    { class: "inline-link", href: props.href ?? "#" },
    el("span", { class: "inline-link__label", text: props.label }),
    svgIcon("arrow-right", 16),
  );
  return link;
}
