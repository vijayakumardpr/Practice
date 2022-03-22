// let pwd1 = document.querySelector(".pwd1")
// let pwd2 = document.querySelector(".pwd2")
// let pwd3 = document.querySelector(".pwd3")
// let pwd4 = document.querySelector(".pwd4")
// let btn = document.querySelector("button")

// let randomPasswordCharacter = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "!",
//   "#",
//   "$",
//   "%",
//   "&",
//   "*",
//   "+",
//   ",",
//   "-",
//   "?",
//   "@",
//   "[",
//   "]",
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
// btn.addEventListener("click", (e) => {
//   e.preventDefault()

//   for (let i = 0; i < 6; i++) {
//     passwords1.push(randomPassword())
//     pwd1.value = passwords1.join("")
//   }

//   for (let i = 0; i < 6; i++) {
//     passwords2.push(randomPassword())
//     pwd2.value = passwords2.join("")
//   }

//   for (let i = 0; i < 6; i++) {
//     passwords3.push(randomPassword())
//     pwd3.value = passwords3.join("")
//   }

//   for (let i = 0; i < 6; i++) {
//     passwords4.push(randomPassword())
//     pwd4.value = passwords4.join("")
//   }

//   passwords1 = []
//   passwords2 = []
//   passwords3 = []
//   passwords4 = []
// })

// function selectText() {
//   const input = document.querySelector("input")
//   console.log(input.value.select())
//   // document.elecCommand("copy")
// }

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    resolve("resolve is a callback function")
    setTimeout(f1, duration)
  })
}
setTimeoutPromise(1000).then((res) => {
  console.log(res)
})

function f1() {
  console.log("I'm okay with promise")
}
