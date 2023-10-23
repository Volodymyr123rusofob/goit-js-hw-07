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

listUlGallery.addEventListener("click", selectImg);

function selectImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const originalImg = event.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${originalImg}">
    `);
    instance.show();
    document.addEventListener("keydown", onEscKeyPress);
    function onEscKeyPress(event) {
        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener(
                "keydown",
                onEscKeyPress
            );
        }
    }
}
