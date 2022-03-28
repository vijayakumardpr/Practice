const usersName = document.getElementById("searchInput")

usersName.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase()
  let allNamesDOMCollection = document.querySelectorAll(".name")
  for (let i = 0; i < allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase()
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[i].style.display = "block"
    } else {
      allNamesDOMCollection[i].style.display = "none"
    }
  }
})
