// Cards

const cards = document.querySelectorAll('.card');

function focusCard(card){

  card.addEventListener('mouseover', () => {

    cards.forEach((outherCard) => {
      if (outherCard != card){
        
        gsap.to(outherCard, {
          opacity: 0.6,
          duration: 0.2
        })

      }
    })
  }),

  card.addEventListener('mouseout', () => {

    cards.forEach((outherCard) => {
      if (outherCard != card){
        
        gsap.to(outherCard, {
          opacity: 1,
          duration: 0.2
        })

      }
    })
  })

}

function animationCard(card){
  let tl = gsap.timeline()

    tl.to(card, {
      x: 20,
      y: 20,
      duration: 5,
      ease: "sine.out",
      delay: 0,
      yoyo: true,
      repeat: -1,
    })

    let delayRandom = gsap.utils.random(0, 2)
    tl.delay(delayRandom)

    Observer.create({
      target: card,
      type: "pointer",
      onHover: () => {
        focusCard(card)

        gsap.to(card, {
          scale:1.1,
          duration: 0.2
        })

      },
      onHoverEnd: () => {
        gsap.to(card, {
          scale:1,
          duration: 0.2
        })
      }
    })
}

cards.forEach(card => {
  animationCard(card)
})


// Texto

const display = document.querySelectorAll('.display:not(#section-1 .display, footer .display)  ')
const subtitle = document.querySelectorAll('.subtitle')
const text = document.querySelectorAll('.text:not(#section-1 .text, #section-4 .card .text, footer .text)')

function animationY(e, trigger){

  const tl = gsap.timeline()

  tl.to

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

subtitle.forEach(e => animationY(e, e.parentNode))
display.forEach(e => animationY(e, e.parentNode))
text.forEach(e => animationY(e, e.parentNode))


// Card Doação

const cardDoacao = document.querySelector('.card-doacao')
const section_5 = document.querySelector('#section-5')

function animationCardDoacao(e){

  const tl = gsap.timeline()

  tl.to

  gsap.from(e, {
    y: -10,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: section_5,
      start: 'top center',
      end: 'center center',
      scrub: 2,
    }
  })
}

animationCardDoacao(cardDoacao)


// Elements (Animais, Folhas)

const udu_coroa = document.querySelector('.udu-coroa')

animationElement(udu_coroa, -20, 30, -2, 10, 0)


const folha_1 = document.querySelector('#folha-1')
const folha_2 = document.querySelector('#folha-2')
const folha_3 = document.querySelector('#folha-3')
const folha_4 = document.querySelector('#folha-4')
const folha_5 = document.querySelector('#folha-5')
const folha_6 = document.querySelector('#folha-6')
const folha_7 = document.querySelector('#folha-7')
const folha_8 = document.querySelector('#folha-8')

  animationElement(folha_1, 20, 20, 10, 5, delayRandom)
  animationElement(folha_2, 20, 20, 10, 5, delayRandom)
  animationElement(folha_3, 20, 20, 180, 5, delayRandom)
animationElement(folha_4, -20, 20, -10, 5, delayRandom)
animationElement(folha_5, 20, 20, 10, 5, delayRandom)
animationElement(folha_6, -20, 20, -10, 5, delayRandom)
animationElement(folha_7, 20, 20, 10, 5, delayRandom)
animationElement(folha_8, -20, 20, -10, 5, delayRandom)

// Photos Test

const images = document.querySelectorAll('#section-3 img:not(.folha)');

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  
  document.querySelectorAll('.photo-container section').forEach((section, index) => {
    console.log("Section:", section)
    const w = section.querySelector('.wrapper-gallery');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        scrub: 0.5 
      }
    });
  });
}

showDemo()