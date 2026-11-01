import "../nav-link/nav-link.css";

export interface NavLinkProps {
  label: string;
  href?: string;
  active?: boolean;
}

export function createNavLink(props: NavLinkProps): HTMLAnchorElement {
  const a = document.createElement("a");
  a.className = "nav-link";
  a.href = props.href ?? "#";
  a.textContent = props.label;
  if (props.active) {
    a.classList.add("nav-link--active");
    a.setAttribute("aria-current", "page");
  }
  return a;
}
