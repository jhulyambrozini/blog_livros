import "../footer-link/footer-link.css";

export interface FooterLinkProps {
  label: string;
  href?: string;
}

export function createFooterLink(props: FooterLinkProps): HTMLAnchorElement {
  const a = document.createElement("a");
  a.className = "footer-link";
  a.href = props.href ?? "#";
  a.textContent = props.label;
  return a;
}
