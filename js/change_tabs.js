/**
 * Función para cambiar la imagen principal y resaltar la miniatura activa.
 * @param {HTMLElement} thumbnailElement - El elemento <img> de la miniatura.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Seleccionamos los elementos que vamos a manipular.
  const productTab = document.getElementById("product-tab");
  const imagesTab = document.getElementById("images-tab");
  const infoSection = document.getElementById("information-section");
  const imagesSection = document.getElementById("images-section");

  // Clases CSS para los estilos de los botones (basado en tu HTML)
  const activeClasses = ["bg-blue-600", "text-white"];
  const inactiveClasses = ["bg-gray-100", "text-gray-700"];

  
  if (!productTab || !imagesTab || !infoSection || !imagesSection) {
    console.error(
      "No se encontraron todos los elementos necesarios para las pestañas."
    );
    return;
  }

  imagesTab.addEventListener("click", () => {
    // Ocultar la sección de información y mostrar la de imágenes
    infoSection.classList.add("hidden");
    imagesSection.classList.remove("hidden");

    // Actualizar estilos de los botones
    imagesTab.classList.add(...activeClasses);
    imagesTab.classList.remove(...inactiveClasses);

    productTab.classList.add(...inactiveClasses);
    productTab.classList.remove(...activeClasses);
  });

  productTab.addEventListener("click", () => {
    // Mostrar la sección de información y ocultar la de imágenes
    infoSection.classList.remove("hidden");
    imagesSection.classList.add("hidden");

    // Actualizar estilos de los botones
    productTab.classList.add(...activeClasses);
    productTab.classList.remove(...inactiveClasses);

    imagesTab.classList.add(...inactiveClasses);
    imagesTab.classList.remove(...activeClasses);
  });

  productTab.click();
});



function toExchangeImage(thumbnailElement) {
  // --- Lógica para cambiar la imagen principal ---
  const mainImage = document.getElementById("img_main");
  mainImage.src = thumbnailElement.src;

  const thumbnailContainer = thumbnailElement.parentElement.parentElement;

  const allThumbnailDivs = thumbnailContainer.children;

  for (let div of allThumbnailDivs) {
    div.classList.remove("border-blue-500", "border-2");
    div.classList.add("border");
  }

  const clickedThumbnailDiv = thumbnailElement.parentElement;
  clickedThumbnailDiv.classList.add("border-blue-500", "border-2");
  clickedThumbnailDiv.classList.remove("border");
}

function viewImage(src) {
  window.open(src, "_blank");
}
