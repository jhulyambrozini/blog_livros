import { el, svgIcon } from "../base.ts";
import "../faq-item/faq-item.css";

export interface FaqItemProps {
  number: string;
  question: string;
  answer: string;
  open?: boolean;
  onToggle?: (open: boolean) => void;
}

export function createFaqItem(props: FaqItemProps): HTMLElement {
  let open = props.open ?? false;

  const chevron = svgIcon("chevron-down", 16);
  const toggle = el(
    "button",
    { type: "button", class: "faq-item__trigger", "aria-expanded": String(open) },
    el("span", { class: "faq-item__number", text: props.number }),
    el("span", { class: "faq-item__question", text: props.question }),
    chevron,
  );

  const answer = el("p", { class: "faq-item__answer", text: props.answer });
  answer.hidden = !open;

  const item = el("div", { class: open ? "faq-item faq-item--open" : "faq-item" }, toggle, answer);

  toggle.addEventListener("click", () => {
    open = !open;
    item.classList.toggle("faq-item--open", open);
    toggle.setAttribute("aria-expanded", String(open));
    answer.hidden = !open;
    props.onToggle?.(open);
  });

  return item;
}
