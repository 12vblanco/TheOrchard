// booking element **needs changing
const button = document.querySelector("button");
const popup = document.querySelector(".popup__wrapper");
const close = document.querySelector(".popup__content-close");
const burger = document.querySelector(".burger__menu--check");
button.addEventListener("click", () => {
  popup.style.display = "inline-block";
  popup.style.margin = "0 auto";
  burger.checked = false;
  document.getElementById("menu").setAttribute("disabled", "disabled");
});
close.addEventListener("click", () => {
  popup.style.display = "none";
  document.getElementById("menu").disabled = false;
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
  document.getElementById("menu").disabled = false;
});

// OPENING HOURS
const opening = document.querySelector(".openingjs");

const openingjs = [
  "Monday 24th Closed ",
  "Tuesday 25th Closed ",
  "Wednesday 12:00 - 22:00 ",
  "Thursday 12:00 - 22:00 ",
  "Friday 12:00 - 23:00 ",
  "Saturday 12:00 - 23:00 ",
  "Sunday 12:00 - 22.00 ",
];

let html = ``;

openingjs.forEach((openingHours) => {
  html += `<li style="list-style: none; text-align: center;"> ${openingHours} </li>`;
});

opening.innerHTML = html;

// Burger Menu
const burgerMenu = document.querySelectorAll(".burger_menu");
const burgerLi = [
  "<a href='index.html'>Home</a>",
  "<a href='covid.html'>Covid 19</a>",
  "<a href='gallery.html'>Gallery</a>",
  "<a href='art.html'>Art</a>",
  "<a href='about.html'>About Us</a>",
  "<a href='menu/food.pdf' target='_blank'>Food Menu</a>",
  "<a href='menu/kids.pdf' target='_blank'>Kid's Menu</a>",
  "<a href='menu/gluten.pdf' target='_blank'>Gluten Free</a>",
  "<a href='menu/wine.pdf' target='_blank'>Wine Menu</a>",
  "<a href='menu/beer.pdf' target='_blank'>Beer & Cider</a>",
  "<a href='menu/whisky.pdf' target='_blank'>Whisky</a>",
  "<a href='menu/rum.pdf' target='_blank'>Rum</a>",
  "<a href='menu/gin.pdf' target='_blank'>Gin</a>",
  "<a href='menu/sherry.pdf' target='_blank'>Sherry Tea & Coffee</a>",
];
burgerMenu.forEach((li, i) => {
  const bLi = burgerLi[i];
  li.innerHTML = bLi;
});

// Side Menu
const sideMenu = document.querySelectorAll(".side_menu");
const sideLi = [
  "<a href='menu/food.pdf' target='_blank'>Food Menu</a>",
  "<a href='menu/kids.pdf' target='_blank'>Kid's Menu</a>",
  "<a href='menu/gluten.pdf' target='_blank'>Gluten Free</a>",
  "<a href='menu/wine.pdf' target='_blank'>Wine Menu</a>",
  "<a href='menu/beer.pdf' target='_blank'>Beer & Cider</a>",
  "<a href='menu/whisky.pdf' target='_blank'>Whisky</a>",
  "<a href='menu/rum.pdf' target='_blank'>Rum</a>",
  "<a href='menu/gin.pdf' target='_blank'>Gin</a>",
  "<a href='menu/sherry.pdf' target='_blank'>Sherry Tea & Coffee</a>",
];
sideMenu.forEach((li, i) => {
  const sLi = sideLi[i];
  li.innerHTML = sLi;
});

// NOW OPENED?
var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
  ["Sunday", 12.0, 22.0],
  ["Monday", 24.0, 24.0],
  ["Tuesday", 24.0, 24.0],
  ["Wednesday", 12.0, 22.0],
  ["Thursday", 12.0, 22.0],
  ["Friday", 12.0, 23.0],
  ["Saturday", 12.0, 23.0],
];
var day = weekdays[n];

if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
  const opening = document.querySelector(".navbar__info-openStatus");
  opening.innerText = "We are open right now!";
  // opening.innerText = 'We plan to reopen on the 29th of April!'
} else {
  const opening = document.querySelectorAll(".navbar__info-openStatus");
  opening.innerText = "Sorry we are closed";
}
