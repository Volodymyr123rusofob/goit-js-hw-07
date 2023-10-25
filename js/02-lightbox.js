import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listUlGallery = document.querySelector(".gallery");

const elementListGalleryLi = galleryItems
    .map(
        (element) => `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${element.original}"
    >
        <img
            class="gallery__image"
            src="${element.preview}"
            alt="${element.description}"
            title="${element.description}"
        />
    </a>
</li>`
    )
    .join("");

listUlGallery.insertAdjacentHTML(
    "afterbegin",
    elementListGalleryLi
);

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
});
// !===============================