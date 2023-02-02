/* Váriavei */
const btnTry = document.querySelector('.btnTry')
const btnRetri = document.querySelector('.btnRetri')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let randomNumber = Math.round(Math.random() * 10)

/* Eventos */
btnTry.addEventListener('click', handeTryClick)
btnRetri.addEventListener('click', handeRetriClick)
document.addEventListener('keydown', handeResetEnter)
/* Funções call backs */
function handeToggle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handeTryClick() {
  handeToggle()

  if (randomNumber == 1) {
    document.querySelector('.one').classList.toggle('hide')
  }
  else if (randomNumber == 2) {
    document.querySelector('.two').classList.toggle('hide')
  }
  else if (randomNumber == 3) {
    document.querySelector('.three').classList.toggle('hide')
  }
  else if (randomNumber == 4) {
    document.querySelector('.four').classList.toggle('hide')
  }
  else if (randomNumber == 5) {
    document.querySelector('.five').classList.toggle('hide')
  }
  else if (randomNumber == 6) {
    document.querySelector('.six').classList.toggle('hide')
  }
  else if (randomNumber == 7) {
    document.querySelector('.seven').classList.toggle('hide')
  }
  else if (randomNumber == 8) {
    document.querySelector('.eight').classList.toggle('hide')
  }
  else if (randomNumber == 9) {
    document.querySelector('.nine').classList.toggle('hide')
  }
  else if (randomNumber == 10) {
    document.querySelector('.ten').classList.toggle('hide')
  }
  else if (randomNumber == 0) {
    document.querySelector('.zero').classList.toggle('hide')
  }
}

function handeRetriClick() {
  handeToggle()
  addHide()

  randomNumber = Math.round(Math.random() * 10)
}

function addHide() {
  document.querySelector('.zero').classList.add('hide')
  document.querySelector('.one').classList.add('hide')
  document.querySelector('.two').classList.add('hide')
  document.querySelector('.three').classList.add('hide')
  document.querySelector('.four').classList.add('hide')
  document.querySelector('.five').classList.add('hide')
  document.querySelector('.six').classList.add('hide')
  document.querySelector('.seven').classList.add('hide')
  document.querySelector('.eight').classList.add('hide')
  document.querySelector('.nine').classList.add('hide')
  document.querySelector('.ten').classList.add('hide')
}

function handeResetEnter(e) {
  if(e.key == "Enter" && screen1.classList.contains('hide')) {
    handeRetriClick()
  }
}