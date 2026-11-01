import { el } from "../components/base.ts";
import { createFooterColumn } from "../components/footer-column/footer-column.ts";
import { createNewsletterForm } from "../components/newsletter-form/newsletter-form.ts";
import "./footer.css";

export function createFooter(): HTMLElement {
  const footer = el("footer", { class: "site-footer" });

  /* top row — 5 columns */
  const main = el("div", { class: "site-footer__main" });

  /* column 1: Brand */
  const brand = el("div", { class: "site-footer__brand-column" });
  brand.append(
    el("div", { class: "site-footer__brand-name", text: "Livrário" }),
    el("div", { class: "site-footer__brand-tagline", text: "CURADORIA" }),
    el(
      "p",
      { class: "site-footer__brand-desc" },
      "Um refúgio para quem busca profundidade literária, resenhas estruturais e curadoria independente.",
    ),
    el("div", { class: "page-overline", text: "MANIFESTO EDITORIAL" }),
    el("p", { class: "site-footer__brand-desc" }, "Independência na crítica, fascínio pelo clássico e reverência pela palavra precisa."),
  );
  main.append(brand);

  /* column 2: Navegação */
  main.append(
    createFooterColumn({
      title: "NAVEGAÇÃO",
      links: [
        { label: "Home", href: "#/home" },
        { label: "Resenhas Literárias", href: "#/resenhas" },
        { label: "Listas & Recomendações", href: "#/listas" },
        { label: "Autores & Clássicos", href: "#/autores" },
        { label: "Clube do Livro", href: "#/home" },
      ],
    }),
  );

  /* column 3: Institucional */
  main.append(
    createFooterColumn({
      title: "INSTITUCIONAL",
      links: [
        { label: "Sobre o Livrário", href: "#about" },
        { label: "Política Editorial", href: "#editorial" },
        { label: "Privacidade & Termos", href: "#privacy" },
        { label: "Fale Conosco", href: "#contato" },
      ],
    }),
  );

  /* column 4: Newsletter */
  const nlCol = el("div", { class: "site-footer__newsletter-wrap" });
  nlCol.append(
    el("span", { class: "page-overline", text: "A CARTA QUINZENAL", style: "font-weight:600" }),
    el(
      "p",
      { class: "page-desc--body" },
      "Ensaios inéditos, lançamentos comentados e garimpos raros direto na sua caixa de entrada.",
    ),
  );
  nlCol.append(
    createNewsletterForm({
      placeholder: "Seu e-mail literário",
      buttonLabel: "Inscrever-se",
      onSubmit(email) {
        alert(`Inscrito! Confirme em ${email}.`);
      },
    }),
  );
  main.append(nlCol);

  footer.append(main);

  /* divider */
  footer.append(el("hr", { class: "site-footer__divider" }));

  /* bottom bar */
  const bottom = el("div", { class: "site-footer__bottom" });
  bottom.append(
    el("span", { class: "site-footer__copyright" }, "© 2025 Livrário. Todos os direitos reservados. Feito com rigor intelectual."),
  );
  const edition = el("div", { class: "site-footer__edition" });
  edition.append(
    el("span", { class: "site-footer__edition-dot" }),
    el("span", { class: "site-footer__edition-text", text: "Edição Semanal Ativa" }),
  );
  bottom.append(edition);
  footer.append(bottom);

  return footer;
}