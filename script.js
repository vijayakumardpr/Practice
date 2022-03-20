// let pwd1 = document.querySelector(".pwd1")
// let pwd2 = document.querySelector(".pwd2")
// let pwd3 = document.querySelector(".pwd3")
// let pwd4 = document.querySelector(".pwd4")

// let randomPasswordCharacter = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   1,
//   2,
//   3,
//   4,
//   5,
// ]

// let passwords1 = []
// let passwords2 = []
// let passwords3 = []
// let passwords4 = []

// function randomPassword() {
//   let randomNumber = Math.floor(Math.random() * randomPasswordCharacter.length)
//   return randomPasswordCharacter[randomNumber]
// }

// for (let i = 0; i < 6; i++) {
//   passwords1.push(randomPassword())

//   input.value = pwd1.innerText = passwords1.join("")
// }

// for (let i = 0; i < 6; i++) {
//   passwords2.push(randomPassword())
//   pwd2.textContent = passwords2.join("")
// }
// for (let i = 0; i < 6; i++) {
//   passwords3.push(randomPassword())
//   pwd3.textContent = passwords3.join("")
// }

// for (let i = 0; i < 6; i++) {
//   passwords4.push(randomPassword())
//   pwd4.textContent = passwords4.join("")
// }

// function selectText() {
//   const input = document.querySelector("#input")
//   input.select()
//   document.elecCommand("copy")
// }
let arr = [1, 2, 2, 1, 1, 3]

var uniqueOccurrences = function (arr) {
  let occurrences = arr.reduce((pre, cur) => {
    pre[cur] = ++pre[cur] || 1
    return pre
  }, {})

  let one = Object.values(occurrences)
  let two = [...new Set(one)]
  return one.length === two.length
}

console.log(uniqueOccurrences(arr))

// let array = [1, 1, 4, 5]

// let a = [new Set(array)]

// console.log(Object.entries(a).length)
