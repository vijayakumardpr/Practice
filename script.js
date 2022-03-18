const input = document.querySelector("input")
const units = document.querySelectorAll(".unit")
const feet = document.querySelector(".feet")
const meters = document.querySelector(".meters")
const gallons = document.querySelector(".gallons")
const liters = document.querySelector(".liters")
const pounds = document.querySelector(".pounds")
const kilograms = document.querySelector(".kilos")

input.addEventListener("input", (e) => {
  e.preventDefault()
  if (input.value < 0 || input.value > 10000) return
  units.forEach((unit) => {
    unit.textContent = input.value || 0
  })
  // if (input.value < 0 || input.value > 1000) return
  feet.textContent = (input.value * 3.281).toFixed(3)
  meters.textContent = (input.value * 0.305).toFixed(3)
  gallons.textContent = (input.value * 0.264).toFixed(3)
  liters.textContent = (input.value * 3.785).toFixed(3)
  pounds.textContent = (input.value * 2.205).toFixed(3)
  kilograms.textContent = (input.value * 0.454).toFixed(3)
})
