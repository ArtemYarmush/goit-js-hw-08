// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItemCreate(galleryItems);
//console.log(galleryMarkup);

function galleryItemCreate(galleryItems) {
  return galleryItems
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
                </div>`;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
//console.log(galleryList);

galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const modalImg = event.target.dataset.source;
  //console.log(modalImg);
  const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${modalImg}">
	`);
  instance.show();
}

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown');
  }
});

console.log(galleryItems);
