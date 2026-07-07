// REQUISITO 3.1: Arreglo de Objetos (Estructura de Datos según la imagen)
const experiencias = [
    {
        id: 1,
        nombre: "Capillas de Mármol",
        categoria: "Navegación",
        lugar: "Puerto Río Tranquilo",
        precio: 45000,
        cuposDisponibles: 8,
        descripcion: "Recorrido en lancha por las majestuosas formaciones de carbonato de calcio.",
        icono: "https://img.icons8.com/ios/100/333333/sailing-ship.png"
    },
    {
        id: 2,
        nombre: "Cerro Castillo",
        categoria: "Trekking",
        lugar: "Villa Cerro Castillo",
        precio: 60000,
        cuposDisponibles: 6,
        descripcion: "Sendero de alta montaña con vistas imponentes a las agujas de roca.",
        icono: "https://img.icons8.com/ios/100/333333/hiking-boots.png"
    },
    {
        id: 3,
        nombre: "Pesca con mosca",
        categoria: "Pesca",
        lugar: "Río Simpson",
        precio: 50000,
        cuposDisponibles: 5,
        descripcion: "Práctica de pesca con devolución en las aguas cristalinas del río.",
        icono: "https://img.icons8.com/ios/100/333333/fish.png"
    },
    {
        id: 4,
        nombre: "Patrimonio Cultural",
        categoria: "Cultura",
        lugar: "Cochrane",
        precio: 25000,
        cuposDisponibles: 10,
        descripcion: "Viaje guiado enfocado en la historia de los colonos de la zona.",
        icono: "https://img.icons8.com/ios/100/333333/vintage-camera.png"
    },
    {
        id: 5,
        nombre: "Kayak en Fiordos",
        categoria: "Navegación",
        lugar: "Caleta Tortel",
        precio: 55000,
        cuposDisponibles: 7,
        descripcion: "Travesía remando entre las pasarelas de ciprés y la desembocadura.",
        icono: "https://img.icons8.com/ios/100/333333/kayaking.png"
    },
    {
        id: 6,
        nombre: "Avistamiento de Fauna",
        categoria: "Navegación",
        lugar: "Laguna San Rafael",
        precio: 65000,
        cuposDisponibles: 4,
        descripcion: "Navegación en catamarán para ver glaciares y fauna marina.",
        icono: "https://img.icons8.com/ios/100/333333/binoculars.png"
    }
];

// Referencias al DOM
const catalogGrid = document.getElementById("catalog-grid");
const experienceSelect = document.getElementById("experienceSelect");
const filterButtons = document.querySelectorAll(".btn-filter");
const bookingForm = document.getElementById("booking-form");
const successAlert = document.getElementById("success-alert");
const totalCupsDisplay = document.getElementById("total-cups-display");

/**
 * REQUISITO 3.2 y 3.5: Render Dinámico de Tarjetas
 */
function renderExperiencias(lista) {
    catalogGrid.innerHTML = "";

    lista.forEach(exp => {
        const card = document.createElement("article");
        card.classList.add("card");

        // Cabecera (Icono de línea según imagen)
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        const iconImg = document.createElement("img");
        iconImg.src = exp.icono;
        iconImg.alt = `Icono de ${exp.nombre}`;
        cardHeader.appendChild(iconImg);

        // Cuerpo de la tarjeta
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h3");
        title.textContent = exp.nombre;

        const location = document.createElement("p");
        location.textContent = `📍 ${exp.lugar}`;

        const badge = document.createElement("span");
        badge.classList.add("card-badge");
        badge.textContent = exp.categoria;

        const price = document.createElement("p");
        price.classList.add("card-price");
        price.textContent = `$ ${exp.precio.toLocaleString('es-CL')}`;

        const slots = document.createElement("p");
        slots.classList.add("card-slots");
        slots.textContent = `Cupos: ${exp.cuposDisponibles}`;

        // --- REQUISITO 3.3: Detalle colapsable ("Ver más") ---
        const btnToggle = document.createElement("button");
        btnToggle.classList.add("btn-toggle");
        btnToggle.textContent = "Ver más";

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("card-details", "hidden");
        detailsDiv.textContent = exp.descripcion;

        btnToggle.addEventListener("click", () => {
            const isHidden = detailsDiv.classList.toggle("hidden");
            btnToggle.textContent = isHidden ? "Ver más" : "Ver menos";
        });

        cardBody.appendChild(title);
        cardBody.appendChild(location);
        cardBody.appendChild(badge);
        cardBody.appendChild(price);
        cardBody.appendChild(slots);
        cardBody.appendChild(btnToggle);
        cardBody.appendChild(detailsDiv);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        catalogGrid.appendChild(card);
    });
}

/**
 * Función extra: Calcular y mostrar el total de cupos en tiempo real
 */
function actualizarCuposTotales() {
    const totalCupos = experiencias.reduce((sum, exp) => sum + exp.cuposDisponibles, 0);
    totalCupsDisplay.textContent = `Total: ${totalCupos} cupos`;
}

/**
 * REQUISITO 3.4 y 3.5: Lógica del Formulario de Reserva
 */
function popularSelect() {
    experienceSelect.innerHTML = '<option value="">Selecciona una experiencia</option>';
    
    experiencias.forEach(exp => {
        const option = document.createElement("option");
        option.value = exp.id;
        option.textContent = exp.nombre;
        experienceSelect.appendChild(option);
    });
}

function configurarFiltros() {
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const categoriaSeleccionada = e.target.getAttribute("data-category");

            if (categoriaSeleccionada === "Todos") {
                renderExperiencias(experiencias);
            } else {
                const filtrados = experiencias.filter(exp => exp.categoria === categoriaSeleccionada);
                renderExperiencias(filtrados);
            }
        });
    });
}

function mostrarError(idCampo, mensaje) {
    const errorSpan = document.getElementById(`error-${idCampo}`);
    const inputField = document.getElementById(idCampo);
    
    if (errorSpan) {
        errorSpan.textContent = mensaje;
        inputField.parentElement.classList.add("has-error"); // Añade clase roja según la imagen
    }
}

function limpiarErrores() {
    const errorSpans = document.querySelectorAll(".error-message");
    errorSpans.forEach(span => span.textContent = "");
    const formGroups = document.querySelectorAll(".form-group");
    formGroups.forEach(group => group.classList.remove("has-error"));
    successAlert.classList.add("hidden");
}

function validarFormulario(event) {
    event.preventDefault();
    limpiarErrores();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedId = document.getElementById("experienceSelect").value;
    const guestsInput = document.getElementById("guests").value;
    const bookingDate = document.getElementById("bookingDate").value;

    let formValido = true;

    // Validación de Vacíos
    if (!fullName) { mostrarError("fullName", "Campo obligatorio"); formValido = false; }
    if (!email) { mostrarError("email", "Campo obligatorio"); formValido = false; }
    if (!selectedId) { mostrarError("experienceSelect", "Campo obligatorio"); formValido = false; }
    if (!guestsInput) { mostrarError("guests", "Campo obligatorio"); formValido = false; }
    if (!bookingDate) { mostrarError("bookingDate", "Campo obligatorio"); formValido = false; }

    if (!formValido) return;

    // Validación formato Email (Según la imagen debe marcar "Email inválido" en rojo)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError("email", "Email inválido");
        formValido = false;
    }

    // Validación de Cupos Lógicos
    const numeroPersonas = parseInt(guestsInput, 10);
    const experienciaSeleccionada = experiencias.find(exp => exp.id === parseInt(selectedId, 10));

    if (experienciaSeleccionada && numeroPersonas > experienciaSeleccionada.cuposDisponibles) {
        mostrarError("guests", `Sólo quedan ${experienciaSeleccionada.cuposDisponibles} cupos.`);
        formValido = false;
    }

    if (formValido) {
        descontarCupo(experienciaSeleccionada.id, numeroPersonas);
    }
}

function descontarCupo(id, personas) {
    const expIndex = experiencias.findIndex(exp => exp.id === id);
    if (expIndex !== -1) {
        experiencias[expIndex].cuposDisponibles -= personas;

        successAlert.classList.remove("hidden"); // Muestra la alerta verde de la imagen
        bookingForm.reset();
        
        renderExperiencias(experiencias);
        actualizarCuposTotales(); // Impacta el total inferior

        // Resetear botones de filtro
        filterButtons.forEach(btn => btn.classList.remove("active"));
        document.querySelector('[data-category="Todos"]').classList.add("active");
    }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderExperiencias(experiencias);
    actualizarCuposTotales();
    popularSelect();
    configurarFiltros();
    bookingForm.addEventListener("submit", validarFormulario);
});
