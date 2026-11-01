import { el } from "../components/base.ts";
import { createCtaButton } from "../components/cta-button/cta-button.ts";
import { createFilterPill } from "../components/filter-pill/filter-pill.ts";

import "./page.css";
import "./listas.css";

interface BookData {
  author: string;
  title: string;
  pages: string;
  year: string;
  mood: string;
}

interface ListaData {
  feature: string;
  title: string;
  tag1: string;
  tag2: string;
  mood: string;
  desc: string;
  books: BookData[];
  timeEstimate: string;
  timeSpan: string;
  cta: string;
}

const FILTERS = [
  { label: "Todas", active: true },
  { label: "Melancólico" },
  { label: "Eletrizante" },
  { label: "Poético" },
  { label: "Reflexivo" },
  { label: "Desafiador" },
];

const LISTAS: ListaData[] = [
  {
    feature: "LEITURA IMEDIATA",
    title: "10 Romances Curtos para Devorar\nem um Fim de Semana",
    tag1: "Fim de Semana",
    tag2: "Novelas & Brevidades",
    mood: "Absorção rápida e densa",
    desc: "Nem toda grande obra exige meses de dedicação. Selecionamos ficções condensadas onde cada parágrafo pesa ouro — narrativas que cabem num fim de semana mas ressoam por décadas.",
    books: [
      { author: "Franz Kafka", title: "A Metamorfose", pages: "72", year: "1915", mood: "Alienante" },
      { author: "Albert Camus", title: "O Estrangeiro", pages: "128", year: "1942", mood: "Absurdo" },
      { author: "Fiódor Dostoiévski", title: "Noites Brancas", pages: "96", year: "1848", mood: "Lírico" },
    ],
    timeEstimate: "Tempo estimado: 48h totais",
    timeSpan: "2 Dias",
    cta: "Explorar Todos os 10 Livros",
  },
  {
    feature: "CONTEMPORÂNEO",
    title: "Grandes Romances do Século XXI\nque Já São Indispensáveis",
    tag1: "Novo Cânone",
    tag2: "Vozes Globais",
    mood: "Foco: 2000 a 2024",
    desc: "O tempo presente costuma confundir a crítica, mas certas vozes nasceram definitivas. Esta compilação reúne romances deste século que já se provaram indispensáveis para o leitor de literatura séria.",
    books: [
      { author: "Elena Ferrante", title: "A Amiga Genial", pages: "336", year: "Nápoles", mood: "Intimista" },
      { author: "Chimamanda Adichie", title: "Americanah", pages: "520", year: "Nigéria/EUA", mood: "Identidade" },
      { author: "Roberto Bolaño", title: "Os Detetives Selvagens", pages: "624", year: "México", mood: "Monumento" },
    ],
    timeEstimate: "Absorção estimada: 1 livro a cada 10 dias",
    timeSpan: "3 a 4 Semanas",
    cta: "Ver Ensaio Crítico Completo",
  },
  {
    feature: "TRADIÇÃO & SONHO",
    title: "Guia Definitivo do Realismo\nMágico Latino-Americano",
    tag1: "América Latina",
    tag2: "O 'Boom' Literário",
    mood: "Imersão Genealógica",
    desc: "Quando a realidade do continente se tornou fantástica demais para a crônica convencional, os autores latino-americanos reinventaram a ficção. Um roteiro pelos pilares do realismo mágico.",
    books: [
      { author: "G. García Márquez", title: "Cem Anos de Solidão", pages: "Colômbia", year: "1967", mood: "Fundador" },
      { author: "Isabel Allende", title: "A Casa dos Espíritos", pages: "Chile", year: "1982", mood: "Genealógico" },
      { author: "Julio Cortázar", title: "O Jogo da Amarelinha", pages: "Argentina", year: "1963", mood: "Lúdico-Formal" },
    ],
    timeEstimate: "Roteiro com árvore genealógica inclusa",
    timeSpan: "2 a 3 Meses",
    cta: "Acessar Guia de Leitura",
  },
  {
    feature: "FRONTEIRAS DA CONSCIÊNCIA",
    title: "Ficção Científica Filosófica: Da\nUcrânia a Solaris",
    tag1: "Sci-Fi Especulativo",
    tag2: "Epistemologia",
    mood: "Densidade Conceitual",
    desc: "Obras que utilizam o cosmos e o tempo não como cenários de ação barata, mas como espelhos impiedosos da condição humana, da linguagem e do conhecimento.",
    books: [
      { author: "Stanisław Lem", title: "Solaris", pages: "Polônia", year: "1961", mood: "Cosmológico" },
      { author: "Ursula K. Le Guin", title: "A Mão Esquerda da Escuridão", pages: "EUA", year: "1969", mood: "Sociológico" },
      { author: "Ted Chiang", title: "História da Sua Vida", pages: "EUA", year: "1998", mood: "Linguístico" },
    ],
    timeEstimate: "Rigor analítico garantido",
    timeSpan: "1 a 2 Meses",
    cta: "Explorar Bibliografia Completa",
  },
  {
    feature: "PROSA TESTEMUNHAL",
    title: "Não-Ficção Criativa: Ensaios que\nMudam Nossa Forma de Olhar o\nMundo",
    tag1: "Ensaísmo",
    tag2: "Jornalismo Literário",
    mood: "Lúcido & Cortante",
    desc: "O ensaio pessoal quando executado com precisão cirúrgica torna-se a forma literária suprema da lucidez. Estes autores transformaram a não-ficção em arte de alto calibre.",
    books: [
      { author: "Joan Didion", title: "O Ano do Pensamento Mágico", pages: "240", year: "2005", mood: "Luto & Verdade" },
      { author: "Rebecca Solnit", title: "A História do Caminhar", pages: "368", year: "2000", mood: "Filosofia Viva" },
      { author: "James Baldwin", title: "Notas de um Filho Nativo", pages: "176", year: "1955", mood: "Fogo Crítico" },
    ],
    timeEstimate: "Com introduções anotadas",
    timeSpan: "3 a 5 Semanas",
    cta: "Ler Ensaio Editorial",
  },
];

export function createListasPage(): HTMLElement {
  const main = el("main", { class: "page-wrapper" });

  main.append(createHero());
  main.append(createFilter());
  main.append(createCards());
  main.append(createForm());

  return main;
}

/* ────────── Hero ────────── */
function createHero(): HTMLElement {
  const section = el("section", { class: "listas-hero" });

  const badge = el("div", { class: "listas-hero__badge" });
  badge.append(
    el("span", { class: "listas-hero__badge-dot" }),
    el("span", { class: "listas-hero__badge-text", text: "MANIFESTO EDITORIAL · CURADORIA 100% HUMANA" }),
  );
  section.append(badge);

  section.append(
    el("h1", { class: "listas-hero__title" }, "Roteiros de Leitura,\nSem Algoritmos."),
    el(
      "p",
      { class: "listas-hero__desc" },
      "Rejeitamos recomendações compradas por editoras e métricas artificiais de engajamento. Cada curadoria nasce da leitura real, da comparação estrutural e do entusiasmo genuíno.",
    ),
  );

  const tags = el("div", { class: "listas-hero__tags" });
  for (const tag of ["Livre de patrocínios ocultos", "Ritmo de absorção real", "Contexto histórico detalhado"]) {
    tags.append(el("span", { class: "listas-hero__tag", text: tag }));
  }
  section.append(tags);

  /* preview card */
  const preview = el("div", { class: "listas-hero__preview" });
  preview.append(el("div", { class: "listas-hero__preview-image" }));

  const previewBody = el("div", { class: "listas-hero__preview-body" });
  previewBody.append(
    el("span", { class: "page-overline", text: "SELEÇÃO DA SEMANA", style: "font-weight:600;color:var(--accent-purple)" }),
    el("h2", { style: "font-family:var(--font-body);font-size:14px;font-weight:700;color:var(--text-primary);margin:0" }, "Páginas de Fôlego: O Cânone Redescoberto"),
    el("span", { class: "listas-form__overline", text: "7 Obras Chave", style: "color:var(--accent-green)" }),
  );
  preview.append(previewBody);
  section.append(preview);

  return section;
}

/* ────────── Filter Bar ────────── */
function createFilter(): HTMLElement {
  const bar = el("div", { class: "listas-filter" });
  const label = el("div", { class: "listas-filter__label" });
  label.append(
    el("span", { class: "listas-filter__icon", text: "◈" }),
    el("span", { class: "listas-filter__text", text: "FILTRAR ATMOSFERA:" }),
  );
  bar.append(label);

  const pills = el("div", { class: "listas-filter__pills" });
  for (const f of FILTERS) {
    pills.append(createFilterPill({ label: f.label, active: f.active }));
  }
  bar.append(pills);

  return bar;
}

/* ────────── List Cards ────────── */
function createCards(): HTMLElement {
  const section = el("section", { class: "listas-cards" });
  for (const lista of LISTAS) {
    section.append(createListaCard(lista));
  }
  return section;
}

function createListaCard(data: ListaData): HTMLElement {
  const card = el("article", { class: "lista-card" });

  /* left content */
  const content = el("div", { class: "lista-card__content" });
  content.append(el("span", { class: "lista-card__feature", text: data.feature }));

  content.append(
    el("h3", { class: "lista-card__title", text: data.title }),
  );

  const metaTags = el("div", { class: "lista-card__meta-tags" });
  metaTags.append(
    el("span", { class: "lista-card__meta-tag", text: data.tag1 }),
    el("span", { class: "lista-card__meta-tag", text: data.tag2 }),
  );
  content.append(metaTags);

  const moodLine = el("div", { class: "lista-card__mood-line" });
  moodLine.append(
    el("span", { class: "lista-card__mood-label", text: data.mood }),
  );
  content.append(moodLine);

  content.append(el("p", { class: "lista-card__desc", text: data.desc }));

  /* books */
  const books = el("div", { class: "lista-card__books" });
  for (const book of data.books) {
    books.append(createBookRow(book));
  }
  content.append(books);

  /* footer */
  const footer = el("div", { class: "lista-card__footer" });
  const footerLeft = el("div", { class: "lista-card__footer-left" });
  footerLeft.append(
    el("span", { class: "lista-card__time-info", text: data.timeEstimate }),
  );
  footer.append(footerLeft);
  footer.append(
    el("div", { class: "lista-card__footer-left" }, el("span", { class: "lista-card__time-badge", text: `Tempo: ${data.timeSpan}` })),
  );
  content.append(footer);

  card.append(content);

  /* right image */
  card.append(el("div", { class: "lista-card__image" }));

  return card;
}

function createBookRow(book: BookData): HTMLElement {
  const row = el("div", { class: "lista-card__book" });
  const meta = el("div", { class: "lista-card__book-meta" });
  meta.append(
    el("span", { class: "lista-card__book-author", text: book.author }),
    el("span", { class: "lista-card__book-title", text: book.title }),
    el("span", { class: "lista-card__book-details", text: `${book.pages} páginas · ${book.year}` }),
  );
  row.append(meta);
  row.append(el("span", { class: "lista-card__book-mood", text: book.mood }));
  return row;
}

/* ────────── Collaboration Form ────────── */
function createForm(): HTMLElement {
  const section = el("section", { class: "listas-form" });
  const container = el("div", { class: "listas-form__container" });

  const header = el("div", { class: "listas-form__header" });
  header.append(
    el("div", { class: "listas-form__icon", text: "✎" }),
    el("span", { class: "listas-form__overline", text: "COLABORAÇÃO DOS LEITORES" }),
    el("h2", { class: "listas-form__heading" }, "Sentiu falta de uma trilha\nespecífica?"),
    el(
      "p",
      { class: "listas-form__desc" },
      "Seja um recorte temático incomum ou um autor que merecia mais atenção na sua opinião — este espaço é seu. Submeta uma curadoria e ela pode virar nossa próxima lista oficial.",
    ),
  );
  container.append(header);

  const field1 = el("label", { class: "listas-form__field" });
  field1.append(el("span", { class: "listas-form__label", text: "Tema da Curadoria Proposta" }));
  field1.append(el("input", { class: "listas-form__input", type: "text", placeholder: "Ex.: literatura coreana contemporânea, sátira política africana..." }));
  container.append(field1);

  const field2 = el("label", { class: "listas-form__field" });
  field2.append(el("span", { class: "listas-form__label", text: "Obras & Justificativa Crítica" }));
  field2.append(el("textarea", { class: "listas-form__textarea", placeholder: "Liste as obras sugeridas e explique por que merecem escrutínio Livrário..." }));
  container.append(field2);

  container.append(
    el("div", { class: "listas-form__actions" }, createCtaButton({ label: "Enviar Curadoria", variant: "accent" })),
  );

  section.append(container);
  return section;
}