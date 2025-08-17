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
    {
      model: "BV500I-MS",
      description:
        "APC Easy UPS de la serie BV. Protección de energía esencial para el hogar y la oficina pequeña.",
      price: 88.9,
    },
    {
      model: "BV650I-MS",
      description:
        "APC Easy UPS de la serie BV. Respaldo de batería confiable para equipos de bajo consumo.",
      price: 95.0,
    },
    {
      model: "BV800I-MS",
      description:
        "APC Easy UPS de la serie BV. Mayor capacidad para estaciones de trabajo y periféricos.",
      price: 103.0,
    },
    {
      model: "BV1000I-MS",
      description:
        "APC Easy UPS de la serie BV. Protección robusta con 1000VA de capacidad para múltiples dispositivos.",
      price: 132.0,
    },
    {
      model: "BX1200MI-MS",
      description:
        "APC Back-UPS de la serie BX. Respaldo y protección contra sobretensiones para computadoras y electrónica.",
      price: 159.0,
    },
    {
      model: "BR650MI",
      description:
        "APC Back-UPS Pro de la serie BR. UPS de alto rendimiento con regulación de voltaje (AVR) para gamers y profesionales.",
      price: 173.0,
    },
    {
      model: "BX1600MI-MS",
      description:
        "APC Back-UPS de la serie BX. Alta capacidad de 1600VA para sistemas más exigentes.",
      price: 181.0,
    },
    {
      model: "BR900MI",
      description:
        "APC Back-UPS Pro de la serie BR. Rendimiento premium y protección para equipos de alto valor.",
      price: 205.9,
    },
    {
      model: "BX2200MI-MS",
      description:
        "APC Back-UPS de la serie BX. Máxima capacidad de 2200VA para múltiples dispositivos críticos.",
      price: 221.9,
    },
    {
      model: "BR1300MI",
      description:
        "APC Back-UPS Pro de la serie BR. Energía confiable con AVR para mantener tus equipos seguros.",
      price: 256.0,
    },
    {
      model: "BR1600MI",
      description:
        "APC Back-UPS Pro de la serie BR. Potencia y características avanzadas para usuarios exigentes.",
      price: 307.9,
    },
    {
      model: "BR1500GI",
      description:
        "APC Back-UPS Pro de 1500VA. Eficiencia energética y protección superior para equipos de alto rendimiento.",
      price: 315.0,
    },
    {
      model: "SMV1500AI-MS",
      description:
        "APC Easy UPS Smart-UPS de la serie SMV. Protección de onda senoidal pura para servidores y equipos de red.",
      price: 490.0,
    },
    {
      model: "SMT1000IC",
      description:
        "APC Smart-UPS de la serie SMT con SmartConnect. UPS interactivo inteligente para servidores y redes.",
      price: 545.9,
    },
    {
      model: "SMT1500IC",
      description:
        "APC Smart-UPS de la serie SMT con SmartConnect. 1500VA de potencia inteligente y gestionable.",
      price: 602.0,
    },
    {
      model: "SMT1000RMI2UC",
      description:
        "APC Smart-UPS de la serie SMT para rack, con SmartConnect. Protección compacta para servidores.",
      price: 638.0,
    },
    {
      model: "SMV3000AI-MS",
      description:
        "APC Easy UPS Smart-UPS de la serie SMV. 3000VA de potencia de onda senoidal para cargas críticas.",
      price: 687.0,
    },
    {
      model: "SMT1500RMI2UC",
      description:
        "APC Smart-UPS de la serie SMT para rack, con SmartConnect. 1500VA de protección en formato 2U.",
      price: 746.9,
    },
    {
      model: "SMV2000AI-MS",
      description:
        "APC Easy UPS Smart-UPS de la serie SMV. Solución de 2000VA para proteger múltiples servidores y equipos de red.",
      price: 779.0,
    },
    {
      model: "SMT2200IC",
      description:
        "APC Smart-UPS de la serie SMT con SmartConnect. 2200VA de capacidad para entornos empresariales.",
      price: 1223.0,
    },
    {
      model: "SMT2200RMI2U",
      description:
        "APC Smart-UPS de la serie SMT para rack. 2200VA de potencia fiable en un diseño para montaje en rack.",
      price: 1238.0,
    },
    {
      model: "SMT3000IC",
      description:
        "APC Smart-UPS de la serie SMT con SmartConnect. Potencia de 3000VA para las aplicaciones más críticas.",
      price: 1279.0,
    },
    {
      model: "SMT2200RMI2UC",
      description:
        "APC Smart-UPS de la serie SMT para rack, con SmartConnect. 2200VA de potencia y gestión en la nube.",
      price: 1295.0,
    },
    {
      model: "SMT3000RMI2UC",
      description:
        "APC Smart-UPS de la serie SMT para rack, con SmartConnect. 3000VA de protección gestionable para rack.",
      price: 1314.0,
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
