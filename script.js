const title = document.getElementById("title")
const body = document.getElementById("body")
const form = document.getElementById("new-post")

let postsArray = []

function renderPosts() {
  let html = ""
  for (let post of postsArray) {
    html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>
            `
  }
  document.getElementById("blog-container").innerHTML = html
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5)
    renderPosts()
  })

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (title.value === "") return
  const postTitle = title.value
  const bodyTitle = body.value
  const data = { title: postTitle, body: bodyTitle }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }

  fetch("https://apis.scrimba.com/jsonplaceholder/todos", options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post)
      renderPosts()
    })

  // title.value = ""
  // body.value = ""

  form.reset()
})
