const input = document.querySelector("input")
const units = document.querySelectorAll(".unit")

input.addEventListener("input", (e) => {
  e.preventDefault()

  units.forEach((unit) => {
    if (input.value < 0) return
    unit.textContent = input.value || 0
  })
})
