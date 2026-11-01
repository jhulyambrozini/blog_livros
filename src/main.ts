import './theme/tokens.css'
import './theme/typography.css'
import './theme/spacing.css'
import './theme/components.css'
import './style.css'

import { createHeader } from './components/header/header.ts'
import { createHomePage, createResenhasPage, createListasPage, createAutoresPage, createFooter } from './pages/index.ts'

const app = document.getElementById('app')!

const NAV_LINKS = [
  { label: 'Home', href: '#/home' },
  { label: 'Resenhas Literárias', href: '#/resenhas' },
  { label: 'Listas & Recomendações', href: '#/listas' },
  { label: 'Autores & Clássicos', href: '#/autores' },
  { label: 'Contato', href: '#/contato' },
]

type Route = {
  activeHref: string
  render: () => HTMLElement
  id: string
}

const routes: Record<string, Route> = {
  home: {
    activeHref: '#/home',
    render: () => createHomePage(),
    id: 'home',
  },
  resenhas: {
    activeHref: '#/resenhas',
    render: () => createResenhasPage(),
    id: 'resenhas',
  },
  listas: {
    activeHref: '#/listas',
    render: () => createListasPage(),
    id: 'listas',
  },
  autores: {
    activeHref: '#/autores',
    render: () => createAutoresPage(),
    id: 'autores',
  },
}

function resolveRoute(): string {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash in routes) return hash
  return 'home'
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'auto' })
}

function render(): void {
  const routeName = resolveRoute()
  const route = routes[routeName]

  app.replaceChildren(
    createHeader({
      logo: 'Livrário',
      tagline: 'CURADORIA',
      links: NAV_LINKS,
      cta: { label: 'Clube do Livro' },
      activeHref: route.activeHref,
    }),
    route.render(),
    createFooter(),
  )

  const content = app.querySelector(`#${route.id}`)
  if (content) {
    content.setAttribute('data-route', routeName)
  }

  scrollToTop()
}

window.addEventListener('hashchange', render)

function setupAnchorSmoothing(): void {
  app.addEventListener('click', (e) => {
    const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (!href || href === '#' || href.startsWith('#/')) return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  })
}

setupAnchorSmoothing()

if (!window.location.hash) {
  window.location.hash = '#/home'
} else {
  render()
}