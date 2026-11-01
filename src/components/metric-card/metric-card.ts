import { el } from "../base.ts";
import "../metric-card/metric-card.css";

export interface MetricCardProps {
  value: string;
  label: string;
  countTo?: number;
  accent?: "purple" | "green";
}

export function createMetricCard(props: MetricCardProps): HTMLDivElement {
  const valueEl = el("span", {
    class: props.accent ? `metric-card__value metric-card__value--${props.accent}` : "metric-card__value",
    text: props.value,
  });

  const card = el(
    "div",
    { class: "metric-card" },
    valueEl,
    el("span", { class: "metric-card__label", text: props.label }),
  );

  if (props.countTo !== undefined) {
    animateCount(valueEl, props.countTo, props.value);
  }

  return card;
}

function animateCount(target: HTMLElement, countTo: number, template: string): void {
  const run = () => {
    const step = Math.max(1, Math.ceil(countTo / 60));
    let current = 0;
    target.textContent = template.replace(String(countTo), "0");
    const timer = window.setInterval(() => {
      current += step;
      if (current >= countTo) {
        target.textContent = template;
        window.clearInterval(timer);
        return;
      }
      target.textContent = template.replace(String(countTo), String(current));
    }, 16);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      }
    },
    { threshold: 0.4 },
  );
  observer.observe(target);
}
