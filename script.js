/* Váriaveis */

let randomNumber = Math.round(Math.random() * 10)

const btnTry = document.querySelector('.btnTry')
const btnReset = document.querySelector('.btnReset')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const ten = document.querySelector('.ten')

/* Funções / Call Backs */

function randomPhrases () {
  
  if (randomNumber == 1) {
    one.classList.toggle('hide')
  }
  else if (randomNumber == 2) {
    two.classList.toggle('hide')
  }
  else if (randomNumber == 3) {
    three.classList.toggle('hide')
  }
  else if (randomNumber == 4) {
    four.classList.toggle('hide')
  }
  else if (randomNumber == 5) {
    five.classList.toggle('hide')
  }
  else if (randomNumber == 6) {
    six.classList.toggle('hide')
  }
  else if(randomNumber == 7) {
    seven.classList.toggle('hide')
  }
  else if(randomNumber == 8) {
    eight.classList.toggle('hide')
  }
  else if (randomNumber == 9) {
    nine.classList.toggle('hide')
  }
  else {
    ten.classList.toggle('hide')
  }
  
}

function toggleExecution () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handeTryClick () {
  toggleExecution()
  randomPhrases()
}

function handeResetClick () {
  toggleExecution()
  randomPhrases()

  randomNumber = Math.round(Math.random() * 10)
}

/* Eventos */

btnTry.addEventListener('click', handeTryClick)
btnReset.addEventListener('click', handeResetClick)
