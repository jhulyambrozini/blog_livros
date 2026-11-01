import "../cta-button/cta-button.css";

export interface CtaButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "default" | "ghost";
  onClick?: (event: MouseEvent) => void;
}

export function createCtaButton(props: CtaButtonProps): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.type = props.type ?? "button";
  btn.className = props.variant === "ghost" ? "cta-button cta-button--ghost" : "cta-button";
  btn.textContent = props.label;
  if (props.onClick) btn.addEventListener("click", props.onClick);
  return btn;
}
