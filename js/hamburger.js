const menu = document.querySelector(".menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const openMenu = document.querySelector(".open-menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");

// function for toggeling hamburger menu
// Inspired by https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
function toggleMenu() {
  if (menu.classList.contains("openMenu")) {
    menu.classList.remove("openMenu");
    menu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    menu.classList.add("openMenu");
    menu.style.display = "block";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}

hamburgerBtn.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
