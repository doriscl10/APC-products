document.addEventListener("DOMContentLoaded", function () {
              // --- 1. DATOS DE LOS PRODUCTOS TAPO ---
              const allProducts = [
                // Iluminación Inteligente
                {
                  name: "Tapo L610",
                  description:
                    "Bombilla inteligente GU10 con luz regulable. Crea el ambiente perfecto para cada momento desde tu móvil.",
                  imageUrl:
                    "images/tapo-l610_front.jpg",
                  productUrl: "Tapo-L610.html",
                },
                {
                  name: "Tapo L630",
                  description:
                    "Bombilla inteligente GU10 multicolor. Transforma cualquier habitación con millones de colores y escenas dinámicas.",
                  imageUrl:
                    "images/tapo-l630_front.jpg",
                  productUrl: "Tapo-L630.html",
                },
                {
                  name: "Tapo L510E (2-pack)",
                  description:
                    "Pack de dos bombillas LED E27. Iluminación inteligente, eficiente y regulable para tu hogar.",
                  imageUrl:
                    "images/tapo-l510e2-pack_front.jpg",
                  productUrl: "Tapo-L510E2-pack.html",
                },
                {
                  name: "Tapo L930-5",
                  description:
                    "Tira LED de 5m con sincronización de color avanzada. Iluminación vibrante y personalizada para cualquier espacio.",
                  imageUrl:
                    "images/tapo-l930-5_front.jpg",
                  productUrl: "Tapo-L930-5.html",
                },
                {
                  name: "Tapo L920-10",
                  description:
                    "10 metros de tira LED multicolor. Ideal para grandes espacios y proyectos de decoración luminosa espectaculares.",
                  imageUrl:
                    "images/tapo-l920-10_front.jpg",
                  productUrl: "Tapo-L920-10.html",
                },

                // Enchufes y Sensores
                {
                  name: "Tapo P105",
                  description:
                    "Enchufe inteligente de diseño mini. Controla cualquier dispositivo desde tu móvil sin bloquear otros enchufes.",
                  imageUrl:
                    "images/tapop1051-pack_front.png",
                  productUrl: "TapoP1051-pack.html",
                },
                {
                  name: "Tapo T110",
                  description:
                    "Sensor inteligente de contacto para puertas y ventanas. Recibe alertas instantáneas y automatiza acciones.",
                  imageUrl:
                    "images/tapo-t110_front.png",
                  productUrl: "Tapo-T110.html",
                },
                {
                  name: "Tapo T100",
                  description:
                    "Sensor de movimiento inteligente. Activa luces o cámaras automáticamente y recibe notificaciones de actividad.",
                  imageUrl:
                    "images/tapo-t100_front.png",
                  productUrl: "Tapo-T100.html",
                },
                {
                  name: "Tapo T310",
                  description:
                    "Sensor de temperatura y humedad de alta precisión. Monitoriza el confort de tu hogar en tiempo real.",
                  imageUrl:
                    "images/tapo-t310_front.png",
                  productUrl: "Tapo-T310.html",
                },
                {
                  name: "Tapo T300",
                  description:
                    "Sensor inteligente de fugas de agua. Protégete de inundaciones con alertas inmediatas en tu teléfono.",
                  imageUrl:
                    "images/tapo-t300_front.png",
                  productUrl: "Tapo-T300.html",
                },

                // Cámaras de Interior
                {
                  name: "Tapo C200",
                  description:
                    "Cámara de vigilancia Wi-Fi con visión 360° (Pan/Tilt). Vigila cualquier rincón de una habitación con calidad Full HD.",
                  imageUrl:
                    "images/tapo-c200c_front.jpg",
                  productUrl: "Tapo-C200C.html",
                },
                {
                  name: "Tapo C212",
                  description:
                    "Cámara de seguridad Wi-Fi Pan/Tilt con resolución 2K. Detalles nítidos para una vigilancia superior.",
                  imageUrl:
                    "images/tapo-c212_front.jpg",
                  productUrl: "Tapo-C212.html",
                },
                {
                  name: "Tapo C222",
                  description:
                    "Cámara Wi-Fi Pan/Tilt con obturador de privacidad físico y resolución 2K+ para una seguridad total.",
                  imageUrl:
                    "images/tapo-c222_front.png",
                  productUrl: "Tapo-C222.html",
                },
                {
                  name: "Tapo C120",
                  description:
                    "Cámara de seguridad para interiores/exteriores con base magnética y visión nocturna a color.",
                  imageUrl:
                    "images/tapo-c120_front.jpg",
                  productUrl: "Tapo-C120.html",
                },

                // Cámaras de Exterior
                {
                  name: "Tapo C510W",
                  description:
                    "Cámara Wi-Fi de exterior Pan/Tilt 2K. Cobertura completa de tus zonas exteriores con seguimiento de movimiento.",
                  imageUrl:
                    "images/tapo-c510w_front.webp",
                  productUrl: "Tapo-C510W.html",
                },
                {
                  name: "Tapo C320WS",
                  description:
                    "Cámara de seguridad Wi-Fi para exterior con resolución 4MP y visión nocturna a todo color.",
                  imageUrl:
                    "images/tapo-c320ws_front.webp",
                  productUrl: "TAPO-C320WS.html",
                },
                {
                  name: "Tapo C520WS",
                  description:
                    "Cámara de exterior Pan/Tilt 2K+ con visión nocturna a color Starlight para imágenes increíblemente claras.",
                  imageUrl:
                    "images/tapo-c520ws_front.jpg",
                  productUrl: "Tapo-C520WS.html",
                },
                {
                  name: "Tapo C500",
                  description:
                    "Cámara Wi-Fi de exterior Pan/Tilt Full HD. Vigilancia completa y asequible para los alrededores de tu hogar.",
                  imageUrl:
                    "images/tapo-c500_front.jpg",
                  productUrl: "TAPO-C500.html",
                },
                {
                  name: "Tapo C325WB",
                  description:
                    "Cámara de seguridad tipo bala con tecnología ColorPro para una visión nocturna a color sin igual, incluso en oscuridad total.",
                  imageUrl:
                    "images/tapo-c325wb_front.jpg",
                  productUrl: "Tapo-C325WB.html",
                },

                // Cámaras a Batería y Accesorios
                {
                  name: "Tapo C425 KIT",
                  description:
                    "Kit de cámara de seguridad 2K sin cables con batería de larga duración. Vigilancia flexible y fácil de instalar.",
                  imageUrl:
                    "images/tapo-c425-kit_front.jpg",
                  productUrl: "Tapo-C425-KIT.html",
                },
                {
                  name: "Tapo C420S1",
                  description:
                    "Sistema de seguridad con una cámara inteligente a batería 2K. Instálala en cualquier lugar sin necesidad de cables.",
                  imageUrl:
                    "images/tapo-c420s1_front.jpg",
                  productUrl: "Tapo-C420S1.html",
                },
                {
                  name: "Tapo C720",
                  description:
                    "Proyector con cámara de seguridad 2K. Ilumina y vigila tus espacios exteriores con un solo dispositivo inteligente.",
                  imageUrl:
                    "images/tapo-c720_front.jpg",
                  productUrl: "Tapo-C720.html",
                },
                {
                  name: "Tapo A200",
                  description:
                    "Panel solar para cámaras Tapo a batería. Energía continua y ecológica para una seguridad sin interrupciones.",
                  imageUrl:
                    "images/tapo-a200_front.jpg",
                  productUrl: "Tapo-A200.html",
                },

                // Productos duplicados o con información similar
                {
                  name: "Tapo C202",
                  description:
                    "Cámara de vigilancia Wi-Fi Pan/Tilt. Mantén tu hogar vigilado con calidad Full HD y detección de movimiento.",
                  imageUrl:
                    "images/tapo-c202_front.jpg",
                  productUrl: "Tapo-C202.html",
                },
              ];

              // --- 2. CONFIGURACIÓN DE LA PAGINACIÓN ---
              const productsPerPage = 13; // Configurado para 2 páginas (13 en la primera, 12 en la segunda)
              let currentPage = 1;

              const productGrid = document.getElementById("product-grid");
              const paginationControls = document.getElementById(
                "pagination-controls"
              );

              function displayProducts() {
                productGrid.innerHTML = "";
                const startIndex = (currentPage - 1) * productsPerPage;
                const endIndex = startIndex + productsPerPage;
                const paginatedProducts = allProducts.slice(
                  startIndex,
                  endIndex
                );

                paginatedProducts.forEach((product) => {
                  const productCard = `
                    <div class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div class="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img src="${product.imageUrl}" alt="${product.name}" class="max-h-full max-w-full object-contain">
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <h3 class="text-lg font-bold text-gray-800 mb-2">${product.name}</h3>
                            <p class="text-sm text-gray-600 mb-4 flex-grow">${product.description}</p>
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
                paginationControls.innerHTML = "";
                const pageCount = Math.ceil(
                  allProducts.length / productsPerPage
                );

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
                    button.classList.add(
                      "bg-blue-600",
                      "text-white",
                      "cursor-default"
                    );
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

              // --- 3. INICIALIZACIÓN ---
              displayProducts();
              setupPagination();
            });