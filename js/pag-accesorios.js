document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      model: "FSP-06MN",
      description:
        "Supresor de picos con 6 tomas NEMA y protección de línea telefónica. Diseño compacto y seguro.",
      price: 16.9,
    },
    {
      model: "FSP-10UN",
      description:
        "Supresor de picos con 10 tomas universales. Máxima versatilidad para todo tipo de enchufes.",
      price: 17.9,
    },
    {
      model: "FSP-806",
      description:
        "Supresor de picos de 8 tomas con protección coaxial. Ideal para centros de entretenimiento.",
      price: 20.5,
    },
    {
      model: "FSP-512USBW",
      description:
        "Barra de protección de 5 tomas, 2 puertos USB y montaje en pared. Carga y protege a la vez.",
      price: 22.9,
    },
    {
      model: "FVP-6630B",
      description:
        "Protector de voltaje para equipos de audio/video. Evita daños por fluctuaciones de energía.",
      price: 25.9,
    },
    {
      model: "DC-350USBP",
      description:
        "Mini UPS DC para módems y routers. Mantiene tu internet activo durante cortes de energía.",
      price: 47.9,
    },
    {
      model: "FPP-T302",
      description:
        "Acondicionador de línea de 3000VA. Regulación precisa para equipos de alta sensibilidad.",
      price: 350.0,
    },
    {
      model: "FPP-T702",
      description:
        "Acondicionador de línea de 7500VA. Protección industrial para cargas pesadas y equipos críticos.",
      price: 630.0,
    },
    {
      model: "FPP-T1202",
      description:
        "Acondicionador de línea de 12000VA. Máxima capacidad y fiabilidad para entornos exigentes.",
      price: 910.0,
    },
    // Puedes agregar más accesorios aquí en el futuro.
  ];

  // --- Lógica de Paginación ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  let currentPage = 1;
  const itemsPerPage = 6; // Se mostrarán hasta 6 productos por página

  // La lista ya está ordenada, pero mantenemos el sort por si se añaden más en el futuro
  products.sort((a, b) => a.price - b.price);

  function displayProducts(page) {
    productGrid.innerHTML = "";
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = products.slice(startIndex, endIndex);

    paginatedItems.forEach((product) => {
      const modelLower = product.model.toLowerCase().replace(/\s+/g, "-");
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

    if (pageCount > 1) {
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
