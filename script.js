// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let player1Count = 0
let player2Count = 0

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const count1 = document.getElementById("count")
const count2 = document.getElementById("count2")
const wishes = document.querySelector("h2")

function showDisplayButton() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "inline-block"
}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  // 1. Find out which players turn it is
  // 2. log out the value e.g. "Player 1 rolled 5"
  // 3. Switch the turn back to the other player

  if (player1Turn) {
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    message.textContent = "Player 2 Turn"
    count1.textContent = `Count: ${(player1Count = player1Count + 1)}`
    console.log("player1:" + player1Count)
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn"
    count2.textContent = `Count: ${(player2Count = player2Count + 1)}`
    console.log("player2:" + player2Count)
  }

  if (player1Score >= 20 && player1Count === player2Count) {
    message.textContent = "Player 1 has won! 🥳"
    // message.textContent = popup("Player1 has Won! 🎉")
    showDisplayButton()
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉"
    // message.textContent = popup("Player2 has Won! 🥳")
    showDisplayButton()
  }
  // if ((player1Score || player2Score) >= 20) {
  //   if (player1Score > player2Score) {
  //     message.textContent = "Player 1 won!"
  //     rollBtn.style.display = "none"
  //     resetBtn.style.display = "inline-block"
  //   } else {
  //     message.textContent = "Player 2 won!"
  //     rollBtn.style.display = "none"
  //     resetBtn.style.display = "inline-block"
  //   }
  // }
  player1Turn = !player1Turn
})

resetBtn.addEventListener("click", reset)

function reset() {
  player1Score = 0
  player2Score = 0
  player1Count = 0
  player2Count = 0
  player1Scoreboard.textContent = player1Score
  player2Scoreboard.textContent = player2Score
  player1Dice.textContent = "-"
  player2Dice.textContent = "-"
  count1.textContent = player1Count
  count2.textContent = player2Count
  message.textContent = "Player 1 Turn"

  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")
  rollBtn.style.display = "inline-block"
  resetBtn.style.display = "none"
  player1Turn = true
}

function popup(players) {
  wishes.textContent += players
  wishes.style.display = "block"
  setTimeout(() => {
    wishes.style.display = "none"
  }, 3000)
}
