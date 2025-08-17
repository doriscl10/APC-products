document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      model: "AP9544",
      description:
        "Tarjeta de Gestión de Red 3 (NMC3) con Monitoreo de Energía. Gestión remota para UPS.",
      price: 118.9,
    },
    {
      model: "AP9640",
      description:
        "Tarjeta de Gestión de Red 3 (NMC3). Ofrece monitoreo y control remoto de un UPS a través de un navegador web.",
      price: 327.0,
    },
    {
      model: "AP9641",
      description:
        "Tarjeta de Gestión de Red 3 (NMC3) con Monitoreo Ambiental. Gestión remota de UPS y sensores.",
      price: 489.0,
    },
  ];

  // --- Lógica de Paginación y Visualización ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  const noProductsMessage = document.getElementById("no-products-message");

  let currentPage = 1;
  const itemsPerPage = 6;

  function displayContent() {
    if (products.length === 0) {
      productGrid.style.display = "none";
      noProductsMessage.style.display = "block";
      paginationControls.style.display = "none";
    } else {
      productGrid.style.display = "grid";
      noProductsMessage.style.display = "none";

      products.sort((a, b) => a.price - b.price);

      displayProducts(currentPage);
      setupPagination();
    }
  }

  function displayProducts(page) {
    productGrid.innerHTML = "";
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = products.slice(startIndex, endIndex);

    paginatedItems.forEach((product) => {
      const modelLower = product.model.toLowerCase().replace(/\s+/g, "-");
      const imageUrl = `https://web.netperu100.com/apc/images/${modelLower}_front.jpg`;
      const pageUrl = `${product.model}.html`;

      // --- CORRECCIÓN: Añadido el texto "+ IGV" ---
      const priceHTML = `
            <div class="mt-4 text-center">
              <span class="text-2xl font-bold text-gray-900">${product.price.toLocaleString(
                "en-US",
                { style: "currency", currency: "USD" }
              )}</span>
              <span class="text-sm font-medium text-gray-500 ml-1">+ IGV</span>
            </div>
            `;

      const productCard = `
          <div class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
              <img src="${imageUrl}" alt="${product.model}" class="max-h-full max-w-full object-contain" />
            </div>
            <div class="p-5 flex flex-col flex-grow">
              <h3 class="text-lg font-bold text-gray-800 mb-2">${product.model}</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">${product.description}</p>
              ${priceHTML}
              <a href="${pageUrl}" class="mt-auto w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Ver Producto
              </a>
            </div>
          </div>
        `;
      productGrid.innerHTML += productCard;
    });
  }

  function setupPagination() {
    paginationControls.innerHTML = "";
    const pageCount = Math.ceil(products.length / itemsPerPage);

    if (pageCount > 1) {
      paginationControls.style.display = "flex";
      for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add(
          "px-4",
          "py-2",
          "rounded-md",
          "font-semibold",
          "transition-colors",
          "duration-300"
        );
        updateButtonAppearance(button, i);
        button.addEventListener("click", () => {
          currentPage = i;
          displayProducts(currentPage);
          updateAllButtons();
        });
        paginationControls.appendChild(button);
      }
    } else {
      paginationControls.style.display = "none";
    }
  }

  function updateAllButtons() {
    const buttons = paginationControls.querySelectorAll("button");
    buttons.forEach((button) => {
      updateButtonAppearance(button, parseInt(button.innerText));
    });
  }

  function updateButtonAppearance(button, pageIndex) {
    button.classList.remove(
      "bg-blue-600",
      "text-white",
      "cursor-default",
      "bg-gray-200",
      "text-gray-700",
      "hover:bg-blue-500",
      "hover:text-white"
    );
    if (pageIndex === currentPage) {
      button.classList.add("bg-blue-600", "text-white", "cursor-default");
    } else {
      button.classList.add(
        "bg-gray-200",
        "text-gray-700",
        "hover:bg-blue-500",
        "hover:text-white"
      );
    }
  }

  // Inicializar la vista
  displayContent();
});
