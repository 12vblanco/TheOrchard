const button = document.querySelector("button");
const popup = document.querySelector(".popup__wrapper");
const close = document.querySelector(".popup__content-close");
button.addEventListener("click", () => {
  popup.style.display = "inline-block";
  popup.style.margin = "0 auto";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// OPENING HOURS
const opening = document.querySelector(".openingjs");

const openingjs = [
  "Monday Closed ",
  "Tuesday Closed ",
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
const burgerMenu = document.getElementsByClassName("burger_menu");
burgerMenu[0].innerHTML = "<a href='index.html'>Home</a>";
burgerMenu[1].innerHTML = "<a href='covid.html'>Covid 19</a>";
burgerMenu[2].innerHTML = "<a href='gallery.html'>Gallery</a>";
burgerMenu[3].innerHTML = "<a href='art.html'>Art</a>";
burgerMenu[4].innerHTML = "<a href='about.html'>About Us</a>";
burgerMenu[5].innerHTML =
  "<a href='menu/food.pdf' target='_blank'>Food Menu</a>";
burgerMenu[6].innerHTML =
  "<a href='menu/kids.pdf' target='_blank'>Kid's Menu</a>";
burgerMenu[7].innerHTML =
  "<a href='menu/gluten.pdf' target='_blank'>Gluten Free</a>";
burgerMenu[8].innerHTML =
  "<a href='menu/wine.pdf' target='_blank'>Wine Menu</a>";
burgerMenu[9].innerHTML =
  "<a href='menu/beer.pdf' target='_blank'>Beer & Cider</a>";
burgerMenu[10].innerHTML =
  "<a href='menu/whisky.pdf' target='_blank'>Whisky</a>";
burgerMenu[11].innerHTML = "<a href='menu/rum.pdf' target='_blank'>Rum</a>";
burgerMenu[12].innerHTML = "<a href='menu/gin.pdf' target='_blank'>Gin</a>";
burgerMenu[13].innerHTML =
  "<a href='menu/sherry.pdf' target='_blank'>Sherry Tea & Coffee</a>";

// Side Menu
const sideMenu = document.getElementsByClassName("side_menu");

sideMenu[1].innerHTML = "<a href='menu/food.pdf' target='_blank'>Food Menu</a>";
sideMenu[2].innerHTML =
  "<a href='menu/kids.pdf' target='_blank'>Kid's Menu</a>";
sideMenu[3].innerHTML =
  "<a href='menu/gluten.pdf' target='_blank'>Gluten Free</a>";
sideMenu[4].innerHTML = "<a href='menu/wine.pdf' target='_blank'>Wine Menu</a>";
sideMenu[5].innerHTML =
  "<a href='menu/beer.pdf' target='_blank'>Beer & Cider</a>";
sideMenu[6].innerHTML = "<a href='menu/whisky.pdf' target='_blank'>Whisky</a>";
sideMenu[7].innerHTML = "<a href='menu/rum.pdf' target='_blank'>Rum</a>";
sideMenu[8].innerHTML = "<a href='menu/gin.pdf' target='_blank'>Gin</a>";
sideMenu[9].innerHTML =
  "<a href='menu/sherry.pdf' target='_blank'>Sherry Tea & Coffee</a>";

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
  const opening = document.querySelector(".navbar__info-openStatus");
  opening.innerText = "Sorry we are closed";
}
