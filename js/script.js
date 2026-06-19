const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("mobileOverlay");

function openMenu() {
  console.log("Menu Open ");

  sidebar.style.transform = "translateX(0)";
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");
  menuBtn.classList.add("is-open");
  document.body.style.overflow = "hidden";

  // stagger-in nav links
  setTimeout(() => sidebar.classList.add("is-open"), 50);
}

function closeMenu() {
  sidebar.style.transform = "translateX(-100%)";
  sidebar.classList.remove("is-open");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100");
  menuBtn.classList.remove("is-open");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
