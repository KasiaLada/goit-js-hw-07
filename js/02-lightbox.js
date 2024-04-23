import { galleryItems } from './gallery-items.js'; //
const gallery = document.querySelector('.gallery');

let galleryList = '';

galleryItems.forEach((image) => {
	galleryList += `
    <li>
        <a href="${image.original}" class="gallery__item">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}">
        </a>
    </li>`;
});

gallery.innerHTML = galleryList;

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});
