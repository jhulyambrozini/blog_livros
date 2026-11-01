import { el } from "../base.ts";
import "../form-input/form-input.css";

export interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "search";
  required?: boolean;
  multiline?: boolean;
}

export function createFormInput(props: FormInputProps): HTMLDivElement {
  const field = el("div", { class: "form-input" });

  if (props.label) {
    field.append(el("label", { class: "form-input__label", for: props.name, text: props.label }));
  }

  if (props.multiline) {
    const textarea = el("textarea", { class: "form-input__control", id: props.name, name: props.name, rows: 4 });
    textarea.placeholder = props.placeholder ?? "";
    if (props.required) textarea.required = true;
    field.append(textarea);
  } else {
    const input = el("input", { class: "form-input__control", id: props.name, name: props.name });
    input.type = props.type ?? "text";
    input.placeholder = props.placeholder ?? "";
    if (props.required) input.required = true;
    field.append(input);
  }

  return field;
}
