import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const items = galleryItems.map(option => {
  const galleryItem = document.createElement(`div`);
  galleryItem.classList.add('gallery__item');
  galleryItem.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${option.original}">
    <img
      class="gallery__image"
      src="${option.preview}"
      data-source="${option.original}"
      alt="${option.description}"
    />
  </a>`
  );
  return galleryItem;
});

gallery.append(...items);

gallery.addEventListener('click', onItemGallery);

function onItemGallery(event) {
  event.preventDefault();

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
