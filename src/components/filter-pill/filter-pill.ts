import { el } from "../base.ts";
import "../filter-pill/filter-pill.css";

export interface FilterPillProps {
  label: string;
  active?: boolean;
  className?: string;
  onClick?: (event: MouseEvent) => void;
}

export function createFilterPill(props: FilterPillProps): HTMLButtonElement {
  const classes = ["filter-pill"];
  if (props.active) classes.push("filter-pill--active");
  if (props.className) classes.push(props.className);

  const pill = el(
    "button",
    { type: "button", class: classes.join(" ") },
    el("span", { text: props.label }),
  );
  if (props.onClick) pill.addEventListener("click", props.onClick);
  return pill;
}