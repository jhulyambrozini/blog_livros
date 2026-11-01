import { el } from "../base.ts";
import "../filter-pill/filter-pill.css";

export interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export function createFilterPill(props: FilterPillProps): HTMLButtonElement {
  const pill = el(
    "button",
    { type: "button", class: props.active ? "filter-pill filter-pill--active" : "filter-pill" },
    el("span", { text: props.label }),
  );
  if (props.onClick) pill.addEventListener("click", props.onClick);
  return pill;
}
