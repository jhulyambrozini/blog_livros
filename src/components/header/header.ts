import { el } from "../base.ts";
import { createBrandLogo } from "../brand-logo/brand-logo.ts";
import { createNavLink } from "../nav-link/nav-link.ts";
import { createCtaButton } from "../cta-button/cta-button.ts";
import "../header/header.css";

export interface HeaderLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logo: string;
  tagline?: string;
  links?: HeaderLink[];
  cta?: { label: string; onClick?: () => void };
  activeHref?: string;
}

export function createHeader(props: HeaderProps): HTMLElement {
  const header = el("header", { class: "header" });
  header.append(createBrandLogo({ title: props.logo, tagline: props.tagline }));

  if (props.links?.length) {
    const nav = el("nav", { class: "header__nav" });
    for (const link of props.links) {
      nav.append(createNavLink({ label: link.label, href: link.href, active: link.href === props.activeHref }));
    }
    header.append(nav);
  }

  if (props.cta) {
    header.append(createCtaButton({ label: props.cta.label, onClick: props.cta.onClick }));
  }

  return header;
}
