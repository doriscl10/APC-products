document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      model: "PS-001B",
      description:
        "Supresor de picos básico con 6 tomas. Protección esencial para tus dispositivos electrónicos.",
      price: 5.19,
    },
    {
      model: "PS-001W",
      description:
        "Supresor de picos de 6 tomas en color blanco. Protege equipos contra sobretensiones.",
      price: 5.89,
    },
    {
      model: "PS-001G",
      description:
        "Supresor de picos de 6 tomas en color gris. Fiabilidad y seguridad para tus conexiones.",
      price: 6.1,
    },
    {
      model: "FVR-902",
      description:
        "Regulador automático de voltaje (AVR) de 900VA/450W. Ideal para proteger PCs y periféricos.",
      price: 14.9,
    },
    {
      model: "FVR-1012",
      description:
        "Regulador automático de voltaje (AVR) de 1000VA/500W. Estabiliza la corriente para equipos sensibles.",
      price: 18.9,
    },
    {
      model: "FVR-1222USB",
      description:
        "Regulador de voltaje de 1200VA/600W con 2 puertos USB de carga. Protección completa y conveniente.",
      price: 26.9,
    },
    {
      model: "FVR-2202",
      description:
        "Regulador automático de voltaje (AVR) de 2200VA/1100W. Alta capacidad para estaciones de trabajo.",
      price: 36.9,
    },
    {
      model: "FVR-3002",
      description:
        "Regulador de voltaje de alta capacidad 3000VA/1500W. Protección robusta para equipos de mayor consumo.",
      price: 49.0,
    },
    {
      model: "FVR-6002",
      description:
        "Regulador de voltaje de 6000VA/3000W. Solución potente para proteger múltiples equipos críticos.",
      price: 93.0,
    },
    {
      model: "HT-1002LCD",
      description:
        "UPS interactivo de 1000VA/600W con pantalla LCD. Respaldo de energía y protección de línea.",
      price: 113.0,
    },
    {
      model: "FX-1500LCD-U",
      description:
        "UPS interactivo de 1500VA/900W con pantalla LCD. Autonomía y protección para sistemas críticos.",
      price: 243.0,
    },
    {
      model: "FX-2200LCD-U",
      description:
        "UPS interactivo de 2200VA/1200W con pantalla LCD. Máximo respaldo para servidores y redes.",
      price: 300.0,
    },
  ];

  // --- Lógica de Paginación ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  let currentPage = 1;
  const itemsPerPage = 6; // 12 productos / 2 páginas = 6 por página

  // La lista ya está ordenada por precio, no es necesario .sort()

  function displayProducts(page) {
    productGrid.innerHTML = "";
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = products.slice(startIndex, endIndex);

    paginatedItems.forEach((product) => {
      const modelLower = product.model.toLowerCase();
      const imageUrl = `https://web.netperu100.com/apc/images/${modelLower}_front.jpg`;
      const pageUrl = `${product.model}.html`;

      const priceHTML = `
            <div class="mt-4 text-center">
              <span class="text-2xl font-bold text-gray-900">${product.price.toLocaleString(
                "en-US",
                { style: "currency", currency: "USD" }
              )}</span>
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
    const pageCount = Math.ceil(products.length / itemsPerPage);
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
      if (i === currentPage) {
        button.classList.add("bg-blue-600", "text-white", "cursor-default");
      } else {
        button.classList.add(
          "bg-gray-200",
          "text-gray-700",
          "hover:bg-blue-500",
          "hover:text-white"
        );
      }
      button.addEventListener("click", () => {
        currentPage = i;
        displayProducts(currentPage);
        updateActiveButton();
      });
      paginationControls.appendChild(button);
    }
  }

  function updateActiveButton() {
    const buttons = paginationControls.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("bg-blue-600", "text-white", "cursor-default");
      button.classList.add(
        "bg-gray-200",
        "text-gray-700",
        "hover:bg-blue-500",
        "hover:text-white"
      );

      if (parseInt(button.innerText) === currentPage) {
        button.classList.remove(
          "bg-gray-200",
          "text-gray-700",
          "hover:bg-blue-500",
          "hover:text-white"
        );
        button.classList.add("bg-blue-600", "text-white", "cursor-default");
      }
    });
  }

  // Inicializar
  displayProducts(currentPage);
  setupPagination();
});
