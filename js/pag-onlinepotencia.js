document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      model: "FDC-RK1102U",
      description:
        "UPS On-Line 1kVA/1000W para rack. Protección de alta densidad para servidores y equipos de red.",
      price: 86.9,
    },
    {
      model: "FDC-RK0903U",
      description:
        "UPS On-Line 3kVA/2700W para rack. Fiabilidad y potencia para aplicaciones críticas en formato compacto.",
      price: 93.0,
    },
    {
      model: "FDC-CD610",
      description:
        "UPS On-Line de 6kVA/6000W. Solución robusta para proteger centros de datos pequeños y redes.",
      price: 153.0,
    },
    {
      model: "FDC-1502R",
      description:
        "UPS On-Line 1.5kVA/1350W para rack. Energía pura y continua para equipos de red sensibles.",
      price: 521.0,
    },
    {
      model: "FDC-2002T",
      description:
        "UPS On-Line 2kVA/1800W en formato torre. Máxima protección para servidores y sistemas de almacenamiento.",
      price: 559.0,
    },
    {
      model: "FDC-1002R-I",
      description:
        "UPS On-Line 1kVA/900W para rack. Ideal para servidores, almacenamiento y redes VoIP.",
      price: 583.0,
    },
    {
      model: "FDC-2012R-I",
      description:
        "UPS On-Line 2kVA/1800W para rack. Respaldo energético de alto rendimiento para equipos críticos.",
      price: 739.0,
    },
    {
      model: "FDC-203K-I",
      description:
        "UPS On-Line 3kVA/2700W. Potencia y fiabilidad para equipos médicos, de laboratorio y servidores.",
      price: 849.0,
    },
    {
      model: "FDC-3012R-I",
      description:
        "UPS On-Line 3kVA/2700W para rack, con factor de potencia de 0.9 para máxima eficiencia.",
      price: 1015.0,
    },
    {
      model: "SRV6KI",
      description:
        "APC Easy UPS On-Line de 6kVA. Potencia y protección de doble conversión para aplicaciones críticas.",
      price: 1899.0,
    },
    {
      model: "SRTG5KXLI",
      description:
        "APC Smart-UPS On-Line de 5kVA. Rendimiento y escalabilidad para redes y centros de datos pequeños.",
      price: 1989.0,
    },
    {
      model: "FDC-206K",
      description:
        "UPS On-Line de 6kVA/6kW. Solución de alta potencia para centros de datos y aplicaciones industriales.",
      price: 2047.0,
    },
    {
      model: "SRT5KXLI",
      description:
        "APC Smart-UPS On-Line de 5kVA. Protección de alta densidad con gestión de red inteligente.",
      price: 2453.0,
    },
    {
      model: "SRTG6KXLI",
      description:
        "APC Smart-UPS On-Line de 6kVA. Potencia escalable y gestión avanzada para entornos críticos.",
      price: 2463.0,
    },
    {
      model: "FDC-210K",
      description:
        "UPS On-Line de 10kVA/10kW. Máxima capacidad y protección para infraestructuras de TI críticas.",
      price: 2533.0,
    },
    {
      model: "SRT6KXLI",
      description:
        "APC Smart-UPS On-Line de 6kVA. Fiabilidad y rendimiento excepcionales para servidores y almacenamiento.",
      price: 3019.0,
    },
    {
      model: "SRV10KI",
      description:
        "APC Easy UPS On-Line de 10kVA. Alta capacidad para proteger cargas de trabajo pesadas y múltiples dispositivos.",
      price: 3373.0,
    },
    {
      model: "SRTG10KXLI",
      description:
        "APC Smart-UPS On-Line de 10kVA. Solución robusta y escalable para las necesidades de TI más exigentes.",
      price: 3693.0,
    },
    {
      model: "SRT10KXLI",
      description:
        "APC Smart-UPS On-Line de 10kVA. Máxima protección y disponibilidad con gestión inteligente de baterías.",
      price: 4490.0,
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
