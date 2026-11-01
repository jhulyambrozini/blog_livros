import { el } from "../base.ts";
import "../metric-accent/metric-accent.css";

export interface MetricAccentProps {
  value: string;
  accent: string;
}

export function createMetricAccent(props: MetricAccentProps): HTMLDivElement {
  return el(
    "div",
    { class: "metric-accent" },
    el("span", { class: "metric-accent__value", text: props.value }),
    el("span", { class: "metric-accent__accent", text: props.accent }),
  );
}
