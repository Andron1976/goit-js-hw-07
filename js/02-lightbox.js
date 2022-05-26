import { galleryItems } from './gallery-items.js';
// Change code below this line

// make p.p. 1,2

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function newItem() {
  return galleryItems.map(
      (pics) =>
        `<a class="gallery__item" href="${pics.original}">
        <img class="gallery__image" src="${pics.preview}" alt="${pics.description}" />
        </a>`
    ).join("");
}
galleryEl.insertAdjacentHTML("afterbegin", newItem(galleryItems));

// make 3,4
let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });