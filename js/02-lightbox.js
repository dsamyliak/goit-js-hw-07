import { galleryItems } from './gallery-items.js';
// Change code below this line
let galleryUl = document.querySelector("ul.gallery");

galleryUl.outerHTML = '<div class="gallery"></div>';

const galleryDivHtml = document.querySelector("div.gallery");
console.log(galleryDivHtml);



// galleryItemsHtml adding to ul.gallery
// const divHtml = `<div class="gallery"></div>`;
// galleryUl.innerHTML += divHtml;

// const galleryDivHtml = document.querySelector("div.gallery");


const galleryItemHtml = galleryItems.map((galItem) => 
    `<a class="gallery__item" href="${galItem.original}">
  <img class="gallery__image" src="${galItem.preview}" alt="${galItem.description}" />
</a>`).join("");

// galleryDivHtml
galleryDivHtml.insertAdjacentHTML("beforeend", galleryItemHtml);

// addEventListener on div.gallery with Delegation
    
const galleryItem = document.querySelector("div.gallery");

galleryItem.addEventListener("click", (event) => {
    event.preventDefault();
    

    if (event.target.className === "gallery__image") {
        console.log(event.target.className);

        let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
        lightbox.on('show.simplelightbox', function () {
	// Do something…
    });
    };

    
    
});
//

console.log(galleryItems);
