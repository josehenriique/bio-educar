const folha_1 = document.querySelector('#folha-1')
const folha_2 = document.querySelector('#folha-2')  

animationElement(folha_1, 20, 20, 10, 5, delayRandom)
animationElement(folha_2, 20, 20, 10, 5, delayRandom)

// Text

const display = document.querySelectorAll('.display:not(#section-1 .display, .card .display, footer .display)  ')
const subtitle = document.querySelectorAll('.subtitle')
const text = document.querySelectorAll('.text:not(.card .text, footer .text')

subtitle.forEach(e => animationY(e, e.parentNode))
display.forEach(e => animationY(e, e.parentNode))
text.forEach(e => animationY(e, e.parentNode))