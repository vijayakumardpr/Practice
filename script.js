/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/

// const heroElementId = "hero"
// const heroName = "Wizard"
// const heroAvatar = "images/wizard.png"
// const heroHealth = 60
// const heroDiceRoll = 6

// const monsterElementId = "monster"
// const monsterName = "Orc"
// const monsterAvatar = "images/orc.png"
// const monsterHealth = 10
// const monsterDiceRoll = 4

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "img/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "img/orc.png",
  health: 10,
  diceRoll: [2],
  diceCount: 1,
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data // object destructuring

  let diceHtml = diceRoll
    .map((count) => `<div class="dice">${count}</div>`)
    .join("")

  console.log(getDiceRollArray(diceCount))
  document.getElementById(elementId).innerHTML = `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">
              
              ${diceHtml}
          </div>
      </div>`
}
renderCharacter(hero)
renderCharacter(monster)

function getDiceRollArray(count) {
  let diceRoll = []
  for (let i = 0; i < count; i++) {
    let randomDiceNumbers = Math.floor(Math.random() * 6) + 1
    diceRoll.push(randomDiceNumbers)
  }
  return diceRoll
}
