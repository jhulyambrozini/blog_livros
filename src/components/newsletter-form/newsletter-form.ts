import { el } from "../base.ts";
import { createCtaButton } from "../cta-button/cta-button.ts";
import "../newsletter-form/newsletter-form.css";

export interface NewsletterFormProps {
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (email: string) => void;
}

export function createNewsletterForm(props: NewsletterFormProps = {}): HTMLFormElement {
  const input = el("input", {
    class: "newsletter-form__input",
    type: "email",
    name: "email",
    placeholder: props.placeholder ?? "Seu e-mail literário",
    required: true,
  });

  const button = createCtaButton({ label: props.buttonLabel ?? "Inscrever-se", type: "submit" });

  const form = el("form", { class: "newsletter-form" }, input, button);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = input.value.trim();
    if (!email) return;
    input.value = "";
    props.onSubmit?.(email);
  });

  return form;
}
