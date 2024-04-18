import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

let galleryList = '';

galleryItems.forEach((image) => {
	// galleryList += `<li><img src= "${image.preview}" alt = "${image.description}"></li>`;
	galleryList += `<li>
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}">
  </li>`;
});

gallery.addEventListener('click', (ev) => {
	ev.preventDefault();
	const lgImg = ev.target.dataset.source;
	basicLightbox.create(`<img src = "${lgImg}"/>`).show();
});

gallery.innerHTML = galleryList;
console.log(galleryItems);
