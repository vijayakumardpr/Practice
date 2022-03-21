let pwd1 = document.querySelector(".pwd1")
let pwd2 = document.querySelector(".pwd2")
let pwd3 = document.querySelector(".pwd3")
let pwd4 = document.querySelector(".pwd4")
let btn = document.querySelector("button")

let randomPasswordCharacter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "a",
  "b",
  "c",
  "d",
  "e",
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  ",",
  "-",
  "?",
  "@",
  "[",
  "]",
  1,
  2,
  3,
  4,
  5,
]

let passwords1 = []
let passwords2 = []
let passwords3 = []
let passwords4 = []

function randomPassword() {
  let randomNumber = Math.floor(Math.random() * randomPasswordCharacter.length)
  return randomPasswordCharacter[randomNumber]
}
btn.addEventListener("click", (e) => {
  e.preventDefault()

  for (let i = 0; i < 6; i++) {
    passwords1.push(randomPassword())
    pwd1.value = passwords1.join("")
  }

  for (let i = 0; i < 6; i++) {
    passwords2.push(randomPassword())
    pwd2.value = passwords2.join("")
  }

  for (let i = 0; i < 6; i++) {
    passwords3.push(randomPassword())
    pwd3.value = passwords3.join("")
  }

  for (let i = 0; i < 6; i++) {
    passwords4.push(randomPassword())
    pwd4.value = passwords4.join("")
  }

  passwords1 = []
  passwords2 = []
  passwords3 = []
  passwords4 = []
})

// function selectText() {
//   const input = document.querySelector("input")
//   console.log(input.value.select())
//   // document.elecCommand("copy")
// }

let number = 9629039023

let last4Digits = number.toString().slice(-4)

let maskedNumber = last4Digits.padStart(number.toString().length, "*")

console.log(maskedNumber)

var singleNumber = function (nums) {
  const a = nums.reduce((pre, cur) => {
    pre[cur] = ++pre[cur] || 1
    return pre
  }, {})

  return Object.entries(a)
}

console.log(singleNumber([2, 2, 1]))

var removeElement = function (nums, val) {
  var num2 = []
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      num2.push(nums[i])
    }
  }
  return num2
}

console.log(removeElement([3, 2, 2, 3], 3))
