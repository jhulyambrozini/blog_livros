import { el } from "../base.ts";
import "../brand-logo/brand-logo.css";

export interface BrandLogoProps {
  title: string;
  tagline?: string;
}

export function createBrandLogo(props: BrandLogoProps): HTMLDivElement {
  const logo = el("div", { class: "brand-logo" }, el("span", { class: "brand-logo__title", text: props.title }));
  if (props.tagline) {
    logo.append(el("span", { class: "brand-logo__tagline", text: props.tagline }));
  }
  return logo;
}
