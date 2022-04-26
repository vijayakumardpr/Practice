const form = document.getElementById("blog-form")
const title = document.getElementById("blog-title")
const body = document.getElementById("blog-body")
const search = document.getElementById("text")
const blogContainer = document.getElementById("blog-container")
let postArray = []

function renderPost() {
  let html = ""
  for (let post of postArray) {
    html += `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr/>
    `
  }

  blogContainer.innerHTML = html
}

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     postArray = data.slice(0, 5)
//     renderPost()
//   })

// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   if (title.value === "") return
//   const blogTitle = title.value
//   const blogBody = body.value

//   const data = { title: blogTitle, body: blogBody }

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }

//   fetch("https://apis.scrimba.com/jsonplaceholder/todos", options)
//     .then((res) => res.json())
//     .then((data) => {
//       postArray.unshift(data)
//       renderPost()
//     })
// })

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    postArray = data.slice(0, 5)
    renderPost()
    search.addEventListener("input", (e) => {
      console.log(search.value)
      e.preventDefault()
      let blogPostTitle = ""
      const searchText = search.value.toLowerCase()
      for (let post of postArray) {
        blogPostTitle = post.title.toLowerCase()
        if (blogPostTitle.includes(searchText)) {
          title.style.display = "block"
        } else {
          title.style.display = "none"
        }
      }
    })
  })
