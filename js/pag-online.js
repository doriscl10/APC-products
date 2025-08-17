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
      model: "SRV1KI",
      description:
        "APC Easy UPS On-Line de 1kVA. Protección de doble conversión para entornos con energía inestable.",
      price: 339.0,
    },
    {
      model: "SRV1KRI",
      description:
        "APC Easy UPS On-Line de 1kVA para rack. Diseño versátil para montaje en torre o rack.",
      price: 421.5,
    },
    {
      model: "FPD-3012M0US",
      description:
        "UPS On-Line de 3000VA/2700W con tarjeta SNMP para gestión remota de la red. Control total.",
      price: 479.0,
    },
    {
      model: "SURT1000XLI",
      description:
        "APC Smart-UPS RT On-Line de 1kVA. Alto rendimiento y autonomía escalable para equipos críticos.",
      price: 681.5,
    },
    {
      model: "SRV2KI",
      description:
        "APC Easy UPS On-Line de 2kVA. Mayor capacidad para proteger múltiples servidores y equipos de red.",
      price: 756.9,
    },
    {
      model: "SRV3KI",
      description:
        "APC Easy UPS On-Line de 3kVA. Potencia y fiabilidad para cargas de trabajo más pesadas.",
      price: 768.0,
    },
    {
      model: "SRV2KRI",
      description:
        "APC Easy UPS On-Line de 2kVA para rack. Protección de doble conversión en un formato compacto para rack.",
      price: 783.9,
    },
    {
      model: "SRV3KRI",
      description:
        "APC Easy UPS On-Line de 3kVA para rack. Alta capacidad y flexibilidad de montaje para servidores.",
      price: 1031.0,
    },
    {
      model: "SRT1000XLI",
      description:
        "APC Smart-UPS On-Line de 1kVA. Protección de alta densidad con tiempo de transferencia cero.",
      price: 1069.0,
    },
    {
      model: "SRT2200XLI",
      description:
        "APC Smart-UPS On-Line de 2.2kVA. Potencia y protección de nivel superior para redes y servidores.",
      price: 1321.0,
    },
    {
      model: "SRT3000XLI",
      description:
        "APC Smart-UPS On-Line de 3kVA. Máxima protección y disponibilidad para aplicaciones críticas.",
      price: 1591.0,
    },
  ];

  // --- Lógica de Paginación ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  let currentPage = 1;
  const itemsPerPage = 6;

  // --- CORRECCIÓN: Esta línea es crucial para ordenar la lista combinada ---
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
  displayProducts(currentPage);
  setupPagination();
});
