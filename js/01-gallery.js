import { galleryItems } from './gallery-items.js';
// Change code below this line

// make p.p.1,2

const galleryEl = document.querySelector('.gallery');

function newItem () {
    return galleryItems.map((pics) => `<div class="gallery__item">
    <a class="gallery__link" href="${pics.original}">
      <img
        class="gallery__image"
        src="${pics.preview}"
        data-source="${pics.original}"
        alt="${pics.description}"
      />
    </a>
  </div>`).join("");
}

galleryEl.insertAdjacentHTML("afterbegin", newItem(galleryItems));

console.log(galleryItems);

// make p.p.4,5
let myInstance = null;

galleryEl.addEventListener("click", modalClick);

function modalClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  myInstance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  myInstance.show();
}

// make p.6
const modalEscape = (event) => {
    if(event.code === 'Escape') {
        myInstance.close();
    }
};
document.addEventListener('keydown', modalEscape);

