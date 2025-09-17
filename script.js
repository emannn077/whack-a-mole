//Global Variables
const levelEasy = document.querySelector("#easy")
const levelMedium = document.querySelector("#medium")
const levelDifficult = document.querySelector("#difficult")

//for the sound of buttons
const playClickSound = () => {
  const clickSound = new Audio("/sounds/Toom Click.wav")
  clickSound.currentTime = 0
  clickSound.play()
}
//for navigating to the specific page i clicked button on
const navigate = (level) => {
  setTimeout(() => {
    window.location.href = `${level}.html`
  }, 200)
}

const nextPage = (level) => {
  window.location.href = `${level}.html`
}
const handleClick = (gameLevel) => {
  if (gameLevel === "easy") {
    nextPage("easy")
  } else if (gameLevel === "medium") {
    nextPage("medium")
  } else if (gameLevel === "difficult") {
    nextPage("difficult")
  } else {
    console.error("Error", gameLevel)
  }
}
//event Listeners

levelEasy.addEventListener("click", () => {
  playClickSound()
  navigate("easy")
})
levelMedium.addEventListener("click", () => {
  playClickSound()
  navigate("medium")
})
levelDifficult.addEventListener("click", () => {
  playClickSound()
  navigate("difficult")
})
