// @====================Task-1================================================
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listUlGallery = document.querySelector(".gallery");
const elementListGalleryLi = galleryItems
    .map(
        (element) => `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img
          class="gallery__image"
          src="${element.preview}"
          data-source="${element.original}"
          alt="${element.description}"
        />
      </a>
    </li>`
    )
    .join("");

listUlGallery.insertAdjacentHTML(
    "afterbegin",
    elementListGalleryLi
);
// !=====================Task-2================================
listUlGallery.addEventListener("click", selectImg);
function selectImg(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const originalImg = event.target.dataset.source;
}
// #=====================Task-3================================
// $=====================Task-4================================
// %=====================Task-5================================
