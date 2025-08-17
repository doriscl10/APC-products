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
    {
      model: "SRVRK1",
      description:
        "Kit de rieles para montaje en rack de UPS de la serie SRV. Instalación fácil y segura.",
      price: 23.0,
    },
    {
      model: "LSW500-IND",
      description:
        "Switch industrial de 5 puertos. Diseñado para operar en entornos industriales hostiles.",
      price: 27.0,
    },
    {
      model: "SURTRK",
      description:
        "Kit de rieles universal para UPS APC Smart-UPS RT. Compatible con varios modelos.",
      price: 109.89,
    },
    {
      model: "SRTRK4",
      description:
        "Kit de rieles para UPS APC Smart-UPS On-Line de la serie SRT. Montaje robusto.",
      price: 115.0,
    },
    {
      model: "SRTRK2",
      description:
        "Kit de rieles de 2U para UPS Smart-UPS On-Line SRT. Optimizado para racks estándar.",
      price: 119.59,
    },
    {
      model: "EPDU1016B",
      description:
        "PDU (Unidad de Distribución de Energía) Básica de 16A. Distribución fiable para racks.",
      price: 121.0,
    },
    {
      model: "SURTRK2",
      description:
        "Kit de rieles universal para UPS APC Smart-UPS RT de mayor tamaño. Soporte reforzado.",
      price: 139.0,
    },
    {
      model: "SRTGRK1",
      description:
        "Kit de rieles para UPS Smart-UPS On-Line de la serie SRTG. Ajuste perfecto y seguro.",
      price: 170.0,
    },
    {
      model: "SRTGRK2",
      description:
        "Kit de rieles universal para UPS APC Smart-UPS On-Line SRTG. Máxima compatibilidad.",
      price: 198.0,
    },
    {
      model: "AP9565",
      description:
        "PDU para rack 1U, 10A/230V, con 11 tomas C13. Distribución de energía básica.",
      price: 215.9,
    },
    {
      model: "EPDU1116B",
      description:
        "PDU conmutada de 16A. Permite el control remoto de la energía de cada toma.",
      price: 259.0,
    },
    {
      model: "AP7552",
      description:
        "PDU vertical Zero U de 16A, con 20 tomas C13 y 4 C19. Ahorra espacio valioso en el rack.",
      price: 299.9,
    },
    {
      model: "AP7553",
      description:
        "PDU vertical Zero U de 32A. Alta capacidad para entornos de alta densidad.",
      price: 392.0,
    },
    {
      model: "SBP3000RMI",
      description:
        "Bypass de servicio de 3kVA para rack. Mantenimiento de UPS sin interrumpir la carga.",
      price: 421.0,
    },
    {
      model: "EPDU1116M",
      description:
        "PDU medida de 16A. Monitorización remota del consumo de energía para optimización.",
      price: 677.0,
    },
    {
      model: "AR3003",
      description:
        "Armario NetShelter SX de 48U, 600mm de ancho. Solución de alta densidad para servidores.",
      price: 1012.0,
    },
    {
      model: "ER6212",
      description:
        "Rack de 2 postes, 45U. Solución económica para equipos de red y telecomunicaciones.",
      price: 1069.0,
    },
    {
      model: "AP4421A",
      description:
        "Switch de Transferencia Automática (ATS) para rack, 10A. Redundancia de energía para equipos con una sola fuente.",
      price: 1080.0,
    },
    {
      model: "AP4423A",
      description:
        "Switch de Transferencia Automática (ATS) para rack, 16A, con 2 entradas. Alta disponibilidad.",
      price: 1179.0,
    },
    {
      model: "ER8212",
      description:
        "Rack de 2 postes de alta resistencia, 45U. Soporte robusto para equipos pesados.",
      price: 1219.0,
    },
    {
      model: "AP5717",
      description:
        "Switch KVM analógico de 17 pulgadas para rack, con 8 puertos. Control centralizado.",
      price: 1350.0,
    },
    {
      model: "AR3100",
      description:
        "Armario NetShelter SX de 42U, 600mm de ancho. El estándar de la industria para racks de servidores.",
      price: 1735.0,
    },
    {
      model: "APTF10KW01",
      description:
        "Transformador de potencia para UPS trifásicos. Aislamiento y adaptación de voltaje.",
      price: 1878.0,
    },
    {
      model: "KVM1116R",
      description:
        "Switch KVM digital de 16 puertos con acceso IP. Gestión remota de servidores.",
      price: 1930.0,
    },
    {
      model: "AP5719",
      description:
        "Switch KVM analógico de 19 pulgadas para rack, con 16 puertos. Amplia capacidad de gestión.",
      price: 1933.0,
    },
    {
      model: "SBP10KRMI4U",
      description:
        "Bypass de servicio de 10kVA para rack. Mantenimiento seguro para UPS de alta potencia.",
      price: 1979.0,
    },
    {
      model: "AP5808",
      description:
        "Switch KVM LCD de 8 puertos con acceso IP. Consola integrada para una gestión eficiente.",
      price: 2912.0,
    },
    {
      model: "SBP5000RMI2U",
      description:
        "Bypass de servicio para UPS de 5kVA en rack. Mantenimiento sin tiempo de inactividad.",
      price: null,
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
