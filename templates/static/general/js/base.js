const wrapper = document.querySelector('.smooth-wrapper')
const content = document.querySelector('.smooth-content')

let smoother = ScrollSmoother.create({
  wrapper: wrapper,
  content: content,
  smooth: 2,
  smoothTouch: 0.1,
  effects: true
})

// Function Element Default

function animationElement(e, x, y, deg, time, delay, addFunction = () => {}){
  let tl = gsap.timeline()

    tl.to(e, {
      x: x,
      y: y,
      rotation: deg,
      duration: time,
      ease: "sine.out",
      yoyo: true,
      repeat: -1,
      onEnter: addFunction(e)
    })

    tl.delay(delay)
}

// Default Function Texts

function animationY(e, trigger){

  const tl = gsap.timeline()

  gsap.from(e, {
    y: -10,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: trigger,
      start: 'top center',
      end: 'bottom center',
      scrub: 2
    }
  })
}

// Dafault Function Animal Header

const animal = document.querySelector(".animal-header")

animationElement(animal, -15, 35, -2, 8, 0, (e) => {
  console.log("teste") 

  gsap.to(e, {
    scale: 2,
    opacity: 0.2,
    filter: 'blur(40px)',
    scrollTrigger: {
      trigger: document.querySelector('#section-1'),
      start: "70% 30%",
      end: "bottom 30%",
      scrub: true,
    }
  })
})

// Folhas Footer

let delayRandom = gsap.utils.random(0, 2)

const folha_footer_1 = document.querySelector('#folha-footer-1')

animationElement(folha_footer_1, 20, 20, 10, 5, delayRandom)

// Menu Hamburguer

const iconHamburguer = document.querySelector('#icon-hamburguer')
const closePopUp = document.querySelector('#close-pop-up')
const popUp = document.querySelector('.pop-up')

iconHamburguer.addEventListener('click', () => {
  popUp.classList.toggle('active')
})

closePopUp.addEventListener('click', () => {
  popUp.classList.toggle('active')
})