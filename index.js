//  const menuToggle = document.getElementById("menu-toggle");
// const menu = document.getElementById("menu");

// menuToggle.addEventListener("click", () => {
//   menu.classList.add("show");
// });

// function closeSidebar() {
//   menu.classList.remove("show");
// }
// const menu = document.querySelector(".menu");
// const toggleBtn = document.getElementById("menu-toggle");
// const closeBtn = document.querySelector(".close-btn i");

// toggleBtn.addEventListener("click", () => {
//   menu.classList.add("show");
// });

// closeBtn.addEventListener("click", () => {
//   menu.classList.remove("show");
// });


const toggleBtn = document.getElementById("menu-toggle");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
