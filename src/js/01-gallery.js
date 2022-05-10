import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    `}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

var lightBox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
lightBox.on('show.simplelightbox');
