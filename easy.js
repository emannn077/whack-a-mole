//global variable

const NumOfMole = 9
const gameDuration = 40
const moleTime = 1500 //milliseconds
let score = 0
let moleTimeFinish = null
let timeLeft = gameDuration
const holes = document.querySelectorAll(".hole")
const scoreSection = document.getElementById("score")
const timerSection = document.getElementById("Timer")
const moles = document.querySelectorAll(".mole")

let moleTimer

const start = () => {
  moleTimer = setInterval(showMole, 1500)
}

const showMole = () => {
  holes.forEach((sq) => {
    sq.textContent = ""
  })

  let randomSq = Math.floor(Math.random() * NumOfMole)
  let sqIndex = holes[randomSq]

  sqIndex.innerText = "mole"

  // moleTimeFinish = setTimeout(showMole, activeMole)
}

start()
