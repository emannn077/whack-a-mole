//Global Variables
const levelEasy = document.querySelector("#easy")
const levelMedium = document.querySelector("#medium")
const levelDifficult = document.querySelector("#difficult")

//Function for Logic

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
  handleClick("easy")
})
levelMedium.addEventListener("click", () => {
  handleClick("medium")
})
levelDifficult.addEventListener("click", () => {
  handleClick("difficult")
})
