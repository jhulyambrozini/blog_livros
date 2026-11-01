import { el } from "../components/base.ts";
import { createCtaButton } from "../components/cta-button/cta-button.ts";
import { createFilterPill } from "../components/filter-pill/filter-pill.ts";
import { createInlineLink } from "../components/inline-link/inline-link.ts";

import "./page.css";
import "./resenhas.css";

const SVG_NS = "http://www.w3.org/2000/svg";

function createSparkline(): SVGSVGElement {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 64 20");
  svg.setAttribute("class", "review-card__impact-sparkline");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("d", "M0 16 L10 12 L20 14 L30 6 L40 10 L50 4 L64 7");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "var(--accent-purple)");
  path.setAttribute("stroke-width", "1.5");
  svg.append(path);
  return svg;
}

interface FilterData {
  label: string;
  active?: boolean;
}

interface ReviewCardData {
  title: string;
  author: string;
  minutes: number;
  score: number;
  category: string;
  excerpt: string;
}

interface RankingData {
  rank: string;
  title: string;
  score: number;
  comments: number;
  top?: boolean;
}

interface CriteriaData {
  label: string;
  value: number;
  tone: "purple" | "green" | "muted";
}

const FILTERS: FilterData[] = [
  { label: "Todos os Gêneros (342)", active: true },
  { label: "Ficção Contemporânea (118)" },
  { label: "Não-Ficção & Ensaio (74)" },
  { label: "Sci-Fi & Filosofia (52)" },
  { label: "Poesia (41)" },
  { label: "Clássicos Universais (57)" },
];

const REVIEW_CARDS: ReviewCardData[] = [
  {
    title: "Torto Arado: A Terra, a Faca Silenciosa\ne a Memória Ancestral",
    author: "Itamar Vieira Junior",
    minutes: 11,
    score: 9.5,
    category: "FICÇÃO BRASILEIRA",
    excerpt:
      "Bibiana e Belonísia não são apenas irmãs unidas pela tragédia da lâmina; são vetores de uma memória ancestral que sangra na terra do sertão baiano.",
  },
  {
    title: "Klara e o Sol: A Fé Solar de uma\nMáquina Observadora",
    author: "Kazuo Ishiguro",
    minutes: 9,
    score: 9.0,
    category: "SCI-FI & ÉTICA",
    excerpt:
      "Ao eleger uma Amiga Artificial ingênua como narradora, Ishiguro constrói um experimento de fé, solidão e o preço de se amar o que é programado.",
  },
  {
    title: "O Avesso da Pele: O Luto Filial e a\nRede do Silêncio",
    author: "Jeferson Tenório",
    minutes: 13,
    score: 9.7,
    category: "ROMANCE CONTEMPORÂNEO",
    excerpt:
      "Pedro reconstrói os passos do pai Henrique em Porto Alegre através de um arquivo afetivo feito de ausências, silêncios e a violência estrutural do racismo.",
  },
  {
    title: "A Redoma de Vidro: O Asfixiante\nInterior da Perfeição",
    author: "Sylvia Plath",
    minutes: 16,
    score: 9.9,
    category: "CLÁSSICO MODERNO",
    excerpt:
      "Revisitar Esther Greenwood longe do viés reducionista da biografia revela um romance-lâmina sobre o feminino, a saúde mental e o espetáculo da normalidade.",
  },
];

const RANKING: RankingData[] = [
  { rank: "01", title: "A Redoma de Vidro: Sylvia Plath", score: 9.9, comments: 148, top: true },
  { rank: "02", title: "A Vegetariana: Han Kang", score: 9.8, comments: 112 },
  { rank: "03", title: "Torto Arado: Itamar Vieira Junior", score: 9.5, comments: 94 },
  { rank: "04", title: "O Avesso da Pele: Jeferson Tenório", score: 9.7, comments: 79 },
];

const CRITERIA: CriteriaData[] = [
  { label: "Arquitetura da Linguagem", value: 35, tone: "purple" },
  { label: "Originalidade Conceitual", value: 25, tone: "green" },
  { label: "Densidade Temática & Épica", value: 25, tone: "purple" },
  { label: "Ressonância Histórica", value: 15, tone: "muted" },
];

export function createResenhasPage(): HTMLElement {
  const main = el("main", { class: "page-wrapper" });

  main.append(createSectionHeader());
  main.append(createFilters());
  main.append(createFeatured());
  main.append(createLayout());

  return main;
}

/* ────────── Section Header ────────── */
function createSectionHeader(): HTMLElement {
  const section = el("section", { class: "resenhas-hero" });

  const header = el("div", { class: "resenhas-hero__header" });

  const titleWrap = el("div", { class: "resenhas-hero__title-wrap" });
  titleWrap.append(
    el(
      "div",
      { class: "resenhas-hero__badge" },
      el("span", { class: "resenhas-hero__badge-dot" }),
      el("span", { class: "page-overline", text: "ARQUIVO CRÍTICO PERMANENTE" }),
    ),
  );
  titleWrap.append(el("h1", { class: "resenhas-hero__title", text: "Resenhas Literárias" }));
  titleWrap.append(
    el(
      "p",
      { class: "resenhas-hero__subtitle" },
      "Análises textuais verticalizadas, dissecação de estruturas narrativas e escrutínio de traduções.",
    ),
  );
  header.append(titleWrap);

  header.append(createMetricHighlight());
  section.append(header);

  return section;
}

function createMetricHighlight(): HTMLElement {
  const metrics = el("div", { class: "resenhas-metrics" });

  const arquivo = el("div", { class: "resenhas-metrics__block" });
  arquivo.append(el("span", { class: "resenhas-metrics__label", text: "ARQUIVO ABERTO" }));
  const arquivoVal = el("div", { class: "resenhas-metrics__value-row" });
  arquivoVal.append(
    el("span", { class: "resenhas-metrics__value", text: "342" }),
    el("span", { class: "resenhas-metrics__suffix", text: "obras" }),
  );
  arquivo.append(arquivoVal);

  metrics.append(arquivo, el("div", { class: "resenhas-metrics__divider" }));

  const media = el("div", { class: "resenhas-metrics__block" });
  media.append(el("span", { class: "resenhas-metrics__label", text: "MÉDIA CRÍTICA" }));
  const mediaVal = el("div", { class: "resenhas-metrics__value-row" });
  mediaVal.append(
    el("span", { class: "resenhas-metrics__value resenhas-metrics__value--green", text: "9.2" }),
    el("span", { class: "resenhas-metrics__suffix resenhas-metrics__suffix--muted", text: "/10" }),
  );
  media.append(mediaVal);

  metrics.append(media);
  return metrics;
}

/* ────────── Filter Pills ────────── */
function createFilters(): HTMLElement {
  const row = el("div", { class: "resenhas-filters" });
  for (const filter of FILTERS) {
    row.append(createFilterPill({ label: filter.label, active: filter.active }));
  }
  return row;
}

/* ────────── Featured Review ────────── */
function createFeatured(): HTMLElement {
  const section = el("section", { class: "resenhas-featured" });
  const inner = el("div", { class: "resenhas-featured__inner" });

  /* content */
  const content = el("div", { class: "resenhas-featured__content" });

  const meta = el("div", { class: "resenhas-featured__meta" });
  meta.append(
    el("span", { class: "resenhas-featured__byline", text: "Por Rodrigo Albuquerque" }),
    el("span", { class: "resenhas-featured__dot", text: "•" }),
    el("span", { class: "resenhas-featured__time", text: "14 min de leitura aprofundada" }),
    el(
      "span",
      { class: "resenhas-featured__score" },
      el("span", { class: "resenhas-featured__score-icon", text: "✓" }),
      el("span", { class: "resenhas-featured__score-text", text: "9.8 / 10" }),
    ),
  );
  content.append(meta);

  content.append(
    el("span", { class: "resenhas-featured__origin", text: "HAN KANG • CORÉIA DO SUL" }),
  );

  content.append(
    el(
      "h2",
      { class: "resenhas-featured__title" },
      "A Vegetariana: O Corpo como Última\nFronteira de Insurreição",
    ),
  );

  content.append(
    el(
      "blockquote",
      { class: "resenhas-featured__blockquote" },
      el(
        "p",
        { class: "resenhas-featured__quote" },
        "“A recusa da carne não é dieta nem asceticismo pietista; é a declaração radical de quem prefere transmutar-se em planta a continuar cúmplice da violência que sustenta o pacto social doméstico.”",
      ),
      el(
        "span",
        { class: "resenhas-featured__quote-src", text: "— ENSAIO CENTRAL, CADERNO LIVRÁRIO" },
      ),
    ),
  );

  content.append(
    el(
      "p",
      { class: "resenhas-featured__body" },
      "Estruturado em três movimentos polifônicos, onde a protagonista Yeong-hye nunca ganha voz direta mas é retratada através das lentes de três homens obcecados por sua submissão, a obra de Han Kang desconstrói o pacto da domesticidade asiática e reescreve a recusa como ato político.",
    ),
  );

  /* chips */
  const chips = el("div", { class: "resenhas-featured__chips" });
  chips.append(el("span", { class: "resenhas-featured__chips-label", text: "Núcleos conceituais:" }));
  const chipsRow = el("div", { class: "resenhas-featured__chips-row" });
  for (const chip of ["Metamorfose", "Patriarcado Asiático", "Violência Epistêmica"]) {
    chipsRow.append(el("span", { class: "resenhas-featured__chip", text: chip }));
  }
  chips.append(chipsRow);
  content.append(chips);

  /* actions */
  const actions = el("div", { class: "resenhas-featured__actions" });
  actions.append(createCtaButton({ label: "Ler Ensaio Crítico Completo", variant: "accent" }));
  const quiet = el("div", { class: "resenhas-featured__quiet-actions" });
  for (const label of ["Salvar", "Compartilhar"]) {
    quiet.append(
      el("span", { class: "resenhas-featured__quiet-action" }, el("span", { class: "resenhas-featured__quiet-text", text: label })),
    );
  }
  actions.append(quiet);
  content.append(actions);

  inner.append(content);

  /* image */
  const image = el("div", { class: "resenhas-featured__image" });
  image.append(
    el("span", { class: "resenhas-featured__image-badge", text: "RESENHA EM DESTAQUE" }),
    el("span", { class: "resenhas-featured__image-tag", text: "Prêmio Nobel 2024" }),
  );
  inner.append(image);

  section.append(inner);
  return section;
}

/* ────────── Grid + Sidebar ────────── */
function createLayout(): HTMLElement {
  const layout = el("div", { class: "resenhas-layout" });

  layout.append(createCardsColumn());
  layout.append(createSidebar());

  return layout;
}

function createCardsColumn(): HTMLElement {
  const col = el("div", { class: "resenhas-cards" });

  const header = el("div", { class: "resenhas-cards__header" });
  const titleRow = el("div", { class: "resenhas-cards__title-row" });
  titleRow.append(
    el("h3", { class: "resenhas-cards__title", text: "Ensaios Recentes" }),
    el("span", { class: "resenhas-cards__count", text: "(4 de 342)" }),
  );
  header.append(titleRow);

  const sortRow = el("div", { class: "resenhas-cards__sort-row" });
  sortRow.append(el("span", { class: "resenhas-cards__sort-label", text: "Ordenar por:" }));
  const select = el("select", { class: "resenhas-cards__sort-select" });
  for (const opt of ["Mais recentes", "Melhor nota", "Mais comentadas"]) {
    select.append(el("option", { text: opt }));
  }
  sortRow.append(select);
  header.append(sortRow);

  col.append(header);

  const grid = el("div", { class: "resenhas-grid" });
  for (const card of REVIEW_CARDS) {
    grid.append(createReviewCard(card));
  }
  col.append(grid);

  col.append(createPagination());
  return col;
}

function createReviewCard(data: ReviewCardData): HTMLElement {
  const card = el("article", { class: "review-card" });

  const image = el("div", { class: "review-card__image" });
  const top = el("div", { class: "review-card__image-top" });
  top.append(el("span", { class: "review-card__category", text: data.category }));
  const score = el("div", { class: "review-card__score" });
  score.append(
    el("span", { class: "review-card__score-value", text: String(data.score) }),
    el("span", { class: "review-card__score-total", text: "/ 10" }),
  );
  top.append(score);
  image.append(top);
  card.append(image);

  const body = el("div", { class: "review-card__body" });
  const meta = el("div", { class: "review-card__meta" });
  meta.append(
    el("span", { class: "review-card__meta-text", text: data.author }),
    el("span", { class: "review-card__meta-text", text: "•" }),
    el("span", { class: "review-card__meta-text", text: `${data.minutes} min` }),
  );
  body.append(meta);
  body.append(el("h4", { class: "review-card__title", text: data.title }));
  body.append(el("p", { class: "review-card__excerpt", text: data.excerpt }));
  card.append(body);

  const footer = el("div", { class: "review-card__footer" });
  const impact = el("div", { class: "review-card__impact" });
  impact.append(
    createSparkline(),
    el("span", { class: "review-card__impact-label", text: "Impacto Crítico" }),
  );
  footer.append(impact);
  footer.append(
    el("div", { class: "review-card__link-row" }, createInlineLink({ label: "Ler Crítica" })),
  );
  card.append(footer);

  return card;
}

function createPagination(): HTMLElement {
  const pag = el("div", { class: "resenhas-pagination" });
  pag.append(el("span", { class: "resenhas-pagination__info", text: "Exibindo 1–4 de 342 resenhas" }));

  const buttons = el("div", { class: "resenhas-pagination__buttons" });
  buttons.append(
    el("button", { type: "button", class: "resenhas-pagination__page resenhas-pagination__page--active", text: "1" }),
    el("button", { type: "button", class: "resenhas-pagination__page", text: "2" }),
    el("button", { type: "button", class: "resenhas-pagination__page", text: "3" }),
    el("span", { class: "resenhas-pagination__ellipsis", text: "..." }),
    el("button", { type: "button", class: "resenhas-pagination__page", text: "86" }),
  );
  pag.append(buttons);
  return pag;
}

/* ────────── Sidebar ────────── */
function createSidebar(): HTMLElement {
  const sidebar = el("aside", { class: "resenhas-sidebar" });
  sidebar.append(createCriteriaCard(), createRankingCard(), createSuggestionCard());
  return sidebar;
}

function createCriteriaCard(): HTMLElement {
  const card = el("div", { class: "sidebar-card" });

  const header = el("div", { class: "sidebar-card__header" });
  header.append(el("h4", { class: "sidebar-card__title", text: "CRITÉRIOS CRÍTICOS" }));
  header.append(el("span", { class: "sidebar-card__subtitle", text: "Padrão Livrário" }));
  header.append(
    el(
      "p",
      { class: "sidebar-card__desc" },
      "Nossas notas não medem apelo comercial ou facilidade de leitura. Cada eixo pondera um aspecto estrutural da obra.",
    ),
  );
  card.append(header);

  const list = el("div", { class: "criteria-list" });
  for (const c of CRITERIA) {
    list.append(createCriteriaRow(c));
  }
  card.append(list);

  const footer = el("div", { class: "sidebar-card__footer" });
  footer.append(el("span", { class: "sidebar-card__footer-text", text: "Auditoria editorial bimestral" }));
  footer.append(createInlineLink({ label: "Ler manual" }));
  card.append(footer);

  return card;
}

function createCriteriaRow(data: CriteriaData): HTMLElement {
  const row = el("div", { class: "criteria-row" });
  const top = el("div", { class: "criteria-row__top" });
  top.append(el("span", { class: "criteria-row__label", text: data.label }));
  top.append(el("span", { class: `criteria-row__value criteria-row__value--${data.tone}`, text: `${data.value}%` }));
  row.append(top);

  const bar = el("div", { class: "criteria-row__bar" });
  const fill = el("div", { class: "criteria-row__fill" });
  const color = data.tone === "green" ? "var(--accent-green)" : data.tone === "muted" ? "var(--text-muted)" : "var(--accent-purple)";
  fill.style.width = `${data.value}%`;
  fill.style.background = color;
  bar.append(fill);
  row.append(bar);

  return row;
}

function createRankingCard(): HTMLElement {
  const card = el("div", { class: "sidebar-card" });

  const header = el("div", { class: "sidebar-card__header" });
  header.append(el("h4", { class: "sidebar-card__title", text: "MAIS COMENTADAS" }));
  header.append(el("span", { class: "sidebar-card__subtitle", text: "Últimos 7 dias" }));
  card.append(header);

  const list = el("div", { class: "ranking-list" });
  for (const item of RANKING) {
    const row = el("div", { class: "ranking-item" });
    const rank = el("span", { class: item.top ? "ranking-item__rank ranking-item__rank--top" : "ranking-item__rank", text: item.rank });
    const content = el("div", { class: "ranking-item__content" });
    content.append(el("span", { class: "ranking-item__title", text: item.title }));
    const meta = el("div", { class: "ranking-item__meta" });
    meta.append(
      el("span", { class: "ranking-item__score", text: String(item.score) }),
      el("span", { class: "ranking-item__dot", text: "•" }),
      el("span", { class: "ranking-item__comments", text: `${item.comments} comentários` }),
    );
    content.append(meta);
    row.append(rank, content);
    list.append(row);
  }
  card.append(list);

  return card;
}

function createSuggestionCard(): HTMLElement {
  const card = el("div", { class: "sidebar-card" });

  const iconRow = el("div", { class: "suggestion-icon-row" });
  iconRow.append(
    el("span", { class: "suggestion-icon", text: "✎" }),
    el("span", { class: "suggestion-label", text: "PAUTA ABERTA" }),
  );
  card.append(iconRow);

  card.append(el("h4", { class: "suggestion-heading", text: "Sugira uma Obra para Escrutínio" }));

  card.append(
    el(
      "p",
      { class: "sidebar-card__desc" },
      "Sentiu falta de algum título fundamental ou quer ver uma obra contemporânea sob o escrutínio Livrário? Envie sua sugestão.",
    ),
  );

  const form = el("form", { class: "suggestion-form" });
  form.append(el("input", { class: "suggestion-form__input", type: "text", placeholder: "Título da obra e autor" }));
  form.append(el("button", { class: "suggestion-form__submit", type: "submit", text: "Enviar sugestão" }));
  card.append(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input") as HTMLInputElement;
    if (!input.value.trim()) return;
    alert(`Sugestão registrada: ${input.value}`);
    input.value = "";
  });

  return card;
}