// --- Cambiar entre secciones (Sobre mí / Proyectos) ---
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");

document.getElementById("btn-about").addEventListener("click", () => {
  aboutSection.classList.remove("hidden");
  projectsSection.classList.add("hidden");
});

document.getElementById("btn-projects").addEventListener("click", () => {
  aboutSection.classList.add("hidden");
  projectsSection.classList.remove("hidden");
});

// --- Resaltar botón activo del menú principal ---
const navButtons = [document.getElementById("btn-about"), document.getElementById("btn-projects")];

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// --- Mostrar solo el proyecto seleccionado ---
const projectButtons = document.querySelectorAll(".project-btn");
const projectDivs = document.querySelectorAll(".project");

projectButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-project");

    // Ocultar todos los proyectos
    projectDivs.forEach((div) => div.classList.add("hidden"));
    document.getElementById(target).classList.remove("hidden");

    // --- Resaltar el botón de proyecto activo ---
    projectButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// --- Cambio de tema claro/oscuro ---
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// --- Cambio de idioma ---
const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  fetch(`assets/lang/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        if (data[key]) el.innerHTML = data[key];
      });
    });
});

// --- para abrir/cerrar el menu ---
const menuOpenBtn = document.querySelector(".open-menu");
const menuCloseBtn = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", () => {
  navLinks.classList.add("show");
  menuOpenBtn.classList.add("hidden");
  menuCloseBtn.classList.remove("hidden");
});

menuCloseBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
  menuCloseBtn.classList.add("hidden");
  menuOpenBtn.classList.remove("hidden");
});

// Opcional: cerrar el menú al hacer clic en una opción
// navLinks.querySelectorAll("button, select").forEach((item) => {
//   item.addEventListener("click", () => {
//     navLinks.classList.remove("show");
//     menuCloseBtn.classList.add("hidden");
//     menuOpenBtn.classList.remove("hidden");
//   });
// });
