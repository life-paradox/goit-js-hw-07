import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const items = galleryItems.map(option => {
  const galleryItem = galleryEl.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__item" href="${option.original}">
      <img
        class="gallery__image"
        src="${option.preview}"
        alt="${option.description}"
      />
    </a>`
  );
  return galleryItem;
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
