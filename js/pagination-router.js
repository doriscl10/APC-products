document.addEventListener("DOMContentLoaded", function () {
  // --- 1. DATOS DE LOS PRODUCTOS ---
  // Lista completa de productos, incluyendo la nueva familia Deco.
  const allProducts = [
    // Adaptadores Wi-Fi
    {
      name: "Archer TX1U Nano",
      description:
        "Adaptador Wi-Fi 6 AX300 de tamaño nano. La forma más pequeña de obtener velocidades de última generación.",
      imageUrl: "images/archer-tx-1u-nano_front.jpg",
      productUrl: "Archer-TX1U-Nano.html",
      price: 11.9,
    },
    {
      name: "Archer T2U Nano",
      description:
        "Adaptador Wi-Fi AC600 de doble banda. Conectividad compacta y conveniente para tu portátil o PC.",
      imageUrl: "images/archer-t2-unano_front.jpg",
      productUrl: "ArcherT2UNano.html",
      price: 14.0,
    },
    {
      name: "Archer T2UB Nano",
      description:
        "Wi-Fi 5 y Bluetooth 4.2 en un solo adaptador nano. Conectividad dual para máxima versatilidad.",
      imageUrl: "images/archer-t2ub-nano_front.png",
      productUrl: "Archer-T2UB-Nano.html",
      price: 15.2,
    },
    {
      name: "Archer T2U",
      description:
        "Adaptador USB Wi-Fi AC600 de doble banda. Disfruta de streaming HD y juegos en línea sin lag.",
      imageUrl: "images/archer-t2u_front.jpg",
      productUrl: "ARCHER-T2U.html",
      price: 16.0,
    },
    {
      name: "Archer T2U Plus",
      description:
        "Adaptador Wi-Fi de alta ganancia. Su antena potente mejora la recepción para una señal más estable.",
      imageUrl: "images/archer-t2u-plus_front.jpg",
      productUrl: "ArcherT2UPlus.html",
      price: 19.5,
    },
    {
      name: "Archer T3U Nano",
      description:
        "Adaptador Wi-Fi AC1300 de tamaño nano. Velocidad y rendimiento superior en un diseño ultra compacto.",
      imageUrl: "images/archer-t3u-nano_front.jpg",
      productUrl: "Archer-T3U-Nano.html",
      price: 21.9,
    },
    {
      name: "Archer T4U",
      description:
        "Adaptador USB 3.0 Wi-Fi AC1300. Transfiere datos a velocidades ultra rápidas para un rendimiento máximo.",
      imageUrl: "images/archer-t4u_front.jpg",
      productUrl: "Archer-T4U.html",
      price: null,
    },
    {
      name: "Archer T4U Plus",
      description:
        "Adaptador Wi-Fi de alta ganancia con dos antenas. Cobertura flexible y ampliada para tu escritorio.",
      imageUrl: "images/archer-t4u-plus_front.jpg",
      productUrl: "Archer-T4U-Plus.html",
      price: null,
    },
    {
      name: "Archer T4E",
      description:
        "Adaptador PCIe Wi-Fi AC1200. Instálalo en tu PC de escritorio para una conexión inalámbrica de alta velocidad.",
      imageUrl: "images/archert4e_front.webp",
      productUrl: "ArcherT4E.html",
      price: null,
    },
    {
      name: "Archer TX20UH",
      description:
        "Adaptador USB Wi-Fi 6 AX1800 de alta ganancia. Potencia tu conexión con la última tecnología Wi-Fi.",
      imageUrl: "images/archer-tx20uh_front.jpg",
      productUrl: "Archer-TX20UH.html",
      price: null,
    },
    {
      name: "Archer TX55E",
      description:
        "Adaptador PCIe con Wi-Fi 6 y Bluetooth 5.2. La actualización definitiva para juegos y streaming.",
      imageUrl: "images/archer-tx55e_front.jpg",
      productUrl: "Archer-TX55E.html",
      price: null,
    },

    // Routers
    {
      name: "Archer C24",
      description:
        "Router Wi-Fi AC750 de doble banda. Compacto, fiable y perfecto para el streaming y la navegación diaria.",
      imageUrl: "images/archerc24_front.jpg",
      productUrl: "ArcherC24.html",
      price: null,
    },
    {
      name: "Archer C50",
      description:
        "Router inalámbrico Wi-Fi AC1200. Una solución robusta para hogares con múltiples dispositivos conectados.",
      imageUrl: "images/archer-c50_front.jpg",
      productUrl: "ARCHER-C50.html",
      price: null,
    },
    {
      name: "Archer C6",
      description:
        "Router Gigabit Wi-Fi AC1200 MU-MIMO. Optimizado para un rendimiento superior y cobertura completa.",
      imageUrl: "images/archerc6_front.jpg",
      productUrl: "ArcherC6.html",
      price: null,
    },
    {
      name: "Archer C80",
      description:
        "Router Wi-Fi AC1900 MU-MIMO. Alto rendimiento para juegos, streaming 4K y conexiones exigentes.",
      imageUrl: "images/archerc80_front.jpg",
      productUrl: "ArcherC80.html",
      price: null,
    },
    {
      name: "Archer AX10",
      description:
        "Router Wi-Fi 6 AX1500. Entra al mundo del Wi-Fi 6 con velocidades más rápidas y mayor capacidad.",
      imageUrl: "images/archerax10_front.jpg",
      productUrl: "ArcherAX10.html",
      price: null,
    },
    {
      name: "Archer MR400",
      description:
        "Router 4G+ Cat6 Wi-Fi AC1200. Comparte tu red 4G LTE en cualquier lugar con una simple tarjeta SIM.",
      imageUrl: "images/archermr400apac_front.jpg",
      productUrl: "Archer-MR400-V4.30.html",
      price: null,
    },
    {
      name: "Archer AXE75",
      description:
        "Router Wi-Fi 6E AXE5400. Explora la nueva banda de 6 GHz para un streaming sin congestión.",
      imageUrl: "images/archer-axe75_front.jpg",
      productUrl: "Archer-AXE75.html",
      price: null,
    },

    // Switches y Extensores Mercusys
    {
      name: "Mercusys MS105G",
      description:
        "Switch de escritorio con 5 puertos Gigabit. Expande tu red cableada con velocidad y simplicidad.",
      imageUrl: "images/ms105g_front.jpg",
      productUrl: "MS105G.html",
      price: 9.9,
    },
    {
      name: "Mercusys MS105GS",
      description:
        "5 puertos RJ45 de 10/100/1000 Mbps con Auto-Negociación que admiten Auto-MDI/MDIX",
      imageUrl: "images/ms105gs_front.jpg",
      productUrl: "MS105GS.html",
      price: 9.9,
    },
    {
      name: "Mercusys MS108GS",
      description:
        "Switch de escritorio con 8 puertos Gigabit. Expande tu red cableada con velocidad y simplicidad.",
      imageUrl: "images/ms108gs_front.jpg",
      productUrl: "MS108GS.html",
      price: 18.9,
    },
    {
      name: "Mercusys MW302R",
      description:
        "Router inalámbrico N300 Multi-Modo. Un dispositivo versátil para todas tus necesidades de red básicas.",
      imageUrl: "images/mw302r_front.jpg",
      productUrl: "MW302R.html",
      price: 12.69,
    },
    {
      name: "Mercusys MW300RE",
      description:
        "Extensor de rango Wi-Fi N300. Elimina las zonas muertas y lleva la señal a cada rincón de tu hogar.",
      imageUrl: "images/mw300re_front.jpg",
      productUrl: "MW300RE.html",
      price: 13.5,
    },
    {
      name: "Mercusys MS108G",
      description:
        "Switch de escritorio con 8 puertos Gigabit. Ideal para transferencias de archivos rápidas en casa o la oficina.",
      imageUrl: "images/ms108g_front.webp",
      productUrl: "MS108G.html",
      price: 14.9,
    },
    {
      name: "Mercusys MW306R",
      description:
        "Router inalámbrico N300 con antenas de alta ganancia para una cobertura Wi-Fi mejorada.",
      imageUrl: "images/mw306r_front.jpg",
      productUrl: "MW306R.html",
      price: 14.9,
    },
    {
      name: "Mercusys ME30",
      description:
        "Extensor de rango Wi-Fi AC1200. Expande tu red de doble banda para un streaming y juegos fluidos.",
      imageUrl: "images/me30_front.jpg",
      productUrl: "ME30.html",
      price: 19.9,
    },

    // Routers Mercusys
    {
      name: "Mercusys MR30G",
      description:
        "Router Gigabit Wi-Fi AC1200. Velocidades de doble banda para un entretenimiento en línea sin interrupciones.",
      imageUrl: "images/mr30g_front.jpg",
      productUrl: "MR30G.html",
      price: null,
    },
    {
      name: "Mercusys MR50G",
      description:
        "Router Gigabit Wi-Fi AC1900. Potencia y velocidad para hogares con alta demanda de conexión.",
      imageUrl: "images/mr50g_front.jpg",
      productUrl: "MR50G.html",
      price: null,
    },
    {
      name: "Mercusys AC12G",
      description:
        "Router Gigabit Wi-Fi AC1200 de doble banda. Conexión estable y rápida para todos tus dispositivos.",
      imageUrl: "images/ac12g_front.jpg",
      productUrl: "AC12G.html",
      price: null,
    },
    {
      name: "Mercusys MR60X",
      description:
        "Router Wi-Fi 6 AX1500. Actualiza tu hogar a la nueva generación de Wi-Fi con más velocidad y capacidad.",
      imageUrl: "images/mr60x_front.jpg",
      productUrl: "MR60X.html",
      price: null,
    },
    {
      name: "Mercusys MR80X",
      description:
        "Router Wi-Fi 6 AX3000 de doble banda. Rendimiento excepcional para juegos, streaming y el hogar inteligente.",
      imageUrl: "images/mr80x_front.jpg",
      productUrl: "MR80X.html",
      price: null,
    },
    {
      name: "Mercusys MW330HP",
      description: "Enrutador inalámbrico N de alta potencia de 300Mbps",
      imageUrl: "images/mw330hp_front.jpg",
      productUrl: "MW330HP.html",
      price: 19.9,
    },

    // Sistemas Mesh Halo
    {
      name: "Halo H30G (3-pack)",
      description:
        "Sistema Wi-Fi Mesh AC1300 para todo el hogar. Cobertura unificada y sin interrupciones en cada rincón.",
      imageUrl: "images/halo-h30g(3-pack)_front.jpg",
      productUrl: "Halo-H30G(3-pack).html",
      price: null,
    },
    {
      name: "Halo H50G (3-pack)",
      description:
        "Sistema Wi-Fi Mesh AC1900 de alta velocidad. Cubre hasta 550 m² con una red Wi-Fi potente y estable.",
      imageUrl: "images/haloh50g3-pack_front.jpg",
      productUrl: "HaloH50G3-pack.html",
      price: null,
    },

    // --- NUEVOS PRODUCTOS DECO ---
    // Sistemas Mesh Deco
    {
      name: "Deco E4 (2-pack)",
      description:
        "Sistema Wi-Fi Mesh AC1200. La forma más sencilla de garantizar una señal Wi-Fi potente en cada rincón de tu hogar.",
      imageUrl: "images/decoe42-pack_front.jpg",
      productUrl: "DecoE42-pack.html",
      price: null,
    },
    {
      name: "Deco E4 (3-pack)",
      description:
        "Pack de 3 unidades Mesh Wi-Fi AC1200. Elimina las zonas sin cobertura en casas grandes con una red única y estable.",
      imageUrl: "images/decoe43-pack_front.jpg",
      productUrl: "DecoE43-pack.html",
      price: null,
    },
    {
      name: "Deco S7 (2-pack)",
      description:
        "Sistema Wi-Fi Mesh AC1900 de alta velocidad. Conecta más de 100 dispositivos sin perder rendimiento.",
      imageUrl: "images/deco-s7(2-pack)_front.webp",
      productUrl: "DECO-S7(2-PACK).html",
      price: null,
    },
    {
      name: "Deco S7 (3-pack)",
      description:
        "Pack de 3 unidades Mesh Wi-Fi AC1900. Cobertura extensiva y velocidades rápidas para streaming 4K y juegos.",
      imageUrl: "images/deco-s7(3-pack)_front.jpg",
      productUrl: "DECO-S7(3- PACK).html",
      price: null,
    },
    {
      name: "Deco M4 (3-pack)",
      description:
        "Sistema Mesh Wi-Fi AC1200 con un diseño elegante. Proporciona conexiones rápidas y estables en áreas de hasta 510 m².",
      imageUrl: "images/deco-m4(3-pack)_front.jpg",
      productUrl: "Deco-M4(3-pack).html",
      price: null,
    },
    {
      name: "Deco M5 (2-pack)",
      description:
        "Sistema Wi-Fi Mesh con seguridad HomeCare integrada. Protege tu red y disfruta de una cobertura total.",
      imageUrl: "images/deco-m5(2-pack)_front.webp",
      productUrl: "DECO-M5(2-PACK).html",
      price: null,
    },
    {
      name: "Deco M5 (3-pack)",
      description:
        "Pack de 3 unidades Mesh AC1300 con antivirus y control parental. Cobertura segura para toda la familia.",
      imageUrl: "images/deco-m5(3-pack)_front.jpg",
      productUrl: "DECO-M5(3-PACK).html",
      price: null,
    },
    {
      name: "Deco X10 (3-pack)",
      description:
        "Sistema Mesh Wi-Fi 6 AX1500. Entra en la nueva era del Wi-Fi con más velocidad, capacidad y menos latencia.",
      imageUrl: "images/deco-x10(3-pack)_front.jpg",
      productUrl: "Deco-X10(3-pack).html",
      price: null,
    },
    {
      name: "Deco X55 (2-pack)",
      description:
        "Sistema Mesh Wi-Fi 6 AX3000 ultrarrápido. Ideal para streaming en 8K y juegos de realidad virtual sin interrupciones.",
      imageUrl: "images/deco-x55(2-pack)_front.jpg",
      productUrl: "Deco-X55(2-pack).html",
      price: null,
    },
    {
      name: "Deco X55 (3-pack)",
      description:
        "Pack de 3 unidades Mesh Wi-Fi 6 AX3000. Cobertura masiva con la última tecnología para hogares inteligentes y exigentes.",
      imageUrl: "images/deco-x55(3-pack)_front.png",
      productUrl: "Deco-X55(3-pack).html",
      price: null,
    },
    {
      name: "Deco X50 (3-pack)",
      description:
        "Sistema Mesh Wi-Fi 6 AX3000. Cobertura total y velocidades de gigabit para conectar todos tus dispositivos.",
      imageUrl: "images/deco-x50(3-pack)_front.jpg",
      productUrl: "Deco-X50(3-pack).html",
      price: null,
    },
    {
      name: "Deco X50-PoE (2-pack)",
      description:
        "Sistema Mesh Wi-Fi 6 AX3000 con alimentación PoE. Instalación flexible en techos o paredes sin necesidad de enchufe.",
      imageUrl: "images/deco-x50-poe(2-pack)_front.jpg",
      productUrl: "Deco-X50-PoE(2-pack).html",
      price: null,
    },
    {
      name: "Deco BE25 (2-pack)",
      description:
        "Sistema Mesh Wi-Fi 7 BE5000. La vanguardia de la conectividad, con velocidades y capacidad sin precedentes.",
      imageUrl: "images/deco-be25(2-pack)_front.webp",
      productUrl: "Deco-BE25(2-pack).html",
      price: null,
    },
    // Routers y extensores
    {
      name: "TP-Link RE200",
      description:
        "Extiende la cobertura de tu red con velocidad Wi-Fi 5. Ideal para eliminar zonas muertas en tu hogar u oficina.",
      imageUrl: "images/re200_front.jpg",
      productUrl: "RE200.html",
      price: null,
    },
    {
      name: "TP-Link RE205",
      description:
        "Mejora tu conexión inalámbrica con este extensor de rango Wi-Fi 5. Rápido, confiable y fácil de instalar.",
      imageUrl: "images/re205_front.jpg",
      productUrl: "RE205.html",
      price: null,
    },
    {
      name: "TP-Link TL-WR840N",
      description:
        "Enrutador inalámbrico de 2.4 GHz perfecto para tareas diarias como navegación, streaming y videollamadas.",
      imageUrl: "images/tl-wr840n_front.jpg",
      productUrl: "TL-WR840N.html",
      price: null,
    },
    {
      name: "TP-Link TL-MR6400 V3",
      description:
        "Conéctate donde sea con este enrutador inalámbrico 4G LTE. Solo inserta una SIM y disfruta de Internet sin cables.",
      imageUrl: "images/tl-mr6400apac_front.jpg",
      productUrl: "TL-MR6400APAC.html",
      price: null,
    },
  ];

  // --- 2. ORDENAR LOS PRODUCTOS ---
  // Los productos con precio se muestran primero, ordenados de menor a mayor.
  // Los productos sin precio (null) se muestran al final.
  allProducts.sort((a, b) => {
    if (a.price !== null && b.price !== null) {
      return a.price - b.price; // Ordenar por precio si ambos lo tienen
    }
    if (a.price !== null) {
      return -1; // 'a' tiene precio, 'b' no, entonces 'a' va primero
    }
    if (b.price !== null) {
      return 1; // 'b' tiene precio, 'a' no, entonces 'b' va primero
    }
    return 0; // Ambos son null, mantienen su orden relativo
  });

  // --- 3. CONFIGURACIÓN DE LA PAGINACIÓN ---
  const productsPerPage = 12;
  let currentPage = 1;

  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");

  function displayProducts() {
    productGrid.innerHTML = ""; // Limpiar la cuadrícula
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach((product) => {
      // Modificación: Mostrar precio solo si no es null
      const priceHTML = product.price
        ? `<div class="mt-4 text-center">
             <span class="text-2xl font-bold text-gray-900">${product.price.toLocaleString(
               "en-US",
               { style: "currency", currency: "USD" }
             )}</span>
           </div>`
        : "";

      const productCard = `
        <div class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
                <img src="${product.imageUrl}" alt="${product.name}" class="max-h-full max-w-full object-contain">
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-4 flex-grow">${product.description}</p>
                ${priceHTML}
                <a href="${product.productUrl}" class="mt-auto w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Ver Producto
                </a>
            </div>
        </div>
    `;
      productGrid.innerHTML += productCard;
    });
  }

  function setupPagination() {
    paginationControls.innerHTML = ""; // Limpiar controles
    const pageCount = Math.ceil(allProducts.length / productsPerPage);

    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.classList.add(
        "px-4",
        "py-2",
        "text-sm",
        "font-semibold",
        "rounded-md",
        "transition-colors",
        "duration-200"
      );

      if (i === currentPage) {
        button.classList.add("bg-blue-600", "text-white", "cursor-default");
      } else {
        button.classList.add(
          "bg-white",
          "text-blue-600",
          "border",
          "border-gray-300",
          "hover:bg-gray-100"
        );
        button.addEventListener("click", () => {
          currentPage = i;
          displayProducts();
          setupPagination();
          productGrid.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
      paginationControls.appendChild(button);
    }
  }

  // --- 4. INICIALIZACIÓN ---
  displayProducts();
  setupPagination();
});
