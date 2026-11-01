import './style.css'

const navLinks = document.querySelectorAll<HTMLAnchorElement>('header nav a')
const sections = document.querySelectorAll<HTMLElement>('main section')
const counters = document.querySelectorAll<HTMLElement>('.metric-counter .value')

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()
    const target = document.querySelector(a.getAttribute('href')!)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  })
})

let ticking = false
function animateCounters() {
  if (ticking) return
  counters.forEach(el => {
    const target = parseInt(el.getAttribute('data-target')!)
    if (target && parseInt(el.textContent!) < target) {
      ticking = true
      const step = Math.ceil(target / 60)
      const timer = setInterval(() => {
        const current = parseInt(el.textContent!)
        if (current + step >= target) {
          el.textContent = String(target)
          clearInterval(timer)
          ticking = false
        } else {
          el.textContent = String(current + step)
        }
      }, 16)
    }
  })
}

function checkVisibility() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      const id = section.getAttribute('id')
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
      })
    }
  })
  animateCounters()
}

document.querySelector<HTMLFormElement>('#newsletter-form')?.addEventListener('submit', e => {
  e.preventDefault()
  const input = (e.currentTarget as HTMLFormElement).querySelector('input[type="email"]') as HTMLInputElement
  alert(`Obrigado! ${input.value} foi inscrito na Carta Literária.`)
  input.value = ''
})

document.querySelector<HTMLFormElement>('#contact-form')?.addEventListener('submit', e => {
  e.preventDefault()
  alert('Mensagem enviada com sucesso. Responderemos em breve.')
  ;(e.currentTarget as HTMLFormElement).querySelectorAll('input, textarea').forEach(el => (el as HTMLInputElement).value = '')
})

window.addEventListener('scroll', checkVisibility)
checkVisibility()