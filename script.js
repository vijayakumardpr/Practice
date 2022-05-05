async function getPhotos() {
  let response = await fetch("photos.json")
  let photos = await response.json()

  return photos
}

function getPhotosHtml(photos) {
  let myPhotosHtml = photos
    .map((photo) => {
      return `<img class="my-photo"  src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    })
    .join("")

  return `<div class="my-photos" >${myPhotosHtml}</div>`
}

getPhotos().then((photos) => {
  document.body.innerHTML = `
  <div class="my-gallery">
  <img style="display: inline" class="my-photo" id="my-selected-photo"
  src="https://picsum.photos/id/1/200/200"/>  
  ${getPhotosHtml(photos)}
  </div>
  `

  let myPhotoImgs = [...document.getElementsByClassName("my-photo")]

  myPhotoImgs.forEach((photoImg, array) => {
    photoImg.addEventListener("click", () => {
      let selectedPhotoSrc = `${photoImg.src.substr(
        0,
        photoImg.src.length - 7
      )}200/200`

      let selectedPhoto = document.getElementById("my-selected-photo")
      console.log(selectedPhoto)
      selectedPhoto.src = selectedPhotoSrc
    })
  })
})
