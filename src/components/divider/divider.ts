import "../divider/divider.css";

export interface DividerProps {
  width?: number | string;
}

export function createDivider(props: DividerProps = {}): HTMLHRElement {
  const hr = document.createElement("hr");
  hr.className = "divider";
  if (props.width !== undefined) {
    hr.style.width = typeof props.width === "number" ? `${props.width}px` : props.width;
  }
  return hr;
}
