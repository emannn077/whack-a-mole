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
const startBtn = document.querySelector("#startBtn")

let moleTimer
let countdownTimer

const endGame = () => {
  clearInterval(moleTimer)
  clearInterval(countdownTimer)

  holes.forEach((sq) => {
    sq.textContent = ""
  })

  alert(`Game over ! your score is ${score}`)
}
const countDown = () => {
  timeLeft-- //its like timeLeft= timeLeft-1
  timerSection.textContent = `Time: ${timeLeft}s`

  if (timeLeft <= 0) {
    endGame() //it will stop the game when timer is up
  }
}

const start = () => {
  moleTimer = setInterval(showMole, 1500)

  countdownTimer = setInterval(countDown, 1000) //added start countdown

  score = 0
  timeLeft = gameDuration
  scoreSection.textContent = `Score: ${score}`
  timerSection.textContent = `Time: ${timeLeft}s`
}

const showMole = () => {
  holes.forEach((sq) => {
    sq.textContent = ""
    sq.onclick = null
  })

  let randomSq = Math.floor(Math.random() * NumOfMole)
  let sqIndex = holes[randomSq]

  sqIndex.innerText = "mole"
  // this code is for the index of the hole. its click event losterne that will be for he mole hole
  sqIndex.onclick = () => {
    score++
    scoreSection.textContent = `Score: ${score}`
    sqIndex.textContent = ""
    sqIndex.onclick = null // this will remove the old event listener so that it will not the empty hole as score.
  }

  // moleTimeFinish = setTimeout(showMole, activeMole)
}

startBtn.addEventListener("click", start)
