import "../cta-button/cta-button.css";

export interface CtaButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "default" | "ghost" | "accent";
  onClick?: (event: MouseEvent) => void;
}

export function createCtaButton(props: CtaButtonProps): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.type = props.type ?? "button";
  const variant = props.variant ?? "default";
  btn.className = variant === "default" ? "cta-button" : `cta-button cta-button--${variant}`;
  btn.textContent = props.label;
  if (props.onClick) btn.addEventListener("click", props.onClick);
  return btn;
}