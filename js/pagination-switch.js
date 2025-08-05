document.addEventListener("DOMContentLoaded", function () {
  const products = [
    // --- Lista de productos SIN precio ---
    {
      model: "TP-Link TL-SF1008D",
      description:
        "Switch de escritorio con 8 puertos 10/100Mbps. Ideal para expandir redes cableadas en hogares u oficinas pequeñas.",
      imageUrl: "images/tl-sf1008d_front.jpg",
      pageUrl: "TL-SF1008D.html",
      price: 13.0,
    },
    {
      model: "TP-Link LiteWave LS1005G",
      description:
        "Conmutador no gestionable de 5 puertos Gigabit. Aumenta la velocidad de tu red con tecnología Plug and Play.",
      imageUrl: "images/ls1005g_front.jpg",
      pageUrl: "LS1005G.html",
      price: 15.5,
    },
    {
      model: "TP-Link TL-SG1008D",
      description:
        "Switch de escritorio de 8 puertos Gigabit que ofrece un alto rendimiento y eficiencia energética.",
      imageUrl: "images/tl-sg1008d_front.jpg",
      pageUrl: "TL-SG1008D.html",
      price: null,
    },
    {
      model: "TP-Link TL-SF1016D",
      description:
        "Amplía tu red con este switch de 16 puertos 10/100Mbps. Una solución económica para grupos de trabajo.",
      imageUrl: "images/tl-sf1016d_front.jpg",
      pageUrl: "TL-SF1016D.html",
      price: null,
    },
    {
      model: "TP-Link TL-SF1009P",
      description:
        "Switch no gestionable de 9 puertos con 8 puertos PoE+ para alimentar cámaras IP, teléfonos VoIP y puntos de acceso.",
      imageUrl: "images/tl-sf1009p_front.jpg",
      pageUrl: "TL-SF1009P.html",
      price: null,
    },
    {
      model: "TP-Link LiteWave LS105G",
      description:
        "Switch no gestionable de 5 puertos Gigabit con carcasa de acero y diseño Plug and Play.",
      imageUrl: "images/ls105g_front.jpg",
      pageUrl: "LS105G.html",
      price: 17.9,
    },
    {
      model: "TP-Link TL-SG1005D",
      description:
        "Switch de escritorio con 5 puertos Gigabit. Una forma sencilla y económica de acelerar tu red doméstica.",
      imageUrl: "images/tl-sg1005d_front.jpg",
      pageUrl: "TL-SG1005D.html",
      price: 18.5,
    },
    {
      model: "TP-Link LiteWave LS1008G",
      description:
        "Conmutador de 8 puertos Gigabit no gestionable. Aumenta la capacidad de tu red con la serie LiteWave.",
      imageUrl: "images/ls1008g_front.jpg",
      pageUrl: "LS1008G.html",
      price: 24.9,
    },
    {
      model: "TP-Link LiteWave LS108G",
      description:
        "Switch de 8 puertos Gigabit con un diseño compacto y sin ventilador, garantizando un funcionamiento silencioso.",
      imageUrl: "images/ls108g_front.jpg",
      pageUrl: "LS108G.html",
      price: null,
    },
    {
      model: "TP-Link TL-SF1008P",
      description:
        "Switch de 8 puertos 10/100 con 4 puertos PoE. Alimenta dispositivos directamente por el cable de red.",
      imageUrl: "images/tl-sf1008p_front.jpg",
      pageUrl: "TL-SF1008P.html",
      price: null,
    },
    {
      model: "TP-Link TL-SF1024",
      description:
        "Switch de 24 puertos 10/100 Mbps para montaje en rack. Solución de alta capacidad y bajo costo.",
      imageUrl: "images/tl-sf1024_front.jpg",
      pageUrl: "TL-SF1024.html",
      price: null,
    },
    {
      model: "TP-Link TL-SG1210MP",
      description:
        "Switch de 10 puertos Gigabit con 8 puertos PoE+. Ofrece un gran presupuesto de energía de 123W.",
      imageUrl: "images/tl-sg1210mp_front.jpg",
      pageUrl: "TL-SG1210MP.html",
      price: null,
    },
    // --- Lista de productos NUEVOS CON precio ---
    {
      model: "TP-Link JetStream SG2008P",
      description:
        "Switch Smart de 8 Puertos Gigabit, 4 de ellos PoE+ (62 W), gestionado a través de Omada SDN.",
      imageUrl: "images/SG2008P_front.jpg",
      pageUrl: "SG2008P.html",
      price: 119,
    },
    {
      model: "TP-Link JetStream TL-SG2218",
      description:
        "Switch Smart de 16 Puertos Gigabit y 2 Ranuras SFP, integrado en la plataforma Omada SDN.",
      imageUrl: "images/TL-SG2218_front.jpg",
      pageUrl: "TL-SG2218.html",
      price: 155,
    },
    {
      model: "TP-Link JetStream TL-SG2210MP",
      description:
        "Switch Smart de 10 Puertos Gigabit, 8 de ellos PoE+ (150 W) y 2 ranuras SFP. Ideal para Omada.",
      imageUrl: "images/TL-SG2210MP_front.jpg",
      pageUrl: "TL-SG2210MP.html",
      price: 170,
    },
    {
      model: "TP-Link JetStream TL-SG2016P",
      description:
        "Switch Smart de 16 puertos Gigabit, 8 de ellos PoE+ (120 W). Integrado en la plataforma Omada SDN.",
      imageUrl: "images/TL-SG2016P_front.webp",
      pageUrl: "TL-SG2016P.html",
      price: 189,
    },
    {
      model: "TP-Link JetStream TL-SG3428",
      description:
        "Switch Gestionado L2+ de 24 puertos Gigabit y 4 ranuras SFP. Robusto y con funciones avanzadas.",
      imageUrl: "images/TL-SG3428_front.jpg",
      pageUrl: "TL-SG3428.html",
      price: 225,
    },
    {
      model: "TP-Link JetStream SG2218P",
      description:
        "Switch Smart de 18 puertos (16 Gig PoE+ y 2 SFP) con presupuesto de 150 W. Parte del ecosistema Omada.",
      imageUrl: "images/sg2218p_front.jpg",
      pageUrl: "SG2218P.html",
      price: 237,
    },
    {
      model: "TP-Link JetStream TL-SG3210XHP-M2",
      description:
        "Switch L2+ de 10 Puertos, 8 de ellos 2.5G PoE+ (240W) y 2 SFP+ 10G. Potencia Multi-Gigabit.",
      imageUrl: "images/TL-SG3210XHP-M2_front.jpg",
      pageUrl: "TL-SG3210XHP-M2.html",
      price: 357,
    },
    {
      model: "TP-Link JetStream SG3452",
      description:
        "Switch Gestionado L2+ de 48 puertos Gigabit y 4 ranuras SFP. Ideal para redes empresariales de alta densidad.",
      imageUrl: "images/tl-sg3452_front.jpg",
      pageUrl: "SG3452.html",
      price: 401,
    },
    {
      model: "TP-Link JetStream SG3428MP",
      description:
        "Switch L2+ de 28 puertos Gigabit PoE+ (384 W) y 4 SFP. Gestión profesional Omada SDN.",
      imageUrl: "images/tl-sg3452_front.jpg",
      pageUrl: "SG3428MP.html",
      price: 429,
    },
    {
      model: "TP-Link JetStream SG3218XP-M2",
      description:
        "Switch Gestionado L2+ Multi-Gigabit con 8 puertos PoE++ 2.5G y 2 ranuras SFP+ 10G.",
      imageUrl: "images/SG3218XP-M2_front.jpg",
      pageUrl: "SG3218XP-M2.html",
      price: 447,
    },
    {
      model: "TP-Link JetStream TL-SG3428XMP",
      description:
        "Switch L2+ de 24 puertos PoE+ (384W) y 4 ranuras SFP+ 10G. Enlaces ascendentes ultrarrápidos.",
      imageUrl: "images/TL-SG3428XMP_front.jpg",
      pageUrl: "TL-SG3428XMP.html",
      price: 483,
    },
    {
      model: "TP-Link JetStream TL-SG3428X-M2",
      description:
        "Switch L2+ con 24 puertos 2.5G y 4 ranuras SFP+ 10G. Conexión Multi-Gigabit para toda la red.",
      imageUrl: "images/TL-SG3428X-M2_front.jpg",
      pageUrl: "TL-SG3428X-M2.html",
      price: 517,
    },
    {
      model: "TP-Link JetStream TL-SG3452P",
      description:
        "Switch L2+ de 48 Puertos PoE+ (384 W) y 4 ranuras SFP+. Solución PoE de alta densidad.",
      imageUrl: "images/TL-SG3452P_front.jpg",
      pageUrl: "TL-SG3452P.html",
      price: 719,
    },
    {
      model: "TP-Link JetStream TL-SG3452XP",
      description:
        "Switch L2+ de 48 Puertos PoE+ (500 W), 4 ranuras SFP+ 10G y apilamiento físico.",
      imageUrl: "images/TL-SG3452XP_front.jpg",
      pageUrl: "TL-SG3452XP.html",
      price: 820,
    },
    {
      model: "TP-Link JetStream SG6428X",
      description:
        "Switch de Agregación L3 con 24 ranuras SFP+ 10G y 4 ranuras SFP28 25G. Para el núcleo de la red.",
      imageUrl: "images/SG6428X_front.jpg",
      pageUrl: "SG6428X.html",
      price: 980,
    },
    {
      model: "TP-Link JetStream SG6654X",
      description:
        "Switch de Agregación L3 con 48 ranuras SFP+ 10G y 6 ranuras SFP28 25G. Máximo rendimiento.",
      imageUrl: "images/SG6654X_front.jpg",
      pageUrl: "SG6654X.html",
      price: 1247,
    },
    {
      model: "TP-Link JetStream SG6428XHP",
      description:
        "Switch L3 Multi-Gigabit PoE++ con 24 puertos 2.5G y 4 ranuras SFP+ 10G. Potencia y velocidad.",
      imageUrl: "images/SG6428XHP_front.jpg",
      pageUrl: "SG6428XHP.html",
      price: 1325,
    },
    {
      model: "TP-Link JetStream SG6654XHP",
      description:
        "Switch L3 Multi-Gigabit PoE++ de 48 puertos 2.5G, 6 ranuras SFP28 25G. Solución definitiva.",
      imageUrl: "images/SG6654XHP_front.jpg",
      pageUrl: "SG6654XHP.html",
      price: 1820,
    },
    {
      model: "TP-Link JetStream SX6632YF",
      description:
        "Switch de Agregación L3 de 32 Puertos 25G SFP28. Rendimiento extremo para centros de datos.",
      imageUrl: "images/SX6632YF_front.jpg",
      pageUrl: "SX6632YF.html",
      price: 2979,
    },
    // Agrega más productos aquí si es necesario
  ];

  // --- Lógica de Paginación ---
  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");
  let currentPage = 1;
  const itemsPerPage = 11; // 33 productos / 3 páginas = 11 por página

  // 1. Ordenar los productos por precio de manera ascendente
  products.sort((a, b) => {
    const priceA = a.price === null ? -1 : a.price; // Tratar null como el más bajo
    const priceB = b.price === null ? -1 : b.price;
    return priceA - priceB;
  });

  function displayProducts(page) {
    productGrid.innerHTML = "";
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = products.slice(startIndex, endIndex);

    paginatedItems.forEach((product) => {
      const priceHTML = product.price
        ? `
            <div class="mt-4 text-center">
              <span class="text-2xl font-bold text-gray-900">${product.price.toLocaleString(
                "en-US",
                { style: "currency", currency: "USD" }
              )}</span>
            </div>
            `
        : "";

      const productCard = `
          <div class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
              <img src="${product.imageUrl}" alt="${product.model}" class="max-h-full max-w-full object-contain" />
            </div>
            <div class="p-5 flex flex-col flex-grow">
              <h3 class="text-lg font-bold text-gray-800 mb-2">${product.model}</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">${product.description}</p>
              <span class="pb-1">${priceHTML}</span>
              <a href="${product.pageUrl}" class="mt-auto w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300">
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
