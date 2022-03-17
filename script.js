const input = document.querySelector("input")
const units = document.querySelectorAll(".unit")

input.addEventListener("input", (e) => {
  e.preventDefault()

  units.forEach((unit) => {
    unit.textContent = input.value
  })
})
