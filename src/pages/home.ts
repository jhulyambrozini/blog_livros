import { el } from "../components/base.ts";
import { createCtaButton } from "../components/cta-button/cta-button.ts";
import { createInlineLink } from "../components/inline-link/inline-link.ts";
import { createMetricCard } from "../components/metric-card/metric-card.ts";
import { createNewsletterForm } from "../components/newsletter-form/newsletter-form.ts";

import "./page.css";
import "./home.css";

export function createHomePage(): HTMLElement {
  const main = el("main", { class: "page-wrapper" });

  /* ─── Section 1: Manifesto & Metrics ─── */
  const section1 = el("section", { class: "page-section--compact" });
  section1.append(createManifestoMetrics());
  main.append(section1);

  /* ─── Section 2: Editorial Pillars ─── */
  const section2 = el("section", { class: "page-section" });
  section2.append(createPillars());
  main.append(section2);

  /* ─── Section 3: Book of the Month ─── */
  main.append(createBookOfMonth());

  /* ─── Section 4: Newsletter ─── */
  const section4 = el("section", { class: "page-section--flush-bottom" });
  section4.append(createNewsletter());
  main.append(section4);

  return main;
}

/* ────────── Manifesto & Metrics ────────── */
function createManifestoMetrics(): HTMLElement {
  const hero = el("div", { class: "home-hero" });

  /* left column */
  const left = el("div", { class: "home-hero__content" });

  left.append(
    el("div", { class: "page-overline" }, "OBSERVATÓRIO CRÍTICO PERMANENTE"),
  );

  left.append(
    el(
      "h1",
      { class: "page-heading--hero" },
      "Rigor intelectual para\nleitores em busca de\npermanência.",
    ),
  );

  left.append(
    el(
      "p",
      { class: "page-desc--hero" },
      "O Livrário rejeita a superficialidade algorítmica. Produzimos crítica literária independente, ensaios estruturais e debates aprofundados sobre a literatura que molda nossa percepção do tempo, da memória e da linguagem.",
    ),
  );

  const ctaRow = el("div", { class: "home-hero__cta-row" });
  ctaRow.append(
    createCtaButton({ label: "Explorar Acervo Crítico" }),
    createCtaButton({ label: "Ciclo Atual do Clube", variant: "ghost" }),
  );
  left.append(ctaRow);
  hero.append(left);

  /* right column — stats */
  const right = el("div", { class: "home-stats" });

  const stats: [value: string, label: string, countTo: number][] = [
    ["420+", "ENSAIOS\nPUBLICADOS", 420],
    ["3.4k", "MEMBROS ATIVOS", 3400],
    ["14 min", "TEMPO MÉDIO\nLEITURA", 14],
    ["91.8%", "ÍNDICE\nCONCLUSÃO", 92],
  ];

  const row1 = el("div", { class: "home-stats__row" });
  const row2 = el("div", { class: "home-stats__row" });

  for (let i = 0; i < stats.length; i++) {
    const [value, label, countTo] = stats[i];
    const card = createMetricCard({
      value,
      label,
      countTo,
      className: "home-stats__card",
    });
    (i < 2 ? row1 : row2).append(card);
  }

  right.append(row1, row2);
  hero.append(right);

  return hero;
}

/* ────────── Editorial Pillars ────────── */
function createPillars(): HTMLElement {
  const wrapper = el("div", { class: "page-col", style: "gap:48px;width:100%" });

  const headerRow = el("div", { class: "page-row--gap-sm", style: "flex-direction:column;gap:7px" });
  headerRow.append(
    el("span", { class: "page-overline" }, "CAMINHOS DE NAVEGAÇÃO"),
    el("h2", { class: "page-heading--medium" }, "Pilares de Curadoria"),
  );
  wrapper.append(headerRow);

  const pillars = [
    {
      tag: "COLUNA CRÍTICA",
      caderno: "Caderno I",
      title: "Resenhas Literárias",
      desc: "Ensaios analíticos detalhados sobre obras contemporâneas e clássicas, com foco em estrutura narrativa e contexto histórico.",
      linkLabel: "Explorar Resenhas",
    },
    {
      tag: "ROTEIROS DE LEITURA",
      caderno: "Caderno II",
      title: "Listas & Recomendações",
      desc: "Guias temáticos de leitura, seleções por humor e ritmo de absorção para orientar sua próxima experiência literária.",
      linkLabel: "Ver Listas",
    },
    {
      tag: "RETROSPECTIVAS",
      caderno: "Caderno III",
      title: "Autores & Clássicos",
      desc: "Monografias e retrospectivas dos gigantes da literatura mundial e suas redes de influência através dos séculos.",
      linkLabel: "Descobrir Clássicos",
    },
  ];

  const cardsRow = el("div", { class: "page-row--gap-sm" });

  for (const p of pillars) {
    const card = el("article", { class: "pillar-card" });
    const image = el("div", { class: "pillar-card__image" });
    image.append(el("div", { class: "pillar-card__overlay" }));
    image.append(el("span", { class: "pillar-card__tag", text: p.tag }));

    const body = el("div", { class: "pillar-card__body" });
    body.append(
      el("span", { class: "pillar-card__caderno", text: p.caderno }),
      el("h3", { class: "pillar-card__title", text: p.title }),
      el("p", { class: "pillar-card__desc", text: p.desc }),
    );
    body.append(createInlineLink({ label: p.linkLabel }));

    card.append(image, body);
    cardsRow.append(card);
  }

  wrapper.append(cardsRow);
  return wrapper;
}

/* ────────── Book of the Month ────────── */
function createBookOfMonth(): HTMLElement {
  const section = el("div", { class: "home-book" });

  /* left — details */
  const details = el("div", { class: "home-book__details" });

  const headerRow = el("div", { class: "home-book__header-row" });
  headerRow.append(
    el("div", { class: "home-book__badge" }),
    el("div", { class: "page-overline", text: "LEITURA DO CICLO", style: "font-weight:600" }),
  );
  details.append(headerRow);

  const meta = el("p", { class: "page-desc--sub", text: "Novembro / Dezembro 2025" });
  details.append(meta);

  details.append(
    el("h2", { class: "home-book__book-title" }, "Memórias Póstumas de Brás Cubas"),
    el("p", { class: "home-book__meta" }, "Machado de Assis — Edição Crítica Comentada"),
    el(
      "p",
      { class: "home-book__synopsis" },
      "Narrado por um defunto-autor que zomba da mediocridade da elite carioca oitocentista, o romance fundador do realismo brasileiro é dissecado em 12 ensaios complementares.",
    ),
  );

  /* schedule */
  const schedule = el("div", { class: "home-book__schedule" });

  const schedHeader = el("div", { class: "home-book__schedule-header" });
  schedHeader.append(
    el("span", { class: "page-overline", text: "Cronograma Coletivo de Absorção" }),
    el("span", { style: "font-size:12px;font-weight:500;color:var(--text-primary)" }, "Semana 3 de 4 (Cap. XL ao CX)"),
  );
  schedule.append(schedHeader);

  const progress = el("div", { class: "home-book__progress-bar" });
  progress.append(el("div", { class: "home-book__progress-fill" }));
  schedule.append(progress);

  const dates = el("div", { class: "home-book__dates" });
  const dateData = [
    { day: "12 Nov", desc: "Início e prólogo" },
    { day: "28 Nov", desc: "Capítulos centrais" },
    { day: "08 Dez, 19:30", desc: "Sessão síncrona" },
  ];
  for (const d of dateData) {
    const dc = el("div", { class: "home-book__date-card" });
    dc.append(
      el("span", { class: "home-book__date-day", text: d.day }),
      el("span", { class: "home-book__date-desc", text: d.desc }),
    );
    dates.append(dc);
  }
  schedule.append(dates);
  details.append(schedule);

  /* actions */
  const actions = el("div", { class: "home-book__actions" });
  actions.append(
    createInlineLink({ label: "Acessar Guia de Estudo e Fórum" }),
    createCtaButton({ label: "Confirmar Presença no Debate" }),
  );
  details.append(actions);

  section.append(details);

  /* right — book card */
  const bookCard = el("aside", { class: "book-card" });
  const visual = el("div", { class: "book-card__visual" });
  visual.append(el("div", { class: "book-card__gradient" }));
  visual.append(
    el("span", { class: "book-card__badge", text: "CLUBE DO LIVRÁRIO · #42" }),
    el("h3", { class: "book-card__title", text: "Memórias Póstumas" }),
    el("p", { class: "book-card__subtitle" }, '"Ao verme que primeiro roeu as frias carnes..."'),
  );
  bookCard.append(visual);

  const stats = el("div", { class: "book-card__stats" });
  stats.append(
    el("span", { class: "book-card__stat", text: "160 Páginas Críticas" }),
    el("span", { class: "book-card__stat", text: "Encontro: 08/Dez" }),
  );
  bookCard.append(stats);

  bookCard.append(
    el("p", { class: "book-card__note" }, "Transmissão via áudio fechado e transcrição em ensaio síntese."),
  );

  section.append(bookCard);
  return section;
}

/* ────────── Newsletter ────────── */
function createNewsletter(): HTMLElement {
  const nl = el("div", { class: "home-newsletter" });

  nl.append(
    el("div", { class: "page-overline", text: "CORRESPONDÊNCIA DIRETA", style: "font-weight:500" }),
    el("h2", { class: "page-heading--large" }, "A Carta Literária"),
    el(
      "p",
      { class: "page-desc--sub" },
      "Quinzenalmente aos domingos, às 08h. Sem resumos simplistas, sem algoritmos de recomendação. Apenas ensaios inéditos, lançamentos comentados e garimpos raros entregues direto na sua caixa de entrada.",
    ),
  );

  nl.append(
    createNewsletterForm({
      placeholder: "Seu endereço de e-mail...",
      buttonLabel: "Assinar Carta",
      onSubmit: (email) => {
        alert(`Bem-vindo à Carta Literária! Confirme sua inscrição em ${email}.`);
      },
    }),
  );

  const features = el("div", { class: "home-newsletter__features" });
  const featureData = [
    { icon: "check", text: "Leitura sem distrações" },
    { icon: "check", text: "Cancelamento em 1 clique" },
    { icon: "check", text: "Gratuito" },
  ];
  for (const f of featureData) {
    const feat = el("div", { class: "home-newsletter__feature" });
    feat.append(
      el("span", { class: "home-newsletter__feature-icon", text: "✓" }),
      el("span", { class: "home-newsletter__feature-text", text: f.text }),
    );
    features.append(feat);
  }
  nl.append(features);

  return nl;
}