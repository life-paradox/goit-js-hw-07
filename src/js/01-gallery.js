import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGalleryCards(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>
      `;
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createGalleryCards(galleryItems));

gallery.addEventListener('click', onItemGallery);

function onItemGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target);
  const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" >
`);
  modal.show();

  window.addEventListener('keydown', onEscape);
  function onEscape(event) {
    if (event.keyCode === 27) {
      modal.close();
      window.removeEventListener('keydown', onEscape);
    }
  }
}

console.log(galleryItems);
