import { el } from "../base.ts";
import { createFooterLink, type FooterLinkProps } from "../footer-link/footer-link.ts";
import "../footer-column/footer-column.css";

export interface FooterColumnProps {
  title: string;
  links?: FooterLinkProps[];
}

export function createFooterColumn(props: FooterColumnProps): HTMLDivElement {
  const column = el(
    "div",
    { class: "footer-column" },
    el("h4", { class: "footer-column__title", text: props.title }),
  );
  for (const link of props.links ?? []) {
    column.append(createFooterLink(link));
  }
  return column;
}
