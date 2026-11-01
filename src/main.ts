import './theme/tokens.css'
import './theme/typography.css'
import './theme/spacing.css'
import './theme/components.css'
import './style.css'

import { createHeader } from './components/header/header.ts'
import { createHomePage, createFooter } from './pages/index.ts'

const app = document.getElementById('app')!

app.append(
  createHeader({
    logo: 'Livrário',
    tagline: 'CURADORIA',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Resenhas Literárias', href: '#resenhas' },
      { label: 'Listas & Recomendações', href: '#listas' },
      { label: 'Autores & Clássicos', href: '#autores' },
      { label: 'Contato', href: '#contato' },
    ],
    cta: { label: 'Clube do Livro' },
    activeHref: '#home',
  }),
)

app.append(createHomePage())
app.append(createFooter())

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()
    const href = a.getAttribute('href')
    if (href) {
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})