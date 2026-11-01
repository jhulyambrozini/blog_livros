import { el } from "../components/base.ts";
import { createCtaButton } from "../components/cta-button/cta-button.ts";

import "./page.css";
import "./autores.css";

interface EraData {
  range: string;
  name: string;
  subtitle: string;
  active?: boolean;
}

interface AuthorData {
  name: string;
  origin: string;
  years: string;
  subtitle: string;
  tese: string;
  desc: string;
}

interface MethodData {
  num: string;
  author: string;
  work: string;
  desc: string;
  editionLabel: string;
  edition: string;
  editionNote: string;
  difficulty: string;
  stat: string;
  statValue: string;
}

interface TipData {
  num: string;
  title: string;
  desc: string;
}

interface ConnectionData {
  leftAuthor: string;
  leftShort: string;
  rightAuthor: string;
  rightShort: string;
  tag: string;
  label: string;
  desc: string;
}

const ERAS: EraData[] = [
  { range: "SÉC. XVIII", name: "Iluminismo", subtitle: "A Razão Triunfante" },
  { range: "1790 — 1850", name: "Romantismo", subtitle: "O Sublime & A Queda" },
  { range: "1857 — 1900", name: "Realismo & Naturalismo", subtitle: "A Dissecação Social", active: true },
  { range: "1910 — 1945", name: "Modernismo (1922)", subtitle: "Ruptura & Antropofagia" },
  { range: "1945 — PRESENTE", name: "Pós-Modernismo", subtitle: "Fragmento & Metanarrativa" },
];

const AUTHORS: AuthorData[] = [
  { name: "Machado de Assis", origin: "BRASIL", years: "1839 — 1908", subtitle: "O Bruxo do Cosme Velho", tese: "TESE CRÍTICA", desc: "Desmontou a hipocrisia das elites patriarcais com narradores não confiáveis que expõem o abismo entre o discurso social e a prática individual." },
  { name: "Virginia Woolf", origin: "INGLATERRA", years: "1882 — 1941", subtitle: "O Fluxo de Consciência", tese: "TESE CRÍTICA", desc: "Dissolveu o enredo linear tradicional em favor dos ritmos elétricos da percepção subjetiva, onde o tempo interior dita a arquitetura do romance." },
  { name: "Fiódor Dostoiévski", origin: "RÚSSIA", years: "1821 — 1881", subtitle: "A Sonda Psicológica", tese: "TESE CRÍTICA", desc: "Fundador do romance polifônico. Explora a culpa, o niilismo e a redenção através de personagens que habitam o extremo moral como quem respira." },
  { name: "Clarice Lispector", origin: "BRASIL", years: "1920 — 1977", subtitle: "A Epifania do Cotidiano", tese: "TESE CRÍTICA", desc: "Tensionou os limites da língua portuguesa até o inefável. Sua prosa perfura o ordinário em busca do instante de revelação que desorganiza a existência." },
  { name: "Franz Kafka", origin: "PRAGA / BOÊMIA", years: "1883 — 1924", subtitle: "O Labirinto Burocrático", tese: "TESE CRÍTICA", desc: "Construiu a alegoria definitiva da modernidade: o indivíduo esmagado por sistemas que não compreende, onde a culpa é anterior ao crime e o absurdo é a norma." },
];

const METHODS: MethodData[] = [
  { num: "01", author: "Machado de Assis", work: "Memórias Póstumas de Brás Cubas", desc: "Evite começar pelos contos esparsos caso deseje capturar a amplitude do romance brasileiro. Memórias Póstumas é a chave de todo o edifício machadiano.", editionLabel: "Edição de Referência", edition: "Edição Crítica da Ateliê Editorial / Todavia", editionNote: "Notas minuciosas de Hélio de Seixas Guimarães.", difficulty: "Média", stat: "160 Capítulos", statValue: "160 Capítulos" },
  { num: "02", author: "Fiódor Dostoiévski", work: "Crime e Castigo (1866)", desc: "O ritmo febril da perseguição psicológica entre Raskólnikov e o juiz Porfiri Petrovitch é a porta de entrada ideal para o universo dostoievskiano.", editionLabel: "Tradução Obrigatória", edition: "Tradução direta do russo por Rubens Figueiredo ou Paulo Bezerra", editionNote: "Editora 34 — preserva a polifonia crua dos diálogos.", difficulty: "Alta", stat: "592 Páginas", statValue: "592 Páginas" },
  { num: "03", author: "Virginia Woolf", work: "Mrs. Dalloway (1925)", desc: "A narrativa de um único dia de junho em Londres entrelaça Clarissa Dalloway e o veterano Septimus Warren Smith num fluxo de consciência inaugural.", editionLabel: "Tradução Recomendada", edition: "Tomaz Tadeu (Autêntica) ou Mário Quintana (Globo)", editionNote: "A edição da Autêntica inclui ensaios complementares.", difficulty: "Moderada", stat: "1 Dia Narrativo", statValue: "1 Dia" },
];

const TIPS: TipData[] = [
  { num: "01 / RITMO DE LEITURA", title: "Desacelere a Marcha", desc: "O clássico não foi escrito para consumo veloz de timeline. Aceite páginas que exigem releitura e parágrafos que pedem pausa." },
  { num: "02 / SEM PREFACIOMANIA", title: "Prefácio no Final", desc: "Estudos introdutórios costumam entregar revelações cruciais. Leia o original primeiro; o prefácio acadêmico depois." },
  { num: "03 / TRADUÇÃO IMPORTA", title: "Fuja das Traduções Indiretas", desc: "Edições vertidas do francês ou inglês intermediário perdem texturas vitais. Priorize traduções diretas do idioma original." },
  { num: "04 / ANOTAÇÕES MARGINAIS", title: "Dialogar no Papel", desc: "Mantenha um caderno ou anote nas margens. O clássico só ganha vida através do diálogo ativo entre leitor e texto." },
];

const CONNECTIONS: ConnectionData[] = [
  { leftAuthor: "Virginia Woolf", leftShort: "WOOLF", rightAuthor: "Clarice Lispector", rightShort: "CLARICE", tag: "Fluxo & Epifania", label: "Woolf ⟷ Clarice", desc: "A substituição do acontecimento factual pela intensidade da experiência íntima. Ambas dissolvem a trama externa em favor da geografia movediça da consciência." },
  { leftAuthor: "Fiódor Dostoiévski", leftShort: "DOSTÓ", rightAuthor: "Franz Kafka", rightShort: "KAFKA", tag: "Culpa & Punição", label: "Dostoiévski ⟷ Kafka", desc: "Raskólnikov antecipa Josef K.: a culpa que precede o julgamento. Enquanto Dostoiévski busca redenção, Kafka constata a condenação perpétua." },
  { leftAuthor: "Machado de Assis", leftShort: "MACHADO", rightAuthor: "Toda a Modernidade", rightShort: "MODERN.", tag: "Ceticismo Radical", label: "Machado ⟷ Toda a Modernidade", desc: "Machado desconfiou das grandes narrativas do progresso décadas antes da crise europeia. Seu ceticismo lúcido ecoa em Borges, Saramago e na metaficção." },
];

export function createAutoresPage(): HTMLElement {
  const main = el("main", { class: "page-wrapper" });

  main.append(createHero());
  main.append(createTimeline());
  main.append(createGallery());
  main.append(createNetwork());
  main.append(createGuide());

  return main;
}

/* ────────── Hero ────────── */
function createHero(): HTMLElement {
  const section = el("section", { class: "autores-hero" });

  const overline = el("div", { class: "autores-hero__overline" });
  overline.append(
    el("span", { class: "autores-hero__overline-dot" }),
    el("span", { class: "page-overline", text: "ARQUIVO CRÍTICO PERMANENTE" }),
  );
  section.append(overline);

  section.append(
    el("h1", { class: "autores-hero__title", text: "Autores & Clássicos" }),
    el(
      "p",
      { class: "autores-hero__subtitle" },
      "Ensaios biográficos de fôlego, dissecações textuais e um mapa reflexivo dos mestres que edificaram a literatura moderna. 5 dossiês + painel canônico.",
    ),
  );

  const card = el("div", { class: "autores-hero__card" });

  card.append(
    el("div", { class: "autores-hero__stat" },
      el("span", { class: "autores-hero__stat-label", text: "Período Compreendido" }),
      el("span", { class: "autores-hero__stat-value", text: "1780 — 1977" }),
    ),
    el("div", { class: "autores-hero__stat" },
      el("span", { class: "autores-hero__stat-label", text: "Matrizes Estilísticas" }),
      el("span", { class: "autores-hero__stat-value autores-hero__stat-value--green", text: "Fluxo • Ironia • Existencial" }),
    ),
    el("div", { class: "autores-hero__stat" },
      el("span", { class: "autores-hero__stat-label", text: "Revisão Crítica" }),
      el("span", { class: "autores-hero__stat-value autores-hero__stat-value--purple", text: "Fevereiro 2025" }),
    ),
  );
  section.append(card);

  return section;
}

/* ────────── Timeline ────────── */
function createTimeline(): HTMLElement {
  const section = el("section", { class: "autores-timeline" });

  const header = el("div", { class: "autores-timeline__header" });
  header.append(
    el("span", { class: "page-overline", text: "TOPOLOGIA HISTÓRICA", style: "font-weight:600;color:var(--accent-purple)" }),
    el("h2", { class: "page-heading--medium" }, "Linha do Tempo dos\nMovimentos"),
    el("p", { class: "page-desc--body", text: "Selecione uma era para inspecionar os impulsos estéticos fundamentais que definiram cada período." }),
  );
  section.append(header);

  const eras = el("div", { class: "autores-timeline__eras" });
  for (const era of ERAS) {
    const btn = el("button", {
      type: "button",
      class: era.active ? "autores-era autores-era--active" : "autores-era",
    });
    btn.append(
      el("span", { class: "autores-era__range", text: era.range }),
      el("span", { class: "autores-era__name", text: era.name }),
      el("span", { class: "autores-era__subtitle", text: era.subtitle }),
    );
    eras.append(btn);
  }
  section.append(eras);

  const detail = el("div", { class: "autores-detail" });
  const content = el("div", { class: "autores-detail__content" });
  content.append(
    el("h3", { class: "autores-detail__title" }, "Realismo & Naturalismo: O Fim das\nIlusões Românticas"),
    el("p", { class: "autores-detail__desc" }, "O romance se transforma em instrumento de autópsia moral. Em vez da paixão idealizada dos românticos, os realistas voltam o olhar clínico para a hipocrisia burguesa, a miserabilidade urbana e as engrenagens invisíveis do poder."),
    el("div", { class: "autores-detail__chips" },
      el("span", { class: "autores-detail__chip", text: "Narrador Confiável?" }),
      el("span", { class: "autores-detail__chip", text: "Corte Social" }),
      el("span", { class: "autores-detail__chip", text: "Observação Clínica" }),
      el("span", { class: "autores-detail__chip", text: "Descrição Estrutural" }),
    ),
  );
  detail.append(content);

  const aside = el("div", { class: "autores-detail__aside" });
  aside.append(
    el("h4", { class: "autores-detail__aside-title", text: "TENSÃO ESTRUTURAL" }),
    el(
      "p",
      { class: "autores-detail__aside-quote" },
      '"A terra lhe seja leve... mas a consciência, pesada." — O despertar da crítica social através da forma romance.',
    ),
  );
  detail.append(aside);
  section.append(detail);

  return section;
}

/* ────────── Gallery ────────── */
function createGallery(): HTMLElement {
  const section = el("section", { class: "autores-gallery" });

  const header = el("div", { class: "autores-gallery__header" });
  header.append(
    el("span", { class: "page-overline", text: "GALERIA MONOGRÁFICA", style: "font-weight:600;color:var(--accent-purple)" }),
    el("h2", { class: "page-heading--medium", text: "Dossiês dos Mestres" }),
  );
  section.append(header);

  const grid = el("div", { class: "autores-gallery__grid" });
  for (const author of AUTHORS) {
    grid.append(createAuthorCard(author));
  }
  grid.append(createPlaceholderCard());
  section.append(grid);

  return section;
}

function createAuthorCard(data: AuthorData): HTMLElement {
  const card = el("article", { class: "author-card" });

  const image = el("div", { class: "author-card__image" });
  image.append(
    el("span", { class: "author-card__origin", text: data.origin }),
    el("span", { class: "author-card__dates", text: data.years }),
  );
  card.append(image);

  const body = el("div", { class: "author-card__body" });
  body.append(
    el("span", { class: "author-card__subtitle", text: data.subtitle }),
    el("h3", { class: "author-card__name", text: data.name }),
    el("span", { class: "author-card__tese-label", text: data.tese }),
    el("p", { class: "author-card__desc", text: data.desc }),
  );
  card.append(body);

  return card;
}

function createPlaceholderCard(): HTMLElement {
  const card = el("article", { class: "author-card" });

  const placeholder = el("div", { class: "author-card__placeholder" });
  placeholder.append(
    el("span", { class: "author-card__placeholder-badge", text: "EM PREPARAÇÃO" }),
    el("h3", { class: "author-card__placeholder-title", text: "Novas Monografias em Produção" }),
    el("p", { class: "author-card__placeholder-desc", text: "O conselho editorial do Livrário está finalizando monografias de:" }),
    el("div", { class: "author-card__placeholder-list" },
      el("span", { text: "Proust — Em Processo" }),
      el("span", { text: "Joyce — Em Processo" }),
      el("span", { text: "Hilst — Em Processo" }),
    ),
    el("div", { style: "padding-top:8px" }, createCtaButton({ label: "Sugerir Autor ao Conselho", variant: "accent" })),
  );
  card.append(placeholder);

  return card;
}

/* ────────── Influence Network ────────── */
function createNetwork(): HTMLElement {
  const section = el("section", { class: "autores-network" });

  const header = el("div", { class: "autores-gallery__header" });
  header.append(
    el("span", { class: "page-overline", text: "TOPOLOGIA DE AFINIDADES", style: "font-weight:600;color:var(--accent-purple)" }),
    el("h2", { class: "page-heading--medium" }, "Diagrama de Correspondências\ne Influências Mútuas"),
    el(
      "p",
      { class: "autores-network__desc" },
      "Nenhum mestre escreve em isolamento. Abaixo, as linhas de tensão temática e formal que costuram a tradição literária moderna.",
    ),
  );
  section.append(header);

  const container = el("div", { class: "autores-network__container" });
  for (const conn of CONNECTIONS) {
    container.append(createNetworkPair(conn));
  }
  section.append(container);

  return section;
}

function createNetworkPair(data: ConnectionData): HTMLElement {
  const pair = el("div", { class: "network-pair" });

  const nodes = el("div", { class: "network-pair__nodes" });

  const leftNode = el("div", { class: "network-pair__node" });
  leftNode.append(
    el("div", { class: "network-pair__node-icon", text: data.leftShort.slice(0, 4) }),
    el("span", { class: "network-pair__node-name", text: data.leftAuthor }),
  );
  nodes.append(leftNode);

  const connector = el("div", { class: "network-pair__connector" });
  connector.append(
    el("div", { class: "network-pair__connector-line" }),
    el("span", { class: "network-pair__connector-tag", text: data.tag }),
    el("div", { class: "network-pair__connector-line" }),
  );
  nodes.append(connector);

  const rightNode = el("div", { class: "network-pair__node" });
  rightNode.append(
    el("div", { class: "network-pair__node-icon", text: data.rightShort.slice(0, 4) }),
    el("span", { class: "network-pair__node-name", text: data.rightAuthor }),
  );
  nodes.append(rightNode);

  pair.append(nodes);

  const exp = el("div", { class: "network-pair__explanation" });
  exp.append(
    el("span", { class: "network-pair__exp-label", text: data.label }),
    el("span", { class: "network-pair__exp-tag", text: data.tag }),
    el("p", { class: "network-pair__exp-desc", text: data.desc }),
  );
  pair.append(exp);

  return pair;
}

/* ────────── Guide ────────── */
function createGuide(): HTMLElement {
  const section = el("section", { class: "autores-guide" });

  const header = el("div", { class: "autores-gallery__header" });
  header.append(
    el("span", { class: "page-overline", text: "GUIA METODOLÓGICO", style: "font-weight:600;color:var(--accent-purple)" }),
    el("h2", { class: "page-heading--medium" }, "Por Onde Começar os\nClássicos"),
  );
  section.append(header);

  const methods = el("div", { class: "autores-guide__methods" });
  for (const m of METHODS) {
    methods.append(createMethodCard(m));
  }
  section.append(methods);

  const tips = el("div", { class: "autores-tips" });
  for (const tip of TIPS) {
    tips.append(createTipCard(tip));
  }
  section.append(tips);

  return section;
}

function createMethodCard(data: MethodData): HTMLElement {
  const card = el("div", { class: "method-card" });
  card.append(
    el("span", { class: "method-card__number", text: data.num }),
    el("span", { class: "method-card__subtitle", text: "PORTA DE ENTRADA" }),
    el("h3", { class: "method-card__author", text: data.author }),
    el("span", { class: "method-card__work", text: data.work }),
    el("p", { class: "method-card__desc", text: data.desc }),
    el("span", { class: "method-card__edition-label", text: data.editionLabel }),
    el("span", { class: "method-card__edition", text: data.edition }),
    el("span", { class: "method-card__edition-note", text: data.editionNote }),
    el("div", { class: "method-card__meta" },
      el("span", { class: "method-card__difficulty", text: `Dificuldade: ${data.difficulty}` }),
      el("span", { class: "method-card__stat", text: data.statValue }),
    ),
  );
  return card;
}

function createTipCard(data: TipData): HTMLElement {
  const card = el("div", { class: "tip-card" });
  card.append(
    el("span", { class: "tip-card__number", text: data.num }),
    el("h4", { class: "tip-card__title", text: data.title }),
    el("p", { class: "tip-card__desc", text: data.desc }),
  );
  return card;
}