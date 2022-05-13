fetch("http://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    let result = data
      .filter((v) => v.name.toLowerCase().includes("k"))
      .map(({ name, email }) => {
        return { name, email }
      })
    console.log(result)
  })
