# 🏔️ Aysén Vivo - Plataforma de Experiencias Turísticas Sostenibles

**Asignatura:** Programación Front End  
**Evaluación:** Unidad de Aprendizaje 2 (UA2)  
**Institución:** INACAP  

---

## 📝 Descripción del Proyecto

**Aysén Vivo** es una aplicación web funcional desarrollada con tecnologías Front-End nativas (HTML5, CSS3 y JavaScript Vanilla) diseñada para un grupo de emprendedores de la Región de Aysén (Coyhaique, Puerto Río Tranquilo, Cochrane, Caleta Tortel y Laguna San Rafael). 

El objetivo principal de la plataforma es difundir y permitir la reserva de experiencias de turismo aventura y cultural bajo un enfoque de **desarrollo sostenible y bajo impacto**. La aplicación controla de forma estricta el cupo máximo de cada actividad en tiempo real para proteger el patrimonio natural de la Patagonia chilena.

---

## 🎯 Criterios de Evaluación Completados (Rúbrica UA2)

### 🧩 Criterio 2.1.1: Modificar el DOM con JavaScript
* **Evidencia:** El catálogo de experiencias no está escrito "a mano" en el HTML. Se genera dinámicamente recorriendo un arreglo de datos e inyectando nodos seguros al DOM (`createElement`, `appendChild`).
* **Interacción:** Implementación de la funcionalidad de detalles colapsables (**"Ver más" / "Ver menos"**) en cada tarjeta mediante la manipulación dinámica de estados con `classList.toggle()`.

### 🛡️ Criterio 2.1.2: Validar formularios HTML con buenas prácticas de seguridad
* **Evidencia:** Formulario de reserva lateral completamente controlado y validado mediante JavaScript interceptando el evento `submit` con `preventDefault()`.
* **Seguridad y Reglas de Negocio:**
  * Bloqueo de envío ante campos obligatorios vacíos.
  * Validación de formato de correo electrónico mediante expresiones regulares (Regex), mostrando visualmente el mensaje de *"Email inválido"*.
  * Validación lógica de cupos: el sistema impide reservar si el número de personas solicitadas supera los `cuposDisponibles` de la experiencia seleccionada.
  * Mitigación de vulnerabilidades XSS al renderizar contenido dinámico a través de propiedades seguras (`textContent`).

### 📊 Criterio 2.1.3: Usar arreglos y objetos para organizar datos
* **Evidencia:** Toda la información del catálogo de la Región de Aysén se estructura en un arreglo centralizado de objetos (`experiencias`). Cada objeto almacena de manera organizada sus propiedades esenciales: `id`, `nombre`, `categoria`, `lugar`, `precio`, `cuposDisponibles`, `descripcion` e `icono`.

### ⚙️ Criterio 2.1.4: Organizar el código en funciones (Reutilización y Claridad)
* **Evidencia:** El código fuente en `app.js` se encuentra completamente modularizado en funciones con responsabilidades únicas y nombres descriptivos, evitando la duplicidad de lógica:
  * `renderExperiencias(lista)`
  * `actualizarCuposTotales()`
  * `popularSelect()`
  * `configurarFiltros()`
  * `validarFormulario(event)`
  * `descontarCupo(id, personas)`

---

## 🎨 Características del Diseño (Fiel al Prototipo)

* **Estructura Semántica HTML5:** Implementación limpia utilizando etiquetas estructurales correctas como `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>` y `<footer>`.
* **Layout Moderno con CSS3 Grid y Flexbox:** Distribución adaptativa en dos columnas (Catálogo de productos a la izquierda y Formulario flotante de reserva a la derecha).
* **Diseño e Identidad Local:** Cabecera con estética de paisaje de montaña de la Patagonia e indicadores visuales de los emprendedores y el ecosistema regional.
* **Contador Global de Impacto:** Recuadro inferior que calcula y despliega el total de cupos remanentes de manera transversal en la plataforma.

---

## 🚀 Instalación y Ejecución Local

Para visualizar y probar el proyecto correctamente en tu entorno local, sigue estos pasos:

1. **Clonar o descargar** los tres archivos del proyecto en una misma carpeta:
   * `index.html`
   * `styles.css`
   * `app.js`
2. **Abrir la carpeta del proyecto** dentro de Visual Studio Code (**File > Open Folder...**).
3. **Ejecutar un servidor local** para evitar restricciones de seguridad del navegador con los scripts:
   * *Opción recomendada:* Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.
   * *Opción alternativa:* Usa el botón de vista previa interna de la extensión **Live Preview** de Microsoft.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** - Arquitectura y semántica web.
* **CSS3** - Estilos, Grid Layout, Flexbox y transiciones de interfaz.
* **JavaScript (ES6+)** - Lógica de negocio, validaciones y manipulación del DOM nativa.
* **Icons8 API** - Iconografía lineal para las tarjetas y componentes visuales.
