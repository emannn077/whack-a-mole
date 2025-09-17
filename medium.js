//global variable

const NumOfMole = 9
const gameDuration = 25
const moleTime = 1100 //milliseconds
let score = 0
let moleTimeFinish = null
let timeLeft = gameDuration
const holes = document.querySelectorAll(".hole")
const scoreSection = document.getElementById("score")
const timerSection = document.getElementById("Timer")
const moles = document.querySelectorAll(".mole")
const startBtn = document.querySelector("#startBtn")
const cursor = document.querySelector(".cursor img")
let moleTimer
let countdownTimer
const finalScore = document.querySelector("#finalScore")
let bestScore = localStorage.getItem("bestScore") || 0
const bestScoreSection = document.querySelector("#bestScore")

//i used array to store the value/score of each image . i find it MVP
const differentmoles = [
  { src: "/images/scary2.png", points: 20 }, //it will increase score by 20 points
  { src: "/images/Annabelle-.png", points: 10 }, //it will increas score by 5 points
  { src: "/images/scary1.png", points: -10, sound: "/sounds/oh.mp3" }, //it will decrease score by 10 points.
]

//for bestScore

const endGame = () => {
  clearInterval(moleTimer)
  clearInterval(countdownTimer)

  holes.forEach((sq) => {
    sq.innerHTML = ""
  })

  if (score > bestScore) {
    bestScore = score
    localStorage.setItem("bestScore", bestScore)
    bestScoreSection.textContent = `Best Score: ${bestScore}`
  }

  finalScore.textContent = `Timer is up! Your Final score is ${score}` ///this is to show the final score msg
}
const countDown = () => {
  timeLeft-- //its like timeLeft= timeLeft-1
  timerSection.innerHTML = `<img src="/images/time_icon.png" class="icon" alt="time icon"/>Time: ${timeLeft}s`
  if (timeLeft <= 0) {
    endGame() //it will stop the game when timer is up
  }
}

const start = () => {
  finalScore.textContent = "" //this code will clear previous final score msg
  moleTimer = setInterval(showMole, 1100)

  countdownTimer = setInterval(countDown, 1000) //added start countdown

  score = 0
  timeLeft = gameDuration
  scoreSection.innerHTML = `<img src="/images/score_icon.png" class="icon" alt="score icon"/> Score: ${score}`
  timerSection.innerHTML = `<img src="/images/time_icon.png" class="icon" alt="time icon"/>Time: ${timeLeft}s`
  bestScoreSection.innerHTML = `<img src="/images/best_icon.png" class="icon" alt="best icon"/> Best Score: ${bestScore}`
}

//i made whack animation using the image and added the function by using a reference/guidance through a youtube vidoes for understanding the concept of it,on how to make whack on cursor and how to add whacking animation in it
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px"
  cursor.style.left = e.pageX + "px"
})

window.addEventListener("click", () => {
  cursor.style.animation = "hit 0.1s ease"
  setTimeout(() => {
    cursor.style.removeProperty("animation")
  }, 100)
})

const showMole = () => {
  holes.forEach((sq) => {
    sq.innerHTML = ""
    sq.onclick = null
  })
  // this is to pick random hole
  let randomSq = Math.floor(Math.random() * NumOfMole)
  let sqIndex = holes[randomSq]

  //this is for to check the probability of the character showing randomly on each mole
  let randomNumber = Math.random()
  let character = "scary"
  if (randomNumber < 0.5) {
    // 50% chance
    character = "scary2.png"
  } else if (randomNumber < 0.8) {
    // 30% chance (0.5 to 0.8)
    character = "scary1.png"
  } else {
    // 20% chance (0.8 to 1)
    character = "Annabelle-.png"
  }

  //this is to pick random mole images we added
  const randomMole =
    differentmoles[Math.floor(Math.random() * differentmoles.length)]

  const moleImg = document.createElement("img")
  moleImg.src = randomMole.src
  moleImg.classList.add("moleImg")
  moleImg.style.cursor = "pointer"

  //add bounce effect when mole comes
  moleImg.classList.add("bounce-once")

  //this logic is for if i click on the image mole it will give scores accroding to it
  moleImg.onclick = () => {
    score += randomMole.points
    scoreSection.textContent = `Score: ${score}`
    sqIndex.innerHTML = ""
    const moleSound = new Audio(randomMole.sound)
    moleSound.play().catch((err) => console.log(err))
  }

  sqIndex.appendChild(moleImg)
}
const bgMusic = document.querySelector("#bgMusic")
bgMusic.volume = 0.6
startBtn.addEventListener("click", start)
