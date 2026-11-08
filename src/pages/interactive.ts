/* ── Mobile hamburger menu ── */
function initMobileMenu() {
  const header = document.querySelector<HTMLElement>('.header')
  if (!header) return

  const nav = header.querySelector<HTMLElement>('.header__nav')
  if (!nav) return

  const hamburger = document.createElement('button')
  hamburger.className = 'header__hamburger'
  hamburger.setAttribute('aria-label', 'Abrir menu')
  hamburger.innerHTML = '<span></span><span></span><span></span>'

  const overlay = document.createElement('div')
  overlay.className = 'header__mobile-overlay'

  header.appendChild(hamburger)
  header.appendChild(overlay)

  function openMenu() {
    if (!header) return
    header.classList.add('header--menu-open')
    hamburger.setAttribute('aria-label', 'Fechar menu')
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    if (!header) return
    header.classList.remove('header--menu-open')
    hamburger.setAttribute('aria-label', 'Abrir menu')
    document.body.style.overflow = ''
  }

  hamburger.addEventListener('click', () => {
    if (header.classList.contains('header--menu-open')) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  overlay.addEventListener('click', closeMenu)

  nav.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
    link.addEventListener('click', closeMenu)
  })
}

initMobileMenu()

/* ── Smooth scroll for in-page anchors ── */
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href')
    if (!href || href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  })
})

/* ── FAQ toggle ── */
document.querySelectorAll<HTMLButtonElement>('.faq-item__trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item')!
    const answer = item.querySelector('.faq-item__answer') as HTMLElement | null
    if (!answer) return
    const isOpen = item.classList.toggle('faq-item--open')
    trigger.setAttribute('aria-expanded', String(isOpen))
    if (isOpen) answer.removeAttribute('hidden')
    else answer.setAttribute('hidden', '')
  })
})

/* ── Counter animation ── */
document.querySelectorAll<HTMLElement>('.metric-card__value[data-count-to]').forEach(el => {
  const target = parseInt(el.getAttribute('data-count-to')!)
  if (!target) return
  const template = el.textContent!

  const run = () => {
    const step = Math.max(1, Math.ceil(target / 60))
    let current = 0
    const timer = window.setInterval(() => {
      current += step
      if (current >= target) {
        el.textContent = template
        window.clearInterval(timer)
        return
      }
      el.textContent = template.replace(String(target), String(current))
    }, 16)
  }

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.disconnect()
          run()
        }
      }
    },
    { threshold: 0.4 },
  )
  observer.observe(el)
})

/* ── Newsletter form submit ── */
document.querySelectorAll<HTMLFormElement>('.newsletter-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
    const input = form.querySelector<HTMLInputElement>('input[type="email"]')
    if (!input || !input.value.trim()) return
    alert(`Obrigado! ${input.value} foi inscrito na Carta Literária.`)
    input.value = ''
  })
})

/* ── Contact form validation ── */
document.querySelectorAll<HTMLFormElement>('.contact-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
    const inputs = form.querySelectorAll<HTMLInputElement>('input[required], textarea[required]')
    let valid = true
    for (const input of inputs) {
      if (!input.value.trim()) {
        input.style.boxShadow = '0 0 0 1px var(--accent-purple)'
        valid = false
        setTimeout(() => { input.style.boxShadow = '' }, 2000)
      }
    }
    if (!valid) {
      alert('Preencha todos os campos obrigatórios.')
      return
    }
    alert('Mensagem enviada com sucesso. Responderemos em breve.')
    inputs.forEach(el => { el.value = ''; if (el.type === 'checkbox') (el as HTMLInputElement).checked = false })
  })
})

/* ── Character counter ── */
document.querySelectorAll<HTMLTextAreaElement>('textarea[data-charcount]').forEach(textarea => {
  const max = parseInt(textarea.getAttribute('data-charcount')!)
  const counter = textarea.closest('label')?.querySelector('.charcount')
  if (!counter) return

  textarea.addEventListener('input', () => {
    const len = textarea.value.length
    counter.textContent = `${len} / ${max}`
    if (len > max) textarea.value = textarea.value.slice(0, max)
  })
})