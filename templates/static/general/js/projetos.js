// Button Scroll To

const btnsProject = document.querySelectorAll(".btn-project")

btnsProject.forEach((btn, index) => {
  btn.addEventListener("click", () => {
  
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { 
        y: `#project-${index + 1}`, 
        offsetY: 300 
      },
      ease: "power2.inOut"
    })
  
  })
})


// Texto

const display = document.querySelectorAll('.display:not(#section-1 .display, #section-3 .display, footer .display)  ')
const subtitle = document.querySelectorAll('.subtitle:not(#section-3 .subtitle)')
const text = document.querySelectorAll('.text:not(#section-1 .text, #section-3 .text, #section-4 .card .text, footer .text)')

subtitle.forEach(e => animationY(e, e.parentNode))
display.forEach(e => animationY(e, e.parentNode))
text.forEach(e => animationY(e, e.parentNode))

// Card Project

const cardProject = document.querySelectorAll(".project-card")

cardProject.forEach((e) => {

  const tl = gsap.timeline()

  gsap.from(e, {
    y: -10,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: e.parentNode,
      start: '-200 center',
      end: '10 center',
      scrub: 2
    }
  })
})

// Folha

// let delayRandom = gsap.utils.random(0, 2)

const folha_1 = document.querySelector('#folha-1')
const folha_2 = document.querySelector('#folha-2')
const folha_3 = document.querySelector('#folha-3')
const folha_4 = document.querySelector('#folha-4')
const folha_5 = document.querySelector('#folha-5')
const folha_6 = document.querySelector('#folha-6')
const folha_7 = document.querySelector('#folha-7')
const folha_8 = document.querySelector('#folha-8')
const folha_9 = document.querySelector('#folha-9')
const folha_10 = document.querySelector('#folha-10')

animationElement(folha_1, 20, 20, 10, 5, delayRandom)
animationElement(folha_2, 20, 20, 10, 5, delayRandom)
animationElement(folha_3, 20, 20, 0, 5, delayRandom)
animationElement(folha_4, -20, 20, 180, 5, delayRandom)
animationElement(folha_5, -20, -20, 180, 5, delayRandom)
animationElement(folha_6, -20, 20, 180, 5, delayRandom)
animationElement(folha_7, 20, 20, 10, 5, delayRandom)
animationElement(folha_8, -20, 20, 180, 5, delayRandom)
animationElement(folha_9, -20, 20, 180, 5, delayRandom)
animationElement(folha_10, -20, -20, 180, 5, delayRandom)

