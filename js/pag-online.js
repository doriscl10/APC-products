document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      model: "NT-512U",
      description:
        "UPS interactivo de 500VA/250W. Protección esencial y respaldo para PCs y estaciones de trabajo.",
      price: 54.9,
    },
    {
      model: "NT-752U",
      description:
        "UPS interactivo de 750VA/375W. Ofrece respaldo de batería fiable para equipos de oficina y hogar.",
      price: 76.9,
    },
    {
      model: "SL-602UL",
      description:
        "UPS On-Line de 600VA. Solución compacta para proteger estaciones de trabajo y puntos de venta críticos.",
      price: 86.9,
    },
    {
      model: "NT-1012U",
      description:
        "UPS interactivo de 1000VA/500W. Asegura la continuidad de tus operaciones con una energía estable.",
      price: 95.0,
    },
    {
      model: "FPD-1012M1U",
      description:
        "UPS On-Line de 1000VA/900W. Protección de alto rendimiento para servidores y equipos de red.",
      price: 139.0,
    },
    {
      model: "SL-1012UL",
      description:
        "UPS On-Line de 1000VA. Doble conversión para la máxima protección contra todas las fallas eléctricas.",
      price: 151.0,
    },
    {
      model: "NT-1802PRO",
      description:
        "UPS interactivo PRO de 1800VA/900W. Capacidad extendida para sistemas más demandantes.",
      price: 161.0,
    },
    {
      model: "NT-2402PRO",
      description:
        "UPS interactivo PRO de 2400VA/1200W. Respaldo robusto para múltiples dispositivos en entornos de oficina.",
      price: 189.0,
    },
    {
      model: "FPD-3012M0U",
      description:
        "UPS On-Line de 3000VA/2700W. Potencia y fiabilidad para equipos críticos en racks y servidores.",
      price: 309.0,
    },
    {
      model: "FPD-3012M0US",
      description:
        "UPS On-Line de 3000VA/2700W con tarjeta SNMP para gestión remota de la red. Control total.",
      price: 479.0,
    },
  ];

  // --- Lógica de Paginación ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  let currentPage = 1;
  const itemsPerPage = 6; // 10 productos / 2 páginas = 5 por página

  // La lista ya está ordenada, pero es buena práctica asegurarse
  products.sort((a, b) => a.price - b.price);

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
