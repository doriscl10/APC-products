document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      model: "FUB-1270",
      description:
        "Batería sellada de plomo-ácido de 12V y 7Ah. Ideal para UPS de escritorio y sistemas de alarma.",
      price: 26.19,
    },
    {
      model: "FUB-12100A",
      description:
        "Batería de alta capacidad de 12V y 100Ah. Perfecta para sistemas UPS de gran envergadura.",
      price: 295.0,
    },
    {
      model: "SRV36BP-9A",
      description:
        "Módulo de Batería para Easy UPS SRV. Extiende la autonomía de tu UPS On-Line.",
      price: 299.0,
    },
    {
      model: "RBC31",
      description:
        "Cartucho de Batería de Reemplazo APC #31. Compatible con varios modelos de UPS.",
      price: 321.0,
    },
    {
      model: "APCRBC141",
      description:
        "Cartucho de Batería de Reemplazo APC #141. Para modelos Smart-UPS y Back-UPS.",
      price: 349.0,
    },
    {
      model: "RBC55",
      description:
        "Cartucho de Batería de Reemplazo APC #55. Para modelos Smart-UPS de 2200/3000VA.",
      price: 559.0,
    },
    {
      model: "APCRBC140",
      description:
        "Cartucho de Batería de Reemplazo APC #140. Compatible con modelos SRT de alta potencia.",
      price: 671.9,
    },
    {
      model: "SURT48XLBP",
      description:
        "Módulo de Batería Externa Smart-UPS RT 48V. Aumenta significativamente la autonomía.",
      price: 675.0,
    },
    {
      model: "SRT96BP",
      description:
        "Módulo de Batería Externa Smart-UPS SRT 96V 2.2/3kVA. Para largas autonomías.",
      price: 1015.0,
    },
    {
      model: "SRTG192XLBP4",
      description:
        "Módulo de Batería Externa para Smart-UPS On-Line 192V. Compatible con modelos SRTG.",
      price: 1175.0,
    },
    {
      model: "SRT192BP",
      description:
        "Módulo de Batería Externa Smart-UPS SRT 192V 5/6kVA. Solución de autonomía escalable.",
      price: 1215.0,
    },
    {
      model: "SRT192BP2",
      description:
        "Módulo de Batería Externa Smart-UPS SRT 192V 8/10kVA. Máxima autonomía para equipos críticos.",
      price: 1334.0,
    },
    {
      model: "SRT72BP",
      description:
        "Módulo de Batería Externa Smart-UPS SRT 72V 2.2/3kVA. Autonomía extendida para tus equipos.",
      price: null,
    },
    // Puedes agregar más baterías aquí en el futuro.
    // La paginación aparecerá automáticamente cuando sea necesario.
  ];

  // --- Lógica de Paginación ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  let currentPage = 1;
  const itemsPerPage = 6; // Se mostrarán hasta 6 productos por página

  // Ordenar por precio por si se agregan más productos en desorden
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

    // --- Condición clave: Solo mostrar controles si hay más de una página ---
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
