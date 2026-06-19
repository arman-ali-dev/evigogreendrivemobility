const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("mobileOverlay");

function openMenu() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");
  menuBtn.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100");
  menuBtn.classList.remove("is-open");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
